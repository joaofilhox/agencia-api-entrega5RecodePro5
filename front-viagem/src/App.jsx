import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { MainRoutes } from './routes/RoutesMain';
import './reset.css';

function App() {
  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
