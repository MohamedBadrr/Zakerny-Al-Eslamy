import React, { useEffect, useState } from "react";
import "../Reader/Reader.css";
import { useParams } from "react-router-dom";
import PagesHeader from "../Header/PagesHeader";
import axios from "axios";
import Footer from "../Footer/Footer";

const Reader = () => {
  const { readerId } = useParams();
  const [reader, Setreader] = useState({
    loading: false,
    results: [],
    err: "",
    reload: 1,
  });
  const sowr = [
    "١ - سورة الفاتحة",
    "٢ - سورة البقرة",
    "٣ - سورة آل عمران",
    "٤ - سورة النساء",
    "٥ - سورة المائدة",
    "٦ - سورة الأنعام",
    "٧ - سورة الأعراف",
    "٨ - سورة الأنفال",
    "٩ - سورة التوبة",
    "١٠ - سورة يونس",
    "١١ - سورة هود",
    "١٢ - سورة يوسف",
    "١٣ - سورة الرعد",
    "١٤ - سورة إبراهيم",
    "١٥ - سورة الحجر",
    "١٦ - سورة النحل",
    "١٧ - سورة الإسراء",
    "١٨ - سورة الكهف",
    "١٩ - سورة مريم",
    "٢٠ -سورة طه",
    "٢١ - سورة الأنبياء",
    "٢٢ - سورة الحج",
    "٢٣ - اسورة لمؤمنون",
    "٢٤ - سورة النور",
    "٢٥ - سورة الفرقان",
    "٢٦ - سورة الشعراء",
    "٢٧ - سورة النمل",
    "٢٨ - سورة القصص",
    "٢٩ - سورة العنكبوت",
    "٣٠ - سورة الروم",
    "٣١ - سورة لقمان",
    "٣٢ - سورة السجدة",
    "٣٣ - سورة الأحزاب",
    "٣٤ - سورة سبإ",
    "٣٥ - سورة فاطر",
    "٣٦ - سورة يس",
    "٣٧ - سورة الصافات",
    "٣٨ - سورة ص",
    "٣٩ - سورة الزمر",
    "٤٠ - سورة غافر",
    "٤١ - سورة فصلت",
    "٤٢ - سورة الشورى",
    "٤٣ - سورة الزخرف",
    "٤٤ - سورة الدخان",
    "٤٥ - سورة الجاثية",
    "٤٦ - سورة الأحقاف",
    "٤٧ - سورة محمد",
    "٤٨ - سورة الفتح",
    "٤٩ - سورة الحجرات",
    "٥٠ - سورة ق",
    "٥١ - سورة الذاريات",
    "٥٢ - سورة الطور",
    "٥٣ - سورة النجم",
    "٥٤ - سورة القمر",
    "٥٥ - سورة الرحمن",
    "٥٦ - سورة الواقعة",
    "٥٧ - سورة الحديد",
    "٥٨ - سورة المجادلة",
    "٥٩ - سورة الحشر",
    "٦٠ - سورة الممتحنة",
    "٦١ - سورة الصف",
    "٦٢ - سورة الجمعة",
    "٦٣ - سورة المنافقون",
    "٦٤ - سورة التغابن",
    "٦٥ - سورة الطلاق",
    "٦٦ - سورة التحريم",
    "٦٧ - سورة الملك",
    "٦٨ - سورة القلم",
    "٦٩ - سورة الحاقة",
    "٧٠ - سورة المعارج",
    "٧١ - سورة نوح",
    "٧٢ - سورة الجن",
    "٧٣ - سورة المزمل",
    "٧٤ - سورة المدثر",
    "٧٥ - سورة القيامة",
    "٧٦ - سورة الإنسان",
    "٧٧ - سورة المرسلات",
    "٧٨ - سورة النبأ",
    "٧٩ - سورة النازعات",
    "٨٠ - سورة عبس",
    "٨١ - سورة التكوير",
    "٨٢ - سورة الإنفطار",
    "٨٣ - سورة المطففين",
    "٨٤ - سورة الإنشقاق",
    "٨٥ - سورة البروج",
    "٨٦ - سورة الطارق",
    "٨٧ - سورة الأعلى",
    "٨٨ - سورة الغاشية",
    "٨٩ - سورة الفجر",
    "٩٠ - سورة البلد",
    "٩١ - سورة الشمس",
    "٩٢ - سورة الليل",
    "٩٣ - سورة الضحى",
    "٩٤ - سورة الشرح",
    "٩٥ - سورة التين",
    "٩٦ - سورة العلق",
    "٩٧ - سورة القدر",
    "٩٨ - سورة البينة",
    "٩٩ - سورة الزلزلة",
    "١٠٠ - سورة العاديات",
    "١٠١ - سورة القارعة",
    "١٠٢ - سورة التكاثر",
    "١٠٣ - سورة العصر",
    "١٠٤ - سورة الهمزة",
    "١٠٥ - سورة الفيل",
    "١٠٦ - سورة قريش",
    "١٠٧ - سورة الماعون",
    "١٠٨ - سورة الكوثر",
    "١٠٩ - سورة الكافرون",
    "١١٠ - سورة النصر",
    "١١١ - سورة المسد",
    "١١٢ - سورة الإخلاص",
    "١١٣ - سورة الفلق",
    "١١٤ - سورة الناس",
  ];
  const [showsoundbox, setShowsoundbox] = useState(false);
  const [Linkserver, setLinkserver] = useState("");
  const [baseLink, setBaselink] = useState("");
  const [numberofSuwar, setNumberofSuwar] = useState(0);

  useEffect(() => {
    Setreader({ ...reader, loading: true });
    axios
      .get(
        `https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${readerId}`
      )
      .then((resp) => {
        Setreader({ ...reader, results: resp.data.reciters, loading: false });
        if (resp.data.reciters[0].moshaf[0].name === "حفص عن عاصم - مرتل") {
          setLinkserver(resp.data.reciters[0].moshaf[0].server);
          setBaselink(resp.data.reciters[0].moshaf[0].server);
          setNumberofSuwar(resp.data.reciters[0].moshaf[0].surah_total);
        } else if (
          resp.data.reciters[0].moshaf[1].name === "حفص عن عاصم - مرتل"
        ) {
          setLinkserver(resp.data.reciters[0].moshaf[1].server);
          setBaselink(resp.data.reciters[0].moshaf[1].server);
          setNumberofSuwar(resp.data.reciters[0].moshaf[1].surah_total);
        } else if (
          resp.data.reciters[0].moshaf[2].name === "حفص عن عاصم - مرتل"
        ) {
          setLinkserver(resp.data.reciters[0].moshaf[2].server);
          setBaselink(resp.data.reciters[0].moshaf[2].server);
          setNumberofSuwar(resp.data.reciters[0].moshaf[2].surah_total);
        } else if (
          resp.data.reciters[0].moshaf[3].name === "حفص عن عاصم - مرتل"
        ) {
          setLinkserver(resp.data.reciters[0].moshaf[3].server);
          setBaselink(resp.data.reciters[0].moshaf[3].server);
          setNumberofSuwar(resp.data.reciters[0].moshaf[3].surah_total);
        } else if (
          resp.data.reciters[0].moshaf[4].name === "حفص عن عاصم - مرتل"
        ) {
          setLinkserver(resp.data.reciters[0].moshaf[4].server);
          setBaselink(resp.data.reciters[0].moshaf[4].server);
          setNumberofSuwar(resp.data.reciters[0].moshaf[4].surah_total);
        } else if (
          resp.data.reciters[0].moshaf[5].name === "حفص عن عاصم - مرتل"
        ) {
          setLinkserver(resp.data.reciters[0].moshaf[5].server);
          setBaselink(resp.data.reciters[0].moshaf[5].server);
          setNumberofSuwar(resp.data.reciters[0].moshaf[5].surah_total);
        } else if (
          resp.data.reciters[0].moshaf[6].name === "حفص عن عاصم - مرتل"
        ) {
          setLinkserver(resp.data.reciters[0].moshaf[6].server);
          setBaselink(resp.data.reciters[0].moshaf[6].server);
          setNumberofSuwar(resp.data.reciters[0].moshaf[6].surah_total);
        } else {
          setLinkserver(resp.data.reciters[0].moshaf[0].server);
          setBaselink(resp.data.reciters[0].moshaf[0].server);
          setNumberofSuwar(resp.data.reciters[0].moshaf[0].surah_total);
        }
      })
      .catch((err) => {
        Setreader({
          ...reader,
          loading: false,
          err: "some thing went wrong ,please try again later",
        });
      });
  }, []);

  const getsoraSound = async (id) => {
    if (id >= 0 && id <= 9) {
      setLinkserver(baseLink + `00${id}.mp3`);
      console.log(Linkserver);
    } else if (id >= 10 && id <= 99) {
      setLinkserver(baseLink + `0${id}.mp3`);
      console.log(Linkserver);
    } else {
      setLinkserver(baseLink + `${id}.mp3`);
      console.log(Linkserver);
    }
  };

  const [searchValue, setSearchValue] = useState("");
  const [searchsorasList, setSearchsorasList] = useState({
    loading: false,
    results: [],
    err: "",
    reload: 1,
  });

  function searchSoras() {
    setSearchsorasList({ ...searchsorasList, loading: true });
    if (!sowr || !sowr.length) {
      return;
    }
    const delay = 100;
    setTimeout(() => {
      const filteredsoras = sowr.filter((sora) =>
        sora.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchsorasList({
        ...searchsorasList,
        results: filteredsoras,
        loading: false,
      });
      console.log(searchSoras.results);
    }, delay);
  }
  useEffect(() => {
    searchSoras();
  }, [searchValue]);

  return (
    <>
      <div>
        <PagesHeader />
        <section id="READER">
          <div className="suwar-contanier">
            <div className="title">
              <div className="text-center">
                <h5>
                  {" "}
                  اســــــتــــــمــــــع اَلــــــقُــــــرآن
                  اَلــــــكــــــرِيــــــم بــــــصــــــوت
                  الـــقـــــــــــــــارئ :
                </h5>
              </div>
              <div className="quran-title mb-4 ">
                <h3 className="mt-3 mb-3 text-center">
                  {reader.results.map((reader) => {
                    return <>{reader.name}</>;
                  })}
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
                    placeholder="ادخــــل اســــم الــــســــورة....."
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                  />
                  <button class="button-search">بحث</button>
                </div>
                {showsoundbox && (
                  <>
                    {Linkserver != "" ? (
                      <>
                        <div className="surahSoundReader">
                          <i
                            class="fa-regular fa-rectangle-xmark"
                            onClick={() => {
                              setShowsoundbox(false);
                            }}
                          ></i>
                          <audio src={Linkserver} controls autoPlay></audio>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <i class="fa-solid fa-spinner fa-spin loadingSound"></i>
                        </div>
                      </>
                    )}
                  </>
                )}
                <div className="suarhscontainer mt-3">
                  {!searchsorasList.loading ? (
                    <>
                      {searchsorasList.results.length == 0 ? (
                        <>
                          <>
                            <div className="reader reader-notfound">
                              <h2 className="">لا توجد سورة بهذا الاسم </h2>
                            </div>
                          </>
                        </>
                      ) : (
                        <>
                          {searchsorasList.results.map((sora, index) => {
                            return (
                              <>
                                <h5
                                  className="spesifcsora text-dark"
                                  key={index}
                                >
                                  {sora}
                                  <a href="#READER">
                                    <i
                                      class="fa-solid fa-circle-play listen-icon text-white"
                                      onClick={() => {
                                        getsoraSound(sowr.indexOf(sora) + 1);
                                        setShowsoundbox(true);
                                      }}
                                    ></i>
                                  </a>
                                </h5>
                              </>
                            );
                          })}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {sowr.lenght ? (
                        <>
                          {sowr.map((item, index) => (
                            <h5 className="spesifcsora text-dark" key={index}>
                              {item}
                              <a href="#READER">
                                <i
                                  class="fa-solid fa-circle-play listen-icon text-white"
                                  onClick={() => {
                                    getsoraSound(index + 1);
                                    setShowsoundbox(true);
                                  }}
                                ></i>
                              </a>
                            </h5>
                          ))}
                        </>
                      ) : (
                        <>
                          <div className="text-center">
                            <i class="fa-solid fa-spinner fa-5x fa-spin loadingSound"></i>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
          <button className="up-button">
            <a href="#READER">
              <i class="fa-solid fa-chevron-up"></i>
            </a>
          </button>
        </section>
        <div className="footerinreader">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Reader;
