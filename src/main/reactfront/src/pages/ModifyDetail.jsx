import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const ModifyDetail = () => {
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getDetailContent = async () => {
    const res = [{ title: "제목1", content: "내용1" }];
    // const res = await (await axios.get(`/board/${id}`)).data();
    setTitleText(res[0].title);
    setContentText(res[0].content);
  };
  useEffect(() => {
    getDetailContent();
  }, []);

  const onChange = (e) => {
    if (e.target.name === "title") {
      setTitleText(e.target.value);
    } else if (e.target.name === "content") {
      setContentText(e.target.value);
    }
  };

  const postContent = async () => {
    // const res = axios.post("/board/modify", null, {
    //   params: {
    //     title: titleText,
    //     content: contentText,
    //   },
    // });
    // if (res.data) {
    //   alert("글 등록이 완료되었습니다.");
    //   navigate(`/detail/${id}`);
    // }
  };

  const onSubmit = (e) => {
    if (titleText !== "" && contentText !== "") {
      e.preventDefault();
      postContent();
    }
  };

  const onKeyDownChat = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (!e.shiftKey) {
          e.preventDefault();
          onSubmit(e);
        }
      }
    },
    [onSubmit]
  );
  return (
    <Container>
      <Wrapper>
        <form onSubmit={onSubmit}>
          <input
            name="title"
            type="text"
            value={titleText}
            onChange={onChange}
            placeholder="제목"
            required
          />
          <textarea
            name="content"
            onKeyDown={onKeyDownChat}
            type="text"
            value={contentText}
            onChange={onChange}
            placeholder="내용"
          />
          <input type="submit" />
        </form>
      </Wrapper>
    </Container>
  );
};

export default ModifyDetail;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: powderblue;
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100%;

    input {
      width: 100%;
      margin-bottom: 20px;
    }
    textarea {
      width: 100%;
      height: 50%;
    }
  }
`;
