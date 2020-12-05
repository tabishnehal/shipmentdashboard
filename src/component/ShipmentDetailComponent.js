import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Table} from 'reactstrap';
import moment from 'moment';

const columnStyle = {
    color: 'green',
}

function RenderRightTable({shipments, onClick}){
    if (shipments!=null){
        const listShipmnet = (shipments).map((shipment) => {
            return(
                    <tr key={shipment._id} onClick={() => onClick(shipment._id)}>
                        <td>{shipment.awbno}</td>
                        <td>{shipment.carrier}</td>
                        <td>{shipment.from}</td>
                        <td>{shipment.to}</td>
                        <td>{shipment.carrier}</td>
                        <td>{shipment.pickup_date ? moment.utc(shipment.pickup_date).local().format("DD/MM/YYYY"):''}</td>
                        <td>{shipment.extra_fields ? moment.utc(shipment.extra_fields.expected_delivery_date).local()
                        .format("DD/MM/YYYY"):''} </td>
                        <td style={columnStyle}>{shipment.current_status}</td>
                    </tr>
            );
        });
        return (
            <tbody className="tableStyle">
                {listShipmnet}
            </tbody>
        );
    }
}

const ShipmentDetail = (props) => {
    if (props.shipments != null){
        return (
                <Table hover responsive size="sm">
                    <thead className="tablehead">
                        <tr>
                            <th>AWB NUMBER     <span className="fa fa-chevron-down fa-sm"></span></th>
                            <th>TRANSPORTER</th>
                            <th>SOURCE</th>
                            <th>DESTINATION</th>
                            <th>BRAND</th>
                            <th>START DATE</th>
                            <th>ETD</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                        <RenderRightTable shipments={props.shipments} onClick={props.onClick} />
                </Table>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}
export default ShipmentDetail;