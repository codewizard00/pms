import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/reducers/allProductReducers";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertDialogSlide from "../../components/dialog";

const Team = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((state) => state.productList.list);
  const [id, setId] = useState(0);
  useEffect(() => {
    dispatch(productList());
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "product_selling_price",
      headerName: "Selling Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "product_mrp",
      headerName: "Product MRP",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "product_brand",
      headerName: "Product Brand",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "sad",
      headerName: "Actions",
      flex: 1,
      align: "left",
      renderCell: ({ row }) => {
        return (
          <Box width="60%" m="0 0" p="5px" display="flex" borderRadius="4px">
            <Button
              variant="outlined"
              color="primary"
              sx={{ ml: "5px" }}
              onClick={() => {
                navigate(`/product/${row.id}`);
              }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{ ml: "5px" }}
              onClick={() => {
                setId(row.id)
              }}
            >
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <AlertDialogSlide id={id} setId={setId}/>
      <Box display="flex" justifyContent="space-between">
        <Header title="Products" subtitle="" />
        <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ ml: "5px",height:"40px" }}
          onClick={() => {
            navigate(`/form`);
          }}
          // component={Link}
          // to={`/products/${access.id}/edit`}
        >
          Add New Product
        </Button>
        </Box>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {list && <DataGrid checkboxSelection rows={list} columns={columns} />}
      </Box>
    </Box>
  );
};

export default Team;
