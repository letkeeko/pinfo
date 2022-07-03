import Head from "next/head";

const Seo = (props: SeoTypes) => {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

type SeoTypes = {
  title: string;
  description: string;
};

export default Seo;
