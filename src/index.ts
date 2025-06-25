import { ReflectionScraper } from './scrapers/reflectionScraper';
import { FileExporter } from './exporters/fileExporter';
import { DatabaseExporter } from './exporters/databaseExporter';
import { CsvExporter } from './exporters/csvExporter';
import { Language } from 'aa-daily-reflections';
import path from 'path';

const year = new Date().getFullYear();
const outputDir = path.join(__dirname, '../data');

async function scrapeReflections() {
    const languages: Language[] = ['en', 'fr', 'es'];
    const languageNames = ['english', 'french', 'spanish'];
    
    const fileExporter = new FileExporter(outputDir);
    const databaseExporter = new DatabaseExporter();
    const csvExporter = new CsvExporter(outputDir);
    
    console.log(`Starting scraping for year ${year}`);
    console.log(`Output directory: ${outputDir}`);
    
    // Store all reflections for combined export
    const allReflections: { [key: string]: any[] } = {};
    
    for (let i = 0; i < languages.length; i++) {
        const language = languages[i];
        const languageName = languageNames[i];
        
        console.log(`\n=== Scraping ${languageName.toUpperCase()} reflections ===`);
        
        const scraper = new ReflectionScraper(language);
        const reflections = await scraper.scrape(year);
        
        // Store for combined export
        allReflections[languageName] = reflections;
        
        // Export to file (JSON)
        fileExporter.exportToFile(reflections, year, languageName);
        
        // Export to CSV (individual language)
        await csvExporter.exportToCsv(reflections, year, languageName);
        
        // Export to database
        await databaseExporter.exportToDatabase(reflections);
    }
    
    // Export combined CSV with all languages
    await csvExporter.exportAllToCsv(allReflections, year);
    
    console.log('\n=== Scraping completed! ===');
    console.log('\n📁 Generated files:');
    console.log(`   • JSON files: daily_reflections_${year}_[language].json`);
    console.log(`   • CSV files: daily_reflections_${year}_[language].csv`);
    console.log(`   • Combined CSV: daily_reflections_${year}_all_languages.csv`);
    console.log(`   • SQLite database: reflections.db`);
}

scrapeReflections().catch(error => {
    console.error('Error during scraping:', error);
    process.exit(1);
});