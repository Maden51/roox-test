import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ActiveButton from "./ActiveButton";
import './EditableForm.css';

function EditableForm({ editFormData, handleEditSaveChange, handleEditSubmit }) {
    const phoneRegExp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    const url =/^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|\/|\?)*)?$/i 
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        website: yup.string().matches(url).required(),
        phone: yup.string().matches(phoneRegExp).required(),
    });
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    
    return (
        <form className="view-form" onSubmit={handleSubmit(handleEditSubmit)}>
            <label className='view-form__label'>Name
                <input 
                    type="text"
                    required
                    className="view-form__input"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditSaveChange}
                ></input>
            </label>
            <label className='view-form__label'>Username
                <input
                    type="text"
                    required
                    className="view-form__input"
                    name="username"
                    value={editFormData.username}
                    onChange={handleEditSaveChange}
                ></input>
            </label>
            <label className='view-form__label'>E-mail
                <input
                    {...register("email")}
                    type="email"
                    className={
                        errors && errors.email
                        ? "view-form__input error"
                        : "view-form__input"
                    }
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditSaveChange}
            ></input>
            </label>
            <label className='view-form__label'>Street
                <input
                    type="text"
                    required
                    className="view-form__input"
                    name="street" 
                    value={editFormData.street}
                    onChange={handleEditSaveChange}
                ></input>
            </label>
            <label className='view-form__label'>City
                <input type="text" 
                    required 
                    className="view-form__input" 
                    name="city" 
                    value={editFormData.city}
                    onChange={handleEditSaveChange}
                ></input>
            </label>
            <label className='view-form__label'>Zip code
                <input 
                    type="text"
                    required 
                    className="view-form__input" 
                    name="zipCode" 
                    value={editFormData.zipCode}
                    onChange={handleEditSaveChange}
                ></input>
            </label>
            <label className='view-form__label'>Phone
                <input 
                    {...register("phone")}
                    type="tel" 
                    className={
                        errors && errors.phone
                        ? "view-form__input error"
                        : "view-form__input"
                    }
                    name="phone" 
                    value={editFormData.phone}
                    onChange={handleEditSaveChange}
                ></input>
            </label>
            <label className='view-form__label'>Website
                <input 
                    {...register("website")}
                    type="text" 
                    className={
                        errors && errors.website
                        ? "view-form__input error"
                        : "view-form__input"
                    }
                    name="website" 
                    value={editFormData.website}
                    onChange={handleEditSaveChange}
                ></input>
            </label>
            <label className='view-form__label'>Comment
                <textarea 
                    name="comment" 
                    className="view-form__textarea"
                    onChange={handleEditSaveChange}   
                    value={editFormData.comment} 
                ></textarea>
            </label>
            <ActiveButton />
        </form>
    )
}

export default EditableForm;