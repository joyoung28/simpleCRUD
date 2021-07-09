import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const DetailContainer = styled.div`
  width: 800px;
  height: 800px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrap = styled.div`
  margin: 10px;
  font-size: 30px;
`;

export const ImgWrap = styled.div`
  margin-top: 10px;
`;

export const WriteWrap = styled.div`
  margin-top: 20px;
  width: 600px;
  height: 200px;
  font-size: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 100px;
  margin-bottom: 20px;
`;

export const GrayButton = styled.button`
  align-self: center;
  width: 100px;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  border-style: none;
  border-radius: 50px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  background-color: white;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: tomato;
    color: white;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.6);
    transform: translateY(-3px);
  }
`;

export const MdButton = styled.button`
  align-self: flex-end;
  background-color: white;
  border-style: none;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 20px;
`;
