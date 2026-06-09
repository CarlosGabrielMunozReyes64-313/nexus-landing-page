import './BlogCard.css';
// Tarjeta de un artículo del blog. Recibe un objeto `post`.
export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <div className="blog-img" style={{ background: post.bg }}>
        {post.emoji}
      </div>
      <div className="blog-body">
        <div className="blog-topic">{post.topic}</div>
        <div className="blog-title">{post.title}</div>
        <p className="blog-preview">{post.preview}</p>
      </div>
    </div>
  )
}
