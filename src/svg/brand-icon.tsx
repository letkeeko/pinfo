import * as React from "react";
import { COLOR } from "../components/variables";

type BrandIconProps = {
  color?: string;
  className?: string;
};
const SvgComponent = (props: BrandIconProps) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 478.264 474.311"
  >
    <path
      fill={props.color || COLOR.black}
      d="M239.699 474.31c-52.79.002-102.886-18.812-141.375-53.157-37-33.008-61.215-78.837-68.18-129.043l20.801-2.885c6.372 45.931 27.59 86.132 61.36 116.258 34.627 30.9 79.777 47.826 127.397 47.828.921 0 1.836-.006 2.76-.019 48.337-.663 96.028-18.572 134.286-50.428a228.203 228.203 0 0 0 42.135-46.295c28.634-41.808 41.97-91.816 37.552-140.815-4.438-49.232-26.621-93.956-62.464-125.93-33.894-30.244-76.405-46.77-122.938-47.791l.46-20.995c50.862 1.116 99.324 19.98 136.459 53.116 39.833 35.535 64.48 85.154 69.399 139.715 4.854 53.849-9.757 108.74-41.14 154.564a250.1 250.1 0 0 1-19.63 25.05 249.323 249.323 0 0 1-26.394 25.518c-41.945 34.925-94.305 54.56-147.438 55.29-1.016.013-2.036.02-3.05.02Z"
    />
    <path
      fill={props.color || COLOR.black}
      d="M232.65 379.478c-1.992 0-3.983-.04-5.978-.124-30.542-1.275-58.61-12.28-81.17-31.829l6.855-7.912 5.486-8.988.752.46.658.569c18.932 16.405 42.548 25.643 68.294 26.718 25.13 1.052 51.063-6.085 73.034-20.084 10.39-6.617 19.9-14.72 28.27-24.088a136.341 136.341 0 0 0 18.68-26.78c26.364-49.747 17.652-109.08-21.19-144.278l14.101-15.562c45.967 41.655 56.51 111.431 25.64 169.683a157.4 157.4 0 0 1-21.567 30.925c-9.656 10.808-20.64 20.164-32.653 27.812-24.192 15.415-51.462 23.478-79.213 23.478Z"
    />
    <path
      fill={props.color || COLOR.black}
      d="M148.233 350.164c-37.645 0-72.285-12.718-99.293-36.815C16.596 284.486-.774 242.88.027 196.194c.79-46.101 19.27-91.712 52.034-128.43 32.763-36.71 75.98-60.241 121.692-66.259C220.047-4.589 263.355 7.947 295.7 36.8c32.351 28.865 49.726 70.472 48.924 117.158-.793 46.096-19.274 91.705-52.04 128.425-32.758 36.721-75.974 60.26-121.686 66.277a173.652 173.652 0 0 1-22.665 1.505ZM196.189 21.06c-45.124 0-92.964 20.914-128.46 60.687C7.408 149.348 5.25 246.216 62.923 297.68c27.72 24.733 65.097 35.446 105.235 30.158 40.724-5.36 79.348-26.469 108.757-59.436 29.417-32.968 46.007-73.74 46.713-114.806.695-40.48-14.187-76.394-41.907-101.126-23.735-21.174-53.971-31.41-85.531-31.41ZM417.13 443.933c-7.593 0-15.217-2.628-21.383-7.99l-19.722-17.161 10.502-12.07 19.72 17.16c6.915 6.011 17.436 5.277 23.452-1.644l6.804-7.814c6.01-6.921 5.276-17.448-1.643-23.458l-17.623-15.322 10.498-12.074 17.62 15.32c13.577 11.792 15.024 32.444 3.221 46.033l-6.806 7.817c-6.44 7.407-15.517 11.202-24.64 11.203Z"
    />
  </svg>
);

export default SvgComponent;
