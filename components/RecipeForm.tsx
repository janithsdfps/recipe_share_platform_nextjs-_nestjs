import React, { useState, ChangeEvent, FormEvent } from 'react';

interface RecipeFormProps {
    onSubmit: (recipe: {
        title: string;
        ingredients: string;
        instructions: string;
        prepTime: string;
        cookTime: string;
    }) => void;
    initialData?: {
        title?: string;
        ingredients?: string;
        instructions?: string;
        prepTime?: string;
        cookTime?: string;
    };
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit, initialData = {} }) => {
    const [title, setTitle] = useState(initialData.title || '');
    const [ingredients, setIngredients] = useState(initialData.ingredients || '');
    const [instructions, setInstructions] = useState(initialData.instructions || '');
    const [prepTime, setPrepTime] = useState(initialData.prepTime || '');
    const [cookTime, setCookTime] = useState(initialData.cookTime || '');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ title, ingredients, instructions, prepTime, cookTime });
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setter(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                value={title}
                onChange={handleInputChange(setTitle)}
                placeholder="Title"
                className="w-full px-4 py-2 border rounded"
                required
            />
            <textarea
                value={ingredients}
                onChange={handleInputChange(setIngredients)}
                placeholder="Ingredients"
                className="w-full px-4 py-2 border rounded"
                required
            />
            <textarea
                value={instructions}
                onChange={handleInputChange(setInstructions)}
                placeholder="Instructions"
                className="w-full px-4 py-2 border rounded"
                required
            />
            <input
                type="number"
                value={prepTime}
                onChange={handleInputChange(setPrepTime)}
                placeholder="Preparation Time (mins)"
                className="w-full px-4 py-2 border rounded"
                required
            />
            <input
                type="number"
                value={cookTime}
                onChange={handleInputChange(setCookTime)}
                placeholder="Cooking Time (mins)"
                className="w-full px-4 py-2 border rounded"
                required
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Save Recipe
            </button>
        </form>
    );
};

export default RecipeForm;
