import React from 'react'

import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import logoApp from "../../Assets/logoApp.png"
import menuIcon from "../../Assets/menuIcon.png"
import questionIcon from "../../Assets/questionIcon.png"
import profilePic from "../../Assets/profilePic.png"
import belIcon from "../../Assets/belIcon.png"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function TopNavBar() {
  return (
    <div>
      <div className="content-tabs">
        <div>
          <div className="top_menu_bar">
            <div>
              <img src={logoApp} className="profile_pic_sidenav" />
            </div>
            <div>
              <div className="d-flex justify-content-around d-none d-md-block">
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <img src={menuIcon} className="w-25 d-inline-block" />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <img src={questionIcon} className="w-25 d-inline-block" />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <img src={belIcon} className="w-25 d-inline-block" />
                    </a>                
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <img src={profilePic} className="w-25 d-inline-block" />
                    </a>   
                  </li>
                </ul>
              </div>
            </div>
          </div>
        

            {/* <div class="col"><hr/></div> */}
          </div>
        </div>
      </div>
  )
}
