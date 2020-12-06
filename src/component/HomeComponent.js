import React from 'react';
import { Card, CardTitle } from 'reactstrap';

function RenderHomeItem({status, onClick}){
    return (
        <Card className="cardStyle" onClick={() => onClick(status.id)} >
            <CardTitle className="mr-auto ml-1"><b>{status.id}</b></CardTitle>
            <CardTitle className="cardTitleStyle"><b>{status.Count}</b></CardTitle>
        </Card>
    );
}

const Home = (props) => {
    var delCount = 0;
    var intCount = 0;
    var oodCount = 0;
    var dexCount = 0;
    var nfiCount = 0;
    const counter = props.shipments.map((shipment) =>{
        if(shipment.current_status_code === "DEL"){
            delCount+=1;
        }
        else if(shipment.current_status_code === "INT"){
            intCount+=1;
        }
        else if(shipment.current_status_code === "OOD"){
            oodCount+=1;
        }
        else if(shipment.current_status_code === "DEX"){
            dexCount+=1;
        }
        else{
            nfiCount+=1;
        }
    });
    var Counter = [
        {"id":"DEL","Count":delCount},
        {"id":"INT","Count":intCount},
        {"id":"OOD","Count":oodCount},
        {"id":"DEX","Count":dexCount},
        {"id":"NFI","Count":nfiCount}
    ];
    const home = Counter.map((status) => {
        return (
            <div key={status.id} className="col-4 col-md-2 col-lg-1">
                <RenderHomeItem status={status} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {home}
            </div>
        </div>
    );
}
export default Home;