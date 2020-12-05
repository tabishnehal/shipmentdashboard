import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Table} from 'reactstrap';

const columnStyle = {
    color: 'green',
}

function RenderRightTable({shipments}){
    if (shipments!=null){
        const listShipmnet = (shipments).map((shipment) => {
            return(
                    <tr key={shipment.id} itemScope="row" onClick={() => RenderLeftTimeline(shipment)}>
                        <td>{shipment.awbno}</td>
                        <td>{shipment.carrier}</td>
                        <td>{shipment.from}</td>
                        <td>{shipment.to}</td>
                        <td>{shipment.carrier}</td>
                        <td>{shipment.pickup_date ? new Intl.DateTimeFormat('en-US', { year: 'numeric', day: '2-digit', month: '2-digit'}).format(new Date(Date.parse(shipment.pickup_date))):''}
                        </td>
                        <td>{shipment.extra_fields ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'numeric', day: 'numeric'}).format(new Date(Date.parse(shipment.extra_fields.expected_delivery_date))):''}
                        </td>
                        <td style={columnStyle}>{shipment.current_status}</td>
                    </tr>
            );
        });
        return (
            <tbody>
                {listShipmnet}
            </tbody>
        );
    }
}

function RenderLeftTimeline({shipment}){
    if (shipment!=null){
        const listScan = shipment.scan.map((element) => {
            return(
                <li>
                    <div>
                    <p>{element.location} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(element.time)))}</p>
                    </div>
                </li>
            );
        });
        return(
            <ul className="list-unstyled">
                {listScan}
            </ul>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}

const ShipmentDetail = (props) => {
    if (props.shipments != null){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 ml-auto m-1">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>AWB NUMBER</th>
                                    <th>TRANSPORTER</th>
                                    <th>SOURCE</th>
                                    <th>DESTINATION</th>
                                    <th>BRAND</th>
                                    <th>START DATE</th>
                                    <th>ETD</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <RenderRightTable shipments={props.shipments} />
                        </Table>
                    </div>
                    <div className="col-12 col-md-4 mr-auto m-2">
                        <RenderLeftTimeline/>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}
export default ShipmentDetail;