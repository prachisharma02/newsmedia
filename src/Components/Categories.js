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
        title: "Sensex hits record high",
        desc: "Markets surged due to strong quarterly earnings across sectors."
      },
      {
        title: "Nifty crosses 20,000 mark",
        desc: "Benchmark index reaches new milestone driven by IT stocks."
      },
      {
        title: "Global markets react to inflation",
        desc: "US inflation data impacts trading across global markets."
      },
      {
        title: "Adani stocks recover",
        desc: "Major gains seen after recent losses in Adani group shares."
      },
      {

        title: "Banking sector leads rally",
        desc: "Private banks show strong performance boosting indices."
      },
      {

        title: "IPO market heats up",
        desc: "Several companies plan public offerings this quarter."
      },
      {

        title: "Rupee weakens",
        desc: "Indian currency falls against US dollar amid global pressure."
      },
      { 

        title: "Oil prices impact stocks",
        desc: "Rising crude prices influence market sentiment."
      }
    ]
  },
  {
    name: "Technology",
    news: [
      {
        title: "AI reshaping industries",
        desc: "Artificial Intelligence is transforming business operations worldwide."
      },
      {

        title: "New smartphones launched",
        desc: "Major brands release flagship devices with advanced features."
      },
      {

        title: "Cybersecurity threats rising",
        desc: "Experts warn about increasing cyber attacks globally."
      },
      {

        title: "Startup ecosystem grows",
        desc: "New tech startups attract heavy investments."
      },
      { 

        title: "Cloud adoption increases",
        desc: "Businesses shift to cloud platforms for scalability."
      },
      {


        title: "Big tech invests in AI",
        desc: "Companies invest billions into AI research and development."
      },
      {


        title: "Electric vehicles rising",
        desc: "EV adoption accelerates across major economies."
      },
      {

        title: "5G expansion continues",
        desc: "Telecom companies expand 5G networks globally."
      }
    ]
  },
  {
    name: "Climate",
    news: [
      {
        title: "Global temperatures rise",
        desc: "Climate experts report record-breaking heat levels."
      },
      {
        title: "Renewable energy growth",
        desc: "Solar and wind energy investments are increasing rapidly."
      },
      {
        title: "Extreme weather events",
        desc: "Floods and heatwaves impact multiple regions worldwide."
      },
      {
        title: "India climate initiatives",
        desc: "Government launches new sustainability programs."
      },
      {
        title: "Glacier melting concern",
        desc: "Rapid glacier loss threatens ecosystems."
      },
      {
        title: "Ocean levels rising",
        desc: "Sea levels continue to rise due to global warming."
      },
      {
        title: "Carbon policies tighten",
        desc: "Countries introduce stricter emission regulations."
      },
      {
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