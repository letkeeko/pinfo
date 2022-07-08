import React from "react";
import styled from "styled-components";
import Text from "../../Text/Text";
import { COLOR } from "../../variables";
import { TbSearch } from "react-icons/tb";
import useStore from "./Links.store";
import { CgClose } from "react-icons/cg";
import { GiCheckMark } from "react-icons/gi";
import { useDebouncedCallback } from "use-debounce";

const LinksModal = () => {
  const links = useStore(({ links }) => links);

  const searchablePlatforms = useStore(
    ({ searchablePlatforms }) => searchablePlatforms
  );

  const handleSearchPlatform = useStore(
    ({ handleSearchPlatform }) => handleSearchPlatform
  );

  const handleAddPlatform = useStore(
    ({ handleAddPlatform }) => handleAddPlatform
  );

  const handleModal = useStore(({ handleModal }) => handleModal);

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
    <Wrapper>
      <div className="card">
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
            onClick={() => handleModal()}
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLOR.getBlack(0.55)};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    background-color: ${COLOR.white};
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    height: calc(100% - 25vh);
    overflow: scroll;

    .search-input-wrap {
      background-color: ${COLOR.white};
      display: flex;
      align-items: center;
      padding: 18px 0;
      position: sticky;
      top: 0;
      padding: 60px 36px 0 36px;
      z-index: 2;

      &__icon {
        font-size: 1.2rem;
        margin: 0 9px 0 0;
        position: absolute;
        bottom: 12px;
        left: 55px;
      }

      &__input {
        background-color: ${COLOR.ice};
        color: ${COLOR.black};
        border: 0;
        border-radius: 5px;
        padding: 6px 10px 6px 52px;
        line-height: 30px;
        display: block;
        width: 100%;
        font-size: 16px;
        font-weight: 300;
      }

      &__close-btn {
        color: ${COLOR.blue};
        background-color: transparent;
        border: 0;
        font-size: 1.4rem;
        position: absolute;
        top: 18px;
        right: 27px;
        cursor: pointer;
      }
    }

    .option-list {
      display: flex;
      flex-wrap: wrap;
      padding: 36px 18px 18px 18px;

      &__each {
        border: 1px solid ${COLOR.getBlack(0.125)};
        color: ${COLOR.blue};
        background-color: transparent;
        width: calc(50% - 36px);
        margin: 0 18px 36px 18px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        line-height: 30px;
        position: relative;

        svg {
          font-size: 1.2rem;
          margin: 0 18px 0 0;
        }

        span {
          font-size: 0.9rem;
          font-weight: 300;
        }

        .active-indicator {
          color: ${COLOR.green};
          position: absolute;
          right: 0;
          font-size: 1.2rem;
        }

        &--active {
          pointer-events: none;
        }
      }
    }
  }
`;

export default LinksModal;
