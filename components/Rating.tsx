import React from 'react';

interface RatingProps {
    rating: number;
    onRate?: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({ rating, onRate }) => {
    const handleClick = (value: number) => {
        if (onRate) {
            onRate(value);
        }
    };

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${star <= rating ? 'filled' : ''}`}
                    onClick={() => handleClick(star)}
                >
                    ★
                </span>
            ))}
            <style jsx>{`
                .star {
                    cursor: pointer;
                    font-size: 1.5rem;
                    color: #d3d3d3;
                }
                .star.filled {
                    color: #ffc107;
                }
            `}</style>
        </div>
    );
};

export default Rating;
