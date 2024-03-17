import React from "react";
import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from "../Button/Audio";
import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { FiShare2, FiLink2 } from "react-icons/fi";
import { IoPlayOutline, IoSearch } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MediumCardSurah = ({ numberSurah, oneAyat }) => {
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

  return (
    <>
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
            {numberSurah} : {oneAyat.nomorAyat}
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
            <p className="text-sm font-medium mt-1 ">{oneAyat.teksIndonesia}</p>
          </div>
        </div>
        <div className="w-full h-[1px] my-4 bg-slate-100"></div>
        <div className="icons ml-4 my-2 flex text-center items-center gap-5 md:gap-10 text-xl">
          <FaRegHeart className="cursor-pointer" />
          <FaRegBookmark className="cursor-pointer" />
          <FiLink2 className="cursor-pointer" onClick={copyUrlToClipboard} />
          <IoPlayOutline className="cursor-pointer" />
          <AudioPlayerProvider>
              <AudioPlayer file={oneAyat.audio["05"]} />
          </AudioPlayerProvider>
          <IoSearch className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default MediumCardSurah;
