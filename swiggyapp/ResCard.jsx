const ResCard = (props) => {
    const {image,name,items,stars} = props.resData;
    return (
      <div className="res-card">
        <img src={image} alt="res-logo" className="res-img" />
        <h1>{name}</h1>
        <h3>{items.join(' ,')}</h3>
        <h4>{stars} star rating</h4>
      </div>
    );
  };

export default ResCard; 