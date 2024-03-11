import React, { useCallback } from "react";
import MediumCardSurah from "../Card/MediumCardSurah";
import LargeCardSurah from "../Card/LargeCardSurah";
import cls from "classnames";

const SurahList = ({ listSurat ,type }) => {
  const mySurah = "grid";
  // const [mySurah] = useContext("grid");

  return (
    <div
      className={cls("grid lg:px-4 :px-2 gap-4 md:gap-x-5 md:gap-y-6")}
    >
      {mySurah === "list" && (
        <>
          <MediumCardSurah />
        </>
      )}
      {mySurah === "grid" && (
        <>
          {listSurat.map((el) => {
            return <LargeCardSurah oneSurah={el} type={type}/>;
          })}
        </>
      )}
    </div>
  );
};

export default SurahList;
