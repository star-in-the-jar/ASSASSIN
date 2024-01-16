import React from "react";
import "./TestResult.css"

const myComponent = {
    overflowX: 'hidden',
    overflowY: 'scroll'
    
};

const TestResult = ({testResult}) =>{
    if(testResult){
        const {RBC,WBC,HBGg,HCT}=testResult.blood_test_result;


        return (
            <div className="testResult-container" style={myComponent}>
                <div className="wyniki-container">
                    WYNIKI BADAŃ
                </div>
                <div className="wspolczynnik-container">
                    <ul>
                        <li>RBC M/ul</li>
                        <li>WBC K/ul</li>
                        <li>HGBg/dl</li>
                        <li>HCT %</li>
                        <li>RBC M/ul</li>
                        <li>WBC K/ul</li>
                        <li>HGBg/dl</li>
                        <li>HCT %</li>
                        <li>RBC M/ul</li>
                        <li>WBC K/ul</li>
                        <li>HGBg/dl</li>
                        <li>HCT %</li>
                    </ul>
                </div>
            </div>
        )
    }

};

export default TestResult;