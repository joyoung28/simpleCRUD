import React, { useState, useEffect } from "react";
import DetailModal from "../../components/DetailModal";
import { Link } from "react-router-dom";
import {
  DeleteButton,
  MainContainer,
  TitleWrap,
  MainWrap,
  DataGridWrap,
} from "./styled";
import DataItem from "../../components/DataItem";
import axios from "axios";

const FirstPage = (props) => {
  const [infos, setInfos] = useState([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [modalData, setModalData] = useState("");

  const openDetailModal = (data) => {
    setShowDetailModal(true);
    setModalData(data);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
  };

  useEffect(() => {
    axios.get("/api/getmenu").then((res) => {
      if (res.data.success) {
        setInfos(res.data.menus);
      } else {
        alert("실패");
      }
    });
  }, []);

  const onRemove = (e) => {
    // console.log(e.modalData._id);
    const menuId = e.modalData._id;
    axios.delete("/api/" + menuId).then((res) => {
      if (res.data.success) {
        alert("성공");
        window.location.replace("/"); //자동새로고침
      } else {
        console.log("실패");
      }
    });
  };

  const showData = infos.map((info) => (
    <DataItem key={info._id} info={info} openDetailModal={openDetailModal} />
  ));
  return (
    <MainContainer>
      <MainWrap>
        <TitleWrap>리액트 잊지말자</TitleWrap>
        <DataGridWrap>{showData}</DataGridWrap>
        <DetailModal
          onRemove={onRemove}
          modalData={modalData}
          closeDetailModal={closeDetailModal}
          showDetailModal={showDetailModal}
        />
        <Link to="/Write">
          <DeleteButton>추가</DeleteButton>
        </Link>
      </MainWrap>
    </MainContainer>
  );
};

export default FirstPage;
