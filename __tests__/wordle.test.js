import { buildLetter, Wordle } from "../src/wordle.js";

describe('building a letter object', () => {
    test('returns a letter object', () => {
        const letter = buildLetter('A', 'PRESENT')
        expect(letter).toEqual({ letter: 'A', status: 'PRESENT'})
    })
})

describe('constructing a new Wordle game', () => {
    test('sets maxGuesses to 6 if no argument is passed', () => {
        const wordle = new Wordle()
        expect(wordle.maxGuesses).toBe(6)
    })

    test('sets maxGuesses to the argument passed', () => {
        const wordle = new Wordle(10)
        expect(wordle.maxGuesses).toBe(10)
    })

    test('sets guesses to an array of length maxGuesses', () => {
        const wordle = new Wordle()
        expect(wordle.guesses.length).toBe(6)
    })

    test('sets currGuess to 0', () => {
        const wordle = new Wordle()
        expect(wordle.currGuess).toBe(0)
    })

    test('sets word to a word from getWord', () => {
        const wordle = new Wordle()
        expect(wordle.word).toBe('APPLE')
    })
})