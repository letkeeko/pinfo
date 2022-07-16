import styled from "styled-components";
import { COLOR, SCREEN } from "../../variables";

const NavBarWrapper = styled.nav`
  padding: 32px 0 0 0;

  .logo {
    width: 50px;
    margin: 0 auto 26px auto;
    display: block;
  }

  .bar {
    background-color: ${COLOR.white};
    box-shadow: 0 5px 12px -2px ${COLOR.getBlack(0.125)};
    border-radius: 7px;
    display: flex;
    padding: 10px 20px;

    .link {
      color: ${COLOR.getBlack(0.625)};
      font-size: 0.935rem;
      margin: 0 30px;
      line-height: 30px;
    }
  }
`;

export default NavBarWrapper;
