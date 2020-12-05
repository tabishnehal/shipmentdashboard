import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Table} from 'reactstrap';
import moment from 'moment';

function RenderLeftTimeline({shipmentRow}){
    if (shipmentRow.scan!=null){
        const listScan = shipmentRow.scan.map((sc) => {
            return(
                <tr>
                    <td>{sc.location}</td>
                    <td>{moment.utc(sc.time).local().format("DD-MM-YYYY")}</td>
                    <td>{moment.utc(sc.time).local().format("HH-MM")}</td>
                </tr>
            );
        });
        return(
            <tbody>
                <tr>
                    <td><img src="FrontendAssets/destination.svg" alt="destination" /></td>
                </tr>
                {listScan}
                <tr>
                    <td><img src="FrontendAssets/warehouse.svg" alt="destination" /></td>
                </tr>
            </tbody>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}

const LeftTimeLine = (props) => {
    if (props.shipmentRow != null){
        return (
            <Table className="tableStyle1" hover responsive size="sm">
                <RenderLeftTimeline shipmentRow={props.shipmentRow}/>
            </Table>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}
export default LeftTimeLine;