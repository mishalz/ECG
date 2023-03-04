import React, { useState } from "react";
import styles from "./Image.module.css";

function Image() {
  //state for the uploaded file
  const [selectedECG, setSelectedECG] = useState(null);

  //dummy method for now which will classify the image and show the results
  const classifyImage = () => {
    console.log("ECG is classified");
  };

  return (
    <div className={styles.container}>
      <p>Upload your ECG image for generating Classification Report</p>
      <label htmlFor="ecgimage" className={styles.uploadbtn}>
        Upload
      </label>
      <input
        type="file"
        name="ecgimage"
        id="ecgimage"
        onChange={(event) => {
          setSelectedECG(event.target.files[0]);
        }}
      />

      {selectedECG && (
        <div>
          <img
            alt="ECG Waveform"
            width={"250px"}
            src={URL.createObjectURL(selectedECG)}
          />
          <div className={styles.action}>
            <button onClick={() => setSelectedECG(null)}>Remove</button>
            <button onClick={classifyImage}>Classify</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Image;
