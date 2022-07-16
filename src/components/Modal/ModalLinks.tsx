import React from "react";
import Text from "../Text/Text";
import useLinksStore from "../../stores/useLinksStore";
import { ModalContainerWrapper, ModalLinksWrapper } from "./style";
import { TbSearch } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { GiCheckMark } from "react-icons/gi";
import { useDebouncedCallback } from "use-debounce";
import BlankOverlay from "../BlankOverlay/BlankOverlay";

const ModalLinks = () => {
  const links = useLinksStore(({ links }) => links);

  const searchablePlatforms = useLinksStore(
    ({ searchablePlatforms }) => searchablePlatforms
  );

  const handleSearchPlatform = useLinksStore(
    ({ handleSearchPlatform }) => handleSearchPlatform
  );

  const handleAddPlatform = useLinksStore(
    ({ handleAddPlatform }) => handleAddPlatform
  );

  const toggleModalLinks = useLinksStore(
    ({ toggleModalLinks }) => toggleModalLinks
  );

  const debouncedHandleSearchPlatform = useDebouncedCallback(
    (value: string) => {
      handleSearchPlatform(value);
    },
    300
  );

  const getActiveClassName = (value: string) => {
    if (isActive(value)) {
      return `option-list__each option-list__each--active`;
    }

    return `option-list__each`;
  };

  const isActive = (value: string) => {
    return links.some((link) => link.value === value);
  };

  return (
    <ModalContainerWrapper>
      <ModalLinksWrapper>
        <div className="search-input-wrap">
          <label htmlFor="search">
            <TbSearch className="search-input-wrap__icon" />
          </label>
          <input
            className="search-input-wrap__input"
            type="text"
            id="search"
            placeholder="Search..."
            onChange={(e) => {
              debouncedHandleSearchPlatform(e.target.value);
            }}
          />

          <button
            className="search-input-wrap__close-btn"
            onClick={toggleModalLinks}
          >
            <CgClose />
          </button>
        </div>

        <div className="option-list">
          {!searchablePlatforms.length && (
            <Text align="center">No platforms found</Text>
          )}

          {!!searchablePlatforms.length &&
            searchablePlatforms.map((option) => (
              <button
                className={getActiveClassName(option.value)}
                key={option.label}
                onClick={() =>
                  handleAddPlatform({
                    value: option.value,
                    label: option.label,
                    url: "",
                  })
                }
                disabled={isActive(option.value)}
              >
                {isActive(option.value) && (
                  <GiCheckMark className="active-indicator" />
                )}
                {option.icon} <span> {option.label}</span>
              </button>
            ))}
        </div>
      </ModalLinksWrapper>

      <BlankOverlay closeCallback={toggleModalLinks} />
    </ModalContainerWrapper>
  );
};

export default ModalLinks;
