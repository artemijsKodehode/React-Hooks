import React, {useState, useEffect} from 'react';
import './App.css';

let App = () => {
  
  let [image, setImage] = useState(null)

  useEffect(() => {

    fetch("https://dog.ceo/api/breeds/image/random/1")
    .then(response => response.json())
    .then(data => setImage(data.message))

  },[])

  return (

    <div className="App">
    {image && image.map((image,i) => <div key={i}> <img width={"250px"} height={"250px"} src={image}></img> </div>)}
    </div>

  );
}

export default App;