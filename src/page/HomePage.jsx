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
    <Layout rightSidebar={true} title={""}>
      <div className=" overflow-y-hidden md:flex">
        <div className="lg:w-4/12 md:w-7/12 h-[100vh] overflow-scroll md:pb-[100px]">
          <SurahList listSurat={surah} type={"quran"} />
        </div>
        <div className="hidden overflow-scroll pb-44 h-[100vh] md:block lg:block lg:w-8/12 md:w-5/12 ">
          <DetailSurah />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default HomePage;
