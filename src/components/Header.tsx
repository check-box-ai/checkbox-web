import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={46}
            className="block lg:inline-block mr-4"
          />
          <Link
            href="/"
            className="inline-block border border-gray-100 rounded py-1 mx-2 px-3 bg-gray-100 font-medium"
            data-active={isActive("/")}
          >
            Surveys
          </Link>
          {session && (
            <Link
              href="/src/pages/drafts"
              className="inline-block border border-white rounded hover:border-gray-100 hover:bg-gray-100 py-1 px-3"
              data-active={isActive("/drafts")}
            >
              Integrations
            </Link>
          )}
        </div>
      </div>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }
        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }
        .left a[data-active="true"] {
          color: gray;
        }
        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  if (status === "loading") {
    left = (
      <div className="left">
        <Link href="/" className="bold" data-active={isActive("/")}>
          Surveys
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }
          .left a[data-active="true"] {
            color: gray;
          }
          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right ml-auto">
        <Link href="/api/auth/signin" data-active={isActive("/signup")}>
          Log in
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }
          a + a {
            margin-left: 1rem;
          }
          .right {
            margin-left: auto;
          }
          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }

  if (session) {
    right = (
      <div className="right ml-auto">
        <div className="group inline-block relative">
          <button className="py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1 text-sm">{session?.user?.name ?? null}</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
            <li className="">
              <button
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                onClick={() => signOut()}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
        <Link
          className="inline-block text-sm px-4 py-2 leading-none bg-black rounded text-white border-white hover:bg-gray-900 mt-4 lg:mt-0"
          href="/src/pages/create"
        >
          <button>New Survey</button>
        </Link>
      </div>
    );
  }

  return (
    <nav className="mt-4 rounded-lg flex items-center justify-between flex-wrap bg-white border border-gray-300 p-6">
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 1rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
