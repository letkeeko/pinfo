// insert div to wrap an iframe to style responsiveness
const insertIframeWrapper = (value: string) => {
  const insertedDivStart = value.replace(
    /<iframe/g,
    `<div className="iframe-wrapper"><iframe`
  );

  return insertedDivStart.replace(/<\/iframe>/g, `</iframe></div>`);
};

export default insertIframeWrapper;
