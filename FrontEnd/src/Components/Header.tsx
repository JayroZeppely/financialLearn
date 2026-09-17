import "../assets/header.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <button
                    className="menu-button"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Ouvrir le menu"
                >
                    <Menu size={36} color="#e4e4e4" />
                </button>

                <h1 id="title-site">Financial Learning</h1>

                <h2 id="subtitle">
                    Combien d'argent génèrent les entreprises ?
                </h2>
            </header>

            {/* Overlay */}
            <div
                className={`drawer-overlay ${isMenuOpen ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <aside className={`drawer ${isMenuOpen ? "open" : ""}`}>
                <div className="drawer-header">
                    <h3>FinancialLearning</h3>

                    <button
                        className="drawer-close"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Fermer le menu"
                    >
                        <X size={28} />
                    </button>
                </div>

                <nav className="drawer-nav">
                    <a href="/">Accueil</a>
                    <a href="/news">Actualités</a>
                    <a href="/companies">Entreprises</a>
                    <a href="/about">À propos</a>
                </nav>
            </aside>
        </>
    );
};

export default Header;