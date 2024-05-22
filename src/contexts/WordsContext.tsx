import React, { createContext } from 'react';
import { DispatchContextType, WordsContextType } from '@/types/WordTypes';


export const WordsContext = createContext<WordsContextType | any>(null);
export const WordsDispatchContext = createContext<React.Dispatch<DispatchContextType> | any>(null);