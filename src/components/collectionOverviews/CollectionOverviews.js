import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collectionOverviews.scss";
import PreviewCollection from "../preview-collections/PreviewCollection";
import { selectCollectionsPreview } from "../../redux/shop/shopSelector";

const CollectionOverviews = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionOverviews);
