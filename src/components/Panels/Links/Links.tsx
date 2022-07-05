import React, { useState } from "react";

import Button from "../../Button/Button";
import Spacer from "../../Spacer/Spacer";
import useStore from "./Links.store";
import LinksModal from "./LinksModal";
import LinkField from "./LinkField";

const Links = () => {
  const links = useStore(({ links }) => links);
  const handleModal = useStore(({ handleModal }) => handleModal);

  const isModalOpen = useStore(({ isModalOpen }) => isModalOpen);

  // delete prompt confirmation tracker
  const deletePrompt = useStore(({ deletePrompt }) => deletePrompt);

  const handleDeletePrompt = useStore(
    ({ handleDeletePrompt }) => handleDeletePrompt
  );

  const handleDeleteLink = useStore(({ handleDeleteLink }) => handleDeleteLink);

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
            <Spacer mb={30} />
          </React.Fragment>
        ))}

      <Spacer mb={75} />

      <Button variant="solid" align="center" onClick={handleModal}>
        ADD NEW LINK
      </Button>

      {isModalOpen && <LinksModal />}
    </>
  );
};

export default Links;
