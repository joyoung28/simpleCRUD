import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 600px;
  height: 1100px;
  border: 1px solid;
  background-color: white;
`;

export const TitleWrap = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
`;

export const DeleteButton = styled.button`
  width: 200px;
  height: 100px;
  cursor: pointer;
  border-style: none;
  border-radius: 5px;
  font-size: 30px;
  background-color: e5e5e5;
  color: black;
`;

export const DataGridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 450px;
  height: 760px;
  place-items: center;
`;
