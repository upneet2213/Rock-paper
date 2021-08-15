import React from 'react'
import closeModal from '../src/images/icon-close.svg'
import rulesPhoto from '../src/images/image-rules.svg'


const Modal = ({isModalOpen,handleCloseModal}) => {
    
    
    {if(isModalOpen){
        return (
            <div className="modal-container">
                <div className="modal">
                <div className="modal-header">
                    <h1>Rules</h1>
                    <button className="close-modal" onClick={handleCloseModal}><img src={closeModal} alt=""  width="200%"/></button>
                </div>
                <div className="rules-photo">
                    <img src={rulesPhoto} alt="" />
                </div>
                </div>
                
            </div>
        )
    } }
    return <div></div>

}

export default Modal
