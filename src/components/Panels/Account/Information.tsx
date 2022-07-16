import { InformationWrapper } from "./style";
import useAccountStore from "../../../stores/useAccountStore";
import Card from "../../Card/Card";
import Input from "../../Input/Input";
import Text from "../../Text/Text";
import Spacer from "../../Spacer/Spacer";
import Button from "../../Button/Button";

const Information = () => {
  const { name } = useAccountStore(({ user }) => user);

  const handleChange = useAccountStore(({ handleChange }) => handleChange);

  return (
    <InformationWrapper>
      <Text>Information</Text>

      <Spacer length={18} />

      <Card>
        <form>
          <Input
            type="text"
            name="name"
            label="Name"
            value={name}
            handleChange={handleChange}
          />

          <Spacer length={35} />

          <Button>Save Details</Button>
        </form>
      </Card>
    </InformationWrapper>
  );
};

export default Information;
