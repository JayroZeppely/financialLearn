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

function convertDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

}

function Home() {

    const [news, setNews] = useState<newsItem[]>([]);
    const [companies, setCompanies] = useState<any[]>([]);

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
    
    useEffect(() => {
        fetch('http://localhost:3000/compagnies')
            .then(res => res.json())
            .then(data => {
                setCompanies(data);
                console.log('Données des entreprises récupérées :', data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données des entreprises :', error);
            });
    }, []);

    return (
        <div className="home">
            <section className="home_section">
                <h3>Les dernières actualités</h3>
                {news && news.length > 0 ? (
                    news.map((item, index) => (
                        <div key={index} className="news_item">
                            <h4>{item.title}</h4>
                            <p>Publié le {convertDate(item.pubDate)} par <strong>{item.source["#text"]}</strong></p>
                            <button className="btn-item" onClick={() => {window.location.href = item.source["@_url"];}}>En savoir plus</button>
                        </div>
                    ))
                ) : (
                    <p>Aucune actualité disponible pour le moment.</p>
                )}
            </section>
            <section className="home_section">
                <h3>Performances des entreprises</h3>
                {companies && companies.length > 0 ? (
                    companies.map((company, index) => (
                        <div key={index} className="company_item">
                            <h4><a href={`details/${company.symbol}`}>{company.longName}</a></h4>
                            <div className="company_infos">
                                <p><strong>Prix d'un titre : {company.price} (<span className={company.variationPercent >= 0 ? 'positive' : 'negative'}>{company.variationPercent.toFixed(2)}%</span>)</strong></p>
                                <p><strong>Place boursière : {company.exchangeName}</strong></p>
                                <p><strong>Monnaie : {company.currency}</strong></p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Aucune donnée disponible pour le moment.</p>
                )}
            </section>
        </div>
    )
};

export default Home;