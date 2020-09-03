import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Navbar from './comps/Navbar';



function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid />
      <Navbar />
    </div>
  );
}

export default App;
