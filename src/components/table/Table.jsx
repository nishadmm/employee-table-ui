import React from "react";
import { Icon } from "@blueprintjs/core";

const Table = () => {
  return (
    <div className="table-container table-responsive">
      <table className="table table-hover my-auto caption-top table-striped ">
        <caption>Current Employees</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Age</th>
            <th>Gender</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nishad.m.m</td>
            <td>Web Developer</td>
            <td>20</td>
            <td>Male</td>
            <td className="table-icons">
              {" "}
              <Icon icon="edit" color="blue" />{" "}
              <Icon icon="trash" color="red" />{" "}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jasna.m.m</td>
            <td>Teacher</td>
            <td>32</td>
            <td>Female</td>
            <td className="table-icons">
              {" "}
              <Icon icon="edit" color="blue" />{" "}
              <Icon icon="trash" color="red" />{" "}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Muhammed</td>
            <td>Accounting</td>
            <td>43</td>
            <td>Male</td>
            <td className="table-icons">
              {" "}
              <Icon icon="edit" color="blue" />{" "}
              <Icon icon="trash" color="red" />{" "}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Noorja</td>
            <td>UI Designer</td>
            <td>31</td>
            <td>Female</td>
            <td className="table-icons">
              {" "}
              <Icon icon="edit" color="blue" />{" "}
              <Icon icon="trash" color="red" />{" "}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Subash</td>
            <td>Security</td>
            <td>37</td>
            <td>Male</td>
            <td className="table-icons">
              {" "}
              <Icon icon="edit" color="blue" />{" "}
              <Icon icon="trash" color="red" />{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
