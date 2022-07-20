import LoadingWrapper from "./style";

const Loading = () => {
  return (
    <LoadingWrapper aria-hidden="true">
      <div className="circles">
        <div className="circle circle--one"></div>
        <div className="circle circle--two"></div>
        <div className="circle circle--three"></div>
        <div className="circle circle--four"></div>
        <div className="circle circle--five"></div>
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
