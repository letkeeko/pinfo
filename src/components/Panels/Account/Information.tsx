import { InformationWrapper } from "./style";
import useAccountStore from "../../../stores/useAccountStore";
import Card from "../../Card/Card";
import Input from "../../Input/Input";
import Select from "../../Select/Select";
import Text from "../../Text/Text";
import Spacer from "../../Spacer/Spacer";
import Button from "../../Button/Button";
import categoryOptions from "../../../static/categoryOptions";

const Information = () => {
  const { name, category } = useAccountStore(({ user }) => user);

  const handleChange = useAccountStore(({ handleChange }) => handleChange);

  console.log(category);
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

          <Spacer length={25} />

          <Select
            options={categoryOptions}
            label="Category"
            name="category"
            value={category}
            defaultValue={category}
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
