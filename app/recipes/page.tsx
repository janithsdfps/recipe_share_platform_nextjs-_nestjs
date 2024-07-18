'use client';
import React, { useEffect, useState } from 'react';
import RecipeCard from '../../components/RecipeCard';
import SearchBar from '../../components/SearchBar';

type Recipe = {
    id: string;
    title: string;
    ingredients: string;
    instructions: string;
    prepTime: string;
    cookTime: string;
    // Add other fields as needed
};

const RecipesPage: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        // Fetch recipes from API
        fetch('/api/recipes')
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, []);

    return (
        <div>
            <SearchBar />
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipesPage;
