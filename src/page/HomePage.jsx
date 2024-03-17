import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSurah } from "../stores/actionCreator/quranActionCreator";
import SurahList from "../components/List/SurahList";
import Layout from "../components/Layout";
import Footer from "../components/footer/Footer";
import DetailSurah from "./DetailSurah";

const HomePage = () => {
  const [loading, isLoading] = useState(true);
  const { surah } = useSelector((state) => state.quran);

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchAllSurah());
    isLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p className="ml-2">Processing...</p>
      </div>
    );
  }

  return (
    <Layout rightSidebar={true} title={""}>
      <div className="overflow-y-hidden md:flex md:gap-2 md:rounded-[10px] md:translate-y-[-10px] md:translate-x-[10px]">
        <div className="lg:w-4/12 md:w-7/12 md:py-4 md:rounded-[10px] bg-slate-900 h-[100vh] md:pb-[100px] overflow-y-auto" style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }} >
          <style>
            {`
              .hidden-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <SurahList listSurat={surah} type={"quran"} className="hidden-scrollbar" />
        </div>
        <div className="hidden overflow-scroll md:py-4 md:rounded-[10px] bg-slate-900 md:pb-[100px] pb-44 h-[100vh] md:block lg:block lg:w-8/12 md:w-5/12 " style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}>
          <DetailSurah />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default HomePage;
