import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {

  const posts = [
    {
      id: 1,
      title: "Learning React",
      description: "React makes UI development easier."
    },
    {
      id: 2,
      title: "Understanding Components",
      description: "Components help organize code."
    },
    {
      id: 3,
      title: "Why JavaScript is Powerful",
      description: "JavaScript runs everywhere."
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="posts">
        <h2>Latest Posts</h2>

        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}

      </section>
    </div>
  );
}

export default App;