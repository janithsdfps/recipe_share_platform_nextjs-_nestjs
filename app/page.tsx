"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

type Recipe = {
    id: string;
    title: string;
    ingredients: string;
    instructions: string;
    prepTime: string;
    cookTime: string;
    // Add other fields as needed
};

const HomePage: React.FC = () => {
    const [featuredRecipes, setFeaturedRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchFeaturedRecipes = async () => {
            try {
                const response = await fetch('/api/recipes?featured=true');
                if (!response.ok) {
                    throw new Error('Failed to fetch featured recipes');
                }
                const data: Recipe[] = await response.json();
                setFeaturedRecipes(data);
            } catch (error) {
                console.error('Error fetching featured recipes:', error);
            }
        };

        fetchFeaturedRecipes();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Recipe Sharing Platform</h1>
            <SearchBar />
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {featuredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Browse Categories</h2>
                <div className="flex space-x-4">
                    <Link legacyBehavior href="/recipes?category=breakfast">
                        <a className="px-4 py-2 bg-blue-500 text-white rounded">Breakfast</a>
                    </Link>
                    <Link legacyBehavior href="/recipes?category=lunch">
                        <a className="px-4 py-2 bg-green-500 text-white rounded">Lunch</a>
                    </Link>
                    <Link legacyBehavior href="/recipes?category=dinner">
                        <a className="px-4 py-2 bg-red-500 text-white rounded">Dinner</a>
                    </Link>
                    <Link legacyBehavior href="/recipes?category=dessert">
                        <a className="px-4 py-2 bg-yellow-500 text-white rounded">Dessert</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
