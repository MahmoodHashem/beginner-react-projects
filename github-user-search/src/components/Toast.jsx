/* eslint-disable react/prop-types */


export default function Toast({ message, onClose }) {
    return (
        <div onClick={onClose} className="custom-toast">
            <span>{message || "Something went wrong"}</span>

        </div>
    );
}
