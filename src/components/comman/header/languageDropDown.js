"use client"
import React, { useState } from 'react'

const LanguageDropDown = ({ WebLangData }) => {

    const [show_one, setShow_one] = useState(false);

    window.addEventListener('click', (event) => {
        if (event.target.className !== 'btn-layar_one') {
            setShow_one(false)
        }
    })
    return (
        <div className="lang">
            <div className="lang-btn">
                <div className="ctr-flg">
                    <img src={WebLangData[0].img} alt="" />
                </div>
                <div className="ctr-lang">
                    {WebLangData[0].val}
                </div>
                <div className="ctr-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>

            {/* only for click event fire */}
            <div className="btn-layar_one" onClick={() => setShow_one(true)}></div>
            {/* languge list */}
            <div className={show_one ? "lang-tlayer active" : "lang-tlayer"}>
                <div className="lang-list">
                    {
                        WebLangData.map((curElem, index) => {
                            return (
                                <div className="lang-item" key={index}>
                                    <div className="ctr-flg">
                                        <img src={curElem.img} alt="" />
                                    </div>
                                    <div className="ctr-lang1">
                                        {curElem.val}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LanguageDropDown