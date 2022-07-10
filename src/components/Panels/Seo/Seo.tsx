import React, { useEffect } from "react";
import { SeoWrapper } from "./style";
import HelpText from "../../HelpText/HelpText";
import Spacer from "../../Spacer/Spacer";
import Text from "../../Text/Text";
import Input from "../../Input/Input";
import useSeoStore from "../../../stores/useSeoStore";

const Seo = () => {
  const titleTag = useSeoStore(({ title_tag }) => title_tag);

  const metaDescription = useSeoStore(
    ({ meta_description }) => meta_description
  );

  const handleChange = useSeoStore(({ handleChange }) => handleChange);

  const handleDatabase = useSeoStore(({ handleDatabase }) => handleDatabase);

  const toggleModal = useSeoStore(({ toggleModal }) => toggleModal);

  // delay saving to database
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // run when user stop typing

      if (titleTag || metaDescription) {
        handleDatabase();
      }
    }, 1000);

    // clear above function as user continues to type
    return () => clearTimeout(timeoutId);

    // eslint-disable-next-line
  }, [titleTag, metaDescription]);

  return (
    <SeoWrapper>
      <Text>SEO</Text>

      <div className="card">
        <HelpText label="Custom Meta" triggerHelp={toggleModal} />

        <Spacer length={13} />

        <Text>Changes will take some time to appear on most platforms.</Text>

        <Spacer length={25} />

        <Input
          type="text"
          name="title_tag"
          label="Title"
          placeholder="Under 50 characters..."
          defaultValue={titleTag}
          handleChange={handleChange}
        />

        <Spacer length={25} />

        <Input
          type="textarea"
          name="meta_description"
          label="Description"
          placeholder="From 50 to 160 characters..."
          defaultValue={metaDescription}
          handleChange={handleChange}
        />
      </div>
    </SeoWrapper>
  );
};

export default Seo;
