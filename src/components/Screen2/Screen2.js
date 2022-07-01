import React from 'react'
import TopNavBar from '../Screen1/TopNavBar'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import SubNavBar from '../SubNav';


export default function Screen2() {
    const navigate = useNavigate();

  return (
    <div>
        <TopNavBar d-none d-md-block/>
         {/* <div className="top_menu_bar2 d-flex justify-content-between text-white">
               <h5>Create a new order</h5>
          </div> */}
         <SubNavBar>
          <span>
            Configure a new order{" "}
          </span>
        </SubNavBar>
        <div onClick={() => navigate("/category")} className="card mb-3 w-50 justify-content-center selectCard">
            <div class="card-body">
                <div className='d-flex justify-content-between mt-2'>
                    <div>
                        <h5>Configure your door from scratch</h5>
                        <span>Residential, Commerical, Entry doors</span>
                    </div>
                    <div className='alignJustifyCenter'>
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className="card mb-3 w-50 justify-content-center selectCard">
            <div class="card-body">
                <div className='d-flex justify-content-between mt-2'>
                    <div>
                        <h5>Parts / Openers</h5>
                        <span>Order Parts and Openers</span>
                    </div>
                    <div className='alignJustifyCenter'>
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className="card mb-3 w-50 justify-content-center selectCard">
            <div class="card-body">
                <div className='d-flex justify-content-between mt-2'>
                    <div>
                        <h5>Direct Item Entry</h5>
                        <span>Order Parts / Openers using a Product ID</span>
                    </div>
                    <div className='alignJustifyCenter'>
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className="card mb-3 w-50 justify-content-center selectCard">
            <div class="card-body">
                <div className='d-flex justify-content-between mt-2'>
                    <div>
                        <h5>Choose from favourites</h5>
                        <span>Re-order door from your favourites</span>
                    </div>
                    <div className='alignJustifyCenter'>
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
