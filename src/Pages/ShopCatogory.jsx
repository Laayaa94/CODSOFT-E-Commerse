import React, { useContext } from 'react'
import './CSS/ShopCatogory.css'
import all_product from '../Components/Assets/all_product'
import { ShopContext } from '../Context/ShopContext/ShopContext'


const ShopCatogory = (props) => {
  const{all_product}=useContext(ShopContext);
  return (
    <div className='shop-catogory'>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCatogory
