import "../assets/home.css";
import { useEffect, useState } from "react";

function Home() {

    const [news, setNews] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/news')
            .then(res => res.json())
            .then(data => {
                setNews(data.message);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des actualités :', error);
            });;
        }, []);
    
    return (
        <div className="home">
            <section className="home_section">
                <h3>Les dernières actualités</h3>
                <p>{news}</p>
            </section>
        </div>
    )
};

export default Home;