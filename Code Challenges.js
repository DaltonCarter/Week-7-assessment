// 1) Sum Zero

// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

let array = [1, 3, 0, 4, 0]

const sumZero = (arr) => {
    for(i = 0; i < arr.length; i++){
        for(j = i +1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}

// O(n2)


// 2) Unique Characters

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const uniqueCharacters = (str) => {
    for (let i = 0; i < str.length; i++){
        for (let j = i + 1; j < str.length; j++){
            if (str.charAt(i) == str.charAt(j))
                return false;
        }
    }
    return true
}

//Time: O(n2)

// 3) Pangram Sentence

// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

const pangram = (str) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let standard = str.toLowerCase()

    for(let i = 0; i < alphabet.length; i++) {
        if(standard.indexOf(alphabet[i]) === -1){
            return false
        }
    }
    return true
}


//O(n)

// 4) Longest Word

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const longestWord = (str) => {
    let word = str.split(' ').sort((a,b) => {return b.length - a.length})
    return word[0].length
}

//O(n)