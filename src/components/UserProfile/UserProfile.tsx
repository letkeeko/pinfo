import { UserProfileWrapper } from "./style";
import Avatar from "./Avatar";
import TitleCategory from "./TitleCategory";
import Accordion from "./Accordion";
import LinkIcons from "./LinkIcons";

const UserProfile = () => {
  return (
    <UserProfileWrapper>
      <Avatar />

      <TitleCategory />

      <Accordion />

      <LinkIcons />
    </UserProfileWrapper>
  );
};

export default UserProfile;
