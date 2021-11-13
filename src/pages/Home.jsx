import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import { actionCreators } from "../store";
import styled from "styled-components";
import api from "../apis/giphyApi";
import HomeCarousel from "../components/HomeCarousel";
import axios from "axios";

const ContentsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const HomeMessage = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  display: grid;
  width: 1500px;
  height: 500px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden; //공간을 넘어가는 이미지는 보이지 않도록 처리
  &:hover {
    transition: all 0.5s ease-in-out; //부드럽게 움직이도록

    transform: translateX(-30%); //[수정 요함] : container 자체가 움직이는 오류
  }
`;

const Home = () => {
  const [randomImg, setRandomImg] = useState([]); //홈 화면에 띄우는 용도로만 쓰기 때문에 useState로 선언 (not Redux)
  useEffect(() => {
    const getApiData = async () => {
      const response = await api.randomGif();
      const { data } = response.data;
      const tempArr = [];
      data.map((item) => {
        tempArr.push(item);
      });
      setRandomImg(tempArr);
    };
    getApiData();
  }, []);

  //상태 변경 감지
  useEffect(() => {
    const stateCheck = async () => {
      await console.log(randomImg);
    };
    stateCheck();
  }, [randomImg]);

  return (
    <>
      <Header />
      <ContentsMain>
        <HomeMessage>이미지를 둘러보고 공유해보세요.</HomeMessage>
        <CarouselContainer>
          {randomImg.map((item) => (
            <HomeCarousel key={item.id} url={item.images.fixed_height.url} />
          ))}
        </CarouselContainer>
      </ContentsMain>
    </>
  );
};

export default Home;
