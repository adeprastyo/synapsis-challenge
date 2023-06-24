"use client";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table";
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
      <Navbar />

      <div className="container mx-auto py-10 px-5">
        <div className="text-lg font-semibold border-b-2 pb-3">
          <p>USERS</p>
        </div>

        <Table users={users} />
      </div>
    </>
  );
}
