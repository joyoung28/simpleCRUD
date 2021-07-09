import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  WriteContainer,
  WriteForm,
  InputWrap,
  TitleInput,
  TextInput,
  FontWrap,
  PostButtonWrap,
} from "./styled";
import { GrayButton } from "../../components/DetailModal/styled";
import axios from "axios";

const WritePage = (props) => {
  const [title, setTitle] = useState("");
  const [describtion, setDescribtion] = useState("");
  const [filePath, setFilePath] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescribtion = (e) => {
    setDescribtion(e.target.value);
  };

  const onChangeFile = (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    axios.post("/api/uploadfile", formData).then((res) => {
      if (res.data.success) {
        console.log(res.data);

        setFilePath(res.data.url);
      } else {
        alert("실패");
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const variables = {
      title: title,
      describtion: describtion,
      filePath: filePath,
    };
    axios.post("/api/uploadmenu", variables).then((res) => {
      if (res.data.success) {
        alert("업로드 완료");
        setTimeout(() => {
          props.history.push("/");
        }, 1000);
      } else {
        alert("업로드 실패");
      }
    });
  };

  return (
    <WriteContainer>
      <FontWrap>글쓰기</FontWrap>
      <WriteForm onSubmit={onSubmit}>
        <InputWrap>
          <TitleInput
            placeholder="제목"
            name="title"
            value={title}
            onChange={onChangeTitle}
          />
          <TextInput
            placeholder="내용을입력하세요"
            name="describtion"
            value={describtion}
            onChange={onChangeDescribtion}
          />
          <input type="file" name="file" onChange={onChangeFile} />
        </InputWrap>
        <PostButtonWrap>
          <Link to="/">
            <GrayButton>목록</GrayButton>
          </Link>
          <GrayButton type="submit">추가</GrayButton>
        </PostButtonWrap>
      </WriteForm>
    </WriteContainer>
  );
};

export default WritePage;
