import * as React from "react";
import useSWR from "swr";

export default function Profile({ username }) {
  const { data: profile, error } = useSWR(
    username ? `/users/${username}` : null
  );
  return (
    <section className="flex flex-col justify-center">
      <div>
        <img
          className="mx-auto my-3 rounded-full w-24 h-24"
          src={profile.avatar_url}
          alt={profile.name}
        />
        <div className="text-center mb-4">
          <a href={profile.html_url}>
            <h2 className="text-2xl inline text-black dark:text-white">
              {profile.name}
            </h2>
            <p className="text-black inline dark:text-white">{`@${profile.login}`}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
