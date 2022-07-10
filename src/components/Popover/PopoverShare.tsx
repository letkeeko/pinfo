import {
  IoQrCodeOutline,
  IoCopyOutline,
  IoDownloadOutline,
} from "react-icons/io5";
import { PopoverShareWrapper } from "./style";
import useDialogStore from "../../stores/useDialogStore";
import Text from "../Text/Text";
import BlankOverlay from "../BlankOverlay/BlankOverlay";
import useToggle from "../../hooks/useToggle";

const PopoverShare = () => {
  const [isDownloadQrCode, toggleDownloadQrCode] = useToggle();

  const getActiveClassName = (value: boolean) => {
    if (value) {
      return "nav-item__btn nav-item__btn--active";
    }

    return "nav-item__btn";
  };

  const togglePopToolShare = useDialogStore(
    ({ togglePopToolShare }) => togglePopToolShare
  );

  return (
    <>
      <PopoverShareWrapper>
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
      </PopoverShareWrapper>

      <BlankOverlay closeCallback={togglePopToolShare} />
    </>
  );
};

export default PopoverShare;
