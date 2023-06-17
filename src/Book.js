const Book = ({ image, author, title, id }) => {
  // console.log(id);
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span>#{id}</span>
    </article>
  );
};

export default Book;