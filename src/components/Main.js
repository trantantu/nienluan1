import React from 'react'
import '../css/style.css'
import '../Boostrap5/css/bootstrap.min.css'

export default function Main() {
  return (
    <main>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <section className="bg">
    <h1>TRAVIS BARBERSHOP</h1>
    <button className="btn-dl my-5">
      <a href="datlich.html">ĐẶT LỊCH NGAY</a>
    </button>
  </section>
  <div className="container my-5 sp_items">
    <h2>SẢN PHẨM</h2>
    <div className="row">
      <div className="col-3">
        <img src="./img/pomate.webp" alt="" style={{ width: "100%" }} />
      </div>
      <div className="col-3 card-sp">
        <div className="card" style={{ width: "100%" }}>
          <img
            src="./img/sap1.png"
            className="card-img-top"
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">HOLUP MARIA</h5>
            <span className="text-danger card-price">200.000 đ </span> <br />
            <a href="#" className="btn btn-info">
              Mua ngay
            </a>
          </div>
        </div>
      </div>
      <div className="col-3 card-sp ">
        <div className="card" style={{ width: "100%" }}>
          <img src="./img/s.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">HOLUP COOKIE</h5>
            <span className="text-danger card-price">200.000 đ </span> <br />
            <a href="#" className="btn btn-info">
              Mua ngay
            </a>
          </div>
        </div>
      </div>
      <div className="col-3 card-sp">
        <div className="card" style={{ width: "100%" }}>
          <img src="./img/sap2.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">HOLUP GELATO</h5>
            <span className="text-danger card-price">200.000 đ </span> <br />
            <a href="#" className="btn btn-info">
              Mua ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="my-5">
    <a href="#" className="btn_xt">
      Xem Thêm
    </a>
  </div>
  <div className="container bang_gia1">
    <h2>BẢNG GIÁ TRAVIS BARBERSHOP</h2>
    <img src="./img/bang-gia-6226.png" alt="" style={{ width: "100%" }} />
  </div>
  <div className="container py-5 bang_gia1 ">
    <h2>CHÍNH SÁCH BẢO HÀNH VÀ CÁCH CHĂM SÓC TÓC</h2>
    <div className="row py-3">
      <div className="col">
        <section className="bang_gia">
          <img src="./img/bg1.png" alt="" style={{ width: "100%" }} />
        </section>
      </div>
      <div className="col">
        <section className="bang_gia">
          <img src="./img/bg2.png" alt="" style={{ width: "100%" }} />
        </section>
      </div>
    </div>
  </div>
</main>

  )
}
