import React from 'react'

const template = () => {
  return (
    <>
      {!isSidebarHidden ? (
        <div className="container1">
          {/* Sidebar */}
          <div className="sidebarDash">
            <HeaderDash />
          </div>

          {/* content */}
          <div className="mainDash">
            <NavbarDash />
          </div>
          <div className="mainDash-content">
            <div id="menu-button">
              <input
                type="checkbox"
                id="menu-checkbox"
                checked={!isSidebarHidden}
                onChange={hidden}
              />
              <label htmlFor="menu-checkbox" id="menu-label">
                <div id="hamburger"></div>
              </label>
            </div>
            <div className={`sidebarDash ${isSidebarHidden ? "hide" : ""}`}>
              {/* Konten Sidebar */}
            </div>
            <div className="box">
                {/* Content main */}
            </div>
          </div>
        </div>
      ) : (
        <div className="container1">
          {/* Sidebar */}
          <div className="sidebarDash">
            <HeaderDash />
          </div>

          {/* content */}
          <div className="mainDash">
            <NavbarDash />
          </div>
          <div className="mainDash-content">
            <div id="menu-button">
              <input
                type="checkbox"
                id="menu-checkbox"
                checked={!isSidebarHidden}
                onChange={hidden}
              />
              <label htmlFor="menu-checkbox" id="menu-label">
                <div id="hamburger"></div>
              </label>
            </div>
            <div className={`sidebarDash ${isSidebarHidden ? "hide" : ""}`}>
              {/* Konten Sidebar */}
            </div>
            <div className="box">
                {/* Content main */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default template