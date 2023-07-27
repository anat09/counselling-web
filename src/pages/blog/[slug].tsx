import { BlogContent, getBlog, getBlogs } from "actions/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = ({ blog }: { blog: BlogContent }) => {
  return (
    <article
      className={`
        py-8 md:py-0
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
        children={blog.content}
        remarkPlugins={[remarkGfm]}
      />
    </article>
  )
}

export default BlogPost

export async function getStaticPaths() {
  const blogs = await getBlogs();
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug.toString() },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  return { props: { blog } }
}