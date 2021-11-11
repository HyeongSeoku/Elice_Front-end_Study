import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import { actionCreators } from "../store";
import styled from "styled-components";
import api from "../apis/giphyApi";


const Home = () => {
  useEffect(()=>{
    const fetchData = async () =>{
      const data = await api.randomGif();
    console.log(data);
    }
    fetchData();
  },[])
  
  return (
    <>
      <Header />
      
    </>
  );
};


export default Home;
