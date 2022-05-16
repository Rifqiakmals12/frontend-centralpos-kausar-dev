import React from 'react';
import { useEffect, useState } from 'react';
import './index.css';

function ProdukKasir() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://f66dc4f9-7b40-4d5b-a8d9-1701a2a80d41.mock.pstmn.io/product')
            .then(response => response.json())
            .then(data => setData(data.result));
        console.log(data);
    }, []);

    return (
        <div className="bg-primary wrapper-produk">
            <div className="py-5 w-100 container">
                <div className="row">
                    {data.map((item) => (
                        <div className='mb-4 col-md-3'>
                            <div className="card" style={{ width: '18rem', height: '30rem' }}>
                                <img className="card-img-top" height={300} width={300} src={(item.gambar)} />
                                <div className="card-body">
                                    <h5 classNama="card-title text-center">{(item.nama)}</h5>
                                    <p className="card-text text-center">{(item.nama)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProdukKasir;