import { DailyReflections, Language } from 'aa-daily-reflections';
import { Reflection } from '../models/reflection';

export class ReflectionScraper {
    private dailyReflections: DailyReflections;
    private language: Language;

    constructor(language: Language) {
        this.language = language;
        this.dailyReflections = new DailyReflections(language);
    }

    public async scrape(year: number): Promise<Reflection[]> {
        const reflections: Reflection[] = [];
        
        console.log(`Starting scraping for ${year} in ${this.getLanguageName()}`);
        
        for (let month = 1; month <= 12; month++) {
            const daysInMonth = this.getDaysInMonth(month, year);
            
            console.log(`Scraping month ${month}/${year} (${daysInMonth} days)`);
            
            for (let day = 1; day <= daysInMonth; day++) {
                try {
                    const reflection = await this.dailyReflections.getReflection(month, day);
                    if (reflection) {
                        reflections.push({
                            date: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
                            language: this.getLanguageName(),
                            text: reflection.reflection,
                            title: reflection.title,
                            quote: reflection.quote,
                            content: reflection.reference
                        });
                    }
                } catch (error) {
                    console.error(`Error fetching reflection for ${year}-${month}-${day} (${this.getLanguageName()}):`, error);
                }
                
                // Small delay to avoid overwhelming the API
                await this.delay(100);
            }
        }

        console.log(`Completed scraping ${reflections.length} reflections for ${year} in ${this.getLanguageName()}`);
        return reflections;
    }

    private getDaysInMonth(month: number, year: number): number {
        return new Date(year, month, 0).getDate();
    }

    private getLanguageName(): 'english' | 'french' | 'spanish' {
        switch (this.language) {
            case 'en': return 'english';
            case 'fr': return 'french';
            case 'es': return 'spanish';
            default: return 'english';
        }
    }

    private async delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
