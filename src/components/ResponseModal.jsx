'use client'
import { Modal } from '@mui/material';
import Link from 'next/link';

const iconsDict = {
    success: 'success',
    error: 'error',
    warning: 'warning',
}

export const ResponseModal = ({ open, handleClose, variant, message }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="response-modal"
        >
            <div className="modal-content">

                {iconsDict[variant]}

                <h2 className="title">
                    {message ?? ''}
                </h2>

                {['error', 'warning'].includes(variant) &&
                    <p className="description">
                        נסו שנית מאוחר יותר
                    </p>
                }

                <Link
                    className="go-home-btn"
                    href="/"
                >
                    חזרה לעמוד הבית
                </Link>
            </div>
        </Modal>
    )
}
