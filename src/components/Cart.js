import React from 'react'
import '../Boostrap5/css/bootstrap.min.css'
import '../css/cart.css'
import ItemSanPham from './ItemSanPham'
const Cart = () => {
  return (
    <div className='container-cart'>
        <div className="cart-tientrinh">
            <span className='tientrinh-1'>1 Giỏ hàng  <span className='icon-chuyen 2'>{`>`}</span></span>
            <span className='tientrinh-2'>2 Thanh toán<span className='icon-chuyen 3'>{`>`}</span></span>
            <span className='tientrinh-3'>3 Hoàn thành đơn hàng </span>
        </div>
        <div className='cart-product'> 
        <div className="container-vouncher">
          <div className='text-vouncher'>Mã giảm giá của chúng tôi</div>
           <div className='group-vouncher'>
           <div className='vouncher'>QT1999</div>
            <div className='vouncher'>QT999</div>
            <div className='vouncher'>LIXI30</div>
            <div className='vouncher'>QRCODE</div>
            <div className='vouncher'>1503</div>
            <div className='vouncher'>TRIAN</div>
            <div className='vouncher'>LIXI20</div>
            <div className='vouncher'>CLMEN</div>
           </div>
        </div>
         <div className='cart-product-user'>
         <p>Chưa có sản phẩm nào trong giỏ hàng </p>
         </div>
        </div>
        <div className='product-goi-y'>
          <div className='text-goi-y'>Một số sản phẩm gợi ý</div>
                  <div className='product'>
                  <ItemSanPham
                    tensp='Sáp Vuốt Tóc Glanzen Clay WAX'
                    hinh='./img/sanpham/SapGlanzenClay.jpg'
                    giacu='400.000đ'
                    gia='360.000đ'
                    tilegiam='10%'
                  />
                  <ItemSanPham
                    tensp='Sáp Vuốt Tóc Glanzen Xanh'
                    hinh='./img/sanpham/SapGlanzenXanh.jpg'
                    giacu='400.000đ'
                    gia='300.000đ'
                    tilegiam='10%'
                  />
                   <ItemSanPham
                    tensp='Sáp Vuốt Tóc Glanzen Clay WAX'
                    hinh='./img/sanpham/SapGlanzenClay.jpg'
                    giacu='400.000đ'
                    gia='360.000đ'
                    tilegiam='10%'
                  />
                  <ItemSanPham
                    tensp='Sáp Vuốt Tóc Glanzen Xanh'
                    hinh='./img/sanpham/SapGlanzenXanh.jpg'
                    giacu='400.000đ'
                    gia='300.000đ'
                    tilegiam='10%'
                  />
                   <ItemSanPham
                    tensp='Sáp Vuốt Tóc Glanzen Clay WAX'
                    hinh='./img/sanpham/SapGlanzenClay.jpg'
                    giacu='400.000đ'
                    gia='360.000đ'
                    tilegiam='10%'
                  />
                  <ItemSanPham
                    tensp='Sáp Vuốt Tóc Glanzen Xanh'
                    hinh='./img/sanpham/SapGlanzenXanh.jpg'
                    giacu='400.000đ'
                    gia='300.000đ'
                    tilegiam='10%'
                  />
                
                  <ItemSanPham
                    tensp='Sáp Vuốt Tóc Glanzen Clay WAX'
                    hinh='./img/sanpham/SapGlanzenClay.jpg'
                    giacu='400.000đ'
                    gia='360.000đ'
                    tilegiam='10%'
                  />
                  <ItemSanPham
                    tensp='Sáp Vuốt Tóc Glanzen Xanh'
                    hinh='./img/sanpham/SapGlanzenXanh.jpg'
                    giacu='400.000đ'
                    gia='300.000đ'
                    tilegiam='10%'
                  />
                 
                  </div>
        </div>
    </div>
  )
}

export default Cart