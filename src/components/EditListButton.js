import React from "react";

const EditListButton = ({ onClick }) => {
  return (
    <button
    className="rounded-full bg-slate-100/50 text-white px-[4px] h-full ml-3"
      onClick={onClick}
    >
      📝
    </button>
  );
};

export default EditListButton;