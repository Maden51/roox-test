import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Aside from "../SUBMAIN/Aside";
import './View.css';
import { TailSpin } from "react-loader-spinner";
import OnlyReadForm from "../SUBMAIN/OnlyReadForm";
import EditableForm from "../SUBMAIN/EditableForm";
import DisabledButton from "../SUBMAIN/DisabledButton";

function View() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editDataId, setEditDataId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        username: '',
        email: '',
        street: '',
        city: '',
        zipCode: '',
        phone: '',
        website: '',
        comment: '',
    });
    const { contactId } = useParams();
    
    useEffect(() => {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/users/${contactId}`)
            .then(response => {
                if (response) { 
                    setUser(response.data)
                    setLoading(false)
                } else {
                    setUser({})
                }
            })
            .catch((err) => console.log(err))
        }, [contactId]);

    const handleEditPermit = (e) => {
        e.preventDefault();
        setEditDataId(user.id);
        const formValues = {
            name: user.name,
            username: user.username,
            email: user.email,
            street: user?.address.street,
            city: user?.address.city,
            zipCode: user?.address.zipcode,
            phone: user.phone,
            website: user.website,
            comment: '',
        }
        setEditFormData(formValues);
    }

    const handleEditSaveChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleEditSubmit = () => {

        const formValues = {
            id: editDataId,
            name: editFormData.name,
            username: editFormData.username,
            email: editFormData.email,
            address: {
                street: editFormData.street,
                city: editFormData.city,
                zipCode: editFormData.zipCode,
            },
            phone: editFormData.phone,
            website: editFormData.website,
            comment: editFormData.comment,
        }
        console.log(JSON.stringify(formValues));
    }

    return (
        <div className="view-wrapper">
            <Aside />
            {loading ? (
                <div className="spinner-box">
                    <TailSpin
                        color="#4B51EF"
                        width="100px"
                        height="100px"
                        ariaLabel="loading"
                    />
                </div>
            ) : (
            <div className="view-content">
                <div className="view-header">
                    <h1 className="view-title">Профиль пользователя</h1>
                    <button type="button" className="btn btn-view" onClick={handleEditPermit}>Редактировать</button>
                </div>
                <div className="view-main">
                    {editDataId === user.id ? (
                        <>
                            <EditableForm 
                                editFormData={editFormData} 
                                handleEditSaveChange={handleEditSaveChange}
                                handleEditSubmit={handleEditSubmit}
                            />
                        </>
                    ) : (
                        <>
                            <OnlyReadForm user={user} />
                            <DisabledButton />
                        </>
                    )}
                </div>
            </div>
            )}
        </div>
    )
}

export default View;