import React, { useCallback, useState } from "react";
import styled from "styled-components";

const BoardFactory = () => {
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");

  const onTitleChange = (e) => {
    setTitleText(e.target.value);
  };

  const onContentChange = (e) => {
    setContentText(e.target.value);
  };

  const onSubmit = (e) => {
    if (titleText !== "" && contentText !== "") {
      e.preventDefault();
      setTitleText("");
      setContentText("");
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
            type="text"
            value={titleText}
            onChange={onTitleChange}
            placeholder="제목"
            required
          />
          <textarea
            onKeyDown={onKeyDownChat}
            type="text"
            value={contentText}
            onChange={onContentChange}
            placeholder="내용"
          />
        </form>
      </Wrapper>
    </Container>
  );
};

export default BoardFactory;

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
