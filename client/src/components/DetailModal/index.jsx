import React from "react";
import { Link } from "react-router-dom";
import { MdClear } from "react-icons/md";
import {
  DetailContainer,
  TitleWrap,
  ImgWrap,
  WriteWrap,
  GrayButton,
  MdButton,
  Modal,
  ButtonWrap,
} from "./styled";

const DetailModal = ({
  showDetailModal,
  modalData,
  closeDetailModal,
  onRemove,
  history,
}) => {
  return (
    <>
      {showDetailModal && (
        <Modal>
          <DetailContainer>
            <MdButton>
              <MdClear onClick={closeDetailModal} />
            </MdButton>
            <TitleWrap>{modalData.title}</TitleWrap>
            <ImgWrap>
              <img
                src={`http://localhost:5000/${modalData.filePath}`}
                alt="음식사진"
                width="600"
                height="400"
              />
            </ImgWrap>
            <WriteWrap>{modalData.describtion}</WriteWrap>
            <ButtonWrap>
              <Link
                to={{
                  pathname: `/Update/${modalData._id}`,
                  state: {
                    _id: modalData._id,
                    title: modalData.title,
                    describtion: modalData.describtion,
                    filePath: modalData.filePath,
                  },
                }}
              >
                <GrayButton>수정</GrayButton>
              </Link>
              <GrayButton onClick={() => onRemove({ modalData })}>
                삭제
              </GrayButton>
            </ButtonWrap>
          </DetailContainer>
        </Modal>
      )}
    </>
  );
};

export default DetailModal;
