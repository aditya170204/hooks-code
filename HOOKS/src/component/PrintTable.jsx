import React, { useEffect, useState } from "react";

const PrintTable = ({ calculateTable }) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    console.log("print table runs!");
    setRows(calculateTable());
  }, [calculateTable]);

  return rows.map((rows, index) => {
    return <p key={index}>{rows}</p>;
  });
};

export default PrintTable;
