console.log('we are running')

function decode(charShift, textIn, lettersOnly) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var textOut = "";
    var n = textIn.length;

    textIn = textIn.toUpperCase()

    while (charShift < 0) {
        charShift += 26;
    }

    for (var i = 0; i < n; i++){
        var c = textIn.charAt(i);
        var position = alphabet.indexOf(c)

        if (position >= 0) {
            var newPosition = (position + charShift) % 26

            textOut += alphabet.charAt(newPosition);
        }
    
    else {
        if (lettersOnly) {
            //Do nothing.
        }
    
        else {
            //Pass the character through, unchaged
            textOut += c;
        }

        }

    }

    return textOut;
}


console.log(decode(1, 'a'))
console.log(decode(3, 'ce'))
console.log(decode(2, 'fcjjm'))
// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

console.log(decode(13, 'This is a coded message.'))
console.log(decode(-13, 'GUVF VF N PBQRQ ZRFFNTR.'))


console.log('end')