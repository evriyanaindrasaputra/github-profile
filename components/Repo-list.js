import * as React from "react";
import { useInfiniteScroll } from "../utils/hooks";
import Spinner from "./Spinner";
import Link from "next/link";

function RepoisEmpty() {
  return (
    <p className="text-lg text-red-400 font-semibold text-center">
      User doesn't have any repositories yet
    </p>
  );
}

export default function Repolist({ username }) {
  const {
    ref,
    items: repos,
    error: apiError,
    isEmpty,
    isLoadingMore,
    isReachingEnd,
  } = useInfiniteScroll(`/users/${username}/repos`);
  return (
    <section className="w-full flex flex-col items-start">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className=" w-full flex flex-col bg-gray-200 dark:bg-gray-800 p-4 text-black dark:text-white rounded-lg my-3"
        >
          <div className="flex justify-between">
            <h3 className="text-xl md:text-2xl">{repo.name}</h3>
            <p>{repo.language}</p>
          </div>
          <p className="text-base font-normal">{repo.description}</p>
          <Link href={repo.html_url} className="mt-4">
            <a>Check the repo</a>
          </Link>
        </div>
      ))}
      <div ref={ref}>
        {!isReachingEnd && isLoadingMore ? <Spinner /> : null}
      </div>
    </section>
  );
}
