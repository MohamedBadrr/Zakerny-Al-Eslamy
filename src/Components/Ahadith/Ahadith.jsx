
import React, { useState, useEffect } from "react";
import PagesHeader from "../Header/PagesHeader";
import "../Ahadith/Ahadith.css";
import Footer from "../Footer/Footer.jsx"
import axios from "axios";


const Ahadith = () => {

    const [index , setIndex] = useState(0)
    const [indexmoslem , setIndexmoslem] = useState(0)
    const [firsthadirh , setFirstHadith] = useState("حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ قَالَ حَدَّثَنَا سُفْيَانُ قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الْأَنْصَارِيُّ قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ عَلَى الْمِنْبَرِقَالَ سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ");
    const [firsthadirhMoslem , setFirstHadithMoslem] = useState(
        " الْأَثَرُ الْمَشْهُورُ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَنْ حَدَّثَ عَنِّي بِحَدِيثٍ يُرَى أَنَّهُ كَذِبٌ فَهُوَ أَحَدُ الْكَاذِبِينَ حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ حَدَّثَنَا وَكِيعٌ عَنْ شُعْبَةَ عَنْ الْحَكَمِ عَنْ عَبْدِ الرَّحْمَنِ بْنِ أَبِي لَيْلَى عَنْ سَمُرَةَ بْنِ جُنْدَبٍ ح و حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ أَيْضًا حَدَّثَنَا وَكِيعٌ عَنْ شُعْبَةَ وَسُفْيَانَ عَنْ حَبِيبٍ عَنْ مَيْمُونِ بْنِ أَبِي شَبِيبٍ عَنْ الْمُغِيرَةِ بْنِ شُعْبَةَ قَالَا قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ذَلِكَ")

    const [bohkary, setBokhary] = useState({
        results: [],
        loading: false,
        err: "",
        reload: 1, 
      });


    


      useEffect(() => { 
        const fetchData = async () => {
          try {
            setBokhary({ ...bohkary, loading: true });
            const response = await axios.get(
              "https://api.hadith.gading.dev/books/bukhari?range=1-300"
            );
            setBokhary({
              ...bohkary, 
              results: response.data.data.hadiths, 
              loading: false,
              err: "" ,
            });
          } catch (error) { 
            setBokhary({ ...bohkary, loading: false, err: "Error fetching data." });
          }
        };
        fetchData();
      }, []); 

      const getHadith=(id)=>{
        if(id==-1){
        setIndex(0);
        setFirstHadith(bohkary.results[0].arab)
        }
        else if (id>300)
        {setFirstHadith(bohkary.results[0].arab)}
        else{
        setFirstHadith(bohkary.results[id].arab)
        }
      }

//  ---------------------------------------------------------------------------------------------
      const [moslem, setMoslem] = useState({
        results: [],
        loading: false,
        err: "",
        reload: 1,
      });


      useEffect(() => { 
        const fetchData = async () => {
          try {
            setMoslem({ ...moslem, loading: true });
            const response = await axios.get(
              "https://api.hadith.gading.dev/books/muslim?range=1-300"
            );
            setMoslem({
              ...moslem, 
              results: response.data.data.hadiths, 
              loading: false,
              err: "" ,
            });
          } catch (error) { 
            setMoslem({ ...moslem, loading: false, err: "Error fetching data." });
          }
        };
        fetchData();
      }, []); 

      const getHadithMoslem=(id)=>{
        if(id==-1){
        setIndexmoslem(0);
        setFirstHadithMoslem(moslem.results[0].arab)
        }
        else if (id>300)
        {setFirstHadithMoslem(moslem.results[0].arab)}
        else{
          setFirstHadithMoslem(moslem.results[id].arab)
        }
      }



    


  return (
    <div>
      <>
    <section id="#Ahadith">
      <PagesHeader />
      <div>
      <>
    <section id="#AhadithWithoutHeader">
    <div className="ahadith-section ">
        <div className="bokhaaryy">
        <div className='title-ahadith titleahadithWith'>
            <div className='text-center'>
                    <h5 className=""> مــجــمــوعــة من الأحـــــاديـــــث الــنــبــوية الشــريــفة للصــــحيــــحــــي البُــخــاري و مُــســلــم . </h5>
            </div>
            <div className='ahadith-title mb-4 '>
            <h3 className='mt-3 mb-3 text-center'> الأحـــــــاديـــــــث الـــــــنـــــــبـــــــويـــــــة الشـــــــريـــــــفـــــــة  </h3>
            <div className='line-1 '></div>
            <div className='line-2 '></div>
            </div>
            </div>
        <div className="container hadithSection" id="AHADITHBOSHARY">
        <div className=" section ahadith p-5">
                <h3 className="text-center pb-3 title-bokhary" >مجــــــمــــــوعة احــــــاديــــــث من صحــــــيــــــح البُــــــخــــــاري </h3>
                <div className="onehadith">
                <p>{firsthadirh}</p>
                </div>
                <div className="buttonss-ahadith">
                   <a href="#AHADITHBOSHARY"> <button className="netx-btn" onClick={()=>{setIndex(index+1);getHadith(index)}}> التالي </button></a>
                    <a href="#AHADITHBOSHARY"><button className="previus-btn" onClick={()=>{setIndex(index);getHadith(index)}}> السابق </button></a>
                </div>
             </div>
             <div className="moslem withoutHeader" id="AHADITHMOSLEM">
            <div className=" section ahadith-moslem p-5 ">
                <h3 className="text-center pb-3 title-bokhary" >مجــــــمــــــوعة احــــــاديــــــث من صحــــــيــــــح  مُــســلــم  </h3>
                <div className="onehadith">
                <p>{firsthadirhMoslem}</p>
                </div>
                <div className="buttonss-ahadith">
                    <a href="#AHADITHMOSLEM"><button className="netx-btn" onClick={()=>{setIndexmoslem(indexmoslem+1);getHadithMoslem(indexmoslem)}}> التالي </button></a>
                    <a href="#AHADITHMOSLEM"><button className="previus-btn" onClick={()=>{setIndexmoslem(indexmoslem);getHadithMoslem(indexmoslem)}}> السابق </button></a>
                </div>
             </div>
            </div>
            </div>
        </div>
    </div>
    </section>
    </>
      </div>
    </section>
    
    </>
   <Footer />
    </div>
  );
}
export default Ahadith;




















