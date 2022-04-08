import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const [detailWriting, setDetailWriting] = useState({
    title: "제목",
    content: "내용",
  });
  const param = useParams();
  console.log(param.id);

  const getDetailWriting = async () => {
    const res = await axios.get(`/board/${param.id}`);
    setDetailWriting(res.data[0]);
  };
  useEffect(getDetailWriting, []);

  return (
    <Wrapper>
      <h1>{detailWriting.title}</h1>
      <p>{detailWriting.content}</p>
      <button>
        <Link to="/modify">수정</Link>
      </button>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  background-color: powderblue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
