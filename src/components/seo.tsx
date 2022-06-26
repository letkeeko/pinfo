import Head from "next/head";

type PropTypes = {
  title: string;
  description: string;
};

export default function SEO(props: PropTypes) {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
