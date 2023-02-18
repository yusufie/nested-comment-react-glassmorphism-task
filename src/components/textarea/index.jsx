import React from "react";

function TextArea({ ...props }) {
  return <textarea className=" bg-black border border-secondary text-white rounded p-1 w-100" rows="4" {...props} />;
}

export { TextArea };