import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
      <h1 className="text-3xl mt-2 text-black text-center font-bold mb-5">
        Welcome to Web Scrapper
      </h1>
      <h2 className="text-lg italic text-center text-black/50">Some Text</h2>
      <h3 className="text-lg text-center italic text-black/50">
        https://www.google.com
      </h3>
    </div>
  );
}

export default HomePage;
