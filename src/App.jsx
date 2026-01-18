import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Данните НЕ са в state (както е в условието) — просто променлива.
  const posts = [
    { id: 1, title: "React Basics", description: "Въведение в React компоненти." },
    { id: 2, title: "Component Tree", description: "Как компонентите създават дървовидна структура." },
    { id: 3, title: "Props and State", description: "Предаване на данни надолу по дървото." },
  ];

  return (
    <div className="app">
      <Header />
      <Main posts={posts} />
      <Footer />
    </div>
  );
}