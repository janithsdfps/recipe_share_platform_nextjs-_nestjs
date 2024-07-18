import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../utils/api';
import { ObjectId } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();
    const { id } = req.query;

    if (!ObjectId.isValid(id as string)) {
        res.status(400).json({ error: 'Invalid ID format' });
        return;
    }

    const recipeId = new ObjectId(id as string);

    if (req.method === 'GET') {
        const recipe = await db.collection('recipes').findOne({ _id: recipeId });
        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(404).json({ error: 'Recipe not found' });
        }
    } else if (req.method === 'PUT') {
        const updatedRecipe = req.body;
        await db.collection('recipes').updateOne({ _id: recipeId }, { $set: updatedRecipe });
        res.status(200).json(updatedRecipe);
    } else if (req.method === 'DELETE') {
        await db.collection('recipes').deleteOne({ _id: recipeId });
        res.status(204).end();
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;
