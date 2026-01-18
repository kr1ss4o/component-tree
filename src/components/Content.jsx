import PostList from "./PostList.jsx";

export default function Content(props) {
  return (
    <section className="content" id="posts">
      <h2>Постове</h2>
      <PostList posts={props.posts} />
    </section>
  );
}
