import React from 'react';
import '../public/app.css';

const App = ({ guilds }) => {
  console.log(  guilds  )
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} className="App">
      <h1>Bot Servers :</h1>
          <br />
      {guilds.map(c => (
        <div>
          <div style={{border: '1px solid black', padding: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%'}} >
          <h1>{c.name}</h1>
          <p>{c.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;