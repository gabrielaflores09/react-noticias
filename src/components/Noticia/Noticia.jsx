import React from 'react';
import './Noticia.css';

const Noticia = ({noticia}) => {
    return ( 
        <div className="cuerpo">
            <div className="container-fluid">
                <div className="row">
                    {noticia && noticia.map(n=>(
                        <article key ={n.publishedAt} className="noticia col-sm-12 col-md-6 col-lg-4">
                        <a className="linkNoticia" href={n.url}>
                            <div className="content">
                                <div className="imageNoticia">
                                    <img className="imageArticle" src={n.urlToImage} alt="imageNoticia"/>
                                    <div className="autorNoticia">
                                        <span>
                                            <strong>{n.author}</strong>
                                        </span>
                                    </div>
                                </div>
                                <div className="tituloNoticia">
                                    <div className="fuenteNoticia">
                                        <span>
                                            <strong>{n.source.name}</strong>
                                        </span>
                                    </div>
                                    <div>
                                        <label className="titulo">{n.title}</label>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>
                    ))}
                </div>   
            </div>
        </div>
     );
}
 
export default Noticia;