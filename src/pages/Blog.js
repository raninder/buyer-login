import React from 'react';
import HeaderBlog from '../components/HeaderBlog';
import NavBarBlog from '../components/NavbarBlog';
import data from '../data/data';
import '../css/Blog.css';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

function Blog() {
  const imageConfig = {
    1: { class: 'special-class-1', column: 1 },
    2: { class: 'special-class-2', column: 2 },
    3: { class: 'special-class-3', column: 2 },
  
    
  };

  const imageConfig1 = {
    1: { class: 'special-class-4', column: 1 },
    2: { class: 'special-class-5', column: 1 },
    3: { class: 'special-class-6', column: 2 },
  
   
  };

  const featuredPostIds = [1, 2, 3];
 

  const featuredPosts = data
    .filter((post) => imageConfig[post.id])
    .map((post) => ({ ...post, ...imageConfig[post.id] }));


  const articlesByCategory = data.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {});

  
  const limitedArticlesByCategory = {};
  for (const category in articlesByCategory) {
 
    const articles = articlesByCategory[category]
      .filter((article) => !featuredPostIds.includes(article.id))
      .sort((a, b) => new Date(b.date) - new Date(a.date)) 
      .slice(0, 3); 
    limitedArticlesByCategory[category] = articles;
  }

  const categoryConfig = {
    
    Weekly: { class: 'category-class-4', column: 1 },
    Weekly: { class: 'category-class-5', column: 1 },
    Weekly: { class: 'category-class-6', column: 2 },

    Market: { class: 'category-class-7', column: 1 },
    Market: { class: 'category-class-8', column: 2 },
    Market: { class: 'category-class-9', column: 2 },

    Banking: { class: 'category-class-10' },
  
  };
  
  const categorizedArticles = {};
  for (const category in limitedArticlesByCategory) {
    categorizedArticles[category] = limitedArticlesByCategory[category].map((article) => {
      const imageConfigForCategory = categoryConfig[category];
      const imageConfigForArticle = imageConfig[article.id];
  
      return {
        ...article,
        ...imageConfigForCategory,
        ...imageConfigForArticle,
      };
    });
  }
  


  return (
    <div>
      <Navbar/>
      
      <HeaderBlog />
      <NavBarBlog />
      <div className="blog-content">
       
        <div className="featured-posts">
          {featuredPosts.map((post) => (
            <div key={post.id} className={`article ${post.class}`} data-id={post.id}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <scan>{post.date} · </scan>
              <scan>{post.ReadingTime} | </scan>
              <scan>{post.where} | </scan>
              <scan>{post.category}</scan>
              <p>{post.description}</p>
            </div>
          ))}
          
        </div>
        <button className="see-all-button">See All</button>
     <div>
        {Object.entries(categorizedArticles).map(([category, articles]) => (
  <div key={category} className={`category-section ${articles.length >= 3 ? 'vertical-line' : 'centered-category'}`}>
    <h2>{category}</h2>
    <div className="grid-section">
      {articles.map((article) => (
        <div key={article.id} className={`article ${article.class}`} data-id={article.id}>
          <img src={article.image} alt={article.title} />
          <h3>{article.title}</h3>
          <span>{article.date} · </span>
          <span>{article.ReadingTime} | </span>
          <span>{article.where} | </span>
          <span>{article.category}</span>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  </div>
))}
      </div>
      </div>
      <button className="lets-talk-button">Let' talk</button>
    <Footer/>
    </div>

    
  
    
  );
}

export default Blog;
