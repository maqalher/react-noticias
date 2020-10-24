import React from 'react';

const Noticia = ({noticia}) => {
    // extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const urlFakeImage = 'https://fakeimg.pl/350x200/?text=No Image';
    //console.log(urlToImage)

    const imagen = (urlToImage != '(none)') ?
        <div className="card-image">
            <img height="200px" src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
    :   
        <div className="card-image">
            <img src={urlFakeImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
    ;

    return(
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                
                <div className="card-content" >
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
}

export default Noticia;
