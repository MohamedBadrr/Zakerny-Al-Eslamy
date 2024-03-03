import React, { useState, useEffect } from "react";
import "../MawakitElSalah/MawakitElSalah.css";
import axios from "axios";
import PagesHeader from "../Header/PagesHeader";
import Footer from "../Footer/Footer";


const MawakitElSalah = () => {


    const [arabicTime, setArabicTime] = useState("");
    useEffect(() => {
        const updateArabicTime = () => {
        const currentTime = new Date();
        const options = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
            hourCycle: "h12",
            numberingSystem: "arab",
        };

        const newArabicTime = currentTime.toLocaleTimeString("ar", options);
        setArabicTime(newArabicTime);
        };

        const timer = setInterval(updateArabicTime, 1000);

        // Initial update
        updateArabicTime();

        // Cleanup interval on unmount
        return () => {
        clearInterval(timer);
        };
    }, []);


    const [arabicDate, setArabicDate] = useState("");
    useEffect(() => {
        const updateArabicDate = () => {
        const currentTime = new Date();
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            numberingSystem: "arab",
        };
        const newArabicDate = currentTime.toLocaleDateString("ar", options);
        setArabicDate(newArabicDate);
        };
        const timer = setInterval(updateArabicDate, 1000);
        updateArabicDate();
        return () => {
        clearInterval(timer);
        };
    }, []);

    const daysOfWeek = ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const today = new Date();
    const day = daysOfWeek[today.getDay()];

    function englishToArabicDigit(str) {
        if (typeof str !== 'string') {
            return null; // Return null for invalid input
          }
        
          const arabicDigits = {            
            "0": '٠',
            "01": '١',
            "02": '٢',
            "03": '٣',
            "04": '٤',
            "05": '٥',
            "06": '٦',
            "07": '٧',
            "08": '٨',
            "09": '٩',
            1: '١',
            2: '٢',
            3: '٣',
            4: '٤',
            5: '٥',
            6: '٦',
            7: '٧',
            8: '٨',
            9: '٩',
            10: '١٠',
            11: '١١',
            12: '١٢',
            13: '١٣',
            14: '١٤',
            15: '١٥',
            16: '١٦',
            17: '١٧',
            18: '١٨',
            19: '١٩',
            20: '٢٠',
            21: '٢١',
            22: '٢٢',
            23: '٢٣',
            24: '٢٤',
            25: '٢٥',
            26: '٢٦',
            27: '٢٧',
            28: '٢٨',
            29: '٢٩',
            30: '٣٠',
            31: '٣١',
            32: '٣٢',
            33: '٣٣',
            34: '٣٤',
            35: '٣٥',
            36: '٣٦',
            37: '٣٧',
            38: '٣٨',
            39: '٣٩',
            40: '٤٠',
            41: '٤١',
            42: '٤٢',
            43: '٤٣',
            44: '٤٤',
            45: '٤٥',
            46: '٤٦',
            47: '٤٧',
            48: '٤٨',
            49: '٤٩',
            50: '٥٠',
            51: '٥١',
            52: '٥٢',
            53: '٥٣',
            54: '٥٤',
            55: '٥٥',
            56: '٥٦',
            57: '٥٧',
            58: '٥٨',
            59: '٥٩',
            60: '٦٠',
          };
        
          // Use regular expression to match digits efficiently
          const regex = /\d+/g;
          return str.replace(regex, match => arabicDigits[match]);
        }



function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
    }
    const[prayertimes,setPrayertimes]=useState({
        loading:false,
        results:[],
        err:"",
        reload:1,
    })

    useEffect(()=>{
        setPrayertimes({...prayertimes,loading:true});
        axios.get(`https://api.aladhan.com/v1/timingsByCity/${getCurrentDate()}?city=cairo&country=Egypt&method=8`)
        .then((resp)=>{
            setPrayertimes({...prayertimes,results:resp.data.data.timings})
        }).catch((err)=>(
            setPrayertimes({...prayertimes , loading:false , err:"some thing went wrong"})
        ))
    },[prayertimes.reload])


return (
    <>
    <section id="#MAWAKITELSALAH">
        <div className="mawakitelsalah-section">

        <div className="container mawakitelsalah p-5 smalledit">
            <div className="date">
                <div className="day"><i class="fa-solid fa-calendar"></i> {day} </div>
                <div className="fullDay">{arabicDate}</div>
            </div>
            <h1 className="mawakit-title">مــــــواقـــــيـــــت الصـــــلاة في مـــــصـــــر </h1>
            <div className="clock">الـــســـاعة الان : <span className="time">{arabicTime}</span> </div>

            <div className="prayers">
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــفــجــر</h3>
                    <h5 className="clock-salah text-white"> {englishToArabicDigit(prayertimes.results.Fajr)} ص</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">وقـــت</h3>
                    <h3 className="salah-eh">الـشــروق</h3>
                    <h5 className="clock-salah  text-white">{englishToArabicDigit(prayertimes.results.Sunrise)} ص</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــظــهــر</h3>
                    <h5 className="clock-salah text-white">{englishToArabicDigit(prayertimes.results.Dhuhr)} م</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــعــصــر</h3>
                    <h5 className="clock-salah text-white">{englishToArabicDigit(prayertimes.results.Asr)} م</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــمــغــرب</h3>
                    <h5 className="clock-salah text-white">{englishToArabicDigit(prayertimes.results.Maghrib)} م</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــعــشــاء</h3>
                    <h5 className="clock-salah text-white">{englishToArabicDigit(prayertimes.results.Isha)} م</h5>

                </div>
            </div>
            <p className="small-text" > ( بـــاركَ الـــلـــهُ ف عمـــلاٍ قطعتُه الصـــلاة ) </p>
        </div>

        </div>
    </section>
    </>
  );
}
export default MawakitElSalah;











