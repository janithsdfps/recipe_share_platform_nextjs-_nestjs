import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../utils/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    if (req.method === 'GET') {
        const recipes = await db.collection('recipes').find({}).toArray();
        res.status(200).json(recipes);
    } else if (req.method === 'POST') {
        const newRecipe = req.body;
        await db.collection('recipes').insertOne(newRecipe);
        res.status(201).json(newRecipe);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;
