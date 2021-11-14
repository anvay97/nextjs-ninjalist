import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const NinjaDetail = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Ninja Detail</title>
      </Head>
      <div>
        <h1>Ninja Name : {ninja.name}</h1>
        <p>Ninja Email :{ninja.email}</p>
        <p>Ninja Website :{ninja.website}</p>
        <p>Ninja Address :{ninja.address.city}</p>
      </div>
    </>
  );
};

export default NinjaDetail;
