import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import "./category.css";

const columns: GridColDef[] = [
  
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Categoria',
    width: 150,
    editable: true,
  },
  {
    field: 'total',
    headerName: 'Total',
    type: 'number',
    width: 90,
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
         
         return window.location.href = "category/" + thisRow.id;
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
   fetch('http://localhost:3000/api/category')
   .then(response => response.json())
   .then(data => setData(data));
  }, []);
  
  return (
    <div style={{ height: 350, width: '50%',margin:20}}>
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
