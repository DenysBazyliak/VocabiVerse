// Types
type Word = {
    word: string;
    translation: string;
    id: number;
}

let nextId = 5;


export function wordsReducer(words: any, action: any) {
    switch (action.type) {
        case 'add':
            return [...words, {
                word: action.payload.word,
                translation: action.payload.translation,
                id: nextId++
            }];
        case 'changed':
            return words.map((word: Word) => word.id === action.word.id ? action.word : word);
        case 'deleted':
            return words.filter((word: Word) => word.id !== action.id);
        default:
            return words;
    }
}
