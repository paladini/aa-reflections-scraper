import { Reflection } from '../models/reflection';
import * as sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';
import path from 'path';

export class DatabaseExporter {
    private dbPath: string;

    constructor() {
        this.dbPath = path.join(__dirname, '../../data/reflections.db');
    }

    async exportToDatabase(reflections: Reflection[]): Promise<void> {
        try {
            const db = await open({
                filename: this.dbPath,
                driver: sqlite3.Database
            });

            // Create table if it doesn't exist
            await db.exec(`
                CREATE TABLE IF NOT EXISTS reflections (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    date TEXT NOT NULL,
                    language TEXT NOT NULL,
                    title TEXT,
                    quote TEXT,
                    text TEXT,
                    content TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    UNIQUE(date, language)
                )
            `);

            // Insert reflections
            const stmt = await db.prepare(`
                INSERT OR REPLACE INTO reflections (date, language, title, quote, text, content)
                VALUES (?, ?, ?, ?, ?, ?)
            `);

            for (const reflection of reflections) {
                await stmt.run(
                    reflection.date,
                    reflection.language,
                    reflection.title || '',
                    reflection.quote || '',
                    reflection.text,
                    reflection.content || ''
                );
            }

            await stmt.finalize();
            await db.close();

            console.log(`Successfully exported ${reflections.length} reflections to database`);
        } catch (error) {
            console.error('Error exporting reflections to database:', error);
            throw error;
        }
    }
}