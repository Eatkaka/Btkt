import NavbarComponent from './Component/NavbarComponent'
import './App.css';
import ContentComponent from './Component/ContentComponent'
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [dataArticle, setDataArticle] = useState([])
  useEffect( () => {
        axios.get('https://api.realworld.io/api/articles')
        .then( (res) =>  setDataArticle(res?.data));
    }

, [])
console.log(dataArticle)
  
  return (
    <>
    <NavbarComponent/>
    <ContentComponent dataArticle={dataArticle}/>
    </>  );
}

export default App;
