import React, { useState } from 'react';
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';

import ResponsiveDrawer from './SideMenu';
import TopNavBar from './TopNavBar';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CustomizedTables from './TableMui';
import { Link } from 'react-router-dom';
import SubNavBar from '../SubNav';


export default function Screen1() {
  const [selectedtab, setSelectedtab] = useState("Carts");

  return (
    <div>
        {/* <ResponsiveDrawer/> */}
        <TopNavBar/>
        <SubNavBar>
        <div className='alignJustifyCenter' style={{ width:'100vw' }}>
          <button
            onClick={() => setSelectedtab("Carts")}
            className='tabButton'
            variant='light'
            style={
              selectedtab == "Carts" ? { borderBottom: "2px solid #FACA30" } : {}
            }
          >
            Carts
          </button>
          <button
            onClick={() => setSelectedtab("Favorites")}
            className='tabButton'
            variant='light'
            style={
              selectedtab == "Favorites"
                ? { borderBottom: "2px solid #FACA30" }
                : {}
            }
          >
            Favorites
          </button>
        </div>
        </SubNavBar>
        <Tabs>

        <div className="top_menu_bar3">
              <TabList>
                <Tab>Active Carts</Tab>
                <Tab>Archived Carts</Tab>
              </TabList>
                <div className="d-flex flex-row justify-content-around">
                    <div className="search_div">
                      <input
                        type="text"
                        className="top_menu_search"
                        placeholder="Search"
                        // onChange={(event) => {
                        //   Setsearchterm(event.target.value);
                        // }}
                      />
                      <SearchIcon />
                    </div>

                    <button
                      className="search_div"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg_ref3"
                    >
                      <FilterListIcon className="search_icons" />
                      Filter
                    </button>

              </div>
             </div>

       

        {/* <Table/> */}
        

          <TabPanel>
            <div className='m-3'>
              <CustomizedTables/>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        <Link to={"newOrder"}>
          <button
              className="new_odr_btn"
              // data-toggle="modal"
              // data-target=".bd-example-modal-lg_ref3"
            >
              <AddIcon className="text-white" />
          </button>
        </Link>
    </div>
  )
}
