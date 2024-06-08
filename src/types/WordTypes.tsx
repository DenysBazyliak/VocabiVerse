export type WordType = {
    word: string;
    translation: string;
    article: string | null;
    id: string;
    createdAt: Date;
    updatedAt?: Date;
}

export type WordsContextType = {
    words: WordType[];
}
export type DispatchContextType = {
    addWord: (word: WordType) => void;
    changeWord: (word: WordType) => void;
    deleteWord: (id: number) => void;
}