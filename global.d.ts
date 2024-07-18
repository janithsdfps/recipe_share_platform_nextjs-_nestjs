// global.d.ts
import { MongoClient } from 'mongodb';

declare global {
    namespace NodeJS {
        interface Global {
            _mongoClientPromise: Promise<MongoClient>;
        }
    }
}

// To ensure the file is treated as a module and its declarations are picked up
export {};
