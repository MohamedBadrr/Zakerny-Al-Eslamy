import React from 'react';
import "../Home/Home.css";
import { useTypewriter , Cursor, Typewriter } from 'react-simple-typewriter';
import quranImg from"../../imgs/quran1.jpeg"
import { Link } from 'react-router-dom';
import MawakitElSalah from '../MawakitElSalah/MawakitElSalah';
import { Ahadith2withoutheader } from '../Ahadith/Ahadith';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
      <div className='Header' id='HEADERR'>
      <div className=' container '>
        <div className='data-home'>
            <h1> مرحبا بكــــــم في موقع</h1>
            <h1 className=''>  <span className='home-title'> ذَكّـــــــــرنــــي الإســلامــــــــي </span></h1>
            <p>من خلال هذا الموقع يمكنك قراءة جميع سور القران
            القران الكريم كاملا كما يمكنك ايضا الإستماع أليه بصوت 
            جميع قُراءّ , كما يمكنك ايضا قراءة بعض الأحاديث النبوية 
            الشريفة و معرفة مواقيت الصلاة و قراءة أذكار الصباح و المساء 
            و الإستماع اليها ايضاء .</p>
            {/* home-button-section */}
            <button className='home-button-section'><a href="#QURAN">هيا نبدء  <i class="fa-solid fa-chevron-left color-icon "></i></a></button>
        </div>
      </div>
      </div>
      <section id='QURAN'>
    <div className='quran-section '>
      <div className='container '>
      <div className='row quran'>
      <div className='col-md-6 '>
            <div className='quran-data text-center '>
            <h1>الـــــقُـــــرْآنِ الـــــــكَــــــرِيــــــمِ </h1>
            <h4>{ ` {   وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ   }`}</h4>
            <p> يمكنك قراءة جميع ســـور الـــقـــران الـــكـــريم  كاملة. كما
            يمكنك الاستماع الي  القُرْآنِ الكَرِيمِ كاملا بتدبر بصوت اي قارئ من اختيارك  .
            </p>
            <button className='btn-1'>
                <Link to={'/quran'}> قـــراءة و إستـــماع جميع سور الـــقـــرآن الكريم <i class="fa-solid fa-book-open "></i></Link>
            </button>
            <button className='btn-2'>
              <Link to={"/listen"}>الإســـتماع الي الـــقـــرآن الـــكـــريـــم <i class="fa-solid fa-headphones"></i></Link>
            </button>
            </div>
            </div>
        <div className='  col-md-6 quran-img-div '>
                <img src={quranImg} alt="" className=' quran-img ' />
        </div>
        
      </div>
      </div>
    </div>
        </section>
      <section id='MAWAKIT'>
      <MawakitElSalah />
      </section>
      <section id='AhadithWITHOUTHEADER' className='mb-5'>
        <Ahadith2withoutheader />
      </section>
        <button className='up-button'><a href="#HEADERR"><i class="fa-solid fa-chevron-up"></i></a></button>
        <Footer/>
    </>
  );
}

export default Home;
