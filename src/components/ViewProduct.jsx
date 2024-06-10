import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewProduct = () => {
    const [data,changeData]=useState(
        [
            {
                "proname":"Shoes",
                "proid":"12",
                "price":"500",
                "mfd":"12-04-2023"
            }
        ]
    )
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Product ID</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">MFD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {data.map(
                                        (value,index)=>{
                                            return   <tr>
                                            <th scope="row">{value.proname}</th>
                                            <td>{value.proid}</td>
                                            <td>{value.price}</td>
                                            <td>{value.mfd}</td>
                                        </tr>
                                        }
                                      )}
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct