import Button from 'components/Button';
import Input from 'components/Input'
import Kategori from 'components/Kategori';
import React, { useState } from 'react'
import './index.css'
import image from 'assets/images/imProduk.png'

export default function TambahProduk() {
  const [imgData, setImgData] = useState(image);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setImgData(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <h2>Detail Produk</h2>
      <div className="MainWrapper d-md-flex justify-content-between">
        <div className="leftSide w-100">
          <div className="mb-2">
            <Input type="text" isLabelOn label="Nama Produk" />
          </div>
          <div className="mb-2">
            <Kategori isLabelOn label="Kategori" />
          </div>
          <div className="mb-2">
            <Input type="number" isLabelOn label="Harga" />
          </div>
          <div className="mb-2">
            <Input type="number" isLabelOn label="Stok" />
          </div>
          <div className="mb-2">
            <Input type="number" isLabelOn label="Minumum Stok" />
          </div>
          <div className="mb-5">
            <p className="desc">
              Kami akan mengingatkan kamu jika stok kamu sudah memasuki minimum
              stok 😉
            </p>
          </div>
          <div className="mb-2">
            <Button label="Tambah Produk" isPrimary to="" />
          </div>
        </div>
        <div className="rightSide w-100">
          <h1 className="labelInput">Fo to Produk</h1>
          <div className="mb-2 imgPrev">
            <img src={imgData} alt="preview" width={147} height={147} />
          </div>
          <div className="inputWrapper py-2 px-3">
            <label
              htmlFor="input"
              className="text-center w-100 labelCostumeInput"
            >
              Pilih Foto
            </label>
            <input
              type="file"
              id="input"
              accept="image/png, image/jpg, image/jpeg"
              onChange={onChangePicture}
            />
          </div>
          <p className="descPhoto mt-3">
            Format gambar yang dizinkan hanya PNG, JPG
            <br /> dan JPEG dan ukuran gambar maksimal 2 MB
          </p>
        </div>
      </div>
    </>
  );
}
