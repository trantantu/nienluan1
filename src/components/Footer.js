import React from 'react'
import '../css/style.css'
import '../Boostrap5/css/bootstrap.min.css'
// import logo from '../img/img_logo.png'

export default function Footer() {
  return (
    <footer>
    <section className="mes">
      <div className="mes-item2">
        <p style={{ color: "black" }}>Chat với chúng tôi</p>
      </div>
      <div className="mes-item1">
        <a href="">
          <i
            className="fa-brands fa-facebook-messenger fa-beat fa-2xl"
            style={{ color: "#117bcb" }}
          />
        </a>
      </div>
    </section>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <a href="">
            {" "}
            <p>Thông tin về TRAVIS BARBER SHOP</p>
          </a>
          <a href="">
            {" "}
            <p>Chính sách bảo mật</p>
          </a>
          <p>Giờ phục vụ: 8h30 - 20h30 (Thứ 2-Chủ nhật)</p>
        </div>
        <div className="col-4 contact-fd">
          <p>Theo dõi chúng tôi trên:</p>
          <a href="">
            <i className="fa-brands fa-facebook" />
          </a>
          <a href="">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="">
            <i className="fa-brands fa-tiktok" />
          </a>
        </div>
        <div className="col-4 ft-logo py-2">
          <img src="./img/img_logo.png" alt="" width="100%" height="100px" />
        </div>
      </div>
    </div>
  </footer>


  )
}
