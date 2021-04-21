import styled from "styled-components";
import Form from "../components/Form";
import dynamic from "next/dynamic";

const BgImage = dynamic(() => import("../components/BGImage"), {
  ssr: false,
});

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <Form />
      </Wrapper>

      <BgImage />
    </>
  );
}
