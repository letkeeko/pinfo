import { InformationWrapper } from "./style";
import Card from "../../Card/Card";
import Text from "../../Text/Text";
import Spacer from "../../Spacer/Spacer";
import Button from "../../Button/Button";

const Action = () => {
  return (
    <InformationWrapper>
      <Text>Information</Text>

      <Spacer length={18} />

      <Card>
        <Button variant="outline">Change Email</Button>
        <br />
        <Spacer length={25} />
        <Button variant="outline">Change Password</Button>
        <br />
        <Spacer length={25} />
        <Button variant="outline">Change Username</Button>
      </Card>
    </InformationWrapper>
  );
};

export default Action;
