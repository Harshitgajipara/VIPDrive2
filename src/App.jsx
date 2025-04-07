// App.jsx
import { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple page with a basic layout.</p>
      </header>

      {/* Main Content Section */}
      <div className="card">
        <h2>Counter</h2>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </div>

      {/* Footer Section */}
      <footer className="read-the-docs">
        <p>Click on the Vite and React logos to learn more</p>
      </footer>
    </div>
  );
}

export default App;
