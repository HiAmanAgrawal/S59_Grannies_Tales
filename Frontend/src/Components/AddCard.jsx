import React, { useState } from "react";
import axios from "axios";

function AddCard() {
  const [storyName, setStoryName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [Author, setAuthor] = useState("");
  const [Language, setLanguage] = useState("");
  // const [created_by, setCreatedBy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!storyName || !image || !category || !Author || !Language) {
      console.error("Error: All fields are required");
      return;
    }
  
    try {
      // console.log(created_by)
      // setCreatedBy(document.cookie.split('; ').find(row => row.startsWith('username=')).split('=')[1])

      const response = await axios.post("http://localhost:8080/api/add-items/newItem", {
        Author: Author,
        Image: image,
        Language: Language,
        category: category,
        storyName: storyName,

        // created_by: created_by,
      });
      console.log(response.data);
      setStoryName("");
      setImage("");
      setCategory("");
      setAuthor("");
      setLanguage("");
      
      // setCreatedBy(document.cookie.split('; ').find(row => row.startsWith('username=')).split('=')[1])
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-2 pt-10 pb-4">
      <h2 className="text-2xl font-bold mb-4">Add Your Own Story</h2>
      <form onSubmit={handleSubmit}>
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
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500"
          >
            <option value="">Select Category</option>
            <option value="moral">Moral</option>
            <option value="fairytale">Fairytale</option>
            <option value="fantasy">Fantasy</option>
            <option value="mythology">Mythology</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="Author" className="block mb-2">
            Author
          </label>
          <input
            type="text"
            id="Author"
            value={Author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="language" className="block mb-2">
            Language
          </label>
          <select
            id="language"
            value={Language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500"
          >
            <option value="" className="text-gray-500 font-weight: 300;">
              Select Language
            </option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-600 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCard;
