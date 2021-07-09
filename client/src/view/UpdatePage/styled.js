import styled from "styled-components";

export const WriteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WriteForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  border: 1px solid;
`;

export const FontWrap = styled.div`
  width: 200px;
  height: 50px;
  margin-top: 20px;
  font-size: 30px;
  text-align: center;
`;

export const InputWrap = styled.div`
  width: 550px;
  height: 500px;
`;

export const TitleInput = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  margin-top: 20px;
`;

export const TextInput = styled.textarea`
  width: 500px;
  height: 300px;
  outline: none;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PostButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 100px;
  margin-bottom: 20px;
`;
