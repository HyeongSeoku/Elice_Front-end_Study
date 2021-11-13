import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import api from "../apis/giphyApi";

const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  line-height: 50px;
`;

const SearchInput = styled.input`
  width: 700px;
  height: 50px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: large;
  font-weight: 500;
`;
const FormBtn = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 53px;
  border: none;
  vertical-align: baseline;
  border-radius: 5px;
`;

const SearchForm = (props) => {
  console.log(props);
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    //검색 api 실행
    console.log(search);
    getApi(search);
    setSearch("");
  };

  const getApi = async (value) => {
    if (value == "") {
      alert("검색어를 입력해주세요");
      return;
    }
    const response = await api.searchGif(value);
    const { data } = response.data;
    const tempArr = [];
    data.map((item) => {
      tempArr.push(item);
    });
    console.log(tempArr);
    props.setData(tempArr);
  };

  return (
    <SearchContainer onSubmit={onSubmitSearch}>
      <InputContainer>
        <SearchInput onChange={onSearchChange} value={search} />
        <FormBtn>
          <FaSearch className="fa-search" />
        </FormBtn>
      </InputContainer>
    </SearchContainer>
  );
};

export default SearchForm;
