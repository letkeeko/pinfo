import styled from "styled-components";
import { COLOR } from "../variables";
import Text from "../Text/Text";
import { VscQuestion } from "react-icons/vsc";
import HelpTextWrapper from "./style";

type HelpTextProps = {
  label: string;
  triggerHelp: () => void;
};

const HelpText = (props: HelpTextProps) => {
  const { label, triggerHelp } = props;

  return (
    <HelpTextWrapper>
      <Text weight={700}>{label}</Text>
      <button className="help-btn" onClick={triggerHelp}>
        <VscQuestion />
      </button>
    </HelpTextWrapper>
  );
};

export default HelpText;
