import React from 'react';
import '../App.css';



const Sidebar = ({select,setSelect}) => {
    return (
        <div className="sidebar">
          <div className={select==="inbox"?"active":""} onClick={()=>setSelect("inbox")}> <i class="fas fa-inbox"></i>inbox</div>  
          <div className={select==="today"?"active":""} onClick={()=>setSelect("today")}><i class="far fa-calendar-alt"></i>today</div>
          <div className={select==="next 7 day"?"active":""} onClick={()=>setSelect("next 7 day")}><i class="far fa-calendar"></i>next 7 day</div>
        </div>
    )
}

export default Sidebar
