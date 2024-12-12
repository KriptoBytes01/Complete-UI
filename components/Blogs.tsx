import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Blogs() {
  const blogData = [
    {
      title: "Blog Post 1",
      date: "Nov 12, 2024",
      image: "/blog1.png",
      category: "Software Development",
      description:
        "This is a brief description of the first blog post. It gives a preview of the content.",
    },
    {
      title: "Blog Post 2",
      date: "Nov 13, 2024",
      image: "/blog2.png",
      category: "Technology",
      description:
        "This is a brief description of the second blog post. It gives a preview of the content.",
    },
    {
      title: "Blog Post 3",
      date: "Nov 14, 2024",
      image: "/blog3.png",
      category: "Web Development",
      description:
        "This is a brief description of the third blog post. It gives a preview of the content.",
    },
  ];

  return (
    <div className="bg-slate-950 py-12 px-4 md:px-20">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 mb-12 mt-10">
        <h1 className="text-white text-3xl sm:text-5xl">Blogs</h1>
        <button className="bg-transparent border border-white text-white px-4 sm:px-6 py-2 sm:py-3 mt-4 sm:mt-0 flex items-center space-x-2 rounded-md">
          <span>View All</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {/* Blog Posts */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 px-4 sm:px-8 mb-16">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-transparent shadow-lg w-full md:w-[32%] flex flex-col border-t-2 border-gray-300"
          >
            {/* Blog Date */}
            <div className="text-gray-500 px-4 py-2 text-xs sm:text-sm">
              {blog.date}
            </div>

            {/* Blog Image */}
            <div className="relative overflow-hidden group">
              <Image
                width={100}
                height={100}
                src={blog.image}
                alt={`Blog ${index + 1} image`}
                className="w-full h-48 sm:h-60 object-cover border-r-2 transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            {/* Blog Content */}
            <div className="px-4 py-6">
              <div className="text-sm sm:text-lg bg-zinc-800 w-fit px-4 py-1 text-gray-100 mb-4">
                {blog.category}
              </div>
              <p className="text-white text-sm sm:text-base mb-4">
                {blog.description}
              </p>
              <button className="text-teal-300 text-xs sm:text-sm flex items-center space-x-2">
                <span>Read More</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
