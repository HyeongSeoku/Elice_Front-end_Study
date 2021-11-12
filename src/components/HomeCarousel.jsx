import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemContainer = styled.div`
  margin-right: 5px;
`;
const ItemImg = styled.img.attrs(({ url }) => ({
  src: url || "",
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const HomeCarousel = (props) => {
  return (
    <ItemContainer>
      <ItemImg url={props.url} width={props.width} heigth={props.height} />
    </ItemContainer>
  );
};

export default HomeCarousel;
