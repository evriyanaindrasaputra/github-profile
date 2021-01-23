import Head from "next/head";
import * as React from "react";
import Container from "../components/Container";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import { useDebounce } from "../utils/hooks";
import { ErrorBoundary } from "react-error-boundary";
import Repolist from "../components/Repo-list";

const ProfileData = React.lazy(() => import("../components/Profile"));

function ErrorFallback({ error }) {
  return (
    <div className="my-5 bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-400 p-3 rounded-lg text-center w-5/12 mx-auto border-red-400">
      <p>Try another username</p>
    </div>
  );
}

function EmptySearch() {
  return (
    <div className=" my-5 bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-400 p-3 rounded-lg text-center w-5/12 mx-auto">
      <p>Find github profile</p>
    </div>
  );
}

export default function Home() {
  const [username, setUsername] = React.useState("");
  const debaouncedUsername = useDebounce(username);

  function handleSearch(e) {
    setUsername(e.target.value);
  }
  return (
    <Container>
      <Head>
        <title>Github Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search handleSearch={handleSearch} />
      {debaouncedUsername ? (
        <ErrorBoundary
          resetKeys={[debaouncedUsername]}
          FallbackComponent={ErrorFallback}
        >
          <React.Suspense fallback={<Spinner />}>
            <ProfileData username={debaouncedUsername} />
            <Repolist username={debaouncedUsername} />
          </React.Suspense>
        </ErrorBoundary>
      ) : (
        <EmptySearch />
      )}
    </Container>
  );
}
