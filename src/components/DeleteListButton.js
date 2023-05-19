import React from "react";

const DeleteListButton = ({ onClick }) => {
  return (
    <button
      className="justify-items-end rounded-full bg-red-500/90 text-white px-[6px] h-full ml-3"
      onClick={onClick}
    >
      -
    </button>
  );
};

export default DeleteListButton;