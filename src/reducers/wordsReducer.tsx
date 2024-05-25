// Types
import { WordType } from '@/types/WordTypes';
let nextId = 5;


export function wordsReducer(words:WordType[] , action: any) {
    switch (action.type) {
        case 'added':
            return [...words, {
                word: action.word.word,
                translation: action.word.translation,
                article: action.word.article,
                id: action.id
            }];
        case 'changed':
            return words.map((word: WordType) => word.id === action.word.id ? action.word : word);
        case 'deleted':
            return words.filter((word: WordType) => word.id !== action.id);
        default:
            return words;
    }
}
