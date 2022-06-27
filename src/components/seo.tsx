import Head from "next/head";

type SeoTypes = {
  title: string;
  description: string;
};

const Seo = (props: SeoTypes) => {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default Seo;
