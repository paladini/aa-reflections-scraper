import { ReflectionScraper } from './scrapers/reflectionScraper';
import { CsvExporter } from './exporters/csvExporter';
import { Language } from 'aa-daily-reflections';
import path from 'path';

async function testCsvExport() {
    const outputDir = path.join(__dirname, '../data');
    const csvExporter = new CsvExporter(outputDir);
    
    console.log('Testing CSV export with a few reflections...');
    
    try {
        // Test with just a few days of English reflections
        const englishScraper = new ReflectionScraper('en');
        const testReflections = [];
        
        // Get just the first 3 days of January
        for (let day = 1; day <= 3; day++) {
            try {
                const dailyReflections = englishScraper['dailyReflections'];
                const reflection = await dailyReflections.getReflection(1, day);
                if (reflection) {
                    testReflections.push({
                        date: `2025-01-${day.toString().padStart(2, '0')}`,
                        language: 'english' as const,
                        text: reflection.reflection,
                        title: reflection.title,
                        quote: reflection.quote,
                        content: reflection.reference
                    });
                }
            } catch (error) {
                console.error(`Error fetching day ${day}:`, error);
            }
        }
        
        console.log(`Got ${testReflections.length} test reflections`);
        
        // Export to CSV
        await csvExporter.exportToCsv(testReflections, 2025, 'english_test');
        
        console.log('✓ CSV export test completed!');
        
    } catch (error) {
        console.error('✗ CSV export test failed:', error);
    }
}

testCsvExport();
