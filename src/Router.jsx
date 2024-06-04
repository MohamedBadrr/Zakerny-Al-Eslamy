import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Ahadith, { Ahadith2withoutheader } from "./Components/Ahadith/Ahadith";
import Quran from "./Components/Quran/Quran";
import AyatElsour from "./Components/AyatElsour/AyatElsour";
import ListenToQuran from "./Components/ListenToQuran/ListenToQuran";
import Reader from "./Components/Reader/Reader";
import MawakitElSalah, {
  MawakitElSalahWithHeader,
} from "./Components/MawakitElSalah/MawakitElSalah";
import Contactus from "./Components/Contactus/Contactus";
import HasnElmoslem from "./Components/HasnElmoslem/HasnElmoslem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quran",
    element: <Quran />,
  },
  {
    path: "/ahadith",
    element: <Ahadith />,
  },
  {
    path: "/ahadithwithoutHeader",
    element: <Ahadith2withoutheader />,
  },
  {
    path: "/mawakitelsalahwithheader",
    element: <MawakitElSalahWithHeader />,
  },
  {
    path: "/contact",
    element: <Contactus />,
  },
  {
    path: "/ayat",
    element: <AyatElsour />,
  },
  {
    path: "/listen",
    element: <ListenToQuran />,
  },
  {
    path: "/reader/:readerId",
    element: <Reader />,
  },
  {
    path: "/hsenelmoslem",
    element: <HasnElmoslem />,
  },
]);
