import { HeroWrapper } from "./style";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import InputBar from "./InputBar";

type HeroProps = {
  heroText: Document;
  inputFootnote: string;
};

const Hero = (props: HeroProps) => {
  const { heroText, inputFootnote } = props;

  return (
    <HeroWrapper>
      <div className="inner-wrapper">
        <div className="rich-txt rich-txt--center">
          {documentToReactComponents(heroText)}
        </div>

        <InputBar />
        <p className="footnote">{inputFootnote}</p>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
