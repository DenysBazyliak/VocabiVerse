import React, { createContext } from 'react';
import { DispatchContextType, WordsContextType } from '@/types/WordType';


export const WordsContext = createContext<WordsContextType | any>(null);
export const WordsDispatchContext = createContext<React.Dispatch<DispatchContextType> | any>(null);