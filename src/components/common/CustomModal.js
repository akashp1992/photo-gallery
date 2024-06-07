import React from 'react'
import ReactModal from 'react-modal'

const CustomModal = ({ isOpen, setIsOpen, modalBody }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
            >
                {modalBody}
            </ReactModal>
        </>
    )
}

export default CustomModal
