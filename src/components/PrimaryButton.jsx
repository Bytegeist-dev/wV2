import React from "react";

export default function PrimaryButton({ children}) {
  return (
    <button className="px-4 py-2 mt-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">
      {children}
    </button>
  );
}
