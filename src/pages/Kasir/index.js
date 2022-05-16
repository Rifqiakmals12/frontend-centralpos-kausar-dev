import React from "react"
import { useEffect, useState } from 'react';
import NavbarKasir from 'components/NavbarKasir';
import ProdukKasir from "components/ProdukKasir";
// import "./index.css"

const Kasir = function () {
    return (
        <div>
            <NavbarKasir/>
            <ProdukKasir/>
        </div>
    )
}

export default Kasir