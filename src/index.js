import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main.jsx';
import Gallery from './Pages/Gallery.jsx';
import Artists from './Pages/Artists/Artists.jsx';
import Albert from './Pages/Gallery/Albert.jsx';
import LogIn from './Pages/LogIn/LogIn.jsx';
import Frederick from './Pages/Gallery/Frederick.jsx';
import Thomas from './Pages/Gallery/Thomas.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Gallery.jsx" element={<Gallery />} />
      <Route path="/Artists" element={<Artists />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Albert.jsx" element={<Albert />} />
      <Route path="/Frederick.jsx" element={<Frederick />} />
      <Route path="/Thomas.jsx" element={<Thomas />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);