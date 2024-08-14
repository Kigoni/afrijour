"use client";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
const Navbar = () => {
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
            <a href="index.html" className="">
              <Image
                src="/assets/img/logo.png"
                alt="Orderfiti"
                width={96}
                height={100}
                className="w-32"
              />
            </a>
            {/* Header Logo */}
            {/* Header Navigation */}
            <div className="menu-block-wrapper">
              <div className="menu-overlay" />
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa-solid fa-angle-left" />
                  </div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close">×</div>
                </div>
                <ul className="site-menu-main">
                  <li className="nav-item nav-item-has-children">
                    <a className="nav-link-item drop-trigger" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#about" className="nav-link-item drop-trigger">
                      About
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#features" className="nav-link-item drop-trigger">
                      Features
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#faq" className="nav-link-item drop-trigger">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#contact" className="nav-link-item drop-trigger">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Header Navigation */}
            {/* Header User Event */}
            <div className="flex items-center gap-6">
              <a
                href="signup.html"
                className="group relative z-10 hidden sm:inline-block"
              >
                <div className="btn is-rounded btn-animation group is-lime">
                  Sign up free
                </div>
                <div className="is-rounded absolute inset-0 -z-10 translate-x-[5px] translate-y-[5px] bg-ColorLime transition-all duration-300 ease-linear group-hover:translate-x-0 group-hover:translate-y-0" />
              </a>
              {/* Responsive Offcanvas Menu Button */}
              <div className="block lg:hidden">
                <button
                  id="openBtn"
                  className="hamburger-menu mobile-menu-trigger"
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
