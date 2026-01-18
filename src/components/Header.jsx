export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <span className="logo">📰</span>
        <h1>My React Blog</h1>
      </div>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#posts">Posts</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}
