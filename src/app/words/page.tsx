// Database
import db from '@/db/db';
import { WordType } from '@/types/WordTypes';

async function getAllWords() {
    return db.word.findMany({
        select: {
            word: true,
            translation: true,
            id: true,
            article: true
        }
    });

}
export async function createWord({ word, translation, article }: WordType) {
   await db.word.create({
        data: {
            word: word,
            translation: translation,
            article: article
        }
    });

     return db.word.findMany(
        {
            select: {
                word: true
            }
        }
    );
}

export default async function Words(){
    const words = await getAllWords()
    return words.map((word) => {
        return (
            <div key={word.id}
                className={'word-card'}>
                <span className='text-red-500'> {word.article} {word.word}</span>
                <span
                    className={'truncate text-red-500'}> {word.translation.charAt(0).toUpperCase() + word.translation.slice(1)}</span>
            </div>
        );
    });
}