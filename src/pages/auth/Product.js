import React, { useState } from "react";
import { Link } from "react-router-dom";
import useToggleView from "../../Hooks/toggleView";

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const res = await fetch("http://jiboo-redis-rds-autoscale-alb-1-582624195.ap-southeast-3.elb.amazonaws.com/product", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
      getData()
    },[])

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
            <h2 className="font-w600 title mb-2 mr-auto ">Products</h2>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                      <table className="table table-responsive-md">
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

                        {data.map((datas, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <td>
                                  <strong>{datas.product_id}</strong>
                                </td>
                                <td>{datas.product_name}</td>
                                <td>{datas.product_stock.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
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
