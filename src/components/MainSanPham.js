import React from "react";
import '../css/sanpham.css';
import ItemSanPham from "./ItemSanPham";

export default function MainSanPham(){
  function activeall(){ 
    document.getElementById('allsp').classList.add('danhmuc-item-active')
    document.getElementById('gom').classList.remove('danhmuc-item-active')
    document.getElementById('say').classList.remove('danhmuc-item-active')
    document.getElementById('wax').classList.remove('danhmuc-item-active')
  }
    function activewax(){ 
      document.getElementById('wax').classList.add('danhmuc-item-active')
      document.getElementById('gom').classList.remove('danhmuc-item-active')
      document.getElementById('say').classList.remove('danhmuc-item-active')
      document.getElementById('allsp').classList.remove('danhmuc-item-active')
    }
    function activegom(){
      document.getElementById('gom').classList.add('danhmuc-item-active')
      document.getElementById('wax').classList.remove('danhmuc-item-active')
      document.getElementById('say').classList.remove('danhmuc-item-active') 
      document.getElementById('allsp').classList.remove('danhmuc-item-active')
    }
    function activesay(){
      document.getElementById('say').classList.add('danhmuc-item-active')
      document.getElementById('gom').classList.remove('danhmuc-item-active')
      document.getElementById('wax').classList.remove('danhmuc-item-active')
      document.getElementById('allsp').classList.remove('danhmuc-item-active')
    }
    return(
      <main>
 <section id="collection-template">
  <div className="collection-body">
    <div className="app-container">
      <div className="grid">
        <div className="column2">
          <h4 className="danhmuc-heading">
            <i className="fas fa-list icondanhmuc" /> Danh Mục
          </h4>
          <ul className="danhmuc-list">
            <li className="danhmuc-item " >
              <a onClick={activeall} id="allsp" href="#" className="danhmuc-item-link danhmuc-item-active">
                Tất Cả Sản Phẩm
              </a>
            </li>
            <li className="danhmuc-item " >
              <a onClick={activewax} id="wax" href="#" className="danhmuc-item-link">
                Sáp Vuốt Tóc
              </a>
            </li>
            <li className="danhmuc-item" >
              <a onClick={activegom} id="gom" href="#" className="danhmuc-item-link no-active">
                Gôm Tạo Kiểu
              </a>
            </li>
            <li className="danhmuc-item" >
              <a onClick={activesay} id="say" href="#" className="danhmuc-item-link no-active">
                Máy Sấy Tóc
              </a>
            </li>
          </ul>
        </div>
        <div
          
          className="content-product-list product-list filter ddflex row-left-list column10"
        >
          <React.Fragment>
          <ItemSanPham 
          tensp = 'Sáp Vuốt Tóc Glanzen Clay WAX'
          hinh = './img/sanpham/SapGlanzenClay.jpg'
          giacu = '400.000đ'
          gia = '360.000đ'
          tilegiam = '10%'
          />
          <ItemSanPham 
          tensp = 'Sáp Vuốt Tóc Glanzen Xanh'
          hinh = './img/sanpham/SapGlanzenXanh.jpg'
          giacu = '400.000đ'
          gia = '300.000đ'
          tilegiam = '10%'
          />
          <ItemSanPham 
          tensp = 'Sáp Vuốt Tóc Reuzel Extreme'
          hinh = './img/sanpham/SapReuzelEx.jpg'
          giacu = '400.000đ'
          gia = '250.000đ'
          tilegiam = '10%'
          />
          <ItemSanPham 
          tensp = 'Sáp Vuốt Tóc Reuzel Pink'
          hinh = './img/sanpham/SapReuzelPink.jpg'
          giacu = '400.000đ'
          gia = '300.000đ'
          tilegiam = '10%'
          />
          <ItemSanPham 
          tensp = 'Sáp Vuốt Tóc Reuzel Matte'
          hinh = './img/sanpham/SapReuzelMatte.jpg'
          gia = '300.000đ'
          
          />
          </React.Fragment>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
    )
}
