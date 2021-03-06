import React from "react";
import { DataItemBox } from "./styled";

const DataItem = ({ info, openDetailModal }) => {
  return (
    <>
      <DataItemBox onClick={() => openDetailModal(info)}>
        <img
          src={`http://localhost:5000/${info.filePath}`}
          alt="ėėėŽė§"
          width="170"
          height="200"
        />
      </DataItemBox>
    </>
  );
};

export default DataItem;
