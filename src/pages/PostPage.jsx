import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import mushkir from "../assets/img/mushkir.jpeg";

const PostPage = () => {
  const params = useParams();

  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch(
        `https://dummyjson.com/posts/${params.id}`
      );
      const JsonObj = await fetchedPosts.json();
      setPost(JsonObj);
    };

    fetchPosts();
  }, [params.id]);

  console.log(posts);

  return (
    <div className="mt-[180px] font-Sen">
      <div
        className="card w-[800px] mx-auto bg-hoverWhite rounded-md overflow-hidden"
        key={posts.id}
      >
        <div className="card-img w-full">
          <img
            src={mushkir}
            alt="Cartoon clipart - Mushkir"
            className="h-[400px] w-full object-cover"
          />
        </div>

        <div className="card-body p-5">
          <h5 className="text-xl font-semibold">{posts.title}</h5>
          <p className="mt-3 mb-3 h-[90px] overflow-y-clip">{posts.body}</p>

          <div className="pt-2 mb-1">
            <Link
              to={"/"}
              className="bg-headerDark px-4 py-2 rounded-md text-bodyWhite hover:bg-hoverDark hover:transition delay-100"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
