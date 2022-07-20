import { WarningWrapper } from "./style";

const Warning = ({ warning }: { warning: string }) => {
  return (
    <WarningWrapper>
      <p>{warning}</p>
    </WarningWrapper>
  );
};

export default Warning;
