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
       
        <div  className="closebtn" onClick={closeNav}>&times;</div>
        Categories
        <hr/>
        
        <div >All News</div>
        <div >India</div>
        <div >Business</div>
        <div >Sports</div>
        <div >World</div>
        <div >Startup</div>
        <div >Science</div>
        <div >Automobile</div>
        <div >Politics</div>
        
      </div>
    </>
  )
}

export default SideNavBar