/** @format */

import {withStyles} from "@material-ui/core";
import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import styles from "./styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {addCart} from "../../actions/product";

function CartProduct(props) {
  const {classes, productName, listProducts} = props;
  const [product, setProduct] = useState({});

  //

  useEffect(() => {
    if (listProducts.length > 3) {
      let newProduct = listProducts.find((item) => {
        return item.name.replace(/\s/g, "") === productName;
      });
      setProduct(newProduct);
    }
  }, [listProducts]);

  const deleteCartProduct = () => {
    props.deleteCartProduct(props.indexProductCart)
  };

  return (
    <div className={classes.container}>
      <div className={classes.Left}>
        <img alt="Imageok" className={classes.ImgLeft} src={product.linkImg} />
      </div>
      <div className={classes.Right}>
        <div className={classes.ProductName}>{product.name}</div>
        <div className={classes.ProductPrice}>{product.price}</div>
        <div className={classes.detailTop}>
          <div className={classes.ItemRight}>
            <span className={classes.ItemRightBold}>CPU: </span>
            {product.CPUCompact}
          </div>
          <div className={classes.ItemRight}>
            <span className={classes.ItemRightBold}>RAM: </span>
            {product.RamCompact}
          </div>
        </div>
        <div className={classes.detailTop}>
          <div className={classes.ItemRight}>
            <span className={classes.ItemRightBold}>Đĩa cứng: </span>
            {product.memoryCompact}
          </div>
          <div className={classes.ItemRight}>
            <span className={classes.ItemRightBold}>Màn hình: </span>
            {product.screenCompact}
          </div>
        </div>
      </div>
      <div className={classes.ItemIcon}>
        <DeleteForeverIcon
          onClick={deleteCartProduct}
          className={classes.DeleteForever}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listProducts: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (data) => {
      return dispatch(addCart(data));
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CartProduct)
);
