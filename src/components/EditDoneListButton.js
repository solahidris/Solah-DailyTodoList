import React from "react";

const EditDoneListButton = ({ onClick }) => {
  return (
    <button
    className="rounded-full bg-green-600/90 text-white px-[4px] h-full ml-3"
      onClick={onClick}
    >
      ✅
    </button>
  );
};

export default EditDoneListButton;