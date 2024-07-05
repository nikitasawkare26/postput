import React from 'react';
import PostForm from './component/PostForm';
import PutForm from './component/PutForm';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>POST and PUT API Example</h1>
      <h2>Create a new entry (POST)</h2>
      <PostForm />
      <h2>Update an existing entry (PUT)</h2>
      <PutForm />
    </div>
  );
};

export default App;