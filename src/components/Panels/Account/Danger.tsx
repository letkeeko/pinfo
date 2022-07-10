import { InformationWrapper } from "./style";
import Card from "../../Card/Card";
import Text from "../../Text/Text";
import Spacer from "../../Spacer/Spacer";
import Button from "../../Button/Button";

const Danger = () => {
  return (
    <InformationWrapper>
      <Text>Danger</Text>

      <Spacer length={18} />

      <Card>
        <Button variant="danger">Delete Account</Button>
      </Card>
    </InformationWrapper>
  );
};

export default Danger;
