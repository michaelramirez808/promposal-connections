import React from "react";

import InfoModal from "../modals/InfoModal";
import SettingsModal from "../modals/InfoModal/SettingsModal";

function Header() {
  return (
    <header>
      <div class ='title-Header'>
        <h1 className="title">Connections</h1>
        <h1 className="updated-date">March 8, 2024</h1>
      </div>
      <div class="info-Header">
      <SettingsModal />
        <InfoModal />
      </div>
    </header>
  );
}

export default Header;
