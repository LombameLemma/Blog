async function loadPosts() {
  const res = await fetch("http://localhost:3000/posts");
  const posts = await res.json();
  posts.forEach(post => {
    document.body.innerHTML += `<h2>${post.title}</h2><p>${post.content}</p><hr>`;
  });
}

async function addPost() {
  const title = prompt("Post title:");
  const content = prompt("Post content:");
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, author: "Lombame", date: new Date().toISOString().slice(0,10) })
  });
  loadPosts();
}

loadPosts();