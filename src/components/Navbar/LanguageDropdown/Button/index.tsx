import React from "react";
export const Button: React.FC = () => {
    return (
        <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="true"
        >
            🌐 Language
        </button>

    )
}