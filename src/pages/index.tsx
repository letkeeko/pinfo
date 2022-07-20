import type { NextPage } from "next";
import contentfulClient from "../lib/contentful";
import { Document } from "@contentful/rich-text-types";
import { COLOR } from "../components/variables";
import LayoutPublic from "../components/LayoutPublic/LayoutPublic";
import styled from "styled-components";
import Head from "../components/Head";
import Hero from "../components/LayoutPublic/Hero";
import Slides from "../components/LayoutPublic/Slides/Slides";
import Featured from "../components/LayoutPublic/Featured/Featured";

export async function getStaticProps() {
  const response = await contentfulClient.getEntry("5FE7YEIDZtZXH5LqTqL2bD");

  return {
    props: {
      home: response.fields as string,
      updatedAt: response.sys.updatedAt,
    },
  };
}

export type SlideProps = {
  fields: {
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
    title: string;
  };
};

export type FeaturedProps = {
  index: number;
  fields: {
    heading: string;
    description: string;
    ctaLink: string;
    image: {
      fields: {
        title: string;
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
  };
};

type HomeProps = {
  home: {
    metaTitle: string;
    metaDescription: string;
    inputFootnote: string;
    heroText: Document;
    slides: SlideProps[];
    featuredSections: FeaturedProps[];
  };
};

const Home: NextPage<HomeProps> = (props) => {
  const {
    metaTitle,
    metaDescription,
    heroText,
    inputFootnote,
    slides,
    featuredSections,
  } = props.home;

  return (
    <LayoutPublic>
      <Head title={metaTitle} description={metaDescription} />

      <Wrapper>
        <Hero heroText={heroText} inputFootnote={inputFootnote} />

        <Slides slides={slides} />

        {featuredSections.map((section, index) => (
          <Featured key={index} fields={section.fields} index={index + 1} />
        ))}
      </Wrapper>
    </LayoutPublic>
  );
};

const Wrapper = styled.div`
  color: ${COLOR.black};
  margin: 0 auto;
  padding: 250px 0 250px 0;
`;

export default Home;
