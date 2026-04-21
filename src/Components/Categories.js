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

  return (
    <div className="categories-page">
      <h1 className="page-title">Explore News</h1>

      {/* Stock Market */}
      <div className="category-section">
        <h2 id="stock-market" onClick={() => handleClick(0)}>Stock Market</h2>

        {activeIndexes.includes(0) && (
          <div className="news-grid">
            <div className="card"><h3>Sensex hits record high</h3><p>Markets surged due to strong quarterly earnings across sectors.</p></div>
            <div className="card"><h3>Nifty crosses 20,000 mark</h3><p>Benchmark index reaches new milestone driven by IT stocks.</p></div>
            <div className="card"><h3>Global markets react to inflation</h3><p>US inflation data impacts trading across global markets.</p></div>
            <div className="card"><h3>Adani stocks recover</h3><p>Major gains seen after recent losses in Adani group shares.</p></div>
            <div className="card"><h3>Banking sector leads rally</h3><p>Private banks show strong performance boosting indices.</p></div>
            <div className="card"><h3>IPO market heats up</h3><p>Several companies plan public offerings this quarter.</p></div>
            <div className="card"><h3>Rupee weakens</h3><p>Indian currency falls against US dollar amid global pressure.</p></div>
            <div className="card"><h3>Oil prices impact stocks</h3><p>Rising crude prices influence market sentiment.</p></div>
          </div>
        )}
      </div>

      {/* Technology */}
      <div className="category-section">
        <h2 id="Technology" onClick={() => handleClick(1)}>Technology</h2>

        {activeIndexes.includes(1) && (
          <div className="news-grid">
            <div className="card"><h3>AI reshaping industries</h3><p>Artificial Intelligence is transforming business operations worldwide.</p></div>
            <div className="card"><h3>New smartphones launched</h3><p>Major brands release flagship devices with advanced features.</p></div>
            <div className="card"><h3>Cybersecurity threats rising</h3><p>Experts warn about increasing cyber attacks globally.</p></div>
            <div className="card"><h3>Startup ecosystem grows</h3><p>New tech startups attract heavy investments.</p></div>
            <div className="card"><h3>Cloud adoption increases</h3><p>Businesses shift to cloud platforms for scalability.</p></div>
            <div className="card"><h3>Big tech invests in AI</h3><p>Companies invest billions into AI research and development.</p></div>
            <div className="card"><h3>Electric vehicles rising</h3><p>EV adoption accelerates across major economies.</p></div>
            <div className="card"><h3>5G expansion continues</h3><p>Telecom companies expand 5G networks globally.</p></div>
          </div>
        )}
      </div>

      {/* Climate */}
      <div className="category-section">
        <h2 id="Climate-recs" onClick={() => handleClick(2)}>Climate</h2>

        {activeIndexes.includes(2) && (
          <div className="news-grid">
            <div className="card"><h3>Global temperatures rise</h3><p>Climate experts report record-breaking heat levels.</p></div>
            <div className="card"><h3>Renewable energy growth</h3><p>Solar and wind energy investments are increasing rapidly.</p></div>
            <div className="card"><h3>Extreme weather events</h3><p>Floods and heatwaves impact multiple regions worldwide.</p></div>
            <div className="card"><h3>India climate initiatives</h3><p>Government launches new sustainability programs.</p></div>
            <div className="card"><h3>Glacier melting concern</h3><p>Rapid glacier loss threatens ecosystems.</p></div>
            <div className="card"><h3>Ocean levels rising</h3><p>Sea levels continue to rise due to global warming.</p></div>
            <div className="card"><h3>Carbon policies tighten</h3><p>Countries introduce stricter emission regulations.</p></div>
            <div className="card"><h3>Green jobs increasing</h3><p>Sustainability sector sees major job growth.</p></div>
          </div>
        )}
      </div>

    </div>
  );
}