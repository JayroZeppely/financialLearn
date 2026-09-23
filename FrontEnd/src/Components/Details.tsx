import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "../assets/details.css";

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
    },[]);

    return (
        <>
            <h3>{companyDetails?.longName}</h3>
        </>
    )
};

export default Details;