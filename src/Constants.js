import { makeBagOfLetters } from './scrabbleLogic/makeRandomLetters'

export const wordScoreDict = require('./word_score_dict.json');

export const wordScoreString = JSON.stringify(wordScoreDict);

export const letterDistribution = {'e':12, 'a':9, 'i':9, 'o':8, 'n':6, 'r':6, 't':6, 'l':4, 's':4, 'u':4, 'd':4, 'g':3, 'b':2,
                                   'c':2, 'm':2, 'p':2, 'f':2, 'h':2, 'v':2, 'w':2, 'y':2, 'k':1, 'j':1, 'x':1, 'q':1, 'z':1, '8':2};

export const bagOfLetters = makeBagOfLetters(letterDistribution);
