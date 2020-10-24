import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formularo from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria
  const [ categoria, guardarCategoria ] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect( () => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=bda71b0b81434044a88fad940caed150`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      //console.log(noticias.articles)

      guardarNoticias(noticias.articles);

    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formularo 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
