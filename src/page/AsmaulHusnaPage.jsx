import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsmaulHusna } from "../stores/actionCreator/asmaulHusnaActionCreator";
import AsmaulHusnaList from "../components/List/AsmaulHusnaList";
import Layout from "../components/Layout";
import Footer from "../components/footer/Footer";

const AsmaulHusnaPage = () => {
  const [loading, isLoading] = useState(true);
  const { asmaul_husna } = useSelector((state) => state.asmaulHusna);
  console.log(asmaul_husna, '<<<<<< FROM COMPENENT')

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchAsmaulHusna());
    isLoading(false);
  }, []);

  if (loading) {
    return (
      <div class="flex items-center justify-center min-h-screen">
        <div
          style={{ "border-top-color": "transparent" }}
          class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p class="ml-2">Processing...</p>
      </div>
    );
  }

  return (
    <Layout rightSidebar={true} title={"Asmaul Husna"}>

<div className="overflow-y-hidden md:flex md:gap-2 md:rounded-[10px] md:translate-y-[-10px] md:translate-x-[10px]">
        <div className="md:py-4 md:rounded-[10px] bg-slate-900 h-[100vh] md:pb-[100px] overflow-y-auto" style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }} >
          <style>
            {`
              .hidden-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
      <AsmaulHusnaList listSurat={asmaul_husna} type={"quran"} />
        </div>
      </div>
     <Footer/>
    </Layout>
  );
};

export default AsmaulHusnaPage;
