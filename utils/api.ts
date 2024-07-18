// utils/api.ts
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || 'your-mongodb-connection-string';
const client = new MongoClient(uri);

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('myDatabase'); // Replace 'myDatabase' with your database name
        return { client, db };
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
