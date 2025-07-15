'use client';
import React from "react";

export default function Button() {
    const handleClick = () => {
        alert("clicked");
    }
  return (
      <button onClick={handleClick}>Click Me...........</button>
  )
}