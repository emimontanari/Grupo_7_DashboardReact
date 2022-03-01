import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({ data: [] });

   useEffect(() => {
    fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => console.log(data));
   }, []);
  
  return (
    <ul>
      {data.data.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;