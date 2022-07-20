import type { NextPage } from "next";
import { COLOR } from "../components/variables";
import LayoutPublic from "../components/LayoutPublic/LayoutPublic";
import Link from "next/link";
import styled from "styled-components";
import Head from "../components/Head";
import Heading from "../components/Heading/Heading";
import Text from "../components/Text/Text";
import Spacer from "../components/Spacer/Spacer";
import SignupForm from "../components/LayoutPublic/Forms/Signup";

const Signup: NextPage = () => {
  return (
    <LayoutPublic>
      <Head title="Sign Up" description="TBD" />

      <Wrapper>
        <div className="flex-row">
          <div className="col col--white">
            <Spacer length={48} />

            <Heading as="h1">Free forever</Heading>

            <Spacer length={8} />

            <Text>
              Already have an account?{" "}
              <Link href="/login">
                <a>Sign in</a>
              </Link>
            </Text>

            <Spacer length={42} />

            <SignupForm />
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
    min-height: 100vh;

    .col {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;

      &--white {
        padding: 250px 0 250px 0;
      }

      &--blue {
        background-color: ${COLOR.blue};
        color: ${COLOR.white};
        justify-content: center;
        padding: 250px 0 250px 0;
      }
    }
  }
`;

export default Signup;
