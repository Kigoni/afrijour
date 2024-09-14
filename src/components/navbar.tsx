"use client";
import { languages } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

interface NavbarProps {
  setSelectedLanguage: (languageCode: string) => void;
  selectedLanguage: string;
}

const Navbar =  ({ setSelectedLanguage, selectedLanguage }: NavbarProps) => {
  const [isActive, setIsActive] = useState(false);


  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    // Additional logic if needed
  };

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const accordions = document.querySelectorAll(".accordion-item");
    accordions.forEach((item) => {
      const label = item.querySelector(".accordion-header");
      label?.addEventListener("click", () => {
        accordions.forEach((accordionItem) => {
          accordionItem.classList.remove("active");
        });
        item.classList.toggle("active");
      });
    });
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header?.classList.toggle("scrolling", window.scrollY > 0);
    });
  }, []);

  useEffect(() => {
    const menu = document.querySelector(".menu-block") as HTMLElement;
    const menuMain = menu.querySelector(".site-menu-main") as HTMLElement;
    const submenuAll = menu.querySelectorAll(
      ".sub-menu"
    ) as NodeListOf<HTMLElement>;
    const goBack = menu.querySelector(".go-back") as HTMLElement;
    const menuTrigger = document.querySelector(
      ".mobile-menu-trigger"
    ) as HTMLElement;
    const closeMenu = menu.querySelector(".mobile-menu-close") as HTMLElement;
    let subMenu: HTMLElement | null;
    const subMenuArray: string[] = [];
    const subMenuTextArray: string[] = [];

    function last(array: string[]): string {
      return array[array.length - 1];
    }

    function last2(array: string[]): string {
      return array[array.length - 2];
    }

    function toggleMenu() {
      menu.classList.toggle("active");
      document.querySelector(".menu-overlay")?.classList.toggle("active");
    }

    function showSubMenu(hasChildren: HTMLElement) {
      for (let i = 0; i < submenuAll.length; i++) {
        submenuAll[i].classList.remove("active");
      }
      subMenu = hasChildren.querySelector(".sub-menu") as HTMLElement;
      subMenuArray.push(subMenu.id);
      subMenu.classList.add("active");
      subMenu.style.animation = "slideLeft 0.5s ease forwards";
      const menuTitle =
        hasChildren.querySelector(".drop-trigger")?.textContent || "";
      subMenuTextArray.push(menuTitle);

      menu.querySelector(".current-menu-title")!.innerHTML = menuTitle;
      menu.querySelector(".mobile-menu-head")?.classList.add("active");
    }

    goBack.addEventListener("click", () => {
      const lastItem = last(subMenuArray);
      const lastItemText = last2(subMenuTextArray);
      subMenuArray.pop();
      subMenuTextArray.pop();
      if (subMenuArray.length >= 0) {
        document.getElementById(lastItem)!.style.animation =
          "slideRight 0.5s ease forwards";
        menu.querySelector(".current-menu-title")!.innerHTML = lastItemText;
        setTimeout(() => {
          document.getElementById(lastItem)!.classList.remove("active");
        }, 300);
      }
      if (subMenuArray.length === 0) {
        menu.querySelector(".mobile-menu-head")?.classList.remove("active");
      }
    });

    menuMain.addEventListener("click", (e) => {
      if (!menu.classList.contains("active")) {
        return;
      }
      if (
        e.target &&
        (e.target as HTMLElement).closest(".nav-item-has-children")
      ) {
        const hasChildren = (e.target as HTMLElement).closest(
          ".nav-item-has-children"
        ) as HTMLElement;
        showSubMenu(hasChildren);
      }
    });

    menuTrigger.addEventListener("click", () => {
      console.log("menu click");
      toggleMenu();
    });

    closeMenu.addEventListener("click", () => {
      toggleMenu();
    });

    document.querySelector(".menu-overlay")?.addEventListener("click", () => {
      toggleMenu();
    });
    const handleResize = () => {
      if (window.innerWidth > 991) {
        if (menu.classList.contains("active")) {
          toggleMenu();
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".menu-block")) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  return (
    <>
      {/*...::: Header Start :::... */}
      <header
        className="site-header site-header--absolute is--white py-3"
        id="sticky-menu"
      >
        <div className="container-default">
          <div className="flex items-center justify-between gap-x-8">
            {/* Header Logo */}
            <Link className="" href="/">
              <h1 className="text-4xl">AfriJour</h1>
              {/* <Image
                src="assets/img/logo-violet-dark.png"
                alt="Masco"
                width={109}
                height={24}
              /> */}
            </Link>
            {/* Header Logo */}
            {/* Header Navigation */}
            <div className="menu-block-wrapper">
              <div className={`menu-overlay ${isActive ? "active" : ""}`} />
              <nav
                className={`menu-block ${isActive ? "active" : ""}`}
                id="append-menu-header"
              >
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa-solid fa-angle-left" />
                  </div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close" onClick={handleMenuClick}>
                    ×
                  </div>
                </div>
                <ul className="site-menu-main">
                  <li className="nav-item">
                    <Link className="nav-link-item" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#features">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#journals">
                      Journals
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#testimonials">
                      Testimonials
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Header Navigation */}
            {/* Header User Event */}
            <div className="flex items-center gap-6">
              {/* <Link
                className="btn-text hidden hover:text-ColorViolet sm:inline-block"
                href="/login"
              >
                Login
              </Link> */}
                <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
              <Link
                className="group relative hidden sm:inline-block"
                href="https://afrijour-dashboard.vercel.app/"
              >
                <div className="btn is-rounded is-violet">Dashboard</div>
                <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
              </Link>
            
              {/* Responsive Offcanvas Menu Button */}
              <div className="block lg:hidden">
                <button
                  id="openBtn"
                  className="hamburger-menu mobile-menu-trigger"
                  onClick={handleMenuClick}
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
            {/* Header User Event */}
          </div>
        </div>
      </header>
      {/*...::: Header End :::... */}
    </>
  );
};

export default Navbar;
