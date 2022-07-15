import dynamic from "next/dynamic";

// work around to make useRef work with react-quill as dynamic import
const TextEditor = dynamic(() => import("./TextEditor"), { ssr: false });

export default TextEditor;
