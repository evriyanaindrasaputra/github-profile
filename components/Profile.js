import * as React from "react";
import Link from "next/link";
import useSWR from "swr";

export default function Profile({ username }) {
  const { data, error } = useSWR(username ? `/users/${username}` : null);
  return (
    <section className="flex flex-col justify-center">
      <h2 className="text-2xl text-black dark:text-white font-bold mt-4 text-center">
        <Link href="/">
          <a>Nama</a>
        </Link>
      </h2>
    </section>
  );
}
