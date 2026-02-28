
function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Blog</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;