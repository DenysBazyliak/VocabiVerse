'use server';

import db from '@/db/db';

export async function addWord({ word, translation, article }: WordType) {
    const response = await db.word.create({
        data: {
            word: word,
            translation: translation,
            article: article,
        },
    });


}