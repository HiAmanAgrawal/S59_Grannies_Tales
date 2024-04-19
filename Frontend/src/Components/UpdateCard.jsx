import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateButton({ entityId }) {
  const [storyName, setStoryName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/${entityId}`);
        const { data } = response;
        setStoryName(data.storyName);
        setImage(data.Image);
        setCategory(data.category);
        setAuthor(data.Author);
        setLanguage(data.Language);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [entityId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:8080/api/${entityId}`, {
        Author: author,
        Image: image,
        Language: language,
        category: category,
        storyName: storyName,
      });
      console.log(response.data);

      //  reset  fields after  update
      setStoryName("");
      setImage("");
      setCategory("");
      setAuthor("");
      setLanguage("");
      

      
      setShowPopup(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowPopup(true)}
        className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-600 hover:text-white duration-300"

      >
        Update
      </button>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Update Entity</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label htmlFor="storyName" className="block mb-2">
                  Story Name
                </label>
                <input
                  type="text"
                  id="storyName"
                  value={storyName}
                  onChange={(e) => setStoryName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block mb-2">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block mb-2">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="language" className="block mb-2">
                  Language
                </label>
                <input
                  type="text"
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Update
              </button>
            </form>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateButton;
