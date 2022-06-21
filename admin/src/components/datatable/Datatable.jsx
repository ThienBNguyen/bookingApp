import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import axios from "axios";
const Datatable = ({ columns }) => {
  const [list, setList] = useState();
  const [isLoading, setLoading] = useState(true);
  const url = "http://localhost:8800/api"
  const { data, } = useFetch(`${url}/users`)
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  useEffect(() => {
    setList(data);
    setLoading(false);
  }, [data])
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/users/${id}`)
      console.log(data)
      setList((data.filter((item) => item._id !== id)))

    } catch (error) {

    }
  }
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
};

export default Datatable;
