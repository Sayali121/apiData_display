/*/import React, { useState, useEffect } from 'react';
import './App.css';
//import Card from './components/Card';
import data from './data.json';
export default function App(){
  return(
    <div className="App">
    <h1>Fetched Data</h1>
    {
      data && data.map(({id,title})=>(


        <div key={id} className="row">
          <strong>{title}</strong>
          </div>
      )
      )
    }
    </div>
  );
}
*/






import React, { useState, useEffect } from 'react';
import './App.scss'; 
import Card from './Card';
import Modal from './Modal';

function App() {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleLearnMoreClick = post => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Fetch Data from API Endpoint</h1>
        {data.map(post => (
          <Card
            key={post.id}
            post={post.title}
            onLearnMoreClick={handleLearnMoreClick}
          />
        ))}
      </div>
      {selectedPost && (
        <Modal post={selectedPost} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
