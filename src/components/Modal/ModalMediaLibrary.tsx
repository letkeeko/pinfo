import { ModalContainerWrapper, ModalMediaLibraryWrapper } from "./style";
import BlankOverlay from "../BlankOverlay/BlankOverlay";
import useMediaStore from "../../stores/useMediaStore";
import useAppearanceStore from "../../stores/useAppearanceStore";
import mediaLibrary from "../../static/mediaLibrary";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { RiArrowDownFill } from "react-icons/ri";

type MediaLibraryProps = {
  selectImage?: (src: string) => void;
  closeMediaModal: () => void;
};

const ModalMediaLibrary = (props: MediaLibraryProps) => {
  const { selectImage, closeMediaModal } = props;

  const modalTriggerBy = useMediaStore(({ modalTriggerBy }) => modalTriggerBy);

  const toggleMediaModal = useMediaStore(
    ({ toggleMediaModal }) => toggleMediaModal
  );

  const handleBackgroundChange = useAppearanceStore(
    ({ handleBackgroundChange }) => handleBackgroundChange
  );

  const handleDetailsChange = useAppearanceStore(
    ({ handleDetailsChange }) => handleDetailsChange
  );

  const handleSelectImage = (src: string) => {
    // if from quill text editor
    if (!!selectImage) {
      selectImage(src);

      return;
    }

    if (modalTriggerBy === "background") {
      handleBackgroundChange("image", src);
      toggleMediaModal();

      return;
    }

    if (modalTriggerBy === "profile") {
      handleDetailsChange("image", src);
      toggleMediaModal();

      return;
    }
  };

  // if trigger by sidebar consider it global
  const isGlobal = modalTriggerBy === "sidebar";

  const headingText = isGlobal
    ? "Your image library"
    : "Select from existing library";

  return (
    <ModalContainerWrapper>
      <ModalMediaLibraryWrapper isGlobal={isGlobal}>
        <Text align="center">{headingText}</Text>

        <div className="img-list">
          {mediaLibrary.map((image, i) => (
            <div
              className="img-list__each"
              key={i}
              onClick={() => handleSelectImage(image.src)}
            >
              <div className="img-wrap">
                <div
                  className="img-wrap__preview-bg"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
              </div>
              <div className="txt-wrap">
                <span className="label">
                  {image.width} x {image.height} px
                </span>

                <span className="label label--absolute">{image.extension}</span>
              </div>

              {!isGlobal && (
                <div className="overlay">
                  <label className="label">Select</label>
                  <RiArrowDownFill />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="btn-wrap">
          <Button align="center" variant="outline">
            Upload New Image
          </Button>
        </div>
      </ModalMediaLibraryWrapper>

      <BlankOverlay closeCallback={closeMediaModal} />
    </ModalContainerWrapper>
  );
};

export default ModalMediaLibrary;
