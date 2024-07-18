import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RecipeForm from '../../../components/RecipeForm';

const RecipePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        if (id) {
            // Fetch the specific recipe by ID
            fetch(`/api/recipes/${id}`)
                .then((res) => res.json())
                .then((data) => setRecipe(data));
        }
    }, [id]);

    const handleUpdate = async (updatedRecipe:any) => {
        const response = await fetch(`/api/recipes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedRecipe),
        });

        if (response.ok) {
            router.push('/recipes');
        } else {
            // Handle error
            console.error('Failed to update recipe');
        }
    };

    return (
        <div>
            {recipe ? (
                <>
                    <h1 className="text-2xl font-bold mb-4">Edit Recipe</h1>
                    <RecipeForm onSubmit={handleUpdate} initialData={recipe} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RecipePage;
