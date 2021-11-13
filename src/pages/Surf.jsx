import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchData from "../components/SearchData";
import SearchForm from "../components/SearchForm";

const SurfContainer = styled.div`
  padding: 20px;
`;

const SurfTitle = styled.h1`
  color: white;
`;

const ResultContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const Surf = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <SurfContainer>
      <SurfTitle>Surf</SurfTitle>
      <SearchForm setData={setData} data={data} />
      <ResultContainer>
        {data.map((item) => (
          <SearchData
            key={item.id}
            url={item.images.fixed_height.url}
            title={item.title}
          />
        ))}
      </ResultContainer>
    </SurfContainer>
  );
};

export default Surf;
