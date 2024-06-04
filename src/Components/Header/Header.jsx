import React from "react";
import "../Header/Header.css";
import { useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import logo from "../../imgs/logo1.png";
const Header = () => {
  const [shownav, setShownav] = useState(true);
  const [closenav, setclosenav] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 550) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <nav
        class={
          color
            ? "navbar navbar-expand-lg navbar_BG rounded-0"
            : "navbar navbar-expand-lg"
        }
      >
        <div class="container">
          <img src={logo} alt="logo" className="logo mt-1" />
          <a class="navbar-brand fw-bold mt-1 " href="/">
            ذَكّــــــرنــــي
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {shownav && (
              <span
                onClick={() => {
                  setShownav(!shownav);
                  setclosenav(!closenav);
                }}
                class=""
              >
                <i class="fa-solid fa-bars-staggered navbaar-icon"></i>
              </span>
            )}

            {closenav && (
              <span
                onClick={() => {
                  setShownav(!shownav);
                  setclosenav(!closenav);
                }}
                class=""
              >
                <i class="fa-solid fa-xmark navbaar-icon"></i>
              </span>
            )}
          </button>
          <div
            class="collapse navbar-collapse navbar-list"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  الصفحة الرئيسية
                </NavLink>
              </li>
              <li class="nav-item dropdown editDropDown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#QURAN"
                  role="link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  القرآن الكريم
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/quran">
                      قراءة سور القرآن الكريم
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/listen">
                      الأستماع الي القران الكريم بصوت جميع الشيوخ{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#MAWAKIT">
                  مواقيت الصلاة{" "}
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#AhadithWITHOUTHEADER"
                >
                  أحاديث
                </a>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/hsenelmoslem"
                >
                  حصن المسلم
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link twasl"
                  aria-current="page"
                  to="/contact"
                >
                  تواصل معنا{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
