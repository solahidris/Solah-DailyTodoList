import React from "react";

const AddButton = ({onClick}) => {
  return (
    <button
      className="rounded-full bg-slate-500/90 text-white text-xs py-1 px-3 mt-7"
      onClick={onClick}
    >
      add
    </button>
  );
};

export default AddButton;
