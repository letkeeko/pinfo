import Head from "next/head";

type SeoProps = {
  title: string;
  description: string;
};

const Seo = (props: SeoProps) => {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default Seo;
