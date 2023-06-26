"use client";
import Card from "@/components/Card";
import Title from "@/components/Title";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/posts", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        fetchUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const fetchUsers = (data) => {
    const userIds = data.map((post) => post.user_id);

    Promise.all(
      userIds.map((userId) =>
        fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
          method: "GET",
          redirect: "follow",
        }).then((response) => {
          return response.json();
        })
      )
    )
      .then((usersData) => {
        setUsers(usersData);
      })
      .catch((error) => {
        console.error("Error fetching users: ", error);
      });
  };

  if (posts.length === 0 || users.length === 0) {
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
          const user = users.find((user) => user.id === post.user_id);
          console.log(user);
          if (user) {
            return (
              <Card
                key={post.id}
                name={user.name}
                title={post.title}
                body={post.body}
              />
            );
          } else {
            return (
              <Card
                key={post.id}
                name="User Not Found"
                title={post.title}
                body={post.body}
              />
            );
          }
        })}
      </Title>
    </>
  );
}
