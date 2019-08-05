import { store, sessionStore } from './data/store.js';

const results = store.getResults();
const sessionResults = sessionStore.getResults();

const timeLabel = [];
const clickedOverall = [];
const clickedThisSession = [];

for(let i = 0; i < results.length; i++) {
    const result = results[i];
    const sessionResult = sessionResults[i];
    const date = new Date(result.date).toLocaleTimeString();
    timeLabel.push(date);
    clickedOverall.push(result.name);
    clickedThisSession.push(sessionResult.name);

    
}