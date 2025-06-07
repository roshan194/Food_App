// components/Error.js
import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err); // Optional: log for debugging

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oops! 😓</h1>
      <h2>{err.status} - {err.statusText || "Something went wrong"}</h2>
      <p>{err.error?.message}</p>
    </div>
  );
};

export default Error;
