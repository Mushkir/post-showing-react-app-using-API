import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mushkir from "../assets/img/mushkir.jpeg";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedResponse = await fetch("https://dummyjson.com/posts");
      const JsonObj = await fetchedResponse.json();

      setPosts(JsonObj.posts);
      console.log(JsonObj.posts);
    };
    fetchPosts();
  }, []);

  const templateAPI = posts.map((post) => {
    return (
      <div
        className="card w-full sm:w-[320px] bg-hoverWhite rounded-md overflow-hidden"
        key={post.id}
      >
        <div className="card-img w-full">
          <img
            src={mushkir}
            alt="Cartoon clipart - Mushkir"
            className="h-[200px] w-full object-cover"
          />
        </div>

        <div className="card-body p-5">
          <h5 className="text-xl font-semibold">{post.title}</h5>
          <p className="mt-3 mb-3 h-[90px] overflow-y-clip">{post.body}</p>

          <div className="pt-2 mb-1">
            <Link
              to={`/post/${post.id}`}
              className="bg-headerDark px-4 block sm:w-[120px] py-2 rounded-md text-bodyWhite hover:bg-hoverDark hover:transition delay-100"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-[200px] sm:mt-[150px] font-Sen">
      {/* Heading "Recent Posts" */}
      <div className="flex items-center justify-center gap-3">
        <div className="text-3xl text-headerDark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5 3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V7c0-.6-.4-1-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2zm7 4c0-.6.4-1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1m0 3c0-.6.4-1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1m-6 4c0-.6.4-1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3c0-.6.4-1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 6a1 1 0 0 0-1 1v3c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zm1 3V8h1v1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <h3 className="text-center text-3xl font-semibold">
          Recent <span className="text-headerDark">Posts</span>
        </h3>
      </div>

      {/* Post Grid View */}
      <div className="flex justify-center items-center flex-wrap gap-10 p-5 sm:p-10">
        {templateAPI}
      </div>
    </div>
  );
};

export default HomePage;
