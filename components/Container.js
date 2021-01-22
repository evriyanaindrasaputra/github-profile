import { useTheme } from "next-themes";
import * as React from "react";

export default function Container({ children }) {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <nav className="flex justify-between items-center bg-white dark:bg-black max-w-4xl w-full p-4 h-10vh mx-auto my-0">
        <div className="w-full flex-1">
          <h1 className="text-3xl md:text-4xl text-black dark:text-white font-bold text-center">
            Github Profile
          </h1>
        </div>
        <button
          aria-label="Toggle dark mode"
          type="button"
          className="bg-gray-200  dark:bg-gray-800 rounded p-3 h-10 w-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main className="flex flex-col justify-center bg-white dark:bg-black px-8 flex-1">
        <div className="flex flex-col justify-center item-start max-w-3xl w-full mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
