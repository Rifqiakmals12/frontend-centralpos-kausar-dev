import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailProduk from 'pages/DetailProduk';
import TambahProduk from 'pages/TambahProduk';
import DaftarProduk from 'pages/DaftarProduk';
import Blank from 'pages/Blank';
import Dashboard from 'components/Dashboard';
import Error from 'pages/Error';
import Kasir from 'pages/Kasir';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard content={Blank} />} exact />
        <Route path="/produk" element={<Dashboard content={DaftarProduk} />} exact />
        <Route path="/produk/baru" element={<Dashboard content={TambahProduk} />} />
        <Route path="/produk/detail" element={<Dashboard content={DetailProduk} />} />
        <Route path="/coming-soon" element={<Error title="Coming Soon 👌" description="Fitur ini sedang dalam tahap pengembangan"/>} />
        <Route path="/*" element={<Error title="Not Found 😢" description="Halaman yang kamu kunjungi tidak ditemukan"/>} />
        <Route path="/kasir" element={<Kasir/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
