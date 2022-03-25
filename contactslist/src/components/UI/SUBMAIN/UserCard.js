import React from "react";
import './UserCard.css';
import { Link } from 'react-router-dom';

function UserCard({ val }) {
    return (
        <div className="card-wrapper">
            <div className="card-content" key={val.id}>
                <div className="card-main">
                    <p className="card-info">ФИО: <span className="card-details">{val.name}</span></p>
                    <p className="card-info">город: <span className="card-details">{val.address.city}</span></p>
                    <p className="card-info">компания: <span className="card-details">{val.company.name}</span></p>
                </div>
                <div className="card-footer">
                    <Link to={`/contacts/view/${val.id}`} >
                        <div className="card-link">Подробнее</div>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default UserCard;