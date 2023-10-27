import React, { useState } from "react";
import styles from "./BulkUploader.module.scss";

const BulkUploader = () => {
  const options = ["Destination Path 1", "Destination Path 2", "Destination Path 3"];

  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState(null);
  const [selectedPath, setSelectedPath] = useState("");
  const [uploadedFilesShown, setUploadedFilesShown] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const newFiles = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];

      newFiles.push({
        name: file.name,
        size: file.size,
        type: "",
        altText: "",
        tag: "",
      });
    }

    setFiles([...files, ...newFiles]);

    setUploadedFilesShown(true);
  };

  const handleDropdownChange = (index, attributeName, selectedValue) => {
    const updatedFiles = [...files];

    updatedFiles[index][attributeName] = selectedValue;

    setFiles(updatedFiles);
  };

  const handleDelete = (index) => {
    const updatedFiles = [...files];

    updatedFiles.splice(index, 1);

    setFiles(updatedFiles);
  };

  const handleSubmit = () => {
    const dataObject = {
      path: selectedPath,
      files: [...files],
    };

    console.log(dataObject);

    setFormData(dataObject);

    console.log(formData);
  };

  const handleChange = (event) => {
    setSelectedPath(event.target.value);
  };

  return (
    <section className={styles.el}>
      <div className={styles.content}>
        <div className={styles.images__input}>
          <label htmlFor="upload">Images to be uploaded</label>

          <input
            id="upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>

        {uploadedFilesShown && <div className={styles.images__uploaded}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Type</th>
                <th>Alt Text</th>
                <th>Tag</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {files.map((file, index) => (
                <tr key={index}>
                  <td>{file.name}</td>

                  <td>{file.size} bytes</td>

                  <td>
                    <select
                      value={file.type}
                      onChange={(e) =>
                        handleDropdownChange(index, "type", e.target.value)
                      }
                    >
                      <option value="">Select</option>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                  </td>

                  <td>
                    <input
                      type="text"
                      value={file.altText}
                      onChange={(e) =>
                        handleDropdownChange(index, "altText", e.target.value)
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      value={file.tag}
                      onChange={(e) =>
                        handleDropdownChange(index, "tag", e.target.value)
                      }
                    />
                  </td>

                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}

        <div className={styles.images__destination}>
          <label htmlFor="upload">Destination Path:</label>

          <select value={selectedPath} onChange={handleChange}>
            <option value="">Select here:</option>
            
            {options.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </section>
  );
};

export default BulkUploader;
