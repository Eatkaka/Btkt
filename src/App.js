 import NavbarComponent from './Component/NavbarComponent'
import './App.css';
import ContentComponent from './Component/ContentComponent'
import { useEffect,useState } from 'react';
import axios from 'axios';
import PaginationComponent from './Component/PaginationComponent';
import { PAGINATION } from './page/constans';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [dataArticle, setDataArticle] = useState()
  const [isLoading,setIsLoading] = useState(false);
  const [pagination, setpagination] = useState({
    limit:PAGINATION.LIMIT,
    currentPage:PAGINATION.CURRENT_PAGE,
    totalPage:PAGINATION.TOTAL_PAGE,
  });
  const [isFavoris,setFavoris] = useState(false)
  useEffect( () => {
         setIsLoading(true)
         const offset = (pagination.currentPage - 1) * PAGINATION.LIMIT
        axios.get('https://api.realworld.io/api/articles')
        .then( (res) => 
        { setDataArticle(res?.data);
        setIsLoading(false);
        setpagination(
          pre=>pre = {
            ...pre,
            totalPage:Math.ceil(res?.articlesCount / PAGINATION.LIMIT),
            
          }
        );
      
         } )
        .catch((error)=>console.log(error));

       
    }  

, [pagination.currentPage],isFavoris)
const onChangePage = (page) => {
  setpagination(
    (pre) =>
      (pre = {
        ...pagination,
        currentPage: page,
      })
  );
};
console.log(dataArticle)
  
  return (
    // <>
   
    <>
     <NavbarComponent/>
    <ContentComponent dataArticle={dataArticle}
    isFavoris={isFavoris}
    setisFavoris={setFavoris}/>
    <PaginationComponent pagination={pagination}
    onChangePage={onChangePage}/>
    </>  );
}

export default App;