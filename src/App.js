import React,{Fragment, useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Noticia from './components/Noticia/Noticia';
import Footer from './components/Footer/Footer';
import logo from './images/logo.png';

function App() {

  const [noticia, guardarNoticia] = useState([]);

  const consultarAPI = async () =>{
    const key= 'c8971d48774d4483865dec3d76057af3';
    const url=`https://newsapi.org/v2/top-headlines?country=ar&apiKey=${key}`;

    const resp_api = await fetch(url);
    const noticia_api = await resp_api.json();

    if(noticia_api){
      guardarNoticia(noticia_api.articles);
    }
  }

  useEffect(()=>{
    consultarAPI();

  },[])
  return (
    <Fragment>
      <Header
        logo={logo}
      />
      <Noticia
        noticia={noticia}
      />
      <Footer
         logo={logo}
      />
    </Fragment>
  );
}

export default App;
