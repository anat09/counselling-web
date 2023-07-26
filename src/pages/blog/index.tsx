import Link from "next/link";
import { BlogOverview, getBlogs } from "blogs";

interface BlogProps {
  blogs: BlogOverview[]
}

const BlogCard = ({ blog }: { blog: BlogOverview }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full p-4 bg-white border rounded-lg shadow-lg">
      <div className="flex flex-col justify-between h-full">
        <div className="card shadox-xl">
          <div className="card-body">
            <h3 className="card-title">{ blog.title }</h3>
            <p className="card-text">{ blog.description }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blog = ({ blogs }: BlogProps) => {
  return (
    <div>
      { blogs.map((blog) => {
        return (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.id}
          >
            <a>
              <BlogCard blog={blog} />
            </a>
          </Link>
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