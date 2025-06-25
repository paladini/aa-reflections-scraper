import { DailyReflections } from 'aa-daily-reflections';

async function simpleTest() {
    console.log('Testing aa-daily-reflections library...');
    
    try {
        const dailyReflections = new DailyReflections('en');
        console.log('✓ DailyReflections instance created');
        
        const reflection = await dailyReflections.getReflection(1, 1);
        console.log('✓ Reflection fetched:', {
            title: reflection.title,
            date: reflection.date,
            quote: reflection.quote?.substring(0, 50) + '...'
        });
        
    } catch (error) {
        console.error('✗ Error:', error);
    }
}

simpleTest();
