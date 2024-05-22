export type WordType = {
    word: string;
    translation: string;
    id: number;
}

export type WordsContextType = {
    words: WordType[];
}
export type DispatchContextType = {
    addWord: (word: WordType) => void;
    changeWord: (word: WordType) => void;
    deleteWord: (id: number) => void;
}