import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CollectionItem.scss";
import { connect } from "react-redux";
import { addItem } from "./../../redux/cart/cartActions";
function CollectionItem({ item, addItem }) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <div className="name">{item.name}</div>
        <div className="price">{item.price}</div>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Card
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
