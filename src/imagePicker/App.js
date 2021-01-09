import React, { useRef, useState } from "react";

import "./App.css";
const App = () => {
    const [previewImage, setPreviewImage] = useState();
    const fileInput = useRef();
    const onButtonClick = () => {
        fileInput.current.click();
    };
    const onFileChange = (e) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewImage(fileReader.result);
        };
        fileReader.readAsDataURL(e.target.files[0]);
    };
    return (
        <div className="App">
            <input
                type="file"
                style={{ display: "none" }}
                accept=".jpg,.png,.jpeg"
                ref={fileInput}
                onChange={onFileChange}
            />
            <div className="container">
                <div className="image">
                    {previewImage ? <img src={previewImage} alt="preview" /> : <p>Pick a photo</p>}
                </div>
                <button type="button" onClick={onButtonClick}>
                    Select photo
                </button>
            </div>
        </div>
    );
};

export default App;
