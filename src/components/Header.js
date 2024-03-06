import React from 'react'
import '../css/style.css'
import '../Boostrap5/css/bootstrap.min.css'
// import logo from '../img/img_logo.png'

export default function Header() {
  return (
    
    <header>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
    <div className="container py-3">
      <div className="row">
        <div className="col-3 logo">
          <img src="./img/img_logo.png" alt="" />
        </div>
        <div className="col-5">
          <form className="d-flex tk-sp">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Nhập tên sản phẩm bạn muốn tìm"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              <i className="fa-solid fa-magnifying-glass text-white" />
            </button>
          </form>
        </div>
        <div className="col-4">
          {/* Tai Khoan - gio hang  */}
          <section className="hd-right">
            <div className="hd-item">
              <i className="fa-solid fa-user text-white" />
              <a href="dangnhap" target="_blank">
                {" "}
                Login
              </a>
            </div>
            <div className=" hd-item mx-3">
              <i className="fa-solid fa-cart-shopping text-white" />
              <a href="giohang" target="_blank">
                Giỏ hàng
              </a>
            </div>
            <div className="book hd-item">
              <i className="fa-regular fa-clipboard text-white" />
              <a href="datlich" target="_blank">
                Đặt lịch
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div className="container-fluid menu">
      {/* navbar */}
      <section className="menu">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars" />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    {" "}
                    TRANG CHỦ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="dichvu">
                    DỊCH VỤ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="sanpham">
                    {" "}
                    SẢN PHẨM
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  </header>
  )
}
