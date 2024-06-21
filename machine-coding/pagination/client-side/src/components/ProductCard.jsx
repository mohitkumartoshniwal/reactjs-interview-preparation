const ProductCard = ({ title, thumbnail }) => {
  return (
    <div className="card">
      <img className="card__image" src={thumbnail} alt={title} />
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

export default ProductCard;
