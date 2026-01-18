import PostItem from "./PostItem.jsx";

export default function PostList(props) {
  const { posts } = props;

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
