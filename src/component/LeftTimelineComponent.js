import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Table} from 'reactstrap';
import moment from 'moment';

function RenderLeftTimeline({shipmentRow}){
    if (shipmentRow.scan!=null){
        const listScan = shipmentRow.scan.map((sc) => {
            return(
                <tr key={sc.time}>
                    <td className="tdStyle">|<span className="fa fa-circle fa-sm nodeStyle"></span><span className="fa fa-minus fa-sm nodeStyle"></span>
                    <span className="fa fa-minus fa-sm nodeStyle"></span>
                    </td>
                    <td className={sc.location.includes("Delivered")? "statusGreen":""}>{sc.location}</td>
                    <td className={sc.location.includes("Delivered")? "statusGreen":""}>{moment.utc(sc.time).local().format("DD-MM-YYYY")}</td>
                    <td className={sc.location.includes("Delivered")? "statusGreen":""}>{moment.utc(sc.time).local().format("HH-MM")}</td>
                </tr>
            );
        });
        return(
            <tbody>
                <tr>
                    <td className="tdStyleCenter"><img src="FrontendAssets/destination.svg" alt="destination" /></td>
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
            <Table className="tableStyle1 mt-4 mb-4" borderless responsive size="sm">
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