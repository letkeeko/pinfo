import { FooterWrapper } from "./style";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="flex-row">
        <div className="col">
          <span className="txt">&copy; Copyright 2022 Pinfo</span>

          <a className="txt txt--link" href="https://www.pexels.com/">
            Images <span>Pexels</span>
          </a>
        </div>

        <div className="col">
          <Link href="/privacy-policy">
            <a className="txt txt--link">Privacy policy</a>
          </Link>

          <Link href="/terms-and-conditions">
            <a className="txt txt--link">Terms and conditions</a>
          </Link>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
