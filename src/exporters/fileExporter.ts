import fs from 'fs';
import path from 'path';
import { Reflection } from '../models/reflection';

export class FileExporter {
    private outputDir: string;

    constructor(outputDir: string) {
        this.outputDir = outputDir;
    }

    public exportToFile(reflections: Reflection[], year: number, language: string): void {
        const fileName = `daily_reflections_${year}_${language}.json`;
        const filePath = path.join(this.outputDir, fileName);
        
        fs.writeFileSync(filePath, JSON.stringify(reflections, null, 2), 'utf-8');
        console.log(`Reflections exported to ${filePath}`);
    }
}