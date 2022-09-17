import React from "react";
import { BsTelegram, BsInstagram, BsGithub } from "react-icons/bs";

function Credit() {
  return (
    <div>
      <br />
      <h5>©️2022 MICKY</h5>
      <a href="https://t.me/Miki_Zenebe" style={{ marginRight: 10 }}>
        <BsTelegram fill="#F09819" size={20} />
      </a>

      <a
        href="https://www.instagram.com/micky_zenebe/"
        style={{ marginRight: 10 }}
      >
        <BsInstagram fill="#F09819" size={20} />
      </a>

      <a href="https://github.com/MikiZenebe">
        <BsGithub fill="#F09819" size={20} />
      </a>
    </div>
  );
}

export default Credit;
