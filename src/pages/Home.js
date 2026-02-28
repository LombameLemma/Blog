import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
const posts = [
  { id: 1, title: "Learning React", description: "React makes UI development easier." },
  { id: 2, title: "Understanding Components", description: "Components help organize code." }
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="posts">
        <h2>Latest Posts</h2>
        {posts.map(post => (
          <PostCard key={post.id} title={post.title} description={post.description} />
        ))}
      </section>
    </div>
  );
}

