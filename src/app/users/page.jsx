"use client";

import Table from "@/components/Table";
import Title from "@/components/Title";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  if (users === undefined) {
    return (
      <div className="h-screen text-xl flex justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <>
      <Title title="USERS">
        <Table users={users} />
      </Title>
    </>
  );
}
