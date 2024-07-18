const Card = (props) => {
  return (
    <div className="card">
      <div>{props.renderTitle()}</div>
      <div>{props.renderBody()}</div>
    </div>
  );
};

export default Card;
