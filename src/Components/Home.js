import { useNavigate } from "react-router-dom";
import newsbanner from "../assests/news1.png";
import offers from "../assests/pngtree-special-offer-tag-shape-free-vector-png-image_9173639.png";
export default function Home() {
    const navigate = useNavigate();




    return (
        <>

            <div className="hero-banner">
                <img src={newsbanner} alt="news banner" />

            </div>
            <header className="header">
                <h1>NewsDeck</h1>
                <p>Your trusted source for latest updates</p>
            </header>
            <section className="news-grid">

                {/* CARD 1 - MARKETS */}
                <div className="card">
                    <h2>Global Markets See Major Shift</h2>
                    <button
                        className="getmore" id="Market"
                        onClick={() =>
                            navigate("/article", {
                                state: {
                                    id: 1,
                                    title: "Global Markets See Major Shift",
                                    description:
                                        "Stock markets around the world are experiencing significant changes.",
                                    content:
                                        "Global markets are undergoing a major transformation due to inflation trends, geopolitical tensions, and shifts in investor sentiment.",
                                    category: "Markets"
                                }
                            })
                        }
                    >
                        Get More Info
                    </button>
                </div>

                {/* CARD 2 - TECH */}
                <div className="card">
                    <h2>Tech Innovation Trends in 2026</h2>
                    <button
                        className="getmore" id="Tech"
                        onClick={() =>
                            navigate("/article", {
                                state: {
                                    id: 2,
                                    title: "Tech Innovation Trends in 2026",
                                    description:
                                        "AI and automation continue to dominate the technology landscape.",
                                    content:
                                        "Artificial Intelligence is evolving rapidly with advancements in generative AI, robotics, and automation tools.",
                                    category: "Technology"
                                }
                            })
                        }
                    >
                        Get More Info
                    </button>
                </div>

                {/* CARD 3 - ENVIRONMENT */}
                <div className="card">
                    <h2>Climate Change Updates Today</h2>
                    <button
                        className="getmore" id="Climate"
                        onClick={() =>
                            navigate("/article", {
                                state: {
                                    id: 3,
                                    title: "Climate Change Updates Today",
                                    description:
                                        "Governments are accelerating climate initiatives.",
                                    content:
                                        "Nations worldwide are committing to stricter environmental policies and renewable energy adoption.",
                                    category: "Environment"
                                }
                            })
                        }
                    >
                        Get More Info
                    </button>
                </div>

            </section>
         
                <img id="target-project" class="mboxDefault" src={offers} alt="news banner" />   
            

            <div className="subscribe-box">

                <h2>Unlock Premium News</h2>
                <p>Get unlimited access to all articles</p>

                <button id="subscribe-btn" onClick={() => navigate("/subscribe")}>
                    Subscribe Now
                </button>






            </div>
        </>
    );
}

