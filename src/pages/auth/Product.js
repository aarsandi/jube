import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [nav, setNav] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const res = await fetch("http://141.136.47.149/management/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiZWFyZXIiLCJzdWIiOjE0MiwiaWF0IjoxNjU3MDEwNjYzLCJleHAiOjE2NTc2MTU0NjN9.zKLy8KXvst0SCG5bNRXXkqYEfpnqa1A9LeCzICDGLQI",
        },
      });
      const json = await res.json();
      setData(json.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const WAIT_TIME = 5000;

  React.useEffect(() => {
    const datas = setInterval(() => {
      getData();
    }, WAIT_TIME);

    return () => clearInterval(datas);
  }, [data]);

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
            viewBox="0 0 74 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-logo-path"
              d="M0.784 17.556L10.92 5.152H1.176V1.12H16.436V4.564L6.776 16.968H16.548V21H0.784V17.556ZM25.7399 21.28C24.0785 21.28 22.6599 20.9347 21.4839 20.244C20.3079 19.5533 19.4025 18.6387 18.7679 17.5C18.1519 16.3613 17.8439 15.1293 17.8439 13.804C17.8439 12.3853 18.1519 11.088 18.7679 9.912C19.3839 8.736 20.2799 7.79333 21.4559 7.084C22.6319 6.37467 24.0599 6.02 25.7399 6.02C27.4012 6.02 28.8199 6.37467 29.9959 7.084C31.1719 7.79333 32.0585 8.72667 32.6559 9.884C33.2719 11.0413 33.5799 12.2827 33.5799 13.608C33.5799 14.1493 33.5425 14.6253 33.4679 15.036H22.6039C22.6785 16.0253 23.0332 16.7813 23.6679 17.304C24.3212 17.808 25.0585 18.06 25.8799 18.06C26.5332 18.06 27.1585 17.9013 27.7559 17.584C28.3532 17.2667 28.7639 16.8373 28.9879 16.296L32.7959 17.36C32.2172 18.5173 31.3119 19.46 30.0799 20.188C28.8665 20.916 27.4199 21.28 25.7399 21.28ZM22.4919 12.292H28.8759C28.7825 11.3587 28.4372 10.6213 27.8399 10.08C27.2612 9.52 26.5425 9.24 25.6839 9.24C24.8252 9.24 24.0972 9.52 23.4999 10.08C22.9212 10.64 22.5852 11.3773 22.4919 12.292ZM49.7783 21H45.2983V12.74C45.2983 11.7693 45.1116 11.0693 44.7383 10.64C44.3836 10.192 43.9076 9.968 43.3103 9.968C42.6943 9.968 42.069 10.2107 41.4343 10.696C40.7996 11.1813 40.3516 11.8067 40.0903 12.572V21H35.6103V6.3H39.6423V8.764C40.1836 7.90533 40.949 7.23333 41.9383 6.748C42.9276 6.26267 44.0663 6.02 45.3543 6.02C46.3063 6.02 47.0716 6.19733 47.6503 6.552C48.2476 6.888 48.6956 7.336 48.9943 7.896C49.3116 8.43733 49.517 9.03467 49.6103 9.688C49.7223 10.3413 49.7783 10.976 49.7783 11.592V21ZM52.7548 4.62V0.559999H57.2348V4.62H52.7548ZM52.7548 21V6.3H57.2348V21H52.7548ZM63.4657 6.3L66.0697 10.444L66.3497 10.976L66.6297 10.444L69.2337 6.3H73.8537L68.9257 13.608L73.9657 21H69.3457L66.6017 16.884L66.3497 16.352L66.0977 16.884L63.3537 21H58.7337L63.7737 13.692L58.8457 6.3H63.4657Z"
              fill="black"
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
        </div>
      </div>

      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li className="nav-label first">Main Menu</li>

            <li className="">
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

            <li className="mm-active">
              <Link
                className="ai-icon"
                to={{
                  pathname: "/products",
                }}
              >
                {/* <a href="#" className="ai-icon" aria-expanded="false"> */}
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Products</span>
                {/* </a> */}
              </Link>
            </li>

            <li className="">
              <Link
                className="ai-icon"
                to={{
                  pathname: "/inventory",
                }}
              >
                {/* <a href="#" className="ai-icon" aria-expanded="false"> */}
                <i className="flaticon-061-puzzle"></i>
                <span className="nav-text">Inventory</span>
                {/* </a> */}
              </Link>
            </li>

            {/* <li>
                            <a href="#" className="ai-icon" aria-expanded="false">
                                <i className="flaticon-061-puzzle"></i>
                                <span className="nav-text">Charts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ai-icon" aria-expanded="false">
                                <i className="flaticon-003-diamond"></i>
                                <span className="nav-text">Bootstrap</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ai-icon" aria-expanded="false">
                                <i className="flaticon-053-heart"></i>
                                <span className="nav-text">Plugins</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ai-icon" aria-expanded="false">
                                <i className="flaticon-381-settings-2"></i>
                                <span className="nav-text">Widget</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ai-icon" aria-expanded="false">
                                <i className="flaticon-044-file"></i>
                                <span className="nav-text">Forms</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ai-icon" aria-expanded="false">
                                <i className="flaticon-381-network"></i>
                                <span className="nav-text">Table</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ai-icon" aria-expanded="false">
                                <i className="flaticon-049-copy"></i>
                                <span className="nav-text">Pages</span>
                            </a>
                        </li> */}
          </ul>
          <div className="copyright">
            <p>
              <strong>Jube Admin Dashboard</strong> © 2020 All Rights Reserved
            </p>
            <p className="fs-12">
              Made <span className="heart"></span> by Schema
            </p>
          </div>
        </div>
      </div>

      <div className="content-body">
        <div className="container-fluid">
          <div className="form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center">
            <h2 className="font-w600 title mb-2 mr-auto ">Products</h2>
          </div>

          <div className="row">
            <div className="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    {loading ? (
                      <div
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          objectFit: "contain",
                        }}
                      >
                        <img
                          src={require("../../assets/Unknown.jpg")}
                          style={{
                            height: 200,
                            width: 200,
                            boxSizing: "border-box",
                            resize: "block",
                          }}
                          alt="kus"
                        />
                        <h2>loading dek...jengkel saya</h2>
                      </div>
                    ) : (
                      <table class="table table-responsive-md">
                        <thead>
                          <tr>
                            <th>
                              <strong>#</strong>
                            </th>
                            <th>
                              <strong>NAME</strong>
                            </th>
                            <th>
                              <strong>STOCK</strong>
                            </th>
                          </tr>
                        </thead>
                        {data.map((datas, index) => (
                          <tbody key={index}>
                            <tr>
                              <td>
                                <strong>{datas.id}</strong>
                              </td>
                              <td>{datas.name}</td>
                              <td>{datas.stock}</td>
                            </tr>
                            {/* <tr>
                       <td>
                         <strong>02</strong>
                       </td>
                       <td>Product 02</td>
                       <td>5000</td>
                     </tr>
                     <tr>
                       <td>
                         <strong>03</strong>
                       </td>
                       <td>Product 03</td>
                       <td>5000</td>
                     </tr> */}
                          </tbody>
                        ))}
                      </table>
                    )}
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