export const Ahadith2withoutheader = () => {

  const [index , setIndex] = useState(0)
  const [indexmoslem , setIndexmoslem] = useState(0)
  const [firsthadirh , setFirstHadith] = useState("حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ قَالَ حَدَّثَنَا سُفْيَانُ قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الْأَنْصَارِيُّ قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ عَلَى الْمِنْبَرِقَالَ سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ");
  const [firsthadirhMoslem , setFirstHadithMoslem] = useState(
      " الْأَثَرُ الْمَشْهُورُ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَنْ حَدَّثَ عَنِّي بِحَدِيثٍ يُرَى أَنَّهُ كَذِبٌ فَهُوَ أَحَدُ الْكَاذِبِينَ حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ حَدَّثَنَا وَكِيعٌ عَنْ شُعْبَةَ عَنْ الْحَكَمِ عَنْ عَبْدِ الرَّحْمَنِ بْنِ أَبِي لَيْلَى عَنْ سَمُرَةَ بْنِ جُنْدَبٍ ح و حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ أَيْضًا حَدَّثَنَا وَكِيعٌ عَنْ شُعْبَةَ وَسُفْيَانَ عَنْ حَبِيبٍ عَنْ مَيْمُونِ بْنِ أَبِي شَبِيبٍ عَنْ الْمُغِيرَةِ بْنِ شُعْبَةَ قَالَا قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ذَلِكَ")

  const [bohkary, setBokhary] = useState({
      results: [],
      loading: false,
      err: "",
      reload: 1, 
    });


  


    useEffect(() => { 
      const fetchData = async () => {
        try {
          setBokhary({ ...bohkary, loading: true });
          const response = await axios.get(
            "https://api.hadith.gading.dev/books/bukhari?range=1-300"
          );
          setBokhary({
            ...bohkary, 
            results: response.data.data.hadiths, 
            loading: false,
            err: "" ,
          });
        } catch (error) { 
          setBokhary({ ...bohkary, loading: false, err: "Error fetching data." });
        }
      };
      fetchData();
    }, []); 

    const getHadith=(id)=>{
      if(id==-1){
      setIndex(0);
      setFirstHadith(bohkary.results[0].arab)
      }
      else if (id>300)
      {setFirstHadith(bohkary.results[0].arab)}
      else{
      setFirstHadith(bohkary.results[id].arab)
      }
    }

//  ---------------------------------------------------------------------------------------------
    const [moslem, setMoslem] = useState({
      results: [],
      loading: false,
      err: "",
      reload: 1,
    });


    useEffect(() => { 
      const fetchData = async () => {
        try {
          setMoslem({ ...moslem, loading: true });
          const response = await axios.get(
            "https://api.hadith.gading.dev/books/muslim?range=1-300"
          );
          setMoslem({
            ...moslem, 
            results: response.data.data.hadiths, 
            loading: false,
            err: "" ,
          });
        } catch (error) { 
          setMoslem({ ...moslem, loading: false, err: "Error fetching data." });
        }
      };
      fetchData();
    }, []); 
    

    const getHadithMoslem=(id)=>{
      if(id==-1){
      setIndexmoslem(0);
      setFirstHadithMoslem(moslem.results[0].arab)
      }
      else if (id>300)
      {setFirstHadithMoslem(moslem.results[0].arab)}
      else{
        setFirstHadithMoslem(moslem.results[id].arab)
      }
    }
  return (
    <div>
              <>
    <section id="#AhadithWithoutHeader">
    <div className="ahadith-section pt-4">
        <div className="bokhaaryy">
        <div className='title-ahadith edit-ahadith-header'>
            <div className='text-center'>
                    <h5 className=""> مــجــمــوعــة من الأحـــــاديـــــث الــنــبــوية الشــريــفة للصــــحيــــحــــي البُــخــاري و مُــســلــم . </h5>
            </div>
            <div className='ahadith-title mb-4 '>
            <h3 className='mt-3 mb-3 text-center'> الأحـــــــاديـــــــث الـــــــنـــــــبـــــــويـــــــة الشـــــــريـــــــفـــــــة  </h3>
            <div className='line-1 '></div>
            <div className='line-2 '></div>
            </div>
            </div>
        <div className="container hadithSection">
        <div className=" section ahadith p-5">
                <h3 className="text-center pb-3 title-bokhary" >مجــــــمــــــوعة احــــــاديــــــث من صحــــــيــــــح البُــــــخــــــاري </h3>
                <div className="onehadith">
                <p>{firsthadirh}</p>
                </div>
                <div className="buttonss-ahadith">
                    <a href="#AhadithWITHOUTHEADER"><button className="netx-btn" onClick={()=>{setIndex(index+1);getHadith(index)}}> التالي </button></a>
                    <a href="#AhadithWITHOUTHEADER"><button className="previus-btn" onClick={()=>{setIndex(index-1);getHadith(index)}}> السابق </button></a>
                </div>
              </div>
              <div className="moslem withoutHeader" id="AHADITHWIOURHEADERMOSLEM" >
            <div className=" section ahadith-moslem p-5 ">
                <h3 className="text-center pb-3 title-bokhary" >مجــــــمــــــوعة احــــــاديــــــث من صحــــــيــــــح  مُــســلــم  </h3>
                <div className="onehadith">
                <p>{firsthadirhMoslem}</p>
                </div>
                <div className="buttonss-ahadith">
                    <a href="#AHADITHWIOURHEADERMOSLEM"><button className="netx-btn" onClick={()=>{setIndexmoslem(indexmoslem+1);getHadithMoslem(indexmoslem)}}> التالي </button></a>
                    <a href="#AHADITHWIOURHEADERMOSLEM"><button className="previus-btn" onClick={()=>{setIndexmoslem(indexmoslem-1);getHadithMoslem(indexmoslem)}}> السابق </button></a>
                </div>
             </div>
            </div>
            </div>
        </div>
    </div>
    </section>
    </>
   
    </div>
  );
}