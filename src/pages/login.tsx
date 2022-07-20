import type { NextPage } from "next";
import { COLOR } from "../components/variables";
import LayoutPublic from "../components/LayoutPublic/LayoutPublic";
import Link from "next/link";
import styled from "styled-components";
import Head from "../components/Head";
import Heading from "../components/Heading/Heading";
import Text from "../components/Text/Text";
import Spacer from "../components/Spacer/Spacer";
import LoginForm from "../components/LayoutPublic/Forms/Login";

const Login: NextPage = () => {
  return (
    <LayoutPublic>
      <Head title="Log In" description="TBD" />

      <Wrapper>
        <div className="flex-row">
          <div className="col col--white">
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
    </LayoutPublic>
  );
};

const Wrapper = styled.div`
  color: ${COLOR.black};
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
