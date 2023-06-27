"use client";

import Table from "@/components/Table";
import Title from "@/components/Title";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState(undefined);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const token =
    "dd89a910a563b59582ad658f597b18247f33203ed5d306a67ad8ebd4ae839821";

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

  const deleteUser = (userId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
        method: "DELETE",
        redirect: "follow",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            setDeleteMessage("User deleted successfully.");
            const updatedUsers = users.filter((user) => user.id !== userId);
            setUsers(updatedUsers);
          } else {
            throw new Error("Error deleting user.");
          }
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  return (
    <>
      <Title title="USERS">
        {deleteMessage && alert("Berhasil menghapus data user")}
        <Table users={users} deleteUser={deleteUser} />
      </Title>
    </>
  );
}
