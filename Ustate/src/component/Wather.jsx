import React, { useEffect, useState } from "react";

const Wather = () => {
  const url =
    "https://data.mef.gov.kh/api/v1/realtime-api/weather?province=Phnom%20Penh";
  const [wather, setWather] = useState(0);

  useEffect(() => {
    const watherInfor = async () => {
      try {
        const result = await fetch(url);
        const getResult = await result.json();
        console.log(getResult);
      } catch (error) {
        console.log(error);
      }
    };
    watherInfor();
  }, []);

  return null;
};

export default Wather;
