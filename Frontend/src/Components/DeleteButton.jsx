import React, { useState } from "react";
import axios from "axios";

function DeleteButton({ entityId }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://s59-grannies-tales-9nzx.onrender.com/api/${entityId}`);
      console.log(response.data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowConfirmation(true)}
        className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-600 hover:text-white duration-300"

      >
        Delete
      </button>
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this entity?</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-4 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteButton;
