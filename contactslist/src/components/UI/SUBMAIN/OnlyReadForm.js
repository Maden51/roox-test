import React from "react";
import './OnlyReadForm.css';

function OnlyReadForm({ user }) {
    return (
        <form className="view-form">
            <label className='view-form__label'>Name
                <input type="text" readOnly className="view-form__input onlyRead" value={user.name}></input>
            </label>
            <label className='view-form__label'>User name
                <input type="text" readOnly className="view-form__input onlyRead" value={user.username}></input>
            </label>
            <label className='view-form__label'>E-mail
                <input type="email" readOnly className="view-form__input onlyRead" value={user.email}></input>
            </label>
            <label className='view-form__label'>Street
                <input type="text" readOnly className="view-form__input onlyRead" value={user.address?.street}></input>
            </label>
            <label className='view-form__label'>City
                <input type="text" readOnly className="view-form__input onlyRead" value={user.address?.city}></input>
            </label>
            <label className='view-form__label'>Zip code
                <input type="text" readOnly className="view-form__input onlyRead" value={user.address?.zipcode}></input>
            </label>
            <label className='view-form__label'>Phone
                <input type="tel" readOnly className="view-form__input onlyRead" value={user.phone}></input>
            </label>
            <label className='view-form__label'>Website
                <input type="text" readOnly className="view-form__input onlyRead" value={user.website}></input>
            </label>
            <label className='view-form__label'>Comment
                <textarea name="veiw-comment" readOnly className="view-form__textarea onlyRead"></textarea>
            </label>
        </form>
    )
}

export default OnlyReadForm;