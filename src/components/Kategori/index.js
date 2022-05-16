import React from 'react'
import PropTypes from "prop-types";
import './index.css'

export default function Kategori(props) {
  return (
    <div className="d-flex flex-column">
      <label
        htmlFor="kategori"
        className={props.isLabelOn ? "labelInput mb-2" : "labelInput mb-2 d-none"}
      >
        {props.label}
      </label>
      <select name="kategori" className="costumeInput py-2 px-3">
        <option value="">Pilih Kategori</option>
        <option value="">Kategori 1</option>
        <option value="">Kategori 2</option>
      </select>
    </div>
  );
}

Kategori.propTypes = {
  label: PropTypes.string,
  isLabelOn: PropTypes.bool,
};
