import React from 'react';

type DetailProps = {
    isVisible: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

const Detail: React.FC<DetailProps> = ({ isVisible, onClose, content }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-4 rounded shadow-lg max-w-xl mx-auto z-10">
                {content}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Detail;