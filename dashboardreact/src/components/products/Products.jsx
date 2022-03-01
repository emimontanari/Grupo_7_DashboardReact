import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import "./products.css";


const columns: GridColDef[] = [
  
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'name',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Precio',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'category_id',
    headerName: 'Category ID',
    width: 150,
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
         
         return window.location.href = "products/" + thisRow.id;
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
   fetch('http://localhost:3000/api/products')
   .then(response => response.json())
   .then(data => setData(data));
  }, []);
  
  return (
    <div style={{ height: 650, width: '80%',margin:20}}>
      <DataGrid
        rows={data.data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
