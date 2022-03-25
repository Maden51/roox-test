import React from "react";
import UserCard from "../SUBMAIN/UserCard";
import './UserList.css';

function UserList({ userData }) {
    return (
        <main className="main-wrapper">
            <div className="main-header">
                <h1 className="main-title">Список пользователей</h1>
                    {userData.map((val) => (
                        <UserCard val={val} key={val.id}/>
                    ))}
            </div>
            <div className="main-footer">
                <span className="footer-content">Найдено {userData.length} пользователей</span>
            </div>
        </main>
    )
}

export default UserList;