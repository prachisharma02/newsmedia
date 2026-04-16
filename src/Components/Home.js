import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();


    const newsArticles = [
        {
            title: "Global Markets See Major Shift",
            description: "Stock markets around the world are experiencing significant changes due to economic developments.",
        },
        {
            title: "Tech Innovation Trends in 2026",
            description: "AI and automation continue to dominate the technology landscape with new breakthroughs.",
        },
        {
            title: "Climate Change Updates",
            description: "Governments are accelerating climate initiatives amid rising global concerns leading to better environmental policies and sustainable practices.",
        },
    ];

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
                {newsArticles.map((article, index) => (
                    <div key={index} className="card">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <button  className="getmore">
                            Get More Info
                        </button>
                    </div>

                ))}
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

