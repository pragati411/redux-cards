import { useSelector } from "react-redux";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
export const CartSummary = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const total = useSelector((state) => state.addToCart.total);
  const product = useSelector((state) => state.addToCart.productList);
  console.log("SK@cartSummrty", product.length);
  return (
    <>
      {total ? (
        <>
          <div>
            <h3>Product Name:</h3>
            <table>
              {product.map((item) => (
                <tr>
                  <td>{item.productName}</td>
                  <td>:{item.productPrice}</td>
                </tr>
              ))}

              <tr>
                <td>Total Amount</td>
                <td>:{total}</td>
              </tr>
            </table>
          </div>
        </>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </>
  );
};
