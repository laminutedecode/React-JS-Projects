import { useState } from 'react';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputFormat, setOutputFormat] = useState('png');
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    displayImage(file);
  };
    const displayImage = (file) => {
      const reader = new FileReader();
        reader.onload = function () {
        const dataUrl = reader.result;
  
        document.getElementById('image-display').src = dataUrl;
      };
  
      reader.readAsDataURL(file);
    };

  const handleFormatChange = (event) => {
    setOutputFormat(event.target.value);
  };

  const convertImage = () => {
    if (!selectedFile) {
      alert('Sélectionnez un fichier image.');
      return;
    }

    const reader = new FileReader();

    reader.onload = function () {
      const dataUrl = reader.result;
      const blob = dataURItoBlob(dataUrl);


      saveAs(blob, `converted_image.${outputFormat}`);
    };

   
    reader.readAsDataURL(selectedFile);
  };



const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};


  return (
    <div className="app-container">
      <div className="input-container">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        
        <div className="image-container">
          <img id="image-display" src="" alt="" />
        </div>
        <select value={outputFormat} onChange={handleFormatChange}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WebP</option>
          <option value="gif">GIF</option>
          <option value="tiff">TIFF</option>
        </select>
        <button className='btn' onClick={convertImage}>Convertir image</button>
      </div>
    </div>
  );
}

export default App;
