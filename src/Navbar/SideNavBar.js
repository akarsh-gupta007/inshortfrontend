import React from 'react'
import "./Side.css"
const SideNavBar = () => {

  const openNav = () => {
    console.log("bi")
    document.getElementById("mySidenav").style.width = "250px";
  }

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <>


      <span  onClick={openNav}>&#9776; </span>
      <div id="mySidenav" className="sidenav">
       
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        Categories
        <hr/>
        
        <a href="#">All News</a>
        <a href="#">India</a>
        <a href="#">Business</a>
        <a href="#">Sports</a>
        <a href="#">World</a>
        <a href="#">Startup</a>
        <a href="#">Science</a>
        <a href="#">Automobile</a>
        <a href="#">Politics</a>
        
      </div>
    </>
  )
}

export default SideNavBar