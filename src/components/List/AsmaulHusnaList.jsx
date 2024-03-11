import React, { useCallback } from "react";
import MediumCardAsmaulHusna from "../Card/MediumCardAsmaulHusna";
import LargeCardAsmaulHusna from "../Card/LargeCardAsmaulHusna";
import cls from "classnames";

const asmaulHusnaList = ({ listSurat ,type }) => {
  const mySurah = "grid";
  // const [mySurah] = useContext("grid");

  return (
    <div
      className={cls("grid lg:px-16 :px-2 gap-4 md:gap-x-5 md:gap-y-6", {
        "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6":
          mySurah === "list",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4":
          mySurah === "grid",
      })}
    >
      {mySurah === "list" && (
        <>
          <MediumCardAsmaulHusna />
        </>
      )}
      {mySurah === "grid" && (
        <>
          {listSurat.map((el) => {
            return <LargeCardAsmaulHusna oneAsnaulHusna={el} type={type}/>;
          })}
        </>
      )}
    </div>
  );
};

export default asmaulHusnaList;
