import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"
import MainSanPham from "./components/MainSanPham";

import { Route,Routes,Link } from "react-router-dom";
import MainChiTiet from "./components/MainChiTiet";
import MainDangNhap from "./components/MainDangNhap";
import Datlich from "./components/Datlich";
import Cart from "./components/Cart"
function App() {
  return (
   <div>
     <Header />
       <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/sanpham" element={<MainSanPham/>}></Route>
        <Route path="/chitiet" element={<MainChiTiet/>}></Route>
        <Route path="/dangnhap" element={<MainDangNhap/>}></Route>
        <Route path="/datlich" element={<Datlich/>}></Route>
        <Route path="/giohang" element={<Cart/>}></Route>
       </Routes>
     <Footer />
   </div>
  );
}

export default App;
