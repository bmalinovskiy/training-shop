import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page';

const App = () => {
  return (
    <Routes>
      <Route path='/training-shop' element={<MainPage />} />
    </Routes>
  );
};

export default App;
