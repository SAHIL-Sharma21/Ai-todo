import 'dotenv/config';
import {drizzle} from 'drizzle-orm/node-postgres';
import pkg from 'pg';

const {Pool} = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export const db = drizzle(pool);