import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "../assets/details.css";
import Chart from "chart.js/auto";

import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
function Details() {

    const [companyDetails, setCompanyDetails] = useState<any>(null);
    const { companyName } = useParams<{ companyName: string }>();

    useEffect(() => {
        const url = `http://localhost:3000/compagnies/${companyName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCompanyDetails(data);
                console.log('Détails de l\'entreprise récupérés :', data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des détails de l\'entreprise :', error);
            });
    },[companyName]);

    const chartData = {
        labels: companyDetails?.dates || [],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
            label: `Cours de l\'action (en ${companyDetails?.currency})`,
            data: companyDetails?.prices || [],
            borderColor: "#1d5575",
            borderWidth: 1,
            backgroundColor: "rgba(96, 166, 207, 0.15)",
            fill: true,
            // Arrondir la courbe
            tension: 0.3,

            // Points
            pointRadius: 3,
            pointHoverRadius: 6,
            pointBackgroundColor: "#60a6cf",
            pointBorderColor: "#fff"
            }
        ]
    } 

    return (
        <>
            <h3>{companyDetails?.longName}</h3>
            <div className="details_company">
                <section className="details_section">
                    <h4>Informations sur l'entreprise</h4>
                    <p>Nom complet : {companyDetails?.longName}</p>
                    <p>Prix actuel de l'action : {companyDetails?.price} {companyDetails?.currency}</p>
                    <p>Variation du prix depuis hier : {companyDetails?.variation.toFixed(2)} {companyDetails?.currency} ({companyDetails?.variationPercent.toFixed(2)}%)</p>
                    <p>Nombre de transactions aujourd'hui : {companyDetails?.volume}</p>
                </section>
                <section className="bourse_section">
                    <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </section>
            </div>
        </>
    )
};

export default Details;