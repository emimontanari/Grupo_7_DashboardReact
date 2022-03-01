import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import "./users.css";

const columns: GridColDef[] = [
  
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstname',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'lastname',
    headerName: 'Apellido',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  
  {
    field: 'profile_id',
    headerName: 'Profile id',
    width: 100,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );
         
         return window.location.href = "users/" + thisRow.id;
      };

      return(
      <a className="userListEdit" onClick={onClick}>Abrir</a>
      
      ) 
    },
  }
];
export default function DataGridDemo() {
  const [data, setData] = useState([]);

  useEffect(() => {
   fetch('http://localhost:3000/api/users')
   .then(response => response.json())
   .then(data => setData(data));
  }, []);
  
  return (
    <div style={{ height: 400, width: '80%',margin:20}}>
      <DataGrid
        rows={data.data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
