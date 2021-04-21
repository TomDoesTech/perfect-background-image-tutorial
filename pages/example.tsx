import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Form from "../components/Form";

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Card = styled.div`
  backgroundcolor: rgba(256, 256, 256, 0.9);
`;

const BackgroundImage = dynamic(() => import("../components/BackgroundImage"), {
  ssr: false,
  loading: () => <p>...</p>,
});

const Example = () => {
  return (
    <>
      <Wrapper>
        <Card>
          <Form />
        </Card>
      </Wrapper>
      <BackgroundImage />
    </>
  );
};

export default Example;
