import { useState } from "react";

export default function Categories() {
  const [activeIndexes, setActiveIndexes] = useState([]);

 const handleClick = (index) => {
  if (activeIndexes.includes(index)) {
    setActiveIndexes(activeIndexes.filter(i => i !== index));
  } else {
    setActiveIndexes([...activeIndexes, index]);
  }
};
  const categories = [
  {
    name: "Stock Market",
    news: [
      {
        entityid: "news-001",
        title: "Sensex hits record high",
        desc: "Markets surged due to strong quarterly earnings across sectors."
      },
      {
        entityid: "news-002",
        title: "Nifty crosses 20,000 mark",
        desc: "Benchmark index reaches new milestone driven by IT stocks."
      },
      {
        entityid: "news-003",
        title: "Global markets react to inflation",
        desc: "US inflation data impacts trading across global markets."
      },
      {
        entityid: "news-004",
        title: "Adani stocks recover",
        desc: "Major gains seen after recent losses in Adani group shares."
      },
      {
        entityid: "news-005",

        title: "Banking sector leads rally",
        desc: "Private banks show strong performance boosting indices."
      },
      {
        entityid: "news-006",

        title: "IPO market heats up",
        desc: "Several companies plan public offerings this quarter."
      },
      {
        entityid: "news-007",

        title: "Rupee weakens",
        desc: "Indian currency falls against US dollar amid global pressure."
      },
      { 
        entityid: "news-008",

        title: "Oil prices impact stocks",
        desc: "Rising crude prices influence market sentiment."
      }
    ]
  },
  {
    name: "Technology",
    news: [
      {
        entityid: "news-009",
        title: "AI reshaping industries",
        desc: "Artificial Intelligence is transforming business operations worldwide."
      },
      {
        entityid: "news-010",

        title: "New smartphones launched",
        desc: "Major brands release flagship devices with advanced features."
      },
      {
        entityid: "news-011",

        title: "Cybersecurity threats rising",
        desc: "Experts warn about increasing cyber attacks globally."
      },
      {
        entityid: "news-012",

        title: "Startup ecosystem grows",
        desc: "New tech startups attract heavy investments."
      },
      { 
        entityid: "news-013",

        title: "Cloud adoption increases",
        desc: "Businesses shift to cloud platforms for scalability."
      },
      {
        entityid: "news-014",


        title: "Big tech invests in AI",
        desc: "Companies invest billions into AI research and development."
      },
      {
        entityid: "news-015",


        title: "Electric vehicles rising",
        desc: "EV adoption accelerates across major economies."
      },
      {
        entityid: "news-016",

        title: "5G expansion continues",
        desc: "Telecom companies expand 5G networks globally."
      }
    ]
  },
  {
    name: "Climate",
    news: [
      {
        entityid: "news-017",
        title: "Global temperatures rise",
        desc: "Climate experts report record-breaking heat levels."
      },
      {
        entityid: "news-018",
        title: "Renewable energy growth",
        desc: "Solar and wind energy investments are increasing rapidly."
      },
      {
        entityid: "news-019",
        title: "Extreme weather events",
        desc: "Floods and heatwaves impact multiple regions worldwide."
      },
      {
        entityid: "news-020",
        title: "India climate initiatives",
        desc: "Government launches new sustainability programs."
      },
      {
        entityid: "news-021",
        title: "Glacier melting concern",
        desc: "Rapid glacier loss threatens ecosystems."
      },
      {
        entityid: "news-022",
        title: "Ocean levels rising",
        desc: "Sea levels continue to rise due to global warming."
      },
      {
        entityid: "news-023",
        title: "Carbon policies tighten",
        desc: "Countries introduce stricter emission regulations."
      },
      {
        entityid: "news-024",
        title: "Green jobs increasing",
        desc: "Sustainability sector sees major job growth."
      }
    ]
  }
];
  return (
    <div className="categories-page">
      <h1 className="page-title">Explore News</h1>

      {categories.map((cat, index) => (
        <div key={index} className="category-section">

          <h2
            className="category-title clickable"
            onClick={() => handleClick(index)}
          >
            {cat.name}
          </h2>

          {activeIndexes.includes(index) && (
            <div className="news-grid">
              {cat.news.map((item, i) => (
                <div key={i} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
}