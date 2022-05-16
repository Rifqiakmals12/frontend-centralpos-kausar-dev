import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../../assets/icons/logo.png';
import './index.css';

function NavbarKasir() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://f66dc4f9-7b40-4d5b-a8d9-1701a2a80d41.mock.pstmn.io/business?statistic=false')
            .then(response => response.json())
            .then(data => setData(data.result));
        console.log(data);
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-nav-white">
                <div className="container-fluid ms-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">
                            <img src={data.foto_profil} alt="" width="60" class="d-inline-block" />
                            <span className="fw-bold">{data.nama_bisnis}</span>
                        </a>
                        <form className="d-flex">
                            <input className="form-control me-2 input-search rounded-pill" type="search" placeholder="Cari produk kamu disini" aria-label="Search" />
                            <button className="btn btn-warning btn-filter rounded-pill" type="submit"><i class="bi bi-filter"></i> Filter</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarKasir;
