import React from "react";

const InputEdit = ( { value, onChange }) => {
    return(
        <input
        type="text"
        value={value}
        onChange={ onChange }
        className="flex justify-start bg-slate-400/80 rounded-lg py-1 px-3 text-slate-600/80"
      />
    )
};

export default InputEdit;