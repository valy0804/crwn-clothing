import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, id, title } = category;
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
