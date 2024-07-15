import React, { useState } from 'react';
import axios from 'axios';

const UploadItem = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('userId', 'user_id'); // Replace with actual user ID
    formData.append('category', category);

    try {
      await axios.post
      ('/api/items/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Item uploaded successfully!');
    } catch (err) {
      alert('Upload failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Item</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadItem;
