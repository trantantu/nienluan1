import React from 'react'
import '../css/datlich.css'

function Datlich() {
    return (
        <div className="main">
            <form action="" method="get" className="form" id="form-1"> 
                <h3 className="heading">Đặt lịch cắt tóc</h3>
                <div className="spacer"></div>
                <div className="form-group">
                    <label for="full-name" className="form-label">Họ và tên</label>
                    <input id="full-name" name="full-name" type="text" placeholder="VD: Nguyễn Thái Anh" />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label for="phone" className="form-label">Số điện thoại</label>
                    <input id="phone" name="phone" type="text" placeholder="VD: 0337635772" />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label for="dichvu" className="form-label">Dịch vụ</label>
                    <select name="dichvu">
                        <option>Cắt tóc</option>
                        <option>Nhuộm tóc</option>
                        <option>Uốn tóc</option>
                    </select>
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label for="time" className="form-label" >Chọn ngày giờ</label>
                    <input id="time" name="time" type="date"/>
                    <span className="form-message"></span>
                </div>
                <button className="form-submit">Đăng ký</button>
            </form>
        </div>
    )
}

export default Datlich;