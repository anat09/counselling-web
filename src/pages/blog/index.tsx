import Image from "next/image";
import Link from "next/link";
import { BlogOverview, getBlogs } from "actions/blogs";

interface BlogProps {
  blogs: BlogOverview[]
}

const BlogCard = ({ blog }: { blog: BlogOverview }) => {
  function estimateReadTime(markdownContent: string): string {
    // Remove Markdown syntax from content to better approximate actual word count
    const plainText = markdownContent
        .replace(/(!?\[.*?\]\(.*?\))/g, '')   // Remove links and images
        .replace(/(```[\s\S]+?```)/g, '')    // Remove code blocks
        .replace(/(`[^`]+`)/g, '')           // Remove inline code
        .replace(/(#+\s*)/g, '')             // Remove headers
        .replace(/(\*+|\-|\_+|\>|~+|\||\^)/g, ''); // Remove other markdown special characters

    const wordCount = plainText.split(/\s+/).filter(Boolean).length;
    const readTimeMinutes = Math.ceil(wordCount / 250);
    const lessThanAMinute = wordCount/250 < 1;
    return `${lessThanAMinute?'<':''}${readTimeMinutes}min${readTimeMinutes === 1 ? '' : 's'}`;
  }
  return (
    <div className="w-full h-full p-4 bg-white border rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center indicator shadox-xl h-full w-full">
        <Image
          src={blog.thumbnail}
          alt="thumbnail"
          width={500}
          height={300}
        />
        <div className="indicator-item indicator-bottom">
          <Link
            href={`/blog/${blog.slug}#header`}
            key={blog.id}
          >
            <button className="btn btn-secondary text-white">
              Read
            </button>
          </Link>
        </div>
        <div className="card-body">
          <h1 className="card-title flex items-top text-primary">
            { blog.title }
          </h1>
          <p className="card-text">{ blog.description }</p>
          <div className="card-actions justify-start">
            <div className="badge badge-secondary text-white">
              Reading time: { estimateReadTime(blog.content) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blog = ({ blogs }: BlogProps) => {
  return (
    <div className="py-2 md:py-0 flex flex-col grow justify-center w-full font-lato">
      { blogs.map((blog) => {
        return (
          <BlogCard blog={blog} />
        )
      }) }
    </div>
  )
}

export default Blog;

export async function getStaticProps() {
  const blogs = await getBlogs();
  return { props: { blogs } }
}