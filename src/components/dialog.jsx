import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/reducers/deleteProductReducer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ id, setId }) {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Dialog
        open={id > 0}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setId(0)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> Do you want to delete this product?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setId(0)}>Disagree</Button>
          <Button
            onClick={() => {
              dispatch(deleteProduct(id));
              setId(0);
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
