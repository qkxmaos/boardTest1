import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const [detailWriting, setDetailWriting] = useState({
    title: "제목",
    content: "내용",
  });
  const { id } = useParams();

  const getDetailWriting = async () => {
    const res = await axios.get(`/board/${id}`);
    setDetailWriting(res.data);
  };
  useEffect(() => {
    getDetailWriting();
  }, []);

  const onDelete = async () => {
    const res = await axios.post(`/board/delete/${id}`, null, {
      params: {
        title: detailWriting.title,
        content: detailWriting.content,
      },
    });
    console.log(res);
  };

  return (
    <Wrapper>
      <h1>{detailWriting.title}</h1>
      <p>{detailWriting.content}</p>
      <button>
        <Link to={`/modify/${id}`}>수정</Link>
      </button>
      <button onClick={onDelete}>
        delete
        {/* <Link to="/">delete</Link> */}
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
