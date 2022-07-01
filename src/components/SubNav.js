import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
export default function SubNavBar(props) {
  const navigate = useNavigate();
  return (
    <div className='top_menu_bar2'>
      <div className='d-flex flex-row alignJustifyCenter'>
        <ArrowBackIcon
          onClick={() => navigate(-1)}
          style={{ marginRight: "15px", cursor: "pointer" }}
        />{" "}
        {props.children}
      </div>
    </div>
  );
}
