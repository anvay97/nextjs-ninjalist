import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Head from 'next/head';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
      <>
      <Head>
        <title>Not Found</title>
        <meta name="keywords" content="ninjas" />
      </Head>
    <div className="not-found">
      <h1>Ooops....</h1>
      <h2>That Page Cannot Be Found...</h2>
      <p>
        Go Back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
    </>
  );
};

export default NotFound;
