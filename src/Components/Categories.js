import { useNavigate } from "react-router-dom";
import { newsData } from "./newsdata";

export default function Categories() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/categories/${id}`);
  };

  const stockNews = newsData.filter(item => item.category === "stock");
  const techNews = newsData.filter(item => item.category === "technology");
  const climateNews = newsData.filter(item => item.category === "climate");

  return (
    <div className="categories-page">

      <h1 style={{ marginBottom: "20px" }}>Explore News</h1>

      {/* STOCK */}
      <h2>Stock Market</h2>
      <div className="news-grid">
        {stockNews.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => handleClick(item.id)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* TECHNOLOGY */}
      <h2 style={{ marginTop: "30px" }}>Technology</h2>
      <div className="news-grid">
        {techNews.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => handleClick(item.id)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CLIMATE */}
      <h2 style={{ marginTop: "30px" }}>Climate</h2>
      <div className="news-grid">
        {climateNews.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => handleClick(item.id)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}