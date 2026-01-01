"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1>Hello Base 👋</h1>

      <button
        onClick={() => setMessage("Hello Base Mini App 🚀")}
        style={{
          marginTop: 20,
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Click me
      </button>

      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </main>
  );
}

