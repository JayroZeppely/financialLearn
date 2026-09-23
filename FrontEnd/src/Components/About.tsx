import "../assets/about.css";

function About() {
    return (
        <>
        <section>
            <h3>À propos de ce site</h3>
            <div className="about_item">
                <h4>Qu'est ce que FinanceLearning ?</h4>
                <p>FinanceLearning est une plateforme éducative qui vise à fournir aux utilisateurs une ressource numérique pour apprendre quelques principes fondamentaux de la finance.
                    Au sein de ce site, vous trouverez des informations sur les entreprises, des actualités financières et un glossaire pour vous aider à comprendre les termes financiers. Ce site est conçu pour les débutants et les personnes souhaitant approfondir leurs connaissances en finance, en mettant l'accent sur la simplicité et la clarté des informations présentées.
                </p>
            </div>
            <div className="about_item">
                <h4>L'objectif derrière ce projet</h4>
                <p>
                    L'objectif du site est de créer une ressource éducative accessible et facile à utiliser pour apprendre les bases de la finance. Nous souhaitons rendre le monde de la finance plus compréhensible pour tous, en particulier pour ceux qui débutent dans ce domaine.
                </p>
                <p>Cependant, l'autre objectif derrière ce projet est de me permettre, en tant que développeur junior, de mettre en pratique des compétences acquises dans le cadre de mon apprentissage en Informatique.
                    Ce projet a pour but de me permettre de pratiquer mes compétences en développement web, notamment en ce qui concerne la création d'un site au travers de React, la communication entre le Front et le back et l'utilisation d'API.
                </p>
                <p>Ce projet est l'oeuvre d'une seule personne et n'est pas destiné à être un projet commercial. Il s'agit d'un projet personnel et éducatif réalisé sur mon temps libre.</p>
            </div>
        </section>

        <section>
            <h3>L'architecture du site</h3>
            <p>
                Comme évoqué dans la section précédente, le site est décomposé en deux parties :
                <ul>
                    <li>Le <strong>FrontEnd</strong>, qui est la partie visible du site, développée en utilisant React couplé à TypeScript.</li>
                    <li>Le <strong>BackEnd</strong>, qui est la partie serveur du site, développée avec Node.js et Express. C'est également depuis le back que je fais le traitement des données.</li>
                </ul>
            </p>
            <p>Ce projet est versionné sur mon dépôt GitHub.</p>
        </section>
        </>
    )
};

export default About;