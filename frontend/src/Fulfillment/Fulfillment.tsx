import React from 'react';
import data from './data';

function Fulfillment(){
    return(
        <div className="content content-margined"> 
            <div className="fulfillment-header">
                <h3>Fulfillment</h3>   
            </div>
        <div className="fulfillment-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ORDER NUMBER</th>
                        <th>NAME</th>
                        <th>SHIPPED</th>
                        <th>TRACKING NUMBER</th>
                        <th>PRODUCT INFO</th>
                        <th>SHIPPING DATE</th>
                        <th>ESTIMATED DELIVERY DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.fulfillment.map((fulfillment)=> (
                        <tr key = {fulfillment.orderNo} className={fulfillment.hasShipped === 'no' ? "not-shipped" : ""}>
                            <td>{fulfillment.orderNo}</td>
                            <td>{fulfillment.user.customerName}</td>
                            <td>{fulfillment.hasShipped}</td>
                            <td>{fulfillment.trackingNo}</td>
                            <td>{fulfillment.productInfo}</td>
                            <td>{fulfillment.shippingDate}</td>
                            <td>{fulfillment.estimatedDelivery}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>);
};

export default Fulfillment;