import React, { useState } from "react";



import styles from "./BulkSelector.module.scss";

const BulkSelector = () => {
  const options = ["Source Path 1", "Source Path 2", "Source Path 3"];

  const ImageData = [
    {
      id: 1,
      url:"https://via.placeholder.com/1080x720/eee?text=3:2.jpg",
      fileName: "ABCD",
      altText: "",
      type: "",
      size: "3521-byte",
    },
    {
      id: 2,
      url:"https://upload.wikimedia.org/wikipedia/commons/9/93/256x160px_Image_Placeholder.png",
      fileName: "Leweue",
      altText: "",
      type: "",
      size: "3521-byte",
    },
    {
      id: 3,
      url: "https://coderwall-assets-0.s3.amazonaws.com/uploads/picture/file/1826/ffffff.png",
      fileName: "EUxbz",
      altText: "",
      type: "",
      size: "3521-byte",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWqnFGl9Y_GqnwehQmnYk_C9jpxUrCpARCFUTydFVCtk3kyzKKI0IUNCxJISWEGV60QU&usqp=CAU.jpg",
      fileName: "XHSAa",
      altText: "",
      type: "",
      size: "3521-byte",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedItems, setSelectedItems] = useState(0);
  const [fileData, setFileData] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    setSelectedItems([]);
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((selected) => selected !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  const handleFormSubmit = () => {
    const dataObject = {
      path: selectedOption,
      Files: [...selectedItems],
    };

    setFileData(dataObject);
    
    console.log(fileData);
  };
console.log(selectedItems.length);
  return (
    

    <section className={styles.el}>
      <div className={styles.content}>
        <label>Source Path:</label>

        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select here:</option>
          
          {options.map((option, i) => (
            <option key={i} value={option}>{option}</option>
          ))}
        </select>
        {selectedOption && (
        <div>
          <p>Total Item: {ImageData.length}</p>

          <p>Selected Items:{selectedItems.length}</p>

          <div className={styles.cardContainer}>
            {ImageData.map((item, index) => (
              <div className={styles.card} key={item.index}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </label>

                <img  src={item.url} alt='nes' />
                <p> {item.fileName}</p>
              </div>
            ))}
          </div>

          <button onClick={handleFormSubmit}>Submit</button>
        </div>
      )}

      </div>

    
    </section>
  );
};

export default BulkSelector;
