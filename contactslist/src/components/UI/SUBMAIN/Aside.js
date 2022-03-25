import React from "react";
import './Aside.css';

function Aside({ handleSortCity, handleSortCompany }) {
    return (
        <aside className="aside-wrapper">
            <div className="aside-header">
            <h2 className="aside-title">Сортировка</h2>
            <div className="aside-content">
                <button type="button" className="btn sort-btn" onClick={handleSortCity}>по городу</button>
                <button type="button" className="btn sort-btn" onClick={handleSortCompany}>по компании</button>
            </div>
            </div>
        </aside>
    )
}

export default Aside;
