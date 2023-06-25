"use client";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
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
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
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
      <Title title="POSTS">
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              user_id={post.user_id}
              title={post.title}
              body={post.body}
            />
          );
        })}
      </Title>
    </>
  );
}
