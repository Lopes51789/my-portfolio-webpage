import React from "react";
import './certificates.css';
import CSharp from '../../../components/images/CSharp_certificate.png';
import PythonDS from '../../../components/images/PythonDS_certificate.png';
import ETL from '../../../components/images/ETL_certificate.png';
import SQL from '../../../components/images/SQL_certificate.png';
function Certificates() {
    return (
        <div className="certificates">
            <h1>Certificates</h1>
            <div className="certificates-container">
                
                <div className="certificate">
                    <table>
                    <tr>
                        <td><a href="https://www.sololearn.com/pt/certificates/CC-B4PPDPKZ" target="_blank" rel="noopener noreferrer"><img src={CSharp} alt="Intro to C#" /></a></td>
                        <td><a href="https://www.sololearn.com/certificates/CT-U6YD5HI2" target="_blank" rel="noopener noreferrer"><img src={PythonDS} alt="Python Data Structures" /></a></td>
                    </tr>
                    <tr>
                        <td><img src={ETL} alt="Using Python to Access Web Data" /></td>
                        <td><a href="https://www.sololearn.com/certificates/CT-1NMVW4IA" target="_blank" rel="noopener noreferrer"><img src={SQL} alt="Using Databases with Python" /></a></td>
                    </tr>
                    </table>
                </div>
            
            </div>

            </div>
    );

            
}

export default Certificates;
