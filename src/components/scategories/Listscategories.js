import { useEffect } from "react";
import { useDispatch } from "react-redux"; //quand je veux dispatcher une action :
import {getScategories} from "../../features/categorieSlice";
import AfficheScategories from "./AfficheScategories";

const Listcategories = () => {

const dispatch = useDispatch(); //declarer une constatnte use dispathch aprés l'mport sur



useEffect(() => {
    dispatch(getScategories());
}, [dispatch])



return (
<div>

<AfficheScategories/>

</div>
)
}
export default AfficheScategories;