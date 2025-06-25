import { Reflection } from '../models/reflection';
import * as createCsvWriter from 'csv-writer';
import path from 'path';
import fs from 'fs';

export class CsvExporter {
    private outputDir: string;

    constructor(outputDir: string) {
        this.outputDir = outputDir;
        // Ensure output directory exists
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
    }

    public async exportToCsv(reflections: Reflection[], year: number, language: string): Promise<void> {
        const fileName = `daily_reflections_${year}_${language}.csv`;
        const filePath = path.join(this.outputDir, fileName);
        
        const csvWriter = createCsvWriter.createObjectCsvWriter({
            path: filePath,
            header: [
                { id: 'date', title: 'Date' },
                { id: 'language', title: 'Language' },
                { id: 'title', title: 'Title' },
                { id: 'quote', title: 'Quote' },
                { id: 'text', title: 'Reflection Text' },
                { id: 'content', title: 'Reference' }
            ]
        });

        try {
            await csvWriter.writeRecords(reflections);
            console.log(`✓ CSV exported: ${filePath} (${reflections.length} reflections)`);
        } catch (error) {
            console.error(`✗ Error exporting CSV for ${language}:`, error);
            throw error;
        }
    }

    public async exportAllToCsv(allReflections: { [key: string]: Reflection[] }, year: number): Promise<void> {
        // Create a combined CSV with all languages
        const fileName = `daily_reflections_${year}_all_languages.csv`;
        const filePath = path.join(this.outputDir, fileName);
        
        const csvWriter = createCsvWriter.createObjectCsvWriter({
            path: filePath,
            header: [
                { id: 'date', title: 'Date' },
                { id: 'language', title: 'Language' },
                { id: 'title', title: 'Title' },
                { id: 'quote', title: 'Quote' },
                { id: 'text', title: 'Reflection Text' },
                { id: 'content', title: 'Reference' }
            ]
        });

        // Combine all reflections
        const combinedReflections: Reflection[] = [];
        Object.values(allReflections).forEach(reflections => {
            combinedReflections.push(...reflections);
        });

        // Sort by date and then by language
        combinedReflections.sort((a, b) => {
            const dateCompare = a.date.localeCompare(b.date);
            if (dateCompare !== 0) return dateCompare;
            return a.language.localeCompare(b.language);
        });

        try {
            await csvWriter.writeRecords(combinedReflections);
            console.log(`✓ Combined CSV exported: ${filePath} (${combinedReflections.length} total reflections)`);
        } catch (error) {
            console.error('✗ Error exporting combined CSV:', error);
            throw error;
        }
    }
}
