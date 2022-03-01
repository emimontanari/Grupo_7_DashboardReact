import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import "./categoryDetail.css";
import { useParams } from "react-router-dom";

const columns: GridColDef[] = [
  
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Producto',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Descripción',
    width: 300,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Precio',
    align: 'right',
    width: 100,
    editable: true,
  },
  {
    field: 'offer',
    headerName: 'Descuento',
    align: 'right',
    width: 100,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Tienda',
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
         
         return window.location.href = "http://localhost:3000/products/detail/" + thisRow.id;
      };

      return(
      <a className="userListEdit" onClick={onClick}>Ver</a>
      
      ) 
    },
  }
  
];
export default function DataGridDemo() {
    let params = useParams()
    const [data, setData] = useState([]);
  
    useEffect(() => {
     fetch('http://localhost:3000/api/category/'+params.id)
    .then(response => response.json())
    .then(data => setData(data))
    },[]);
   let row = data.data;
   
   if (row){
    return (
        <div style={{ height: 400, width: '97%',margin:20}}>
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
   } else {
       return (<></>);
   }
  
 
}
