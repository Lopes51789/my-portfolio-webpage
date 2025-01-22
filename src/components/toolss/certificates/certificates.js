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
                        <td><img src={CSharp} alt="Intro to C#" /></td>
                        <td><p>Intro to C#</p></td>
                    </tr>
                    </table>
                </div>

                <div className="certificate">
                    <table>
                    <tr>
                        <td><p>Python DS</p></td>
                        <td><img src={PythonDS} alt="Python Data Structures" /></td>
                    </tr>
                    </table>
                </div>
                
                <div className="certificate">
                    <table>
                    <tr>
                        <td><img src={ETL} alt="Using Python to Access Web Data" /></td>
                        <td><p>ETL using Python and SQL</p></td>
                    </tr>
                    </table>
                </div>
                
                <div className="certificate">
                    <table>
                    <tr>
                        <td><p>SQL</p></td>
                        <td><img src={SQL} alt="Using Databases with Python" /></td>
                    </tr>
                    </table>
                </div>
            
            </div>
        </div>
    );
}

export default Certificates;
