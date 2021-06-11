import React, { useState, useEffect } from "react";
import ReactDataGrid from "react-data-grid";
import axios from "axios";

const columns = [
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
  { key: "body", name: "Body" },
];

const initialRows = [
  { id: 1, title: "Title 1", bodyr: "Body 1" },
  { id: 1, title: "Title 2", bodyr: "Body 2" },
  { id: 1, title: "Title 3", bodyr: "Body 3" },
  { id: 1, title: "Title 4", bodyr: "Body 4" },
];
export default function Data() {
  const [rows, setRows] = useState(initialRows);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setRows(response.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Data</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Some random data in representation from API</h6>
                </div>
                <div className="col-md-12">
                  <ReactDataGrid columns={columns} rows={rows} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
