import { ReflectionScraper } from './scrapers/reflectionScraper';
import { FileExporter } from './exporters/fileExporter';
import { DatabaseExporter } from './exporters/databaseExporter';
import { Language } from 'aa-daily-reflections';
import path from 'path';

const year = new Date().getFullYear();
const outputDir = path.join(__dirname, '../data');

async function testScrapeReflections() {
    // Test with just English and a few days for now
    const languages: Language[] = ['en'];
    const languageNames = ['english'];
    
    const fileExporter = new FileExporter(outputDir);
    const databaseExporter = new DatabaseExporter();
    
    console.log(`Starting test scraping for year ${year}`);
    console.log(`Output directory: ${outputDir}`);
    
    for (let i = 0; i < languages.length; i++) {
        const language = languages[i];
        const languageName = languageNames[i];
        
        console.log(`\n=== Testing ${languageName.toUpperCase()} reflections ===`);
        
        const scraper = new ReflectionScraper(language);
        
        // Test with just first few days of January
        const testReflections = [];
        for (let day = 1; day <= 3; day++) {
            try {
                const reflection = await scraper['dailyReflections'].getReflection(1, day);
                if (reflection) {
                    testReflections.push({
                        date: `${year}-01-${day.toString().padStart(2, '0')}`,
                        language: 'english' as const,
                        text: reflection.reflection,
                        title: reflection.title,
                        quote: reflection.quote,
                        content: reflection.reference
                    });
                    console.log(`✓ Successfully fetched reflection for Jan ${day}`);
                }
            } catch (error) {
                console.error(`✗ Error fetching reflection for Jan ${day}:`, error);
            }
        }
        
        console.log(`\nTest completed. Fetched ${testReflections.length} reflections.`);
        
        if (testReflections.length > 0) {
            // Export test data
            fileExporter.exportToFile(testReflections, year, languageName + '_test');
            await databaseExporter.exportToDatabase(testReflections);
            console.log('✓ Test data exported successfully');
        }
    }
    
    console.log('\n=== Test completed! ===');
}

testScrapeReflections().catch(error => {
    console.error('Error during test scraping:', error);
    process.exit(1);
});
