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
      <AsmaulHusnaList listSurat={asmaul_husna} type={"quran"} />
     <Footer/>
    </Layout>
  );
};

export default AsmaulHusnaPage;
