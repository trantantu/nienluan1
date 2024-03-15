import React from 'react'
import '../css/datlich.css'

function Datlich() {
    return (
        <div className="main-datlich">
            <form action="" method="get" className="form-datlich" id="form-1"> 
                <h3 className="heading-datlich">Đặt lịch cắt tóc</h3>
                <div className="spacer"></div>
                <div className="form-datlich-group">
                    <label for="full-name" className="form-datlich-label">Họ và tên</label>
                    <input id="full-name" name="full-name" type="text" placeholder="VD: Nguyễn Thái Anh" />
                    
                </div>
                <div className="form-datlich-group">
                    <label for="phone" className="form-datlich-label">Số điện thoại</label>
                    <input id="phone" name="phone" type="text" placeholder="VD: 0337635772" />
                    
                </div>
                <div className="form-datlich-group">
                    <label for="dichvu" className="form-datlich-label">Dịch vụ</label>
                    <select className="form-datlich-option" name="dichvu">
                        <option>Cắt tóc</option>
                        <option>Nhuộm tóc</option>
                        <option>Uốn tóc</option>
                    </select>
                    
                </div>
                <div className="form-datlich-group">
                    <label for="date" className="form-datlich-label" >Chọn ngày</label>
                    <input id="time" name="date" type="date"/>
                </div>
                <div className="form-datlich-group">
                    <label for="time" className="form-datlich-label" >Chọn giờ</label>
                    <div className='container-time'>
                        <div className="group-time">
                            <button className='box-time'>8H00</button>
                            <button className='box-time'>8H20</button>
                            <button className='box-time'>8H40</button>
                        </div>
                        <div className="group-time">
                            <button className='box-time'>9H00</button>
                            <button className='box-time'>9H20</button>
                            <button className='box-time'>9H40</button>
                        </div>
                        <div className="group-time">
                            <button className='box-time'>10H00</button>
                            <button className='box-time'>10H20</button>
                            <button className='box-time'>10H40</button>
                        </div>
                        <div className="group-time">
                            <button className='box-time'>11H00</button>
                            <button className='box-time'>11H20</button>
                            <button className='box-time'>11H40</button>
                        </div>
                       
                        <div className="group-time">
                            <button className='box-time'>14H00</button>
                            <button className='box-time'>14H20</button>
                            <button className='box-time'>14H40</button>
                        </div>
                        <div className="group-time">
                            <button className='box-time'>15H00</button>
                            <button className='box-time'>15H20</button>
                            <button className='box-time'>15H40</button>
                        </div>
                        <div className="group-time">
                            <button className='box-time'>16H00</button>
                            <button className='box-time'>16H20</button>
                            <button className='box-time'>16H40</button>
                        </div>
                        <div className="group-time">
                            <button className='box-time'>17H00</button>
                            <button className='box-time'>17H20</button>
                            <button className='box-time'>17H40</button>
                        </div>
                        <div className="group-time">
                            <button className='box-time'>18H00</button>
                            <button className='box-time'>18H20</button>
                            <button className='box-time'>18H40</button>
                        </div>

                    </div>
                </div>
                <button className="form-datlich-submit">Đặt lịch</button>
            </form>
        </div>
    )
}

export default Datlich;