import React from "react";
import { Route } from "react-router-dom";
import CollectionOverviews from "../../components/collectionOverviews/CollectionOverviews";
import CollectionPage from "../collection/CollectionPage";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverviews} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
