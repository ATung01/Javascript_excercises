const fs = require('fs');

function decode(messageFile) {
    const lines = fs.readFileSync(messageFile, 'utf8').split('\n')

    const decodedWords = []

    // Process each line in the pyramid structure
    for (let i = 0; i < lines.length; i++) {
        const words = lines[i].split(/\s+/).slice(1).filter(word => word !== '')
        decodedWords.push(words[words.length - 1])
    }

    // Join the decoded words to form the final message
    const decodedMessage = decodedWords.join(' ')
    return decodedMessage
}

// Example usage:
const filePath = './coding_qual_input.txt'
const result = decode(filePath)
console.log(result)


