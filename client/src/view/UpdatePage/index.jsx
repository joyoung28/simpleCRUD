import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  WriteContainer,
  WriteForm,
  InputWrap,
  TitleInput,
  TextInput,
  FontWrap,
  PostButtonWrap,
} from "../WritePage/styled";
import { GrayButton } from "../../components/DetailModal/styled";
import axios from "axios";

const UdatePage = ({ location, history }) => {
  const [title, setTitle] = useState(location.state.title);
  const [describtion, setDescribtion] = useState(location.state.describtion);
  const [filePath, setFilePath] = useState(location.state.filePath);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescribtion = (e) => {
    setDescribtion(e.target.value);
  };

  const onChangeFile = (e) => {
    console.log(e.target.files);
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

  const onUpdate = (e) => {
    e.preventDefault();
    console.log(location.state._id);
    const updateId = location.state._id;
    const updateContent = {
      title: title,
      describtion: describtion,
      filePath: filePath,
    };
    axios.put("/api/" + updateId, updateContent).then((res) => {
      if (res.data.success) {
        alert("수정되었습니다.");
        setTimeout(() => {
          history.push("/");
        }, 1000);
      } else {
        alert("수정을 실패했습니다.");
      }
    });
  };

  return (
    <WriteContainer>
      <FontWrap>글쓰기</FontWrap>
      <WriteForm onSubmit={onUpdate}>
        <InputWrap>
          <TitleInput name="title" value={title} onChange={onChangeTitle} />
          <TextInput
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
          <GrayButton type="submit">수정</GrayButton>
        </PostButtonWrap>
      </WriteForm>
    </WriteContainer>
  );
};

export default withRouter(UdatePage);
