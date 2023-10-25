function descendingArraySort(array) {

    for (let i = 0; i < array.length - 1; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

const numberArray = [3, 2, 7, 1, 10, 6];

descendingArraySort(numberArray);

console.log(numberArray);  // [ 10, 7, 6, 3, 2, 1 ]
