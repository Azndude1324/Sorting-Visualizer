export function getBubbleSortAnimations(array) {
    const animations = [];
    let auxilliaryArray = array.slice();
    bubbleSort(auxilliaryArray, animations);
    return animations;
}

function bubbleSort(auxillaryArray, animations) {
    let iters = auxillaryArray.length - 1;
    while (iters > 0) {
        let swapped = false;
        for (let i = 0; i < iters; ++i) {
            animations.push(["comparision1", i, i + 1]);
            animations.push(["comparision2", i, i + 1]);

            if (auxillaryArray[i] > auxillaryArray[i + 1]) {
                swapped = true;
                animations.push(["swap", i, auxillaryArray[i + 1]]);
                animations.push(["swap", i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
            }
        }
        if (swapped === false) break;
        iters--;
    }
}

function swap(auxilliaryArray, firstIndex, secondIndex) {
    let temp = auxilliaryArray[firstIndex];
    auxilliaryArray[firstIndex] = auxilliaryArray[secondIndex];
    auxilliaryArray[secondIndex] = temp;
}