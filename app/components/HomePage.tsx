import React from "react";
import Posts from "./Posts";

export default function HomePage() {
  return (
    <>
      <section className="min-w-screen min-h-screen bg-lightGray py-8">
        <div className="mx-auto max-w-2xl">
          <Posts />
        </div>
      </section>
    </>
  );
}
