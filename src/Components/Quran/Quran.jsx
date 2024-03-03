import React, { useEffect, useState } from 'react';
import "../Quran/Quran.css";
import { Link, Navigate } from 'react-router-dom';
import PagesHeader from '../Header/PagesHeader';
import bsmalla from "../../imgs/basmalah.png"
import axios from 'axios';
import Footer from '../Footer/Footer';


const Quran = () => {
  const sowrList = [
    " سورة الفاتحة",
" سورة البقرة",
" سورة آل عمران",
"سورة النساء",
"سورةالمائدة",
"سورة الأنعام",
"سورة الأعراف",
"سورة الأنفال",
"سورة التوبة",
"سورة يونس",
"سورة هود",
"سورة يوسف",
"سورة الرعد",
"سورة إبراهيم",
"سورة الحجر",
"سورة النحل",
"سورة الإسراء",
"سورة الكهف",
"سورة مريم",
"سورة طه",
"سورة الأنبياء",
"سورة الحج",
"اسورة لمؤمنون",
"سورة النور",
"سورة الفرقان",
"سورة الشعراء",
"سورة النمل",
"سورة القصص",
"سورة العنكبوت",
"سورة الروم",
"سورة لقمان",
"سورة السجدة",
"سورة الأحزاب",
"سورة سبإ",
"سورة فاطر",
"سورة يس",
"سورة الصافات",
"سورة ص",
"سورة الزمر",
"سورة غافر",
"سورة فصلت",
"سورة الشورى",
"سورة الزخرف",
"سورة الدخان",
"سورة الجاثية",
"سورة الأحقاف",
"سورة محمد",
"سورة الفتح",
"سورة الحجرات",
"سورة ق",
"سورة الذاريات",
"سورة الطور",
"سورة النجم",
"سورة القمر",
"سورة الرحمن",
"سورة الواقعة",
"سورة الحديد",
"سورة المجادلة",
"سورة الحشر",
"سورة الممتحنة",
"سورة الصف",
"سورة الجمعة",
"سورة المنافقون",
"سورة التغابن",
"سورة الطلاق",
"سورة التحريم",
"سورة الملك",
"سورة القلم",
"سورة الحاقة",
"سورة المعارج",
"سورة نوح",
"سورة الجن",
"سورة المزمل",
"سورة المدثر",
"سورة القيامة",
"سورة الإنسان",
"سورة المرسلات",
"سورة النبأ",
"سورة النازعات",
"سورة عبس",
"سورة التكوير",
"سورة الإنفطار",
"سورة المطففين",
"سورة الإنشقاق",
"سورة البروج",
"سورة الطارق",
"سورة الأعلى",
"سورة الغاشية",
"سورة الفجر",
"سورة البلد",
"سورة الشمس",
"سورة الليل",
"سورة الضحى",
"سورة الشرح",
"سورة التين",
"سورة العلق",
"سورة القدر",
"سورة البينة",
"سورة الزلزلة",
"سورة العاديات",
"سورة القارعة",
"سورة التكاثر",
"سورة العصر",
"سورة الهمزة",
"سورة الفيل",
"سورة قريش",
"سورة الماعون",
"سورة الكوثر",
"سورة الكافرون",
"سورة النصر",
"سورة المسد",
"سورة الإخلاص",
"سورة الفلق",
"سورة الناس",
  ];

  const [surahs , setsurahs ] = useState({
    loading :true,
    result : [],
    err : null,
    reload : 1
  })

  useEffect(()=>{
    axios.get("https://api.alquran.cloud/v1/meta")
      .then((resp) => {
        setsurahs({ ...surahs, result : resp.data.data.surahs.references , loading:false});
    })
    .catch((err)=>{
      setsurahs({...surahs,loading:false , err:"some thing went wrong ,please try again later"});
  });
  },[surahs.reload]);
  
  const [auatSoura , setAuautsoura] = useState({
    loading :false,
    ayat : [],
    err : null,
    reload : 1
  })

  const getAyat=(id)=>{
    setAuautsoura({ ...auatSoura, loading: true }); 
    axios.get("https://api.quran.gading.dev/surah/" + id)
      .then((res) => {
        setAuautsoura({ ...auatSoura, ayat: res.data.data.verses, loading: false });
      })
      .catch((err) => {
        console.log("error");
        setAduioAyat({ ...auatSoura, loading: false, err: "some thing went wrong, please try again later" });
      });
  }
  
  const englishToArabic =(number) => {
    const englishDigits = /\d/g;
    const arabicDigits = {
      0: "٠",1: "١",2: "٢",3: "٣",4: "٤",5: "٥", 6: "٦",7: "٧",8: "٨",9: "٩",
    };
    return number.replace(englishDigits, (match) => arabicDigits[match]);
  };



  const[showayatbox,setShowayatbox]=useState(false);
  const[showsoundbox,setShowsoundbox]=useState(false);
  

  const[audioAyat , setAduioAyat]=useState({
    loading :false,
    soundAya : [],
    err : null,
    reload : 1,
    urlSound:'',
  })
  const[soundLink,setSoundlink]=useState("");
  const getSoundAyat=async(id)=>{
    setAduioAyat({ ...audioAyat, loading: true }); // Set loading to true first
   await axios.get("https://www.mp3quran.net/api/v3/reciters?language=ar")
      .then((res) => {
        setAduioAyat({ ...audioAyat, soundAya: res.data, loading: false , urlSound:res.data.reciters[8].moshaf[1].server });
      })
      .catch((err) => {
        console.log("error");
        setAduioAyat({ ...audioAyat, loading: false, err: "some thing went wrong, please try again later" });
      });

      if(id>=0 && id <= 9 ) 
      {
        setSoundlink("https://server8.mp3quran.net/bna/"+`00${id}.mp3`);
        
      }
      else if (id>=10 && id <=99){
        setSoundlink("https://server8.mp3quran.net/bna/"+`0${id}.mp3`);
        
        
      }
      else {
        setSoundlink("https://server8.mp3quran.net/bna/"+`${id}.mp3`);
        
      }
  }


  const [searchValue, setSearchValue] = useState("");
  const [searchSowrList, setSearchSowrList]=useState({
      loading:false,
      results:[],
      err:"",
      reload:1
  })


  const searchSowr = () => {
    setSearchSowrList({...searchSowrList,loading:true})
    if (!surahs.result || !surahs.result.length) {
      return; 
    }
    const delay = 100; // Delay in milliseconds (adjust as needed)
    setTimeout(() => {
      const filteredReaders = sowrList.filter((sora) =>
        sora.includes(searchValue)
        );
        // console.log(filteredReaders);
      setSearchSowrList({ ...searchSowrList, results: filteredReaders ,loading:false  });
    //   console.log(searchReadersList.results);
    }, delay);
  };
  
  useEffect(() => {
    searchSowr();
  }, [searchValue]);



  return (
   <div>
     <>
    <PagesHeader />
    <section id='SOWARelQURAN'>
        <div className='suwar-contanier '>
          <div className='container suwarwithayats'>
            <div className='quran-title mb-4 '>
            <h3 className='mt-3 mb-3 text-center'>الـــــقُـــــرْآنِ الـــــــكَــــــرِيــــــمِ</h3>
            <div className='line-1 '></div>
            <div className='line-2 '></div>
            </div>

            <div class="form-search m-auto mb-4">
                    <input type="text" className="input-search w-100" id="exampleInputEmail1" 
                    value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}    placeholder="ادخــــل اســــم الــــســــورة....."/>
                    <button  class="button-search">بحث</button>
            </div>


            {showsoundbox&&((<>
            {
              (!audioAyat.loading && soundLink!="")?<>
              <div className='surahSound'>  
            <i class="fa-regular fa-rectangle-xmark closeSound" onClick={()=>{setShowsoundbox(false);
                  }}></i>
              <audio src={soundLink} controls autoPlay></audio>
            </div>
              </>:<>
              <div className='text-center'>
            <i class="fa-solid fa-spinner fa-spin loadingSound"></i>
          </div>
              </>
            }
            </>))}
          {showayatbox&&(
            <div className='ayat'>
                { (!auatSoura.loading)?
                <>
                  <div className='bsmelaah text-center'>
                  <p><i class="fa-regular fa-rectangle-xmark" onClick={()=>{setShowayatbox(false);
                  setAuautsoura({...auatSoura,ayat:[] ,loading:true });}}></i></p>
                  <img src={bsmalla} alt=""/>
            </div>  {auatSoura.ayat.map((aya)=>{
              
              const convertNumber = aya.number.inSurah.toString()
              const numberofAya = englishToArabic(convertNumber);
              return(
                <>
                <span className='oneaya'>
                  <span className='text-aya'>{aya.text.arab}</span>
                  <span className='number-aya speColor'> ({numberofAya})</span>
                </span>
                </>
              )
                })}
            </>
            :
          <div className='text-center spinnerContainer'>
            <i class="fa-solid fa-spinner fa-spin"></i>
          </div>}
          </div>)
          }
            <div className='suarhscontainer '>
            {
                              (!searchSowrList.loading)?<>
                              {
                                  ((searchSowrList.results).length==0)?
                                  <>
                                              <>
                                              <div className='reader reader-notfound' >
                                                  <h2 className=''>لا يوجد ســــوره بهذا الاســــم </h2>
                                              </div>
                                              </>
                                  </>
                                  :
                                  <>
                                  {
                                      searchSowrList.results.map((sora,index)=>{
                                          return(
                                              <>
                        <div className='surah'>
                              <p className='mt-1 name-surah'>{sora}</p>
                        {sora.revelationType==="Meccan"?<p className='loon mb-1'>مكية</p>:<p className='loon mb-1'>مدنية</p>}
                        
                        <div className='surah-icons'>
                        <a href="#SOWARelQURAN" title='قراءة السورة'><i class="fa-brands fa-readme read-icon " onClick={()=>{getAyat(((sowrList.indexOf(sora))+1));  
                        setShowayatbox(true)}}></i></a>
                        <a href="#SOWARelQURAN" title='استمع الي الصورة بصوت الشيخ محمود علي البنا'><i class="fa-solid fa-circle-play listen-icon " onClick={()=>{getSoundAyat(((sowrList.indexOf(sora))+1));
                          setShowsoundbox(true);}}></i></a>
                        </div>
                      </div>
                                              </>
                                          )
                                  })
                                  }
                                  </>
                              }
                              </>
                              :<>
                              {
                                  (!surahs.loading)?<>
                                  {
                                      surahs.result.map((surah,index)=>{
                                        return(
                                          <div className='surah'>
                                      <p className='mt-1 name-surah'>{sowrList[index]}</p>
                                      {surah.revelationType==="Meccan"?<p className='loon mb-1'>مكية</p>:<p className='loon mb-1'>مدنية</p>}
                                      
                                      <div className='surah-icons'>
                                      <a href="#SOWARelQURAN" title='قراءة السورة'><i class="fa-brands fa-readme read-icon " onClick={()=>{getAyat(surah.number);
                                      setShowayatbox(true)}}></i></a>
                                      <a href="#SOWARelQURAN" title='استمع الي الصورة بصوت الشيخ محمود علي البنا'><i class="fa-solid fa-circle-play listen-icon " onClick={()=>{ getSoundAyat(surah.number);
                                        setShowsoundbox(true);}}></i></a>
                                      </div>
                                    </div>
                                        )
                                      })
                                  }
                                  </>:<>
                                  <div className='text-center'>
                                          <i class="fa-solid fa-spinner fa-5x fa-spin loadingSound"></i>
                                  </div>
                                  </>
                              }

                              </>


              
            }
            </div>
            <button className='up-button'><a href="#SOWARelQURAN"><i class="fa-solid fa-chevron-up"></i></a></button>
          </div>
        </div>
    </section>
    
    </>

    <Footer />
    </div>
  );
}

export default Quran;
