import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import {useSelector} from "react-redux" // le seul qui a la capacité pour accéder au store et emene se qu'on veut


const AfficheCategories = () => {

  const {categories,isLoading,error} = useSelector((state)=>state.storecategories); //destruction seul les info ali 7achetna bihom
  const renderCategories = () => {
    console.log(categories)
    if (isLoading) return <center><ReactLoading type='spokes' color="red"
    height={'8%'} width={'8%'} /></center>
    if (error) return <p>Impossible d'afficher la liste des Categories...</p>
    return <React.Fragment>
    {categories &&
    <div
    
    style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
    
    {categories.map((cat,ind)=>{
    return <Card sx={{ maxWidth: 'auto',margin: 1 }} key={ind}>
    <CardMedia
    component="imagecategorie"
    alt="image"
    height="160"
    image={cat.imagecategorie}
    />
    
    <CardActions>
  
    </CardActions>
    </Card>
    })}</div>
    }
    </React.Fragment>
    }
  return (
    
    <div>
      {renderCategories()}
    </div>
  )
}

export default AfficheCategories;