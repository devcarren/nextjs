"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/my-api")
      .then((response) => response.json())
      .then((data) => setMessage(data.message)); // Adjust based on the API response
  }, []);

  return (
    <main>
      <h1>{message || "Loading..."}</h1>
    </main>
  );
}
