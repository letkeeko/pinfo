import styled from "styled-components";
import {
  IoQrCodeOutline,
  IoCopyOutline,
  IoDownloadOutline,
} from "react-icons/io5";
import { COLOR } from "../variables";
import Text from "../Text/Text";
import useToggle from "../../hooks/useToggle";

const PopupToolShare = () => {
  const [isDownloadQrCode, toggleDownloadQrCode] = useToggle();

  const getActiveClassName = (value: boolean) => {
    if (value) {
      return "nav-item__btn nav-item__btn--active";
    }

    return "nav-item__btn";
  };

  return (
    <Wrapper>
      <div className="nav-item nav-item--tip">
        <span className="nav-item__tip-txt">
          Download your unique QR code that will direct people to your Pinfo
          page when scanned.
        </span>
      </div>
      <div className="nav-item">
        <button
          className={getActiveClassName(isDownloadQrCode)}
          onClick={toggleDownloadQrCode}
        >
          {<IoQrCodeOutline className="icon" />}

          <Text>My QR code</Text>
        </button>
      </div>

      {isDownloadQrCode && (
        <>
          <div className="nav-item nav-item--border">
            <button className="nav-item__btn">
              <IoDownloadOutline className="icon" />

              <Text>Download PNG</Text>
            </button>
          </div>
          <div className="nav-item nav-item--border">
            <button className="nav-item__btn">
              <IoDownloadOutline className="icon" />

              <Text>Download SVG</Text>
            </button>
          </div>
        </>
      )}

      <div className="nav-item nav-item--border nav-item--tip">
        <span className="nav-item__tip-txt">
          Copy to share or simply add it to your bio on social profiles.
        </span>
      </div>
      <div className="nav-item">
        <button className="nav-item__btn">
          <IoCopyOutline className="icon" />

          <Text>site.url/keekopdf</Text>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0 0 12px 0 ${COLOR.getBlack(0.125)};
  position: absolute;
  background-color: ${COLOR.white};
  top: 38px;
  right: 48px;
  border-radius: 8px;

  .nav-item {
    padding: 25px 75px 25px 25px;

    &__tip-txt {
      color: ${COLOR.getBlue(0.7)};
      font-weight: 300;
      font-size: 0.825rem;
      line-height: 1.4;
    }

    &__btn {
      display: flex;
      align-items: center;
      line-height: 30px;
      background-color: transparent;
      border: 0;
      color: ${COLOR.blue};
      white-space: pre;
      cursor: pointer;

      .icon {
        margin: 0 20px 0 0;
        font-size: 1.2rem;
      }

      &--active {
        color: ${COLOR.yellow};
      }
    }

    &:last-child {
      border-bottom: none;
    }

    &--tip {
      padding: 25px 50px 0 25px;
    }

    &--border {
      border-top: 1px solid ${COLOR.getBlack(0.125)};
    }
  }
`;

export default PopupToolShare;
