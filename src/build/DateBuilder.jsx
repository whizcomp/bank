import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateBuilder({ name, value, onChange }) {
  return (
    <DatePicker
      selected={(value && new Date(value)) || null}
      onChange={(val) => {
        console.log(val);
      }}
      placeholderText="dd/MM/YYYY"
      dateFormat="dd/MM/yyyy"
      className="form-control"
      name={name}
    />
  );
}