export const MawakitElSalahWithHeader = () => {


    const [arabicTime, setArabicTime] = useState("");
    useEffect(() => {
        const updateArabicTime = () => {
        const currentTime = new Date();
        const options = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
            hourCycle: "h12",
            numberingSystem: "arab",
        };

        const newArabicTime = currentTime.toLocaleTimeString("ar", options);
        setArabicTime(newArabicTime);
        };

        const timer = setInterval(updateArabicTime, 1000);

        // Initial update
        updateArabicTime();

        // Cleanup interval on unmount
        return () => {
        clearInterval(timer);
        };
    }, []);


    const [arabicDate, setArabicDate] = useState("");
    useEffect(() => {
        const updateArabicDate = () => {
        const currentTime = new Date();
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            numberingSystem: "arab",
        };
        const newArabicDate = currentTime.toLocaleDateString("ar", options);
        setArabicDate(newArabicDate);
        };
        const timer = setInterval(updateArabicDate, 1000);
        updateArabicDate();
        return () => {
        clearInterval(timer);
        };
    }, []);

    const daysOfWeek = ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const today = new Date();
    const day = daysOfWeek[today.getDay()];

    function englishToArabicDigit(str) {
        if (typeof str !== 'string') {
            return null; // Return null for invalid input
          }
        
          const arabicDigits = {            
            "0": '٠',
            "01": '١',
            "02": '٢',
            "03": '٣',
            "04": '٤',
            "05": '٥',
            "06": '٦',
            "07": '٧',
            "08": '٨',
            "09": '٩',
            1: '١',
            2: '٢',
            3: '٣',
            4: '٤',
            5: '٥',
            6: '٦',
            7: '٧',
            8: '٨',
            9: '٩',
            10: '١٠',
            11: '١١',
            12: '١٢',
            13: '١٣',
            14: '١٤',
            15: '١٥',
            16: '١٦',
            17: '١٧',
            18: '١٨',
            19: '١٩',
            20: '٢٠',
            21: '٢١',
            22: '٢٢',
            23: '٢٣',
            24: '٢٤',
            25: '٢٥',
            26: '٢٦',
            27: '٢٧',
            28: '٢٨',
            29: '٢٩',
            30: '٣٠',
            31: '٣١',
            32: '٣٢',
            33: '٣٣',
            34: '٣٤',
            35: '٣٥',
            36: '٣٦',
            37: '٣٧',
            38: '٣٨',
            39: '٣٩',
            40: '٤٠',
            41: '٤١',
            42: '٤٢',
            43: '٤٣',
            44: '٤٤',
            45: '٤٥',
            46: '٤٦',
            47: '٤٧',
            48: '٤٨',
            49: '٤٩',
            50: '٥٠',
            51: '٥١',
            52: '٥٢',
            53: '٥٣',
            54: '٥٤',
            55: '٥٥',
            56: '٥٦',
            57: '٥٧',
            58: '٥٨',
            59: '٥٩',
            60: '٦٠',
          };
        
          // Use regular expression to match digits efficiently
          const regex = /\d+/g;
          return str.replace(regex, match => arabicDigits[match]);
        }
function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
    }
    const[prayertimes,setPrayertimes]=useState({
        loading:false,
        results:[],
        err:"",
        reload:1,
    })

    useEffect(()=>{
        setPrayertimes({...prayertimes,loading:true});
        axios.get(`https://api.aladhan.com/v1/timingsByCity/${getCurrentDate()}?city=cairo&country=Egypt&method=8`)
        .then((resp)=>{
            setPrayertimes({...prayertimes,results:resp.data.data.timings})
        }).catch((err)=>(
            setPrayertimes({...prayertimes , loading:false , err:"some thing went wrong"})
        ))
    },[prayertimes.reload])
  return (
    <>
    <PagesHeader />
    <section id="#MAWAKITELSALAH">
        <div className="mawakitelsalah-section  withHeader">

        <div className="container mawakitelsalah p-5">
            <div className="date">
                <div className="day"><i class="fa-solid fa-calendar"></i> {day} </div>
                <div className="fullDay">{arabicDate}</div>
            </div>
            <h1 className="mawakit-title">مــــــواقـــــيـــــت الصـــــلاة في مـــــصـــــر </h1>
            <div className="clock">الـــســـاعة الان : <span className="time">{arabicTime}</span> </div>

            <div className="prayers">
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــفــجــر</h3>
                    <h5 className="clock-salah text-white"> {englishToArabicDigit(prayertimes.results.Fajr)} ص</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">وقـــت</h3>
                    <h3 className="salah-eh">الـشــروق</h3>
                    <h5 className="clock-salah  text-white">{englishToArabicDigit(prayertimes.results.Sunrise)} ص</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــظــهــر</h3>
                    <h5 className="clock-salah text-white">{englishToArabicDigit(prayertimes.results.Dhuhr)} م</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــعــصــر</h3>
                    <h5 className="clock-salah text-white">{englishToArabicDigit(prayertimes.results.Asr)} م</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــمــغــرب</h3>
                    <h5 className="clock-salah text-white">{englishToArabicDigit(prayertimes.results.Maghrib)} م</h5>

                </div>
                <div className="pray"> 
                    <h3 className="salah">صــــلاة</h3>
                    <h3 className="salah-eh">الــعــشــاء</h3>
                    <h5 className="clock-salah text-white">{englishToArabicDigit(prayertimes.results.Isha)} م</h5>

                </div>
            </div>
            <p className="small-text" > ( بـــاركَ الـــلـــهُ ف عمـــلاٍ قطعتُه الصـــلاة ) </p>
        </div>

        </div>
        
    </section>
    <div className="footer-makit">
    <Footer/>
    </div>
    </>
  );
}

