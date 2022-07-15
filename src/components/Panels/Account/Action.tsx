import { ActionWrapper } from "./style";
import Card from "../../Card/Card";
import Text from "../../Text/Text";
import Spacer from "../../Spacer/Spacer";
import Button from "../../Button/Button";

const Action = () => {
  return (
    <ActionWrapper>
      <Text>Action</Text>

      <Spacer length={18} />

      <Card>
        <div className="flex">
          <Button variant="outline">Change Email</Button>

          <Spacer length={25} />
          <Button variant="outline">Change Password</Button>

          <Spacer length={25} />
          <Button variant="outline">Change Username</Button>
        </div>
      </Card>
    </ActionWrapper>
  );
};

export default Action;
