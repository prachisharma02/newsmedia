import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();


    // const newsArticles = [
    //     {
    //         id: 1,
    //         title: "Global Markets See Major Shift",
    //         description: "Stock markets around the world are experiencing significant changes.",
    //         content: "Global markets are undergoing a major transformation due to inflation trends, geopolitical tensions, and shifts in investor sentiment. Experts suggest diversification is key during this phase.",
    //         Category: "Markets"
    //     },
    //     {
    //         id: 2,
    //         title: "Tech Innovation Trends in 2026",
    //         description: "AI and automation continue to dominate the technology landscape.",
    //         content: "Artificial Intelligence is evolving rapidly with advancements in generative AI, robotics, and automation tools. Companies are investing heavily in AI-driven solutions to increase efficiency.",
    //         Category: "Technology"
    //     },
    //     {
    //         id: 3,
    //         title: "Climate Change Updates Today",
    //         description: "Governments are accelerating climate initiatives.",
    //         content: "Nations worldwide are committing to stricter environmental policies. Renewable energy adoption and carbon neutrality goals are at the center of global climate strategies.",
    //         Category: "Environment"
    //     },
    // ];

    //   const handleSubscribe = () => {
    //     if (email.trim()) {
    //       setSubscribed(true);
    //       setEmail("");
    //     }
    //   };

    return (
        <>
            <header className="header">
                <h1>Daily Pulse News</h1>
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
            <div className="subscribe-box">

                <h2>Unlock Premium News</h2>
                <p>Get unlimited access to all articles</p>

                <button onClick={() => navigate("/subscribe")}>
                    Subscribe Now
                </button>






            </div>
        </>
    );
}

