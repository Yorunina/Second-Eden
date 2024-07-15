// priority: 1000
/**
 * 
 * @param {$List$Type<any>} text 
 * @param {String[]} textLines 
 * @param {Number} initNum 
 * @returns 
 */
export function AddForTextLines(text, textLines, initNum) {
    for (let i = 0; i < textLines.length; i++) {
        text.add(initNum++, textLines[i])
    }
    return initNum
}
