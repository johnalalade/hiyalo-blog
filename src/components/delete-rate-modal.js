import axios from 'axios';
import React from 'react';
import './main.css';
import './style.css';


const DeleteRateModal = ({closeDeleteRateModal, id, cleanUp }) => {

    const delet = () => {
        axios.delete(`https://kudifx.herokuapp.com/api/v1/delete-price/${id}`)
        .then(res => {
            console.log(res.data)
            cleanUp()
            closeDeleteRateModal(false)
        })
    }

    return (
        <div className='modal-container'>
            <section className="logout-modal">
                <h5>Delete Rate</h5>
                <p>Are you sure you want to delete this rate?</p>
                <div className="action-btn">
                    <button onClick={() => closeDeleteRateModal(false)}>Cancel</button>
                    <button onClick={() => {
                        delet()
                    }}>Delete</button>
                </div>
            </section>
        </div>
    )
}

export default DeleteRateModal;