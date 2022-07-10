import React from "react";
import { SeoPreviewWrapper } from "./style";
import Text from "../../Text/Text";
import useSeoStore from "../../../stores/useSeoStore";
import { MdSearch, MdOutlineMoreVert } from "react-icons/md";

const SeoPreview = () => {
  const titleTag = useSeoStore(({ title_tag }) => title_tag);
  const metaDescription = useSeoStore(
    ({ meta_description }) => meta_description
  );

  return (
    <>
      <Text align="center">Google preview</Text>
      <SeoPreviewWrapper>
        <div className="subwrapper">
          <div className="input-wrap">
            <MdSearch className="input-wrap__icon" />
            <input
              className="input-wrap__input"
              defaultValue="Pinfo keekopdf"
              type="text"
              disabled={true}
            />
          </div>
          <p className="txt txt--count">About 1,000 results (0.36 seconds)</p>
          <p className="txt txt--url">
            https://pinfo.at <span>›</span> keekopdf <MdOutlineMoreVert />
          </p>
          <p className="txt txt--title">{titleTag || "@keekopdf"} | Pinfo</p>
          <p className="txt txt--description">
            {metaDescription ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
          </p>
        </div>
      </SeoPreviewWrapper>
    </>
  );
};

export default SeoPreview;
