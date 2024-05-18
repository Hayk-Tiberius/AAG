import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/LogIn.index.js';
import Main from './Pages/Main.jsx';
import Gallery from './Pages/Gallery.jsx';
import Artists from './Pages/Artists/Artists.jsx';
import Albert from './Pages/Gallery/Albert.jsx';
import LogIn from './components/LogIn.jsx';
import Register from './components/Register.jsx';
import Frederick from './Pages/Gallery/Frederick.jsx';
import Thomas from './Pages/Gallery/Thomas.jsx';
import './firebase.js'


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Gallery.jsx" element={<Gallery />} />
      <Route path="/Artists" element={<Artists />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path='/Register.jsx' element={<Register />} />
      <Route path="/Albert.jsx" element={<Albert />} />
      <Route path="/Frederick.jsx" element={<Frederick />} />
      <Route path="/Thomas.jsx" element={<Thomas />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//Main Router