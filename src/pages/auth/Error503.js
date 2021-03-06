import React, { useState } from "react";
import { Link } from "react-router-dom";
import useToggleView from "../../Hooks/toggleView";

export default function Error503() {
  const [nav, setNav] = useState(true);
  const [nav1, setNav1] = useState(true);
  const [nav2, setNav2] = useState(true);
  const [wareHouse, setWareHouse] = useState(true);
  const [wareHouse1, setWareHouse1] = useState(true);
  const [Accounting, setAccounting] = useState(true);
  const [Accounting1, setAccounting1] = useState(true);
  const Report = useToggleView(true)
  const ReportChild = useToggleView(true)
  const Integration = useToggleView(true)

  return (
    <div id="main-wrapper" className={nav ? "show" : "show menu-toggle"}>
      <div className="nav-header ">
        <a href="#" className="brand-logo">
          <svg
            className="logo-abbr"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="svg-logo-rect"
              width="50"
              height="50"
              rx="6"
              fill="#EB8153"
            />
            <path
              className="svg-logo-path"
              d="M17.5158 25.8619L19.8088 25.2475L14.8746 11.1774C14.5189 9.84988 15.8701 9.0998 16.8205 9.75055L33.0924 22.2055C33.7045 22.5589 33.8512 24.0717 32.6444 24.3951L30.3514 25.0095L35.2856 39.0796C35.6973 40.1334 34.4431 41.2455 33.3397 40.5064L17.0678 28.0515C16.2057 27.2477 16.5504 26.1205 17.5158 25.8619ZM18.685 14.2955L22.2224 24.6007L29.4633 22.6605L18.685 14.2955ZM31.4751 35.9615L27.8171 25.6886L20.5762 27.6288L31.4751 35.9615Z"
              fill="white"
            />
          </svg>
          <svg
            className="brand-title"
            width="74"
            height="22"
            viewBox="0 0 103 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.048 23.192C11.336 23.192 13.576 20.856 13.576 16.12V0.599998H3.048V2.648H11.24V16.216C11.24 19.512 9.832 21.144 7.08 21.144C5.096 21.144 3.464 20.184 2.248 18.392L0.84 19.992C2.216 22.04 4.52 23.192 7.048 23.192ZM20.6793 23H23.0473V0.599998H20.6793V23Z"
              fill="black"
            />
            <path
              d="M44.4475 11.448C46.4955 10.616 47.8715 8.92 47.8715 6.36C47.8715 2.712 44.9915 0.599998 39.9995 0.599998H30.3355V23H40.6395C46.2395 23 49.0555 20.824 49.0555 17.016C49.0555 13.976 47.3275 12.088 44.4475 11.448ZM39.8395 2.552C43.4235 2.552 45.5035 3.928 45.5035 6.616C45.5035 9.304 43.4235 10.68 39.8395 10.68H32.7035V2.552H39.8395ZM40.6075 21.048H32.7035V12.632H40.6075C44.5435 12.632 46.6875 13.912 46.6875 16.824C46.6875 19.768 44.5435 21.048 40.6075 21.048ZM64.2525 23.192C70.9725 23.192 75.9965 18.36 75.9965 11.8C75.9965 5.24 70.9725 0.407999 64.2525 0.407999C57.4685 0.407999 52.4765 5.272 52.4765 11.8C52.4765 18.328 57.4685 23.192 64.2525 23.192ZM64.2525 21.08C58.8445 21.08 54.8125 17.144 54.8125 11.8C54.8125 6.456 58.8445 2.52 64.2525 2.52C69.6285 2.52 73.6285 6.456 73.6285 11.8C73.6285 17.144 69.6285 21.08 64.2525 21.08ZM91.0963 23.192C97.8163 23.192 102.84 18.36 102.84 11.8C102.84 5.24 97.8163 0.407999 91.0963 0.407999C84.3123 0.407999 79.3203 5.272 79.3203 11.8C79.3203 18.328 84.3123 23.192 91.0963 23.192ZM91.0963 21.08C85.6883 21.08 81.6562 17.144 81.6562 11.8C81.6562 6.456 85.6883 2.52 91.0963 2.52C96.4722 2.52 100.472 6.456 100.472 11.8C100.472 17.144 96.4722 21.08 91.0963 21.08Z"
              fill="#FFA500"
            />
            <path
              d="M44.4475 11.448C46.4955 10.616 47.8715 8.92 47.8715 6.36C47.8715 2.712 44.9915 0.599998 39.9995 0.599998H30.3355V23H40.6395C46.2395 23 49.0555 20.824 49.0555 17.016C49.0555 13.976 47.3275 12.088 44.4475 11.448ZM39.8395 2.552C43.4235 2.552 45.5035 3.928 45.5035 6.616C45.5035 9.304 43.4235 10.68 39.8395 10.68H32.7035V2.552H39.8395ZM40.6075 21.048H32.7035V12.632H40.6075C44.5435 12.632 46.6875 13.912 46.6875 16.824C46.6875 19.768 44.5435 21.048 40.6075 21.048ZM64.2525 23.192C70.9725 23.192 75.9965 18.36 75.9965 11.8C75.9965 5.24 70.9725 0.407999 64.2525 0.407999C57.4685 0.407999 52.4765 5.272 52.4765 11.8C52.4765 18.328 57.4685 23.192 64.2525 23.192ZM64.2525 21.08C58.8445 21.08 54.8125 17.144 54.8125 11.8C54.8125 6.456 58.8445 2.52 64.2525 2.52C69.6285 2.52 73.6285 6.456 73.6285 11.8C73.6285 17.144 69.6285 21.08 64.2525 21.08ZM91.0963 23.192C97.8163 23.192 102.84 18.36 102.84 11.8C102.84 5.24 97.8163 0.407999 91.0963 0.407999C84.3123 0.407999 79.3203 5.272 79.3203 11.8C79.3203 18.328 84.3123 23.192 91.0963 23.192ZM91.0963 21.08C85.6883 21.08 81.6562 17.144 81.6562 11.8C81.6562 6.456 85.6883 2.52 91.0963 2.52C96.4722 2.52 100.472 6.456 100.472 11.8C100.472 17.144 96.4722 21.08 91.0963 21.08Z"
              fill="black"
              fill-opacity="0.2"
            />
          </svg>
        </a>

        <div className="nav-control">
          <div
            className={nav ? "hamburger" : "hamburger is-active"}
            onClick={() => {
              setNav(!nav);
            }}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between"></div>
          </nav>
          <div className="sub-header">
            <div className="d-flex align-items-center flex-wrap mr-auto">
              <h5 className="dashboard_bar"></h5>
            </div>
          </div>
        </div>
      </div>

      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li className="nav-label first">Main Menu</li>
            <li className="mm-active">
              <Link
                className="ai-icon"
                to={{
                  pathname: "/",
                }}
              >
                <i className="flaticon-144-layout"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>

            <li className="">
              <Link
                className="ai-icon"
                to={{
                  pathname: "/products",
                }}
              >
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Products</span>
              </Link>
            </li>

            <li
              className={nav1 ? "" : "mm-active"}
              onClick={() => {
                setNav1(!nav1);
              }}
            >
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-077-menu-1"></i>{" "}
                <span className="nav-text">Items</span>
              </a>
            </li>
            <li>
              <ul
                aria-expanded="false"
                className={nav1 ? "mm-collapse" : "mm-collapse mm-show"}
              >
                <li
                  className={nav2 ? "" : "mm-active"}
                  onClick={() => {
                    setNav2(!nav2);
                  }}
                >
                  <a
                    className="has-arrow"
                    href="javascript:void(0);"
                    aria-expanded="false"
                  >
                    Catalog
                  </a>
                  <ul
                    aria-expanded="false"
                    className={
                      nav2 ? "left mm-collapse" : "left mm-collapse mm-show"
                    }
                    onClick={() => {
                      setNav2(!nav2);
                    }}
                  >
                    <li>
                      <Link to={{ pathname: "/503" }}>In Review</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Master</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Online</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Variation</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Archives</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Failed Upload</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Category</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Map Category</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={{ pathname: "/503" }}>Supply</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/503" }}>Price</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/503" }}>Promotion</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/503" }}>Bundle</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/503" }}>Shelf</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/503" }}>Activity</Link>
                </li>
              </ul>
            </li>

            <li className=""> 
              <Link className="ai-icon" to={{ pathname: "/503", }}>
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Orders</span>
              </Link>
            </li>

            <li className={wareHouse ? "" : "mm-active"} onClick={() => { setWareHouse(!wareHouse); }} >
              <a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <i className="flaticon-077-menu-1"></i>{" "}
                <span className="nav-text">Warehouse</span>
              </a>
            </li>
            <li>
              <ul aria-expanded="false" className={wareHouse ? "mm-collapse" : "mm-collapse mm-show"} >
                <li>
                  <Link to={{ pathname: "/503" }}>Barang Masuk</Link>
                  <Link to={{ pathname: "/503" }}>Pemrosesan Pesanan</Link>
                  <Link to={{ pathname: "/503" }}>Barang Keluar</Link>
                </li>
                <li className={wareHouse1 ? "" : "mm-active"} onClick={() => { setWareHouse1(!wareHouse1); }} >
                  <a className="has-arrow" href="javascript:void(0);" aria-expanded="false" >
                    Pemeliaharaan Stok
                  </a>
                  <ul aria-expanded="false" className={ wareHouse1 ? "left mm-collapse" : "left mm-collapse mm-show" } onClick={() => { setWareHouse1(!wareHouse1); }} >
                    <li>
                      <Link to={{ pathname: "/503" }}>Penyesuaian Stok & Opname</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Internal Transfer</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className=""> 
              <Link className="ai-icon" to={{ pathname: "/503", }}>
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Pengiriman</span>
              </Link>
            </li>

            <li className=""> 
              <Link className="ai-icon" to={{ pathname: "/503", }}>
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Retur Online</span>
              </Link>
            </li>

            <li className={Accounting ? "" : "mm-active"} onClick={() => { setAccounting(!Accounting); }} >
              <a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <i className="flaticon-077-menu-1"></i>{" "}
                <span className="nav-text">Accounting</span>
              </a>
            </li>
            <li>
              <ul aria-expanded="false" className={Accounting ? "mm-collapse" : "mm-collapse mm-show"} >
                <li>
                  <Link to={{ pathname: "/503" }}>Barang Masuk</Link>
                  <Link to={{ pathname: "/503" }}>Pemrosesan Pesanan</Link>
                  <Link to={{ pathname: "/503" }}>Barang Keluar</Link>
                </li>
                <li className={Accounting1 ? "" : "mm-active"} onClick={() => { setAccounting1(!Accounting1); }} >
                  <a className="has-arrow" href="javascript:void(0);" aria-expanded="false" >
                    Pemeliaharaan Stok
                  </a>
                  <ul aria-expanded="false" className={ Accounting1 ? "left mm-collapse" : "left mm-collapse mm-show" } onClick={() => { setAccounting1(!wareHouse1); }} >
                    <li>
                      <Link to={{ pathname: "/503" }}>Penyesuaian Stok & Opname</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Internal Transfer</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            
            <li className=""> 
              <Link className="ai-icon" to={{ pathname: "/503", }}>
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Contact</span>
              </Link>
            </li>

            <li className={Report.view ? "" : "mm-active"} onClick={ Report.onChange } >
              <a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <i className="flaticon-077-menu-1"></i>{" "}
                <span className="nav-text">Report</span>
              </a>
            </li>
            <li>
              <ul aria-expanded="false" className={Report.view ? "mm-collapse" : "mm-collapse mm-show"} >
                <li>
                  <Link to={{ pathname: "/503" }}>Barang Masuk</Link>
                  <Link to={{ pathname: "/503" }}>Pemrosesan Pesanan</Link>
                  <Link to={{ pathname: "/503" }}>Barang Keluar</Link>
                </li>
                <li className={ReportChild.view ? "" : "mm-active"} onClick={ ReportChild.onChange } >
                  <a className="has-arrow" href="javascript:void(0);" aria-expanded="false" >
                    Pemeliaharaan Stok
                  </a>
                  <ul aria-expanded="false" className={ ReportChild.view ? "left mm-collapse" : "left mm-collapse mm-show" }>
                    <li>
                      <Link to={{ pathname: "/503" }}>Penyesuaian Stok & Opname</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/503" }}>Internal Transfer</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className=""> 
              <Link className="ai-icon" to={{ pathname: "/503", }}>
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Setting</span>
              </Link>
            </li>

            <li className={Integration.view ? "" : "mm-active"} onClick={ Integration.onChange } >
              <a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <i className="flaticon-077-menu-1"></i>{" "}
                <span className="nav-text">Report</span>
              </a>
            </li>
            <li>
              <ul aria-expanded="false" className={Integration.view ? "mm-collapse" : "mm-collapse mm-show"} >
                <li>
                  <Link to={{ pathname: "/503" }}>Setting</Link>
                  <Link to={{ pathname: "/503" }}>Activity</Link>
                </li>
              </ul>
            </li>

            <li className=""> 
              <Link className="ai-icon" to={{ pathname: "/503", }}>
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Marketplace</span>
              </Link>
            </li>

            <li className=""> 
              <Link className="ai-icon" to={{ pathname: "/503", }}>
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Help</span>
              </Link>
            </li>

          </ul>
          <div className="copyright">
            <p>
              <strong>Jube Admin Dashboard</strong> ?? 2021 All Rights Reserved
            </p>
            <p className="fs-12">
              Made with <span className="heart"></span> by Tamzone
            </p>
          </div>
        </div>
      </div>

      <div className="content-body authincation h-100 mt-5">
        <div className="container h-100 mt-5">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-5">
              <div className="form-input-content text-center error-page">
                <h1 className="error-text font-weight-bold">503</h1>
                <h4>
                  <i className="fa fa-times-circle text-danger"></i> Service
                  Unavailable
                </h4>
                <p>Under construction!</p>
                <div>
                  <Link to={{ pathname: "/" }} className="btn btn-primary">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
