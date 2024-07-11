import React from 'react';

interface NotificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                <div className="flex justify-end">
                    <a href="/">
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-200">&times;</button>
                    </a>
                </div>
                <div className="text-center">
                    <div className="mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-green-500 mx-auto"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <p className="text-lg text-white">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
