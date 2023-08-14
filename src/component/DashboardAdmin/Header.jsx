import React from 'react'
import illustration from "../../assets/img/assets/maskot-small.png";
import Logo from "../../assets/img/logo_invofest.png";
import "../../assets/css/dashboard_user/dashboard.css"

const Header = () => {
  return (
    <>
      <div class="headerDash">
        <div class="listDash-itemDash">
          <a href="#">
            <img src={Logo} alt="" class="iconDash" />
            <span class="descriptionDash-headerDash">INFOVEST 2023!!</span>
          </a>
        </div>

        <div class="illustration">
          <img src={illustration} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header