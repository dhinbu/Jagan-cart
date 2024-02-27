import React from "react";
import { useParams } from "react-router-dom";
import classes from "./product.module.css";

const Movie = ({ items }) => {
  const { id: selectedMovieId } = useParams();

  const selectedItem = items.find(
    (item) => item.id === Number(selectedMovieId)
  );
  return !selectedItem ? (
    <div>No item selected</div>
  ) : (
    <div>
      <div className={classes.container}>
        <img src={selectedItem.image} alt="movie" className={classes.poster} />
        <div className={classes.titleContainer}>
          <div className={classes.titleRating}>
            <h1 className={classes.title}>{selectedItem.title.length < 30 ? selectedItem.title : selectedItem.title.slice(0, 30)}</h1>
            <h3 className={classes.rating}>({selectedItem.rating.rate})</h3>
          </div>
          <div className={classes.cast}>Category: {selectedItem.category}</div>
          <div className={classes.description}>
            Description: {selectedItem.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
