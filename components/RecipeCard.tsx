import React from 'react';

type Recipe = {
    id: string;
    title: string;
    ingredients: string;
    instructions: string;
    prepTime: string;
    cookTime: string;
    // Add other fields as needed
};

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>Prep Time: {recipe.prepTime} mins</p>
            <p>Cook Time: {recipe.cookTime} mins</p>
        </div>
    );
};

export default RecipeCard;
