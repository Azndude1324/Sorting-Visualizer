export function getInsertionSortAnimations(array) {
    //Create a "stack" of animations
    let animations = [];
    let auxiliaryArray = array.slice();
    insertionSort(auxiliaryArray, animations);
    return animations;
}

function insertionSort(auxiliaryArray, animations) {
    for (let i = 1; i < auxiliaryArray.length; i++) {
        let key = auxiliaryArray[i];
        let j = i - 1;
        animations.push(["comparison1", j, i]);
        animations.push(["comparison2", j, i]);
        while (j >= 0 && auxiliaryArray[j] > key) {
            animations.push(["overwrite", j + 1, auxiliaryArray[j]]);
            auxiliaryArray[j + 1] = auxiliaryArray[j];
            j = j - 1;

            if (j >= 0) {
                animations.push(["comparison1", j, i]);
                animations.push(["comparison2", j, i]);
            }

        }
        animations.push(["overwrite", j + 1, key]);
        auxiliaryArray[j + 1] = key;
    }
}