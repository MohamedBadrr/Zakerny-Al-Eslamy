import React, { useEffect, useState } from "react";
import "../Quran/Quran.css";
import PagesHeader from "../Header/PagesHeader";
import bsmalla from "../../imgs/basmalah.png";
import axios from "axios";

const AyatElsour = () => {
  const [surahs, setsurahs] = useState({
    loading: true,
    result: [],
    err: null,
    reload: 1,
  });

  useEffect(() => {
    axios
      .get("https://api.alquran.cloud/v1/meta")
      .then((resp) => {
        setsurahs({
          ...surahs,
          result: resp.data.data.surahs.references,
          loading: false,
        });
        console.log(resp.data.data.surahs.references);
      })
      .catch((err) => {
        setsurahs({
          ...surahs,
          loading: false,
          err: "some thing went wrong ,please try again later",
        });
      });
  }, [surahs.reload]);

  const [auatSoura, setAuautsoura] = useState({
    loading: true,
    ayat: [],
    err: null,
    reload: 1,
  });
  const englishToArabic = (number) => {
    const englishDigits = /\d/g;
    const arabicDigits = {
      0: "٠",
      1: "١",
      2: "٢",
      3: "٣",
      4: "٤",
      5: "٥",
      6: "٦",
      7: "٧",
      8: "٨",
      9: "٩",
    };
    return number.replace(englishDigits, (match) => arabicDigits[match]);
  };
  const [showayatbox, setShowayatbox] = useState(true);
  return (
    <>
      <PagesHeader />
      <section id="SOWARelQURAN">
        <div className="suwar-contanier ">
          <div className="container suwarwithayats">
            <div className="quran-title mb-4 ">
              <h3 className="mt-3 mb-3 text-center">
                الـــــقُـــــرْآنِ الـــــــكَــــــرِيــــــمِ
              </h3>
              <div className="line-1 "></div>
              <div className="line-2 "></div>
            </div>
            <div className="ayat">
              {auatSoura.ayat ? (
                <>
                  <div className="bsmelaah text-center">
                    <p>
                      <i
                        class="fa-regular fa-rectangle-xmark"
                        onClick={() => {
                          setShowayatbox(false);
                        }}
                      ></i>
                    </p>
                    <img src={bsmalla} alt="" />
                  </div>{" "}
                  {auatSoura.ayat.map((aya) => {
                    const convertNumber = aya.number.inSurah.toString();
                    const numberofAya = englishToArabic(convertNumber);
                    return (
                      <>
                        <span className="oneaya">
                          <span className="text-aya">aya</span>
                          <span className="number-aya speColor"> (rakm)</span>
                        </span>
                      </>
                    );
                  })}
                </>
              ) : (
                <div className="text-center spinnerContainer">
                  <i class="fa-solid fa-spinner fa-spin "></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AyatElsour;
