import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Ninja List Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione,
        voluptatum culpa pariatur labore dignissimos amet vel iste sunt quaerat
        ipsum eos saepe molestias tempora nemo consequatur explicabo ducimus
        dicta!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        consequuntur fugit accusamus id iure necessitatibus eveniet expedita
        deserunt nesciunt deleniti repellendus sint accusantium voluptatum quam
        velit, quas aliquid? Distinctio, laboriosam.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
        </Link>
    </div>
    </React.Fragment>
  );
}
