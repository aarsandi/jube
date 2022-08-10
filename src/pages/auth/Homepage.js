import React, { useState } from "react";
import { Link } from "react-router-dom";
import useToggleView from "../../Hooks/toggleView";
import Chart from "react-apexcharts";

export default function Homepage() {
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

  const [chart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022],
      },
    },
    series: [
      {
        name: "Progress Stock",
        data: [30, 40, 45, 50, 49],
      },
    ],
  });
  
  return (
    <div id="main-wrapper" className={nav ? "show" : "show menu-toggle"}>
      <div className="nav-header ">
        <a href="#" className="brand-logo">
          <img
              src={require("../../assets/logo.png")}
              style={{
                height: 60,
                width: 60,
                boxSizing: "border-box",
                resize: "block",
              }}
              alt="bonang"
            />
          <svg
            className="brand-title"
            width="74"
            height="22"
            viewBox="0 0 103 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.992188 0.6875H5.10547C7.80078 0.6875 9.53906 1.46484 10.3203 3.01953C10.6094 3.60547 10.7539 4.1875 10.7539 4.76562C10.7539 5.34375 10.6914 5.80469 10.5664 6.14844C10.4492 6.48438 10.2891 6.79297 10.0859 7.07422C9.70312 7.60547 9.19531 8.05859 8.5625 8.43359V8.48047C9.73438 8.81641 10.5977 9.40625 11.1523 10.25C11.5742 10.8906 11.7852 11.6016 11.7852 12.3828C11.7852 13.1641 11.6289 13.8398 11.3164 14.4102C11.0117 14.9805 10.5859 15.457 10.0391 15.8398C8.92188 16.6133 7.42969 17 5.5625 17H0.992188V0.6875ZM5.55078 7.80078C6.80859 7.80078 7.65625 7.30469 8.09375 6.3125C8.24219 5.96094 8.31641 5.57031 8.31641 5.14062C8.31641 4.70312 8.26172 4.32812 8.15234 4.01562C8.04297 3.69531 7.86719 3.42188 7.625 3.19531C7.10938 2.71094 6.33203 2.46875 5.29297 2.46875H3.33594V7.80078H5.55078ZM9.34766 12.4297C9.34766 10.5312 8.20703 9.58203 5.92578 9.58203H3.33594V15.2188H5.5625C7.28125 15.2188 8.44141 14.6992 9.04297 13.6602C9.24609 13.3086 9.34766 12.8984 9.34766 12.4297ZM14.293 8.86719C14.293 7.59375 14.4844 6.44141 14.8672 5.41016C15.25 4.37891 15.7812 3.5 16.4609 2.77344C17.8906 1.25781 19.7461 0.5 22.0273 0.5C24.3164 0.5 26.168 1.25781 27.582 2.77344C29.0195 4.3125 29.7383 6.34375 29.7383 8.86719C29.7383 11.3906 29.0195 13.4141 27.582 14.9375C26.1758 16.4375 24.3242 17.1875 22.0273 17.1875C19.7383 17.1875 17.8828 16.4375 16.4609 14.9375C15.0156 13.4062 14.293 11.3828 14.293 8.86719ZM16.6367 8.85547C16.6367 10.6367 17.0703 12.1094 17.9375 13.2734C18.9141 14.5703 20.2773 15.2188 22.0273 15.2188C23.7773 15.2188 25.1367 14.5703 26.1055 13.2734C26.9648 12.125 27.3945 10.6602 27.3945 8.87891C27.3945 7.08203 26.9648 5.60156 26.1055 4.4375C25.1367 3.125 23.7773 2.46875 22.0273 2.46875C20.2695 2.46875 18.9062 3.125 17.9375 4.4375C17.0703 5.60156 16.6367 7.07422 16.6367 8.85547Z" fill="black"/>
            <path d="M32.8086 0.6875H34.4961L43.0156 12.7227L42.8867 11.0352V0.6875H45.207V17H43.5312L36.418 7.00391L35 4.96484L35.1289 7.00391V17H32.8086V0.6875ZM54.2188 0.6875H55.8242L62.7031 17H60.2656L58.6133 12.8984H51.3711L49.7305 17H47.3398L54.2188 0.6875ZM57.8633 11.0234L55.0039 3.875L52.1328 11.0234H57.8633ZM64.8242 0.6875H66.5117L75.0312 12.7227L74.9023 11.0352V0.6875H77.2227V17H75.5469L68.4336 7.00391L67.0156 4.96484L67.1445 7.00391V17H64.8242V0.6875ZM93.0781 16.8359C92.1797 17.0703 90.9922 17.1875 89.5156 17.1875C88.0469 17.1875 86.7852 17.0039 85.7305 16.6367C84.6836 16.2695 83.7812 15.7266 83.0234 15.0078C81.3984 13.4922 80.5859 11.3828 80.5859 8.67969C80.5859 6.91406 81.0078 5.39062 81.8516 4.10938C82.9922 2.36719 84.7461 1.25781 87.1133 0.78125C87.8398 0.640625 88.7305 0.570312 89.7852 0.570312C90.8398 0.570312 91.75 0.621094 92.5156 0.722656V2.97266C91.8438 2.80078 90.8828 2.71484 89.6328 2.71484C88.3906 2.71484 87.3711 2.85547 86.5742 3.13672C85.7773 3.41797 85.1172 3.82031 84.5938 4.34375C83.5469 5.36719 83.0234 6.8125 83.0234 8.67969C83.0234 10.5781 83.5391 12.0977 84.5703 13.2383C85.6953 14.4805 87.3008 15.1016 89.3867 15.1016C89.8711 15.1016 90.3203 15.082 90.7344 15.043V9.03125H93.0781V16.8359Z" fill="#EB8153"/>
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
              <h5 className="dashboard_bar">Dashboard</h5>
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
              <strong>Jube Admin Dashboard</strong> © 2021 All Rights Reserved
            </p>
            <p className="fs-12">
              Made with <span className="heart"></span> by Tamzone
            </p>
          </div>
        </div>
      </div>

      <div className="content-body">
        <div className="container-fluid">
          <div className="form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center">
            <h2 className="font-w600 title mb-2 mr-auto ">Dashboard</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header border-0 flex-wrap pb-0">
                  <div className="mb-3">
                    <h4 className="fs-20 text-black"></h4>
                    <p className="mb-0 fs-12 text-black">
                      Summary of Analytics Updated as per Today
                    </p>
                  </div>
                  <div className="d-flex flex-wrap mb-2">
                    <div className="custom-control check-switch custom-checkbox mr-4 mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck9"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck9"
                      >
                        <span className="d-block  font-w500 mt-2">
                          Past Stock
                        </span>
                      </label>
                    </div>
                    <div className="custom-control check-switch custom-checkbox mr-4 mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck91"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck91"
                      >
                        <span className="d-block  font-w500 mt-2">
                          Current Stock
                        </span>
                      </label>
                    </div>
                    <div className="custom-control check-switch custom-checkbox mr-4 mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck92"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck92"
                      >
                        <span className="d-block font-w500 mt-2">
                          Upcoming Stock
                        </span>
                      </label>
                    </div>
                    <div className="custom-control check-switch custom-checkbox mr-4 mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck93"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck93"
                      >
                        <span className="d-block font-w500 mt-2">
                          Stock Trend
                        </span>
                      </label>
                    </div>
                  </div>
                  <select className="style-1 btn-secondary default-select">
                    <option>Weekly (2022)</option>
                    <option>Daily (2022)</option>
                    <option>Yearly (2022)</option>
                  </select>
                </div>
                <div className="card-body pb-2 px-3">
                  <div id="marketChart" className="market-line">
                    <Chart
                      options={chart.options}
                      series={chart.series}
                      type="bar"
                      width="500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-xxl-12">
              <div className="row">
                <div className="col-xl-12 mt-2">
                  <div className="card">
                    <div className="card-header d-sm-flex d-block pb-0 border-0">
                      <div>
                        <h4 className="fs-20 text-black">Market Progress</h4>
                        <p className="mb-0 fs-12">Summary of your Market</p>
                      </div>
                      <div className="dropdown custom-dropdown d-block mt-3 mt-sm-0 mb-0">
                        <div
                          className="btn btn-light d-flex align-items-center svg-btn"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            className="mr-2"
                            width="25"
                            height="25"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z"
                              fill="#FFAB2D"
                            />
                            <path
                              d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.1569 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z"
                              fill="#FFAB2D"
                            />
                            <path
                              d="M21 9.15527e-05C9.40213 9.15527e-05 0.00012207 9.4021 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9867 9.40759 32.5924 0.0133667 21 9.15527e-05ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4997V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1717 34.4999 22.5001 33.8284 22.5001 32.9998V31.4997H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1718 34.4999 16.5002 33.8284 16.5002 32.9998V31.4997H12.0004C11.1718 31.4997 10.5003 30.8282 10.5003 30.0001C10.5003 29.1715 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00018C16.5002 8.17163 17.1718 7.50009 18.0003 7.50009C18.8289 7.50009 19.5004 8.17163 19.5004 9.00018V10.4998H22.5001V9.00018C22.5001 8.17163 23.1717 7.50009 24.0002 7.50009C24.8288 7.50009 25.5003 8.17163 25.5003 9.00018V10.4998C28.7999 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7376 22.1279 31.4943 23.7699 31.5002 25.4998Z"
                              fill="#FFAB2D"
                            />
                          </svg>
                          <span className="text-black fs-16">
                            Yearly (2022)
                          </span>
                          <i className="fa fa-angle-down text-black scale3 ml-2"></i>
                        </div>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#" className="dropdown-item">
                            Weekly (2021)
                          </a>
                          <a href="#" className="dropdown-item ">
                            Daily (2021)
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="basic-form">
                        <Chart
                          options={chart.options}
                          series={chart.series}
                          type="area"
                          width="100%"
                        />
                        {/* <form className="form-wrapper">
                          <div className="form-group">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  Amount BTC
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="52.5"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text ">
                                  Price BPL
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0,000000"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  Fee (1%)
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0,000000"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  Total BPL
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0,000000"
                              />
                            </div>
                          </div>
                          <div className="row mt-4 align-items-center">
                            <div className="col-lg-6">
                              <div>
                                <p className="mb-0 fs-14"></p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="d-flex justify-content-end">
                                <a
                                  href="javascript:void(0);"
                                  className="btn  btn-success text-white text-nowrap"
                                >
                                  BUY
                                  <svg
                                    className="ml-3 scale3"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z"
                                      fill="white"
                                      stroke="white"
                                    ></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-danger ml-3 text-nowrap"
                                >
                                  SELL
                                  <svg
                                    className="ml-3 scale5"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z"
                                      fill="white"
                                      stroke="white"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </form> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card-bx stacked card">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/card/card1.jpg`}
                      alt=""
                    />
                    <div className="card-info">
                      <p className="mb-1 text-white fs-14">Net Income</p>
                      <div className="d-flex justify-content-between">
                        <h2 className="num-text text-white mb-5 font-w600">
                          Rp 673,412.66
                        </h2>
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.2744 18.8013H16.0334V23.616H19.2744C19.9286 23.616 20.5354 23.3506 20.9613 22.9053C21.4066 22.4784 21.672 21.8726 21.672 21.1989C21.673 19.8813 20.592 18.8013 19.2744 18.8013Z"
                            fill="white"
                          />
                          <path
                            d="M18 0C8.07429 0 0 8.07429 0 18C0 27.9257 8.07429 36 18 36C27.9257 36 36 27.9247 36 18C36 8.07531 27.9247 0 18 0ZM21.6627 26.3355H19.5398V29.6722H17.3129V26.3355H16.0899V29.6722H13.8528V26.3355H9.91954V24.2414H12.0898V11.6928H9.91954V9.59863H13.8528V6.3288H16.0899V9.59863H17.3129V6.3288H19.5398V9.59863H21.4735C22.5535 9.59863 23.5491 10.044 24.2599 10.7547C24.9706 11.4655 25.416 12.4611 25.416 13.5411C25.416 15.6549 23.7477 17.3798 21.6627 17.4744C24.1077 17.4744 26.0794 19.4647 26.0794 21.9096C26.0794 24.3453 24.1087 26.3355 21.6627 26.3355Z"
                            fill="white"
                          />
                          <path
                            d="M20.7062 15.8441C21.095 15.4553 21.3316 14.9338 21.3316 14.3465C21.3316 13.1812 20.3842 12.2328 19.2178 12.2328H16.0334V16.4695H19.2178C19.7959 16.4695 20.3266 16.2226 20.7062 15.8441Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="d-flex">
                        <div className="mr-4 text-white">
                          <p className="fs-12 mb-1 op6">VALID THRU</p>
                          <span>08/21</span>
                        </div>
                        <div className="text-white">
                          <p className="fs-12 mb-1 op6">CARD HOLDER</p>
                          <span>PT Kognitif Skema Indonesia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card-bx stacked card">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/card/card2.jpg`}
                      alt=""
                    />
                    <div className="card-info">
                      <p className="fs-14 mb-1 text-white">Gross Income</p>
                      <div className="d-flex justify-content-between">
                        <h2 className="num-text text-white mb-5 font-w600">
                          Rp 673,412.66
                        </h2>
                        <svg
                          width="55"
                          height="34"
                          viewBox="0 0 55 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="38.0091"
                            cy="16.7788"
                            r="16.7788"
                            fill="white"
                            fill-opacity="0.67"
                          />
                          <circle
                            cx="17.4636"
                            cy="16.7788"
                            r="16.7788"
                            fill="white"
                            fill-opacity="0.67"
                          />
                        </svg>
                      </div>
                      <div className="d-flex">
                        <div className="mr-4 text-white">
                          <p className="fs-12 mb-1 op6">VALID THRU</p>
                          <span>08/21</span>
                        </div>
                        <div className="text-white">
                          <p className="fs-12 mb-1 op6">CARD HOLDER</p>
                          <span>PT Kognitif Skema Indonesia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card-bx stacked card">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/card/card3.jpg`}
                      alt=""
                    />
                    <div className="card-info">
                      <p className="mb-1 text-white fs-14">Profit</p>
                      <div className="d-flex justify-content-between">
                        <h2 className="num-text text-white mb-5 font-w600">
                          Rp 673,412.66
                        </h2>
                        <svg
                          width="55"
                          height="34"
                          viewBox="0 0 55 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="38.0091"
                            cy="16.7788"
                            r="16.7788"
                            fill="white"
                            fill-opacity="0.67"
                          />
                          <circle
                            cx="17.4636"
                            cy="16.7788"
                            r="16.7788"
                            fill="white"
                            fill-opacity="0.67"
                          />
                        </svg>
                      </div>
                      <div className="d-flex">
                        <div className="mr-4 text-white">
                          <p className="fs-12 mb-1 op6">VALID THRU</p>
                          <span>08/21</span>
                        </div>
                        <div className="text-white">
                          <p className="fs-12 mb-1 op6">CARD HOLDER</p>
                          <span>PT Kognitif Skema Indonesia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card-bx stacked card">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/card/card4.jpg`}
                      alt=""
                    />
                    <div className="card-info">
                      <p className="mb-1 text-white fs-14">Loss</p>
                      <div className="d-flex justify-content-between">
                        <h2 className="num-text text-white mb-5 font-w600">
                          Rp 673,412.66
                        </h2>
                        <svg
                          width="55"
                          height="34"
                          viewBox="0 0 55 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="38.0091"
                            cy="16.7788"
                            r="16.7788"
                            fill="white"
                            fill-opacity="0.67"
                          />
                          <circle
                            cx="17.4636"
                            cy="16.7788"
                            r="16.7788"
                            fill="white"
                            fill-opacity="0.67"
                          />
                        </svg>
                      </div>
                      <div className="d-flex">
                        <div className="mr-4 text-white">
                          <p className="fs-12 mb-1 op6">VALID THRU</p>
                          <span>08/21</span>
                        </div>
                        <div className="text-white">
                          <p className="fs-12 mb-1 op6">CARD HOLDER</p>
                          <span>PT Kognitif Skema Indonesia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
