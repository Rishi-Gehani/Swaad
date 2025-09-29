import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      featured: true,
      title: 'The Secret to Perfect Event Catering: A Checklist for Success',
      category: 'Event Planning',
      imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1170&q=80',
      author: 'Jane Smith',
      date: 'September 10, 2025',
      excerpt: 'Planning an event can be overwhelming, but with our expert checklist, you can ensure your catering is flawless from start to finish...',
    },
    {
      id: 2,
      title: 'Top 5 Seasonal Menus for Your Autumn Wedding',
      category: 'Menus',
      imageUrl: 'https://images.pexels.com/photos/9703865/pexels-photo-9703865.jpeg',
      author: 'Johnathan Doe',
      date: 'September 5, 2025',
      excerpt: 'Discover breathtaking menu ideas that capture the essence of autumn for your special day.',
    },
    {
        id: 3,
        title: 'Corporate Catering: Impress Your Clients',
        category: 'Corporate',
        imageUrl: 'https://images.pexels.com/photos/1121482/pexels-photo-1121482.jpeg',
        author: 'Marco Bianchi',
        date: 'August 28, 2025',
        excerpt: 'Elevate your business meetings and events with catering that speaks volumes about your company’s quality.',
    },
    {
        id: 4,
        title: 'Healthy and Delicious: Catering for Wellness Retreats',
        category: 'Health',
        imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1170&q=80',
        author: 'Julia Chen',
        date: 'August 15, 2025',
        excerpt: 'Nourish your guests with vibrant, healthy, and delicious food that energizes and inspires.',
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="blog-page">
      {featuredPost && (
        <section className="blog-hero" style={{ backgroundImage: `url(${featuredPost.imageUrl})` }}>
          <div className="hero-content">
            <span className="featured-tag">Featured Post</span>
            <h1>{featuredPost.title}</h1>
            <p className="post-meta">By {featuredPost.author} on {featuredPost.date}</p>
            <button className="read-more-btn" onClick={() => window.open("https://www.blogger.com", "_blank")} >Read More →</button>
          </div>
        </section>
      )}

      {/* Main Blog Content Area */}
      <div className="blog-main-content">
        <div className="blog-grid">
          {otherPosts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="card-image-container">
                <img src={post.imageUrl} alt={post.title} className="card-image" />
                <span className={`card-category ${post.category.toLowerCase()}`}>{post.category}</span>
              </div>
              <div className="card-content">
                <h3>{post.title}</h3>
                <p className="card-excerpt">{post.excerpt}</p>
                <p className="post-meta">By {post.author} on {post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;