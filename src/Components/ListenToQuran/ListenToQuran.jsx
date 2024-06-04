import React, { useEffect, useState } from 'react';
import "../ListenToQuran/ListenToQuran.css"
import PagesHeader from '../Header/PagesHeader';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const ListenToQuran = () => {

    const [readers, setReaders]=useState({
        loading:false,
        results:[],
        err:"",
        reload:1
    })
    useEffect(()=>{
        setReaders({...readers,loading:true});
        axios.get("https://www.mp3quran.net/api/v3/reciters?language=ar").
        then((resp)=>{

            setReaders({...readers,loading:false,results:resp.data.reciters})
        })
        .catch((err)=>{
            setReaders({...readers,loading:false , err:"some thing went wrong ,please try again later"});
        })
    },[readers.reload])
    

    const [searchValue, setSearchValue] = useState("");
    const [searchReadersList, setSearchReadersList]=useState({
        loading:false,
        results:[],
        err:"",
        reload:1
    })
;

    const searchReaders = () => {
        setSearchReadersList({...searchReadersList,loading:true})
        if (!readers.results || !readers.results.length) {
          return; 
        }
        
        const delay = 100; 
        setTimeout(() => {
          const filteredReaders = readers.results.filter((reader) =>
            reader.name.toLowerCase().includes(searchValue.toLowerCase())
          );
            
          setSearchReadersList({ ...searchReadersList, results: filteredReaders ,loading:false  });
      
        }, delay);
      };
      
      useEffect(() => {
        searchReaders();
      }, [searchValue]);
     
      
  return (
    <> 
      <div>
        <PagesHeader />
        <div className='suwar-contanier' id='LISTREADERS'>
        <div className='title'>
            <div className='text-center'>
                    <h5> جــــــمــــــيــــــع قُـــــــــرَّاء اَلــــــقُــــــرآن اَلــــــكــــــرِيــــــم </h5>
            </div>
            <div className='quran-title mb-4 '>
            <h3 className='mt-3 mb-3 text-center'>استمع الي الـــــقُـــــرْآنِ الـــــــكَــــــرِيــــــم بقــــــارئ مــن اختــــيــــارك </h3>
            <div className='line-1 '></div>
            <div className='line-2 '></div>
            </div>
            </div>
            <div className='container suwarwithayats '>
            <form className='mt-4 text-center'>
                <div class="form-search m-auto">
                    <input type="text" className="input-search w-100" id="exampleInputEmail1" 
                    value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}    placeholder="ادخــــل اســــم الــــقــــارئ....."/>
                    <button  class="button-search">بحث</button>
                </div>
                <div className='suarhscontainer mt-5'>
                    {
                        (!searchReadersList.loading)?<>
                                {
                                    ((searchReadersList.results).length==0)?
                                    <>
                                                <>
                                                <div className='reader reader-notfound' >
                                                    <h2 className=''>لا يوجد قارئ بهذا الاسم </h2>
                                                </div>
                                                </>
                                    </>
                                    :
                                    <>
                                    {
                                        searchReadersList.results.map((reader,index)=>{
                                            return(
                                                <>
                                                <div className='reader' >
                                                    <Link to={`/reader/${reader.id}`}>{reader.name}</Link>
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
                                    (!readers.loading)?<>
                                    {
                                        readers.results.map((reader,index)=>{
                                            return(
                                                <>
                                                <div className='reader' >
                                                    <Link to={`/reader/${reader.id}`}>{reader.name}</Link>
                                                </div>
                                                </>
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
                    
            </form>
            </div>
        </div>
        <button className='up-button'><a href="#LISTREADERS"><i class="fa-solid fa-chevron-up"></i></a></button> 
      </div>
      <div className='footerinlisten'>
   <Footer />
   </div>
    </>
  );
}

export default ListenToQuran;
