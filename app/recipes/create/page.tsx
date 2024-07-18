import React from 'react';
import { useRouter } from 'next/router';
import RecipeForm from '../../../components/RecipeForm';

const CreateRecipePage = () => {
    const router = useRouter();

    const handleSubmit = async (newRecipe:any)=> {
        const response = await fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        });

        if (response.ok) {
            router.push('/recipes');
        } else {
            // Handle error
            console.error('Failed to create recipe');
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Create New Recipe</h1>
            <RecipeForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreateRecipePage;
