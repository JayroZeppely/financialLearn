import "../assets/home.css";
import { useEffect, useState } from "react";

type newsItem = {
    title: string;
    link: string;
    pubDate: string;
    description: string;
    source: {
        "@_url" : string;
        "#text": string;
    };
}


function Home() {

    const [news, setNews] = useState<newsItem[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/news')
            .then(res => res.json())
            .then(data => {
                setNews(data);
                console.log('Actualités récupérées :', data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des actualités :', error);
            });;
        }, []);
    
    return (
        <div className="home">
            <section className="home_section">
                <h3>Les dernières actualités</h3>
                {news && news.length > 0 ? (
                    news.map((item, index) => (
                        <div key={index} className="news_item">
                            <h4>{item.title}</h4>
                            <p>Publié le {item.pubDate} par <strong>{item.source["#text"]}</strong></p>
                            <button className="btn-item" onClick={() => {window.location.href = item.source["@_url"];}}>En savoir plus</button>
                        </div>
                    ))
                ) : (
                    <p>Aucune actualité disponible pour le moment.</p>
                )}
            </section>
        </div>
    )
};

export default Home;