import { ModalContainerWrapper, ModalMediaLibraryWrapper } from "./style";
import BlankOverlay from "../BlankOverlay/BlankOverlay";
import mediaLibrary from "../../static/mediaLibrary";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { RiArrowDownFill } from "react-icons/ri";

type MediaLibraryProps = {
  selectImage: (src: string) => void;
  closeMediaModal: () => void;
};

const ModalMediaLibrary = (props: MediaLibraryProps) => {
  const { selectImage, closeMediaModal } = props;

  return (
    <ModalContainerWrapper>
      <ModalMediaLibraryWrapper>
        <Text align="center">Select from existing library</Text>

        <div className="img-list">
          {mediaLibrary.map((image, i) => (
            <div
              className="img-list__each"
              key={i}
              onClick={() => selectImage(image.src)}
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

              <div className="overlay">
                <label className="label">Select</label>
                <RiArrowDownFill />
              </div>
            </div>
          ))}
        </div>

        <Button align="center" variant="outline">
          Upload New Image
        </Button>
      </ModalMediaLibraryWrapper>

      <BlankOverlay closeCallback={closeMediaModal} />
    </ModalContainerWrapper>
  );
};

export default ModalMediaLibrary;
