import styled, { keyframes, css } from "styled-components";
import { COLOR, SCREEN } from "../variables";

const fadeIn = keyframes`
0%{
  opacity: 0
}
100% {
  opacity: 1;
}
`;

const LayoutPublicWrapper = styled.div`
  color: ${COLOR.black};

  .page-container {
    margin: 0 auto;
    overflow: hidden;
  }

  .inner-wrapper {
    max-width: 1340px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
    @media ${SCREEN.tablet} {
      padding: 0 48px;
    }
    @media ${SCREEN.desktop} {
      padding: 0;
    }

    &--flex-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media ${SCREEN.tablet} {
        padding: 0 48px;
      }
    }
  }
`;

type NavBarProps = {
  isSticky: boolean;
};

export const NavBarWrapper = styled.nav<NavBarProps>`
  background-color: ${COLOR.white};
  box-shadow: 0 5px 12px -2px ${COLOR.getBlack(0.1)};
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  animation: ${({ isSticky }) =>
    isSticky
      ? css`
          ${fadeIn} 0.25s ease-in-out
        `
      : "none"};

  max-width: 1340px;
  width: 100%;
  left: 50%;
  top: 18px;
  transform: translateX(-50%);
  padding: 15px 0;
  border-radius: 100px;
  width: calc(100% - 40px);
  z-index: 10;
  @media ${SCREEN.tablet} {
    width: calc(100% - 96px);
  }
  @media ${SCREEN.desktop} {
    width: 100%;
  }

  .logo {
    width: 50px;
    display: block;
  }

  .menu-list {
    display: flex;
    align-items: center;

    &__each {
      margin: 0 0 0 100px;

      .link {
        color: ${COLOR.getBlack(0.625)};
        font-size: 0.95rem;

        &:hover {
          color: ${COLOR.blue};
        }
      }
    }
  }
`;

export const HeroWrapper = styled.header`
  margin: 0 0 200px 0;

  .rich-txt {
    h1 {
      font-size: 3.2rem;
      font-weight: 700;
      white-space: pre-wrap;
      margin: 0 0 18px 0;

      b {
        color: ${COLOR.yellow};
      }
    }

    p {
      font-size: 1.1rem;
      font-weight: 300;
    }

    &--center {
      text-align: center;
      margin: 0 0 36px 0;
    }
  }

  .footnote {
    text-align: center;
    font-weight: 300;
    font-size: 0.9rem;
    margin: 13px 0 0 0;
  }
`;

export const InputBarWrapper = styled.div`
  border: 1px ${COLOR.black} solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 20px;
  max-width: max-content;
  margin: 0 auto;

  .url {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 30px;
    display: block;
  }

  .form {
    .input {
      color: ${COLOR.black};
      border: 0;
      outline: none;
      border-radius: none;
      font-size: 1.1rem;
      line-height: 30px;
      width: 140px;
      margin: 0 9px 0 0;

      &::placeholder {
        color: ${COLOR.black};
        font-weight: 300;
        opacity: 0.6;
      }
    }
  }
`;

export const FooterWrapper = styled.footer`
  .flex-row {
    display: flex;
    justify-content: space-between;
    max-width: 1340px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
    @media ${SCREEN.tablet} {
      padding: 18px 48px;
    }
    @media ${SCREEN.desktop} {
      padding: 18px 0;
    }

    .col {
      .txt {
        font-weight: 300;
        font-size: 0.8rem;
        color: ${COLOR.getBlack(0.625)};

        &--link {
          color: ${COLOR.getBlack(0.625)};
          margin: 0 0 0 36px;

          &:hover {
            color: ${COLOR.blue};
          }

          span {
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export default LayoutPublicWrapper;
