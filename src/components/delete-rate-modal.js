import React from 'react';
import './main.css';
import './style.css';


const DeleteRateModal = ({closeDeleteRateModal}) => {

    return (
        <div className='modal-container'>
            <section className="logout-modal">
                <h5>Delete Rate</h5>
                <p>Are you sure you want to delete this rate?</p>
                <div className="action-btn">
                    <button onClick={() => closeDeleteRateModal(false)}>Cancel</button>
                    <button>Delete</button>
                </div>
            </section>
        </div>
    )
}

export default DeleteRateModal;