/* eslint-disable react/prop-types */

const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-transparent hover:text-blue-600 border border-blue-500 transition-all ease-in-out duration-300 w-full"
        >
            {children}
        </button>
    );
};

export default Button;
