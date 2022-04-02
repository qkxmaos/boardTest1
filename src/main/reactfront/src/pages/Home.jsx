import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const [list, setList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);

  const getList = () => {
    axios
      .get("/board", null)
      .then((response) => response.data)
      .then((list) => setList(list))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getList();
  }, []);

  const onWriteClick = async () => {
    const res = await axios.get("/board/new", null);
    //boolean
  };

  return (
    <Container>
      <Wrapper>
        <table>
          <thead>
            <tr>
              <th>글 번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {/* {list.map((list) => {
              <>
                <tr key={list.id}>
                  <td>{list.id}</td>
                  <Link to={"/detail/" + list.id}>
                    <td>{list.title}</td>
                  </Link>
                  <td>{list.writer}</td>
                </tr>
              </>;
            })} */}
            <tr>
              <td>1</td>
              <td>
                <NavLink
                  style={{
                    color: "black",
                  }}
                  to="/detail/1"
                >
                  title1
                </NavLink>
              </td>
              <td>인서</td>
            </tr>
            <tr>
              <td>2</td>
              <td>title2</td>
              <td>재현</td>
            </tr>
            <tr>
              <td>1</td>
              <td>title1</td>
              <td>인서</td>
            </tr>
            <tr>
              <td>2</td>
              <td>title2</td>
              <td>재현</td>
            </tr>
          </tbody>
        </table>

        <Link to="/write">
          <button onClick={onWriteClick}>글 쓰기</button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Home;

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

  table {
    padding: 20px;
    margin: 10px;
    width: 90%;
    border: 1px solid #ababab;
    border-collapse: collapse;

    th,
    td {
      text-align: center;
      border: 1px solid #ababab;
      padding: 5px;

      &:first-child {
        width: 15%;
      }
      &:last-child {
        width: 15%;
      }
    }
  }
`;
