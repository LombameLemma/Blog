import { useState } from "react";
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";

export default function Home() {
  // Step 1: Create state for posts
  const [posts, setPosts] = useState([
    { id: 1, title: "Learning React", description: "React makes UI development easier." },
    { id: 2, title: "Understanding Components", description: "Components help organize code." }
  ]);

  // Step 2: Function to add new post
  const addPost = () => {
    const newPost = {
      id: posts.length + 1,
      title: `New Post ${posts.length + 1}`,
      description: "This is a newly added post."
    };
    setPosts([newPost, ...posts]); // Add new post at the top
  };

  return (
    <div>
      <Hero />

      <div style={{ padding: "20px" }}>
        <button onClick={addPost} style={{ padding: "10px 20px", marginBottom: "20px" }}>
          Add New Post
        </button>
      </div>

      <section className="posts">
        <h2>Latest Posts</h2>
        {posts.map(post => (
          <PostCard key={post.id} title={post.title} description={post.description} />
        ))}
      </section>
    </div>
  );
}
