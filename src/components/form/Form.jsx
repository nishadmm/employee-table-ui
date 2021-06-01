import React, { useState } from "react";
import { Icon } from "@blueprintjs/core";

import FormInput from "./FormInput";

const Form = () => {
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    age: "",
    gender: "",
  });

  const onchange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const { name, designation, age, gender } = employee;

  return (
    <form className="form-container">
      <h2 className="text-danger text-center mt-2">
        Add new Employee <Icon icon="add" color="rgb(182, 0, 0)" />{" "}
      </h2>
      <FormInput
        type="text"
        name="name"
        className="form-control my-4"
        placeholder="Employee Name"
        value={name}
        onchange={onchange}
      />
      <FormInput
        type="text"
        name="designation"
        className="form-control"
        placeholder="Designation"
        value={designation}
        onchange={onchange}
      />
      <FormInput
        type="number"
        name="age"
        className="form-control my-4"
        placeholder="Age"
        value={age}
        onchange={onchange}
      />
      <h5>Gender</h5>
      <FormInput
        type="radio"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onchange={onchange}
      />{" "}
      Male {"    "}
      <FormInput
        type="radio"
        name="gender"
        value="Female"
        checked={gender === "Female"}
        onchange={onchange}
      />{" "}
      Female {"    "}
      <FormInput
        type="radio"
        name="gender"
        value="Other"
        checked={gender === "Other"}
        onchange={onchange}
      />{" "}
      Other
      <div className="d-grid">
        <button type="submit" className="btn btn-block btn-danger mt-3">
          Submit <Icon icon="bookmark" color="white" />{" "}
        </button>
      </div>
    </form>
  );
};

export default Form;
