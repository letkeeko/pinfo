import type { NextPage } from "next";
import { COLOR } from "../components/variables";
import Link from "next/link";
import styled from "styled-components";
import Head from "../components/Head";
import NavBar from "../components/FrontPage/NavBar/NavBar";
import Heading from "../components/Heading/Heading";
import Text from "../components/Text/Text";
import Spacer from "../components/Spacer/Spacer";
import LoginForm from "../components/FrontPage/LoginForm/LoginForm";

const Login: NextPage = () => {
  return (
    <Wrapper>
      <Head title="Log In" description="TBD" />

      <div className="flex-row">
        <div className="col col--white">
          <NavBar />

          <Spacer length={48} />

          <Heading as="h1">Welcome back</Heading>

          <Spacer length={8} />

          <Text>
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </Text>

          <Spacer length={42} />

          <LoginForm />
        </div>

        <div className="col col--blue">
          <h1>Picture</h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLOR.blue};
  margin: 0 auto;

  .flex-row {
    display: flex;
    height: 100vh;

    .col {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;

      &--white {
      }

      &--blue {
        background-color: ${COLOR.blue};
        color: ${COLOR.white};
        justify-content: center;
      }
    }
  }
`;

export default Login;
