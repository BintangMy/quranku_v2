import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import AsmaulHusnaPage from "../page/AsmaulHusnaPage";
import DetailSurah from "../page/DetailSurah";
import TafsirPage from "../page/TafsirPage";
import DetailTafsir from "../page/DetailTafsir";
import DoaPage from "../page/DoaPage";
import DetailDoa from "../page/DetailDoa";
import JadwalSholat from "../page/JadwalSholat";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

const surahElement = isMobile ? <DetailSurah /> : <HomePage />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/tafsir",
    element: <TafsirPage />
  },
  {
    path: "/doa",
    element: <DoaPage />
  },
  {
    path: "/asmaul-husna",
    element: <AsmaulHusnaPage />
  },
  {
    path: "/jadwal",
    element: <JadwalSholat />
  },
  {
    path: "/surah/:id",
    element: surahElement
  },
  {
    path: "/tafsir/:id",
    element: <DetailTafsir />
  },
  {
    path: "/doa/:id",
    element: <DetailDoa />
  }
]);

export default router;
