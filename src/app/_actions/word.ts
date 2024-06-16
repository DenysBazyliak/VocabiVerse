'use server';

import db from '@/db/db';

export async function addWord({ word, translation, article }: WordType) {
    return db.word.create({
        data: {
            word: word,
            translation: translation,
            article: article,
        },
    });
}

export async function deleteWord(wordId:string) {
    if(!wordId){
        return null
    }
    await db.word.delete({ where: { id: wordId } })
}

export async function changeWord(wordId:string ,data:WordType) {
    await db.word.update({
        where:{ id: wordId },
        data: {
            word: data.word,
            translation: data.translation,
            article: data.article
        },
    })
}