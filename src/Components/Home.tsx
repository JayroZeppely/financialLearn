import "../assets/home.css";
import { useEffect } from "react";

function Home() {

    const url = "https://news.google.com/rss/search?q=Finance+stock&hl=fr&gl=FR&ceid=FR:fr";

    useEffect(() => {
        // Fetch the RSS feed and parse it
        fetch(url)

    }, []);
    
    return (
        <div className="home">
            <section className="home_section">
                <h3>Les dernières actualités</h3>

            </section>
        </div>
    )
};

export default Home;