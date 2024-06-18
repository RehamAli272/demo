import React, {useState} from "react";
import {CSVLink} from "react-csv";

const CSVExport = () => {
    // Kohorte-Daten
    const [data, setData] = useState([
        {Alter: 30, Geschlecht: 'männlich',Slide:'S1', Annotation: 'A1', Identifier: 'ID1'},
        {Alter: 35, Geschlecht: 'weiblich', Slide: 'S2', Annotation: 'A2', Identifier: 'ID2'},
    ]);

    const headers = [
        {label: 'Alter', Key: 'Alter'},
        {label: 'Geschöecht', key: 'Geschlecht'},
        {label: 'Slide', key: 'Slide'},
        {label: 'Annotation', key: 'Annotation'},
        {label: 'Identifier', key: 'Identifier'}
    ];

    return (
        <div>
            <CSVLink data={data} headers={headers} filename={"Kohorte.CSV"}>
              <button className="CSV-button">CSV-Datei Herunterladen</button>
            </CSVLink> 
        </div>    
    );
};

export default CSVExport;