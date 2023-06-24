"use client";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/posts", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  if (posts === undefined) {
    return (
      <div className="h-screen text-xl flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 px-5">
        <div className="text-lg font-semibold border-b-2 pb-3">
          <p>POSTS</p>
        </div>

        {posts.map((post) => {
          return (
            <div key={post.user_id} className="w-full mb-4">
              <Card
                user_id={post.user_id}
                title={post.title}
                body={post.body}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
