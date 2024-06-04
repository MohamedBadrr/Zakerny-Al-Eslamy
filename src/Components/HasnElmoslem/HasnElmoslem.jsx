import "../HasnElmoslem/HasnElmoslem.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PagesHeader from "../Header/PagesHeader";
import Footer from "../Footer/Footer";
const HasnElmoslem = () => {
  const [azkar, setAzkar] = useState({
    loading: false,
    results: [],
    err: "",
    reload: 1,
  });
  useEffect(() => {
    setAzkar({ ...azkar, loading: true });
    axios
      .get("https://www.hisnmuslim.com/api/ar/husn_ar.json")
      .then((resp) => {
        setAzkar({ ...azkar, loading: false, results: resp.data.العربية });
      })
      .catch((err) => {
        setAzkar({
          ...azkar,
          loading: false,
          err: "some thing went wrong ,please try again later",
        });
      });
  }, [azkar.reload]);

  const [searchValue, setSearchValue] = useState("");
  const [searchAzkarList, setSearchAzkarsList] = useState({
    loading: false,
    results: [],
    err: "",
    reload: 1,
  });

  const searchReaders = () => {
    setSearchAzkarsList({ ...searchAzkarList, loading: true });
    if (!azkar.results || !azkar.results.length) {
      return;
    }
    const delay = 100;
    setTimeout(() => {
      const filteredReaders = azkar.results.filter((zkr) =>
        zkr.TITLE.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchAzkarsList({
        ...searchAzkarList,
        results: filteredReaders,
        loading: false,
      });
    }, delay);
  };

  useEffect(() => {
    searchReaders();
  }, [searchValue]);

  const [titleZkr, setTitleZkr] = useState("");
  const [onezkar, setOnezkar] = useState({
    loading: false,
    results: [],
    err: "",
    reload: 1,
  });

  const zkrWithId = async (id) => {
    setOnezkar({ ...onezkar, loading: true });
    await axios
      .get(`https://www.hisnmuslim.com/api/ar/${id}.json`)
      .then((resp) => {
        setOnezkar({
          ...onezkar,
          loading: false,
          results: Object.values(resp.data)[0],
        });
      })
      .catch((err) => {});
  };

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

  const [showboxcontent, setShowboxcont] = useState(false);
  const [showSoundboxcontent, setShowSoundboxcont] = useState(false);

  const playSound = () => {
    setShowSoundboxcont(true);
  };
  const boxcontent = () => {
    setShowboxcont(true);
  };

  return (
    <>
      <div>
        <PagesHeader />

        <div className="azkar-contanier" id="LISTAZKAR">
          <div className="title-azkar">
            <div className="text-center">
              <h5> أذكــــــــار من الكــــتــــاب و السُــــــــنة.</h5>
            </div>
            <div className="hasn-title mb-4 ">
              <h3 className="mt-3 mb-3 text-center">
                حـــــصـــــن المـــــســـــلـــــم{" "}
              </h3>
              <div className="line-1 "></div>
              <div className="line-2 "></div>
            </div>
          </div>
          <div className="container suwarwithayats ">
            <form className="mt-4 text-center">
              <div class="form-search m-auto">
                <input
                  type="text"
                  className="input-search w-100"
                  id="exampleInputEmail1"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  placeholder="  البـــــحـــــث....."
                />
                <button class="button-search">بحث</button>
              </div>
              <div className="suarhscontainer mt-5">
                {!searchAzkarList.loading ? (
                  <>
                    {searchAzkarList.results.length == 0 ? (
                      <>
                        <>
                          <div className="zkr reader-notfound">
                            <h2 className="">
                              لا يــــوجد ذٍكــــرُ بــــهــــذا الاســــم{" "}
                            </h2>
                          </div>
                        </>
                      </>
                    ) : (
                      <>
                        {searchAzkarList.results.map((zkr, index) => {
                          return (
                            <>
                              <div className="zkr">
                                <a
                                  href="#ZKRR"
                                  onClick={() => {
                                    zkrWithId(zkr.ID);
                                    setTitleZkr(zkr.TITLE);
                                    setShowboxcont(true);
                                  }}
                                >
                                  <h4 className="zkr-title">{zkr.TITLE}</h4>
                                </a>
                              </div>
                            </>
                          );
                        })}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {!azkar.loading ? (
                      <>
                        {azkar.results.map((zkr, index) => {
                          return (
                            <>
                              <div className="zkr">
                                <a
                                  href="#ZKRR"
                                  onClick={() => {
                                    zkrWithId(zkr.ID);
                                    setTitleZkr(zkr.TITLE);
                                    setShowboxcont(true);
                                  }}
                                >
                                  <h4 className="zkr-title">{zkr.TITLE}</h4>
                                </a>
                              </div>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <i class="fa-solid fa-spinner fa-5x fa-spin loadingAzkar"></i>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </form>
          </div>
        </div>

        {showboxcontent && (
          <div className="" id="ZKRR">
            <div className="container oneZkrContainer  p-4">
              <i
                class="closeicon fa-regular fa-rectangle-xmark"
                onClick={() => {
                  setShowboxcont(false);
                  setShowSoundboxcont(false);
                }}
              ></i>
              <div>
                <div className="titlewithclose" onClick={boxcontent}>
                  <h1 className="text-center"> ﴿ {titleZkr} ﴾</h1>
                </div>
                {onezkar.results.map((one) => {
                  const convertNumber = one.REPEAT.toString();
                  const numberofAya = englishToArabic(convertNumber);
                  return (
                    <div className="zkrContent">
                      <p>- {one.ARABIC_TEXT}</p>
                      <div className="soundandrepit">
                        <p className=" text-dark">
                          عدد مرات التكرار :
                          <span className="number">{numberofAya}</span>
                        </p>
                        {!onezkar.loading ? (
                          <>
                            {showSoundboxcontent && (
                              <audio src={one.AUDIO} controls></audio>
                            )}
                          </>
                        ) : (
                          <>
                            <i class="fa-solid fa-spinner fa-spin loadingSound"></i>
                          </>
                        )}
                        <i
                          class="fa-solid fa-circle-play play-icon"
                          onClick={playSound}
                        ></i>
                      </div>
                      <div className="linee"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <button className="up-button">
          <a href="#LISTAZKAR">
            <i class="fa-solid fa-chevron-up"></i>
          </a>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default HasnElmoslem;
