function getClosingParen(sentence, openingParenIndex) {
    var openNestedParens = 0;

    for (var position = openingParenIndex + 1; position < sentence.length; position++) {
        var char = sentence[position];

        if (char === '(') {
            openNestedParens += 1;
        } else if (char === ')') {
            if (openNestedParens === 0) {
                return position;
            } else {
                openNestedParens -= 1;
            }
        }
    }

    throw new Error('No closing parenthesis :(');
}
