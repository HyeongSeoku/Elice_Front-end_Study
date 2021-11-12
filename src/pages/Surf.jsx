import React from "react";
import styled from "styled-components";

const SurfContainer = styled.div`
  padding: 20px;
`;

const SurfTitle = styled.h1`
  color: white;
`;

const Surf = () => {
  return (
    <SurfContainer>
      <SurfTitle>Surf</SurfTitle>
      <div>surfing</div>
    </SurfContainer>
  );
};

export default Surf;
