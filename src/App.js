import React from 'react';
import Map from './Map';
import './App.css';
import Navigation from './Navigation';
import SignIn from './SignIn';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Map></Map>
      <SignIn></SignIn>
    </div>
  );
}

export default App;
