import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

export default function Main(props) {
  const { posts } = props;

  return (
    <main className="main">
      <Sidebar />
      <Content posts={posts} />
    </main>
  );
}
