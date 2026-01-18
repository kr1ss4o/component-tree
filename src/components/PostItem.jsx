export default function PostItem(props) {
  const { title, description } = props.post;

  return (
    <article className="postItem">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
