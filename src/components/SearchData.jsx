import React, { useEffect } from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  width: 270px;
  height: 330px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin: 10px 15px;
  overflow: hidden;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.05);
  }
`;

const ResultImg = styled.img.attrs(({ url }) => ({
  src: url || "",
}))`
  width: 200px;
  height: 200px;
`;

const ResultTitle = styled.div`
  width: 100px;
  height: 30px;
  font-size: 18px;
  margin-top: 10px;
`;

const SearchData = (props) => {
  return (
    <ResultContainer>
      <ResultImg url={props.url} />
      <ResultTitle>{props.title}</ResultTitle>
    </ResultContainer>
  );
};

export default SearchData;
