import { ReactElement } from "react";
import { BlogLayout } from "components/layout";
import { BlogContent, getBlog, getBlogs } from "actions/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogEntry = ({ blog }: { blog: BlogContent }) => {
  return (
    <article
      className={`
        bg-coolwhite
        flex-1
        my-2
        rounded-xl
        prose-xl
        prose-stone
        prose-p:font-lato
        prose-img:rounded-xl
        prose-headings:text-primary
        prose-headings:font-lato
        prose-a:text-secondary
      `}
    >
      <ReactMarkdown
        className="p-4"
        children={blog.content}
        remarkPlugins={[remarkGfm]}
      />
    </article>
  )
}

export default BlogEntry

export async function getStaticPaths() {
  const blogs = await getBlogs();
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug.toString() },
  }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  return { 
    props: { blog },
    revalidate: 3600 * 24 // 24 hours
  }
}

BlogEntry.getLayout = function getLayout(page: ReactElement) {
  return (
    <BlogLayout>
      { page }
    </BlogLayout>
  )
}