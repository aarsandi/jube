import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [nav, setNav] = useState(true);
  const [nav1, setNav1] = useState(true);
  const [nav2, setNav2] = useState(true);

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
              <Link
                className="ai-icon"
                to={{
                  pathname: "/Analytics",
                }}
              >
                <i className="flaticon-061-puzzle"></i>
                <span className="nav-text">Analytics</span>
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
            <div className="col-xl-9 col-xxl-8">
              <div className="card">
                <div className="card-header border-0 flex-wrap pb-0">
                  <div className="mb-3">
                    <h4 className="fs-20 text-black">Market Overview</h4>
                    <p className="mb-0 fs-12 text-black">
                      Summary of Market Updated as per Today
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
                        <span className="d-block  font-w500 mt-2">Shopee</span>
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
                          Tokopedia
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
                          Bukalapak
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
                        <span className="d-block font-w500 mt-2">Lazada</span>
                      </label>
                    </div>
                  </div>
                  <select className="style-1 btn-secondary default-select">
                    <option>Weekly (2021)</option>
                    <option>Daily (2021)</option>
                    <option>Yearly (2021)</option>
                  </select>
                </div>
                <div className="card-body pb-2 px-3">
                  <div id="marketChart" className="market-line"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-xxl-4">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="fs-20 text-black">Current Statistic</h4>
                </div>
                <div className="card-body pb-0">
                  <div id="currentChart" className="current-chart"></div>
                  <div className="chart-content">
                    <div className="d-flex justify-content-between mb-2 align-items-center">
                      <div>
                        <svg
                          className="mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="15"
                            height="15"
                            rx="7.5"
                            fill="#EB8153"
                          />
                        </svg>
                        <span className="fs-14">Income (66%)</span>
                      </div>
                      <div>
                        <h5 className="mb-0">Rp 167,884.21</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2 align-items-center">
                      <div>
                        <svg
                          className="mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="15"
                            height="15"
                            rx="7.5"
                            fill="#71B945"
                          />
                        </svg>

                        <span className="fs-14">Income (50%)</span>
                      </div>
                      <div>
                        <h5 className="mb-0">Rp 56,411.33</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2 align-items-center">
                      <div>
                        <svg
                          className="mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="15"
                            height="15"
                            rx="7.5"
                            fill="#4A8CDA"
                          />
                        </svg>
                        <span className="fs-14">Income (11%)</span>
                      </div>
                      <div>
                        <h5 className="mb-0">Rp 81,981.22</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2 align-items-center">
                      <div>
                        <svg
                          className="mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="15"
                            height="15"
                            rx="7.5"
                            fill="#6647BF"
                          />
                        </svg>
                        <span className="fs-14">Income (23%)</span>
                      </div>
                      <div>
                        <h5 className="mb-0">Rp 12,432.51</h5>
                      </div>
                    </div>
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
                        <h4 className="fs-20 text-black">Quick Trade</h4>
                        <p className="mb-0 fs-12">
                          Lorem ipsum dolor sit amet, consectetur
                        </p>
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
                            Yearly (2021)
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
                        <form className="form-wrapper">
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
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut
                                </p>
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
                        </form>
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
                      <p className="mb-1 text-white fs-14">Main Balance</p>
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
                      <p className="fs-14 mb-1 text-white">Main Balance</p>
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
                      <p className="mb-1 text-white fs-14">Main Balance</p>
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
                      <p className="mb-1 text-white fs-14">Main Balance</p>
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
