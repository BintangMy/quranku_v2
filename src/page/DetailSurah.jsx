import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailSurah } from "../stores/actionCreator/quranActionCreator";
import { FaRegShareSquare } from "react-icons/fa";
import Layout from "../components/Layout";
// import MediumCardSurah from "../components/Card/MediumCardSurah";
import Footer from "../components/footer/Footer";

// MediumCardSurah

// import React from "react";

import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { FiShare2, FiLink2 } from "react-icons/fi";
import { IoPlayOutline, IoSearch } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailSurah = () => {
  const { oneSurah } = useSelector((state) => state.quran);
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(true);
  const { id = 1 } = useParams();

  useEffect(() => {
    dispatch(fetchDetailSurah(id)).then(() => isLoading(false));
  }, [dispatch, id]);

  const notify = () =>
    toast.success("Link berhasil di salin", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const copyUrlToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    notify();
  };

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
    <>
      {/* <Layout rightSidebar={true}> */}
      <div className="mx-4 md:mx-0">
        <div className="mb-10 container mx-auto font-quicksand">
          <div className="lg:mx-16 my-3 flex flex-col h-full p-4 bg-primary shadow-none rounded-xl bg-gray-600  transition duration-1000 cursor-pointer text-white">
            <div className="head flex justify-between items-center">
              <div className="surah-name">
                <div className="text-3xl">
                  {oneSurah.namaLatin} - {oneSurah.nama}
                </div>
                <div>
                  {oneSurah.arti} - {oneSurah.jumlahAyat} ayat -{" "}
                  {oneSurah.tempatTurun}
                </div>
              </div>
              <div className="surah-number">
                <div class="relative flex items-center justify-center text-white row-start-1 row-end-3">
                  <svg
                    width="28.5"
                    height="32.25"
                    viewBox="0 0 38 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3036 2.10426C18.0868 0.850113 19.9132 0.850113 20.6964 2.10426L24.5063 8.20509C25.2111 9.33361 26.4309 10.0378 27.7606 10.0839L34.949 10.333C36.4267 10.3842 37.3399 11.9659 36.6454 13.2712L33.2669 19.6212C32.642 20.7958 32.642 22.2042 33.2669 23.3788L36.6454 29.7288C37.3399 31.0341 36.4267 32.6158 34.949 32.667L27.7606 32.9161C26.4309 32.9622 25.2111 33.6664 24.5063 34.7949L20.6964 40.8957C19.9132 42.1499 18.0868 42.1499 17.3036 40.8957L13.4937 34.7949C12.7889 33.6664 11.5691 32.9622 10.2394 32.9161L3.05099 32.667C1.57325 32.6158 0.660093 31.0341 1.35461 29.7288L4.7331 23.3788C5.35804 22.2042 5.35805 20.7958 4.7331 19.6212L1.35461 13.2712C0.660093 11.9659 1.57325 10.3842 3.05099 10.333L10.2394 10.0839C11.5691 10.0378 12.7889 9.33361 13.4937 8.20509L17.3036 2.10426Z"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span class="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm">
                    1
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 md:gap-6 mt-6 text-[#00957b]">
              <select className="w-6/12 p-2 rounded-md bg-gray-900 ">
                <option>Pilih Qori</option>
                <option>Abdullah Al Juhany</option>
                <option>Abdullah Muhsin Al Qasim</option>
                <option>Abdurrahman as Sudais</option>
                <option>Ibrahim Al Dossari</option>
                <option>Mishari Rashid Al Afasi</option>
              </select>
              <div className="flex justify-between items-center w-6/12 p-2 rounded-md bg-gray-900 ">
                <p>Tafsir</p>
                <FaRegShareSquare />
              </div>
            </div>
          </div>

          {oneSurah.namaLatin !== "Al-Fatihah" ? (
            <div className="font-arabic text-2xl lg:text-3xl items-center text-center">
              بِسْـــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
            </div>
          ) : (
            ""
          )}
        </div>

        {oneSurah.ayat.map((oneAyat) => {
          return (
            <div className="lg:mx-16 my-3 flex flex-col h-full p-4 bg-primary shadow-none rounded-xl bg-gray-600  transition duration-1000  text-white">
              <div className="relative items-start justify-between ">
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
                <div className="text-[#00957b]">
                  {oneSurah.nomor} : {oneAyat.nomorAyat}
                </div>

                <p className="font-arabic text-2xl font-medium text-secondary  text-right ml-10 mb-5 ">
                  {oneAyat.teksArab}
                </p>
              </div>
              <div className="flex items-end justify-between font-quicksand">
                <div>
                  <h2 className="font-medium tracking-wide text-sm text-[#00957b] my-1">
                    {oneAyat.teksLatin}
                  </h2>
                  <p className="text-sm font-medium mt-1 ">
                    {oneAyat.teksIndonesia}
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] my-4 bg-slate-100"></div>
              <div className="icons ml-4 my-2 flex text-center items-center gap-5 md:gap-10 text-xl">
                <FaRegHeart className="cursor-pointer" />
                <FaRegBookmark className="cursor-pointer" />
                <FiLink2
                  className="cursor-pointer"
                  onClick={copyUrlToClipboard}
                />
                <IoPlayOutline className="cursor-pointer" />
                <IoSearch className="cursor-pointer" />
              </div>
            </div>
          );
        })}
        {/* <Footer /> */}
      </div>
      {/* </Layout> */}
    </>
  );
};

export default DetailSurah;
