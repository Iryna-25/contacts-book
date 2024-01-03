import React from "react";
import { Link } from "react-router-dom";

export default function HomePrivatePage () {
  return (
    <div>
      <h1>Hello!</h1>
      <h3> Your authorization is successful!</h3>
      <p>
        Click <Link to={"/contacts"}> My Contacts </Link> to get to your contacts or{" "}
        <Link to={"/notes"}> My Notes </Link> to create your todo list.
      </p>
    </div>
  )
};
