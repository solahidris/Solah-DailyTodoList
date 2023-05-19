import React from "react";

const ClearButton = ({ onClick }) => {
  return (
    <button
      className="rounded-full bg-slate-500/90 text-white text-xs py-1 px-3 ml-3 mt-7"
      onClick={onClick}
    >
      clear all
    </button>
  );
};

export default ClearButton;
