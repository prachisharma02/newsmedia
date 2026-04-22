import { useParams } from "react-router-dom";

import { newsData } from "./newsdata";

export default function NewsDetail() {
  const { id } = useParams();

  const news = newsData.find((n) => n.id === id);

  if (!news) return <h2>News not found</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{news.title}</h1>
      <img
        src={news.image}
        alt={news.title}
        style={{ width: "100%", maxHeight: 400, objectFit: "cover" }}
      />
      <p style={{ marginTop: 20 }}>{news.content}</p>
    </div>
  );
}