import React from "react";
import Button from "../../Button/Button";
import Spacer from "../../Spacer/Spacer";
import useLinksStore from "../../../stores/useLinksStore";
import ModalLinks from "../../Modal/ModalLinks";
import LinkField from "./LinkField";
import Text from "../../Text/Text";
import { COLOR } from "../../variables";

const Links = () => {
  const links = useLinksStore(({ links }) => links);

  // delete prompt confirmation tracker
  const deletePrompt = useLinksStore(({ deletePrompt }) => deletePrompt);

  const handleDeletePrompt = useLinksStore(
    ({ handleDeletePrompt }) => handleDeletePrompt
  );

  const handleDeleteLink = useLinksStore(
    ({ handleDeleteLink }) => handleDeleteLink
  );

  const invalidUrls = useLinksStore(({ invalidUrls }) => invalidUrls);

  const isModalLinks = useLinksStore(({ isModalLinks }) => isModalLinks);

  const toggleModalLinks = useLinksStore(
    ({ toggleModalLinks }) => toggleModalLinks
  );

  return (
    <>
      {!!links.length &&
        links.map((link) => (
          <React.Fragment key={link.value}>
            <LinkField
              value={link.value}
              label={link.label}
              url={link.url}
              isDeletePrompted={deletePrompt.includes(link.value)}
              handleDeletePrompt={handleDeletePrompt}
              handleDeleteLink={handleDeleteLink}
            />

            <Spacer length={30} />
          </React.Fragment>
        ))}

      <Spacer length={30} />

      {!links.length && (
        <Text align="center">Display your links as icons on your Pinfo.</Text>
      )}

      {!!invalidUrls.length && (
        <Text align="center">
          <span style={{ color: COLOR.red }}>
            Please enter a valid URL that starts with https://
          </span>
        </Text>
      )}

      <Spacer length={60} />

      <Button align="center" onClick={toggleModalLinks}>
        Add New Link
      </Button>

      {isModalLinks && <ModalLinks />}
    </>
  );
};

export default Links;
