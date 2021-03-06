import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import InputBar from './components/InputBar';

const App = () => (
  <div className="container mt-4cd">
    <h4 className="display-4 text-center mb-4">
      <i className="fab fa-react" /> File Upload App
    </h4>

    <FileUpload />
    <InputBar />
  </div>
);

export default App;
