import React from "react";
import type { ReactElement } from 'react';
import Image from "next/image";
import Link from "next/link";
import { BlogOverview, getBlogs } from "actions/blog";
import InfiniteScroll from "react-infinite-scroll-component"
import { BlogLayout } from "components/layout";
import SearchContext from "contexts/search";

interface BlogProps {
  blogs: BlogOverview[]
}

const BlogCard = ({ blog }: { blog: BlogOverview }) => {
  function estimatedReadTime(markdownContent: string): string {
    // Remove Markdown syntax from content to better approximate actual word count
    const plainText = markdownContent
        .replace(/(!?\[.*?\]\(.*?\))/g, '')   // Remove links and images
        .replace(/(```[\s\S]+?```)/g, '')    // Remove code blocks
        .replace(/(`[^`]+`)/g, '')           // Remove inline code
        .replace(/(#+\s*)/g, '')             // Remove headers
        .replace(/(\*+|\-|\_+|\>|~+|\||\^)/g, ''); // Remove other markdown special characters
    const wordCount = markdownContent.split(/\s+/).filter(Boolean).length;
    const readTimeMinutes = Math.ceil(wordCount / 250);
    const lessThanAMinute = wordCount/250 < 1;
    return `${lessThanAMinute?'<':''}${readTimeMinutes}min${readTimeMinutes === 1 ? '' : 's'}`;
  }
  return (
    <div className="w-full h-full my-2 p-4 bg-coolwhite border rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center indicator shadox-xl h-full w-full">
        <Image
          src={blog.thumbnail}
          alt="thumbnail"
          width={500}
          height={300}
          className="rounded-2xl"
        />
        <div className="card-body">
          <h1 className="card-title flex items-top text-primary">
            { blog.title }
          </h1>
          <p className="card-text">{ blog.description }</p>
          <div className="card-actions justify-between">
            <div className="badge badge-secondary text-white">
              Reading time: { estimatedReadTime(blog.content) }
            </div>
            <Link
              href={`/blog/${blog.slug}#header`}
              key={blog.id}
            >
              <button className="btn btn-secondary text-white">
                Read
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const FinishedCard = () => {
  return (
    <div className="w-full h-full my-2 p-4 bg-coolwhite border rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center indicator shadox-xl h-full w-full">
        <div className="card-body">
          <h1 className="card-title flex items-top text-primary justify-center">
            That's all to show for now! Check back later for more &#x1F601;
          </h1>
        </div>
      </div>
    </div>
  )
}

const Loading = () => {
  return (
    <span className="text-primary loading loading-lg"></span>
  )
}

const NoneFound = () => {
  return (
    <div className="w-full h-full my-2 p-4 bg-coolwhite border rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center indicator shadox-xl h-full w-full">
        <div className="card-body">
          <h1 className="card-title flex items-top text-primary justify-center">
            No blogs found &#x1F61E;
          </h1>
        </div>
      </div>
    </div>
  )
}

const Blog = ({ blogs }: BlogProps) => {
  const perPage = 10;

  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs);
  const [blogsToShow, setBlogsToShow] = React.useState(filteredBlogs.slice(0, perPage));
  const [whichPage, setWhichPage] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(true);

  const { searchQuery } = React.useContext(SearchContext);

  const fetchBlogs = () => {
    const nextBlogs = blogs.slice(whichPage * perPage, (whichPage + 1) * perPage);
    setTimeout(() => {
      setBlogsToShow([...blogsToShow, ...nextBlogs]);
      setWhichPage(whichPage + 1);
      setHasMore(nextBlogs.length < perPage);
    }, 500);
  };

  React.useEffect(() => {
    if (!searchQuery) {
      setFilteredBlogs(blogs);
      setBlogsToShow(blogs.slice(0, perPage));
      setWhichPage(0);
      setHasMore(true);
      return;
    }
    const filteredBlogs = blogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(searchQuery) ||
        blog.description.toLowerCase().includes(searchQuery)
      );
    });
    setFilteredBlogs(filteredBlogs);
    setBlogsToShow(filteredBlogs.slice(0, perPage));
    setWhichPage(0);
    setHasMore(true);
  }, [searchQuery]);

  return (
    <div className="py-4">
      { filteredBlogs.length === 0 && <NoneFound /> }
      <InfiniteScroll
        dataLength={blogsToShow.length}
        next={fetchBlogs}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={<FinishedCard />}
        className="flex flex-col grow justify-center w-full font-lato"
      >
        { blogsToShow.map((blog, idx) => {
          return (
            <BlogCard blog={blog} key={idx} />
          )
        }) }
      </InfiniteScroll>
    </div>
  )
}

export default Blog;

export async function getServerSideProps() {
  const blogs = await getBlogs();
  return { props: { blogs } }
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <BlogLayout>
      { page }
    </BlogLayout>
  )
}