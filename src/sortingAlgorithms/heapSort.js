export function getHeapSortAnimations(array) {
    const animations = [];
    let auxilliaryArray = array.slice();
    heapSort(auxilliaryArray, animations);
    return animations;
}

function heapSort(auxilliaryArray, animations) {
    for (let i = 0; i < auxilliaryArray.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < auxilliaryArray.length; j++) {
            animations.push(["comparision1", j, minIndex]);
            animations.push(["comparision2", j, minIndex]);
            if (auxilliaryArray[j] < auxilliaryArray[minIndex]) {
                minIndex = j;
            }
        }
        animations.push(["swap", minIndex, auxilliaryArray[i]]);
        animations.push(["swap", i, auxilliaryArray[minIndex]]);
        swap(auxilliaryArray, minIndex, i);
    }
}

function swap(auxilliaryArray, firstIndex, secondIndex) {
    let temp = auxilliaryArray[firstIndex];
    auxilliaryArray[firstIndex] = auxilliaryArray[secondIndex];
    auxilliaryArray[secondIndex] = temp;
}