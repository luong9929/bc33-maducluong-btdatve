import React from 'react'
import {useSelector} from 'react-redux'
import danhSachGhe from '../../data/danhSachGhe.json'
import ChonGhe from './chonGhe'

export default function DatVe() {
  
  // const {arrProduct} = useSelector(state => state.chonVeReducer)
  // console.log(arrProduct)
  // const [danhSachGhe] = arrProduct

  // console.log("danh sách",danhSachGhe)
  console.log(danhSachGhe)
 

  return (
    <div className="bookingMovie  ">
      <div className="row pt-3">
        <div className="col-8 text-center">
          <h1 className="display-4 text-warning" >ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
          <h3 className="text-light">Màn hình</h3>
          <div className="main ms-5">
          <div className="screen"></div>
          
            {danhSachGhe.map((hangGhe,index)=>{
              return <div className='mt-3' key={index}>
               <ChonGhe hangGhe={hangGhe} soHangGhe={index}/>
              </div>
            })}
          
          </div>
         
        </div>
        <div className="col-4 text-center mt-4">
          <h3 className="text-light">DANH SÁCH GHẾ BẠN CHỌN</h3>
            <div className="mt-5 text-start">
              <button className="gheDuocChon mb-3 me-3"></button>
              <span className="text-light">ghế đã đặt</span>
              <br />
              <button className="gheDangChon mb-3 me-3"></button>
              <span className="text-light">ghế đang đặt</span>
              <br />
              <button className="gheChuaDat me-3"></button>
              <span className="text-light">ghế chưa đặt</span>
            </div>
            <div className="mt-5">
              <table className="table" >
                  <thead>
                    <tr>
                       <th className="text-light">Số ghế</th>
                       <th className="text-light">Giá</th>
                       <th></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tfoot>
                    <tr>
                      <td className=" text-danger">Tổng tiền</td>
                      <td className=" text-danger">0</td>
                    </tr>
                  </tfoot>
              </table>
            </div>
        </div>

      </div>
      



    </div>
  )
}

