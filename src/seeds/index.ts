import db from '../config/connections.js';
import cleanDB from './cleanDB.js';
import { User, Thought } from '../models/index.js';

try {
    await db();
    await cleanDB();
}