import React,{useState} from 'react'
import  axios  from 'axios';

function AddCard() {
    const [storyID, setStoryID] = useState('');
    const [storyName, setStoryName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [language, setLanguage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/add-items', {
            storyID,
            storyName,
            image,
            category,
            author,
            language,
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
  return (
   
   <>
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Your Own Story</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="storyID" className="block mb-2">
            Story ID
          </label>
          <input
            type="text"
            id="storyID"
            value={storyID}
            onChange={(e) => setStoryID(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      </div>
       </>
  )
}

export default AddCard


