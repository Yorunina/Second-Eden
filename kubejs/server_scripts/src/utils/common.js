// priority: 1000
/**
 * @param {any[]} array 
 * @param {Number} chunkSize 
 * @returns {any[][]}
 */
export function SliceChunkArray(array, chunkSize) {
    let chunks = []
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize))
    }
    return chunks
}


/**
 * @param {any[]} array 
 * @returns {any}
 */
export function RandomGet(array) {
    if (array.length === 0) {
        return undefined;
    }
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/**
 * 
 * @param {any[]} array 
 * @param {number} n 
 * @returns {any[]}
 */
export function ShuffleAndTake(array, n) {
    let shuffledArray = array.slice()
    // 使用sort方法打乱数组
    shuffledArray.sort(() => Math.random() - 0.5)
    return shuffledArray.slice(0, n)
  }