# Problem Set 5: 6.00 Word Game
# Name: 
# Collaborators: 
# Time: 
#

import random
import string
import json

VOWELS = 'aeiou'
CONSONANTS = 'bcdfghjklmnpqrstvwxyz'
HAND_SIZE = 7

SCRABBLE_LETTER_VALUES = {
    'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f': 4, 'g': 2, 'h': 4, 'i': 1, 'j': 8, 'k': 5, 'l': 1, 'm': 3,
    'n': 1, 'o': 1, 'p': 3, 'q': 10, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 4, 'w': 4, 'x': 8, 'y': 4, 'z': 10
}

WORDLIST_FILENAME = "words.txt"

def load_words():
    """
    Returns a list of valid words. Words are strings of lowercase letters.
    
    Depending on the size of the word list, this function may
    take a while to finish.
    """
    print "Loading word list from file..."
    # inFile: file
    inFile = open(WORDLIST_FILENAME, 'r', 0)
    # wordlist: list of strings
    wordlist = []
    for line in inFile:
        wordlist.append(line.strip().lower())
    print "  ", len(wordlist), "words loaded."
    return wordlist


def get_word_score(word, HAND_SIZE):
    
    score_per_letter = ()
    score_no_bonus = 0
    for letter in word:
        score_no_bonus += SCRABBLE_LETTER_VALUES[letter]
    if len(word) == HAND_SIZE:
        return score_no_bonus + 50
    else: return score_no_bonus


word_list = load_words()
mini_word_list = ['pizzazz', 'aaaa', 'bb']

def make_word_score_dict(word_list, hand_size):
    result = {}
    for word in word_list:
        result[word] = get_word_score(word, hand_size)
    return result

word_score_dict = make_word_score_dict(word_list, 7)

with open('word_score_dict.json', 'w') as outfile:
    json.dump(word_score_dict, outfile)
