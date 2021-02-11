import React from 'react'
import illus from '../illustration.png'

export const Container = () => {
    return (
        <div className="body-container">
            <h3 className="center-heading">What is this tool?</h3>
            <p>It helps you in calculating the number of stocks to buy of NIFTY/ S&P according to your portfolio size</p>
            <div className="mid-container">
                <img src={illus} alt="This is an illustration"/>
                <div className="mid-right-section">
                    <h1 className="center-heading second">What's your portfolio size?</h1>
                    <input type="number" placeholder="Enter your amount"/>  
                    <h1 className="center-heading second">Select your preferred index</h1>
                    <select>
                        <option selected value="NIFTY">NIFTY</option>
                        <option value="S&P">S&P</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
