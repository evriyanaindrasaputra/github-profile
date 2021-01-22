import React from "react";

export default function Spinner() {
  return (
    <div className="w-full bg-white dark:bg-black flex justify-center items-center my-5 md:my-3">
      <div className="spinner relative rounded-full border-4 border-t-4 border-gray-200 w-16 h-16"></div>
    </div>
  );
}
