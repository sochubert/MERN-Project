import React from "react";
import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Minjae Lee",
      image: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default User;
