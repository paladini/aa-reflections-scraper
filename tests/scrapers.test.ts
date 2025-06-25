import { EnglishScraper } from '../src/scrapers/englishScraper';
import { FrenchScraper } from '../src/scrapers/frenchScraper';
import { SpanishScraper } from '../src/scrapers/spanishScraper';

describe('Scrapers', () => {
  let englishScraper: EnglishScraper;
  let frenchScraper: FrenchScraper;
  let spanishScraper: SpanishScraper;

  beforeAll(() => {
    englishScraper = new EnglishScraper();
    frenchScraper = new FrenchScraper();
    spanishScraper = new SpanishScraper();
  });

  test('should scrape daily reflections in English for a specified year', async () => {
    const year = 2023;
    const reflections = await englishScraper.scrape(year);
    expect(reflections).toBeDefined();
    expect(reflections.length).toBeGreaterThan(0);
    expect(reflections[0]).toHaveProperty('date');
    expect(reflections[0]).toHaveProperty('text');
  });

  test('should scrape daily reflections in French for a specified year', async () => {
    const year = 2023;
    const reflections = await frenchScraper.scrape(year);
    expect(reflections).toBeDefined();
    expect(reflections.length).toBeGreaterThan(0);
    expect(reflections[0]).toHaveProperty('date');
    expect(reflections[0]).toHaveProperty('text');
  });

  test('should scrape daily reflections in Spanish for a specified year', async () => {
    const year = 2023;
    const reflections = await spanishScraper.scrape(year);
    expect(reflections).toBeDefined();
    expect(reflections.length).toBeGreaterThan(0);
    expect(reflections[0]).toHaveProperty('date');
    expect(reflections[0]).toHaveProperty('text');
  });
});