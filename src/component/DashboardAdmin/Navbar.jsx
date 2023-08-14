import React from 'react'
import "../../assets/css/dashboard_user/dashboard.css"
import logoDashboard from "../../assets/img/assets/dashboard.svg";
import logoTeam from "../../assets/img/assets/team.svg";
import "../../assets/css/dashboard_user/dashboard.css";

const Navbar = () => {
    const imgIcon = {
    marginRight: "15px",
    justifyContent: "flex-end",
    };
  return (
    <>
      <React.Fragment>
        <div class="listDash-itemDash">
          <a href="/admin">
            <img src={logoDashboard} alt="" class="iconDash" />
            <span style={imgIcon} class="descriptionDash">
              Dashboard
            </span>
          </a>
        </div>

        <div class="listDash-itemDash">
          <a href="/admin/data-competition/kti">
            <p className="titleDash">Data Competition</p>
            <img src={logoTeam} alt="" class="iconDash" />
            <span class="descriptionDash">Peserta KTI</span>
          </a>
        </div>
        <div class="listDash-itemDash">
          <a href="/admin/data-competition/software-development">
            <img src={logoTeam} alt="" class="iconDash" />
            <span class="descriptionDash">Peserta Software Dev</span>
          </a>
        </div>
        <div class="listDash-itemDash">
          <a href="/admin/data-competition/ui-ux">
            <img src={logoTeam} alt="" class="iconDash" />
            <span class="descriptionDash">Peserta UI/UX</span>
          </a>
        </div>
        <div class="listDash-itemDash">
          <a href="/admin/data-competition/desain-poster">
            <img src={logoTeam} alt="" class="iconDash" />
            <span class="descriptionDash">Peserta Desain Poster</span>
          </a>
        </div>

        <div class="listDash-itemDash">
          <a href="/admin/data-workshop/ui-ux">
            <p className="titleDash">Data Event Workshop</p>
            <img src={logoTeam} alt="" class="iconDash" />
            <span class="descriptionDash">Peserta Workshop UI/UX</span>
          </a>
        </div>
        <div class="listDash-itemDash">
          <a href="/admin/data-workshop/ai">
            <img src={logoTeam} alt="" class="iconDash" />
            <span class="descriptionDash">Peserta Workshop AI</span>
          </a>
        </div>
        <div class="listDash-itemDash">
          <a href="/admin/data-workshop/kti">
            <img src={logoTeam} alt="" class="iconDash" />
            <span class="descriptionDash">Peserta Workshop KTI</span>
          </a>
        </div>

        <div class="listDash-itemDash">
          <a href="/admin/data-seminar/cyber-security">
            <p className="titleDash">Data Event Seminar</p>
            <img src={logoTeam} alt="" class="iconDash" />
            <span class="descriptionDash">Cyber Security</span>
          </a>
        </div>
      </React.Fragment>
    </>
  );
}

export default Navbar