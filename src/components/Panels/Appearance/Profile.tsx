import React from "react";
import { ProfileWrapper } from "./style";
import { RiImageLine } from "react-icons/ri";
import Card from "../../Card/Card";
import Text from "../../Text/Text";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Select from "../../Select/Select";
import categoryOptions from "../../../static/categoryOptions";
import useAppearanceStore from "../../../stores/useAppearanceStore";
import Spacer from "../../Spacer/Spacer";

const Profile = () => {
  const { profile_title, profile_category } = useAppearanceStore(
    ({ details }) => details
  );

  const handleDetailsChange = useAppearanceStore(
    ({ handleDetailsChange }) => handleDetailsChange
  );

  return (
    <ProfileWrapper>
      <Text>Profile</Text>

      <Spacer length={18} />

      <Card>
        <div className="flex-wrap">
          <div className="img-preview">
            <RiImageLine />
          </div>
          <Button variant="outline">Select Photo</Button>
        </div>

        <Spacer length={25} />

        <Input
          type="text"
          name="profile_title"
          placeholder="Profile title"
          value={profile_title}
          handleChange={handleDetailsChange}
        />
        <Spacer length={25} />
        <Select
          options={categoryOptions}
          name="profile_category"
          value={profile_category}
          defaultValue={profile_category}
          handleChange={handleDetailsChange}
        />
        <Spacer length={35} />
      </Card>
    </ProfileWrapper>
  );
};

export default Profile;
