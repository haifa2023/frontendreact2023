import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../../../features/articleSlice";
import AffichearticleTable from '../../../admin/components/articles/AffichearticleTable';
import Createarticle from '../../../admin/components/articles/Createarticle';




const ProductsAppAdmin = () => {
const dispatch = useDispatch();
useEffect(() => {
dispatch(getArticles());
},[])

return (
<div>
<Createarticle/>
<AffichearticleTable />
</div>
)
}
export default ProductsAppAdmin