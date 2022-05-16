import axios from 'axios';
import Button from 'components/Button';
import Input from 'components/Input';
import Loading from 'components/Loading';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import './index.css'


export default function DaftarProduk() {
  const [produk,setProduk]= useState([]);
  const navigate = useNavigate();
  
   useEffect( () => {
     async function fetchData() {
       const res = await axios
       .get(
         "https://e089d8f7-73fc-41ac-aa6e-3130fdeb1236.mock.pstmn.io/product?list=true"
       )
        setProduk(res.data.result);
     }
     fetchData();
   }, []);


   if (!produk) return null;


  return (
    <>
      <h2>Daftar Produk</h2>
      <p>Daftar produk yang tersedia</p>
      <div className="searchWrapper my-4 d-md-flex w-auto justify-content-between">
        <div className="w-50 mb-lg-0 mb-2">
          <Input placeholder="Cari produk kamu disini" type="text" />
        </div>
        <Link className='btn btn-dark' to="/produk/baru">Tambah Produk</Link>
      </div>
      <table className="table table-borderless overflow-scroll">
        <thead className="text-white text-center thead">
          <tr>
            <th>Foto</th>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Harga</th>
            <th>Stok</th>
          </tr>
        </thead>
        <tbody className="text-center tbody">
            {
              produk.length === 0 ? 
              <Loading />
              :
              produk.map((item,index)=>{
                return (
                  <tr
                    className="align-middle"
                    key={index}
                    onClick={() => navigate(`/produk/detail`)}
                  >
                    <td>
                      <img
                        src={item.gambar}
                        alt={item.nama_kategori}
                        width={100}
                        height={100}
                      />
                    </td>
                    <td className="text-start">{item.nama}</td>
                    <td>{item.nama_kategori}</td>
                    <td>{`Rp. ${item.harga}`}</td>
                    <td>{item.stok}</td>
                  </tr>
                );
              })
            }
        </tbody>
      </table>
    </>
  );
}
