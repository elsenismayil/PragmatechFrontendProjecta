let arr = [10, 20, 20, 10, 10, 30, 50,  10, 20]
/**
 * @param {number[]} arr 
 */
function count(arr) {
    let temp = [];                                  
    let count = '';
    arr.forEach(i => {
        if (!temp.includes(i)) {
            temp.push(i);
            let couple = Math.floor(arr.filter(j => j === i).length / 2);

            if (couple) {
                count += `${i} ededinden ${couple} cutdur.`;
            }
        }
    });
    return count;
}
console.log(count(arr));