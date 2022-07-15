import React from "react";
import { COLOR } from "../../variables";
import { ProfileWrapper } from "./style";
import { RiImageLine } from "react-icons/ri";
import Card from "../../Card/Card";
import Text from "../../Text/Text";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Select from "../../Select/Select";
import categoryOptions from "../../../static/categoryOptions";
import useMediaStore from "../../../stores/useMediaStore";
import useAppearanceStore from "../../../stores/useAppearanceStore";
import Spacer from "../../Spacer/Spacer";

const Profile = () => {
  const { profile_title, profile_category, image } = useAppearanceStore(
    ({ details }) => details
  );

  const handleDetailsChange = useAppearanceStore(
    ({ handleDetailsChange }) => handleDetailsChange
  );

  const toggleMediaModal = useMediaStore(
    ({ toggleMediaModal }) => toggleMediaModal
  );

  return (
    <ProfileWrapper>
      <Text>Profile</Text>

      <Spacer length={18} />

      <Card>
        <div className="flex-wrap">
          <div
            className="img-preview"
            style={{
              backgroundImage: !!image ? `url(${image})` : `none`,
              border: !!image ? `none` : `1px dashed ${COLOR.getBlue(0.5)}`,
            }}
          >
            {!image && <RiImageLine />}
          </div>
          <Button variant="outline" onClick={() => toggleMediaModal("profile")}>
            Select Photo
          </Button>
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
