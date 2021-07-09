import React from "react";
import { DataItemBox } from "./styled";

const DataItem = ({ info, openDetailModal }) => {
  return (
    <>
      <DataItemBox onClick={() => openDetailModal(info)}>
        <img
          src={`http://localhost:5000/${info.filePath}`}
          alt="음식사진"
          width="170"
          height="200"
        />
      </DataItemBox>
    </>
  );
};

export default DataItem;
