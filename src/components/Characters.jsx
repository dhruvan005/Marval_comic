import React from 'react';
import "../styles/Character.scss"

const Characters = ({ data, onClick }) => {
    // Check if data is an array and has elements
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No characters available</div>; // Show this when data is undefined or empty
    }

    return (
        <div className="characters">
            {data.map(character => {
                return (
                    <div
                        key={character.id}
                        className="characterCard"
                        style={{
                            background: `url(${character.thumbnail?.path}.${character.thumbnail?.extension}) no-repeat center`,
                            backgroundSize: "cover",
                        }}
                        onClick={() => onClick(character.id)}
                    >
                        <div className="caption">
                            {character.name}
                        </div>
                        <div className="caption bottom"style={{
                            cursor:"pointer"
                        }}>View Comics</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Characters;
