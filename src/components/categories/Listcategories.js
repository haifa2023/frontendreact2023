import { useEffect } from "react";
import { useDispatch } from "react-redux"; //quand je veux dispatcher une action :
import {getCategories} from "../../features/categorieSlice";
import AfficheCategories from "./AfficheCategories";

const Listcategories = () => {

const dispatch = useDispatch(); //declarer une constatnte use dispathch aprés l'mport sur



useEffect(() => {
    dispatch(getCategories());
}, [dispatch])



return (
<div>

<AfficheCategories/>

</div>
)
}
export default Listcategories;