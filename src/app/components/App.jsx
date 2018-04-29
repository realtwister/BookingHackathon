import React, { PropTypes } from 'react';
import Header from './common/Header';

function App({ children }) {
  return (
    <div className="root">
      <Header />
      <div className="center">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
