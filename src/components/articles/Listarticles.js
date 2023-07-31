import { useEffect,useCallback,useState } from "react";
import { useDispatch } from "react-redux"; //quand je veux dispatcher une action :
import {getArticles,getArticlespages} from "../../features/articleSlice";
import AfficheArticles from "./AfficheArticles";


const Listarticles = () => {
    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 12;
//const indexOfLastItem = currentPage * itemsPerPage;
//const indexOfFirstItem = indexOfLastItem - itemsPerPage;


const dispatch=useDispatch() //declarer une constatnte use dispathch aprés l'mport sur

const listproduits= useCallback(()=>{
const mesParams={
currentPage:currentPage,
itemsPerPage:itemsPerPage
};



dispatch(getArticlespages(mesParams))
},[currentPage])
useEffect(() => {
listproduits()
}, [listproduits])






return (
<div>

<AfficheArticles currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage = {itemsPerPage}/>

</div>
)
}
export default Listarticles