import { Link } from "react-router-dom";
import React from "react";

const LargeCardAsmaulHusna = ({oneAsnaulHusna, type}) => {
  return (
    <Link>
      <div className="flex flex-col h-full p-4 bg-primary shadow-none rounded-xl bg-gray-700  transition duration-1000 cursor-pointer hover:shadow-primary transform hover:-translate-y-2">
        <div className="flex flex-grow items-start justify-between">
          <p className="font-primary text-xs font-bold text-emerald-600 h-6 w-6 flex items-center justify-center rounded-lg bg-emerald-200">
            {oneAsnaulHusna.id}
          </p>
          <div className="flex flex-col items-end">
            <p className="text-xs mb-1 font-primary text-secondary">
              {oneAsnaulHusna.tempatTurun}
            </p>
            {/* <p className="text-xs font-primary text-emerald-400 mt-1">
              {oneAsnaulHusna.jumlahAyat} ayat
            </p> */}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-primary tracking-wide text-sm font-bold mt-2 mb-1">
              {oneAsnaulHusna.indo}
            </h2>
            <p className="font-primary text-secondary text-xs">
             {oneAsnaulHusna.latin}
            </p>
          </div>
          <p className="font-arabic text-2xl">{oneAsnaulHusna.arab}</p>
        </div>
      </div>
    </Link>
  );
};

export default LargeCardAsmaulHusna;
