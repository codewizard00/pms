import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { createProductSchema } from "../../utils/validation/createProductSchema";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/reducers/createProductReducers";

const Form = () => {
  const initialValues = {
    name: "",
    description: "",
    product_brand: "",
    product_selling_price: "",
    product_mrp: "",
    category: "",
    terms_and_conditions:""
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const handleFormSubmit = (values,{resetForm}) => {
    dispatch(createProduct(values));
    resetForm();
  };

  return (
    <Box m="20px">
      <Header title="CREATE NEW PRODUCT" subtitle="" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={createProductSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Selling Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.product_selling_price}
                name="product_selling_price"
                error={
                  !!touched.product_selling_price &&
                  !!errors.product_selling_price
                }
                helperText={
                  touched.product_selling_price && errors.product_selling_price
                }
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Market Retail Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.product_mrp}
                name="product_mrp"
                error={!!touched.product_mrp && !!errors.product_mrp}
                helperText={touched.product_mrp && errors.product_mrp}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Brand"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.product_brand}
                name="product_brand"
                error={!!touched.product_brand && !!errors.product_brand}
                helperText={touched.product_brand && errors.product_brand}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Terms & Conditions"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.terms_and_conditions}
                name="terms_and_conditions"
                error={!!touched.terms_and_conditions && !!errors.terms_and_conditions}
                helperText={touched.terms_and_conditions && errors.terms_and_conditions}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
