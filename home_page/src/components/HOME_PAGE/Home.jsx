
import React from 'react'
import Navbar from '../NAVBAR/Navbar'
import './home.css'
import { Link } from 'react-router-dom'
import data from "./data.json"


const Home = () => {
  let categoryData=data.CategoryData
  console.log(categoryData)

  return (
    <div>
        
        <div>
        <Navbar/>
            <div className='background-image'>
              <div className='background-image-data'>
                <div className='ASHWAGANDHA'>ASHWAGANDHA</div>
                <p className='line'>A star performer for stress and energy in a</p>
                <p className='line2'>potent, organic caplet.</p>
                <button className='button'>SHOP NOW</button>
              </div>
            </div>
              <h1>Shop By Category</h1>
            <div className='category-data'>
    {/* .................data mapping for Shop By Category data start here................ */}
                {
                  categoryData.map((item)=>{
                    return(
                    <div className=''>
                      <Link to='' className='link'>
                        <img src={item.img} alt="" className='category-img'/>
                        <h3>{item.title}</h3>
                        <p>{item.link}</p>
                      </Link>
                    </div>
                    )
                  })
                }
    {/* .................data mapping for Shop By Category data end here   ................ */}          
            </div>
            <h1>Best Seller</h1>
            <div>

            </div>

            <div className='flower-div'>
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475" alt="" />
              </div>
              <div className="details-div">
                <p className='p1'>Unlock the Wisdom of Herbs</p>
                <p className='p2'>with Herbal Supplements, Toothpaste & More!</p>
                <p className='p3'>Since 1930, Himalaya has been passionate about the healing wisdom of herbs.
                 We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products 
                 that unlock the powerful healing benefits of herbs.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Home