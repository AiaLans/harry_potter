import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faWizardsOfTheCoast } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);
        setCharacter(null);

        try {
            const response = await fetch(`https://hp-api.onrender.com/api/characters`);
            const data = await response.json();
            const foundCharacter = data.find(char => char.name.toLowerCase().includes(searchTerm.toLowerCase()));

            if (foundCharacter) {
                setCharacter(foundCharacter);
            } else {
                setError('Character not found.');
            }
        } catch (err) {
            setError('Failed to fetch data.');
        }
    };

    useEffect(() => {
        if (character) {
            const timer = setTimeout(() => {
                setCharacter(null);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [character]);

    return (
        <div className='hed'>
            <div className="headerRoot">
                <div className="icons">
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="logo">
                    <FontAwesomeIcon className="icon" icon={faWizardsOfTheCoast} />
                </div>
                <div className='search'>
                    <form className="flex" id="submit" onSubmit={handleSearch}>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search for a character"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="search-btn" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className='headerMain'>
                <h3>Max rolls out across more European countries</h3>
                <p>The streaming service Max is still on its journey across Europe. Today, Max arrives officially in France and Poland.</p>
                <a href='https://en.wikipedia.org/wiki/Harry_Potter' className='btn' target='_blank' rel="noopener noreferrer">LEARN MORE</a>
            </div>
            <div className="character-page">
                {character ? (
                    <div className="character-info">
                        <h2>{character.name}</h2>
                        <p><strong>House:</strong> {character.house}</p>
                        {character.image && <img src={character.image} alt={character.name} />}
                    </div>
                ) : (
                    <div className="error">
                        <p>{error || ''}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
