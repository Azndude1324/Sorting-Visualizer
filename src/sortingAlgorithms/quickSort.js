export function getQuickSortAnimations(array) {
    const animations = [];
    let auxilliaryArray = array.slice();
    quickSort(auxilliaryArray, 0, auxilliaryArray.length - 1, animations);
    return animations;
}

function quickSort(auxilliaryArray, startIndex, endIndex, animations) {
    let pivotIndex;
    if (startIndex < endIndex) {
        pivotIndex = partitionArray(auxilliaryArray, startIndex, endIndex, animations);
        quickSort(auxilliaryArray, startIndex, pivotIndex - 1, animations);
        quickSort(auxilliaryArray, pivotIndex + 1, endIndex, animations);
    }
}

function partitionArray(auxilliaryArray, startIndex, endIndex, animations) {
    let pivotIndex = randomIntFromInterval(startIndex, endIndex);

    animations.push(["comparison1", pivotIndex, endIndex]);
    animations.push(["swap", pivotIndex, auxilliaryArray[endIndex]]);
    animations.push(["swap", endIndex, auxilliaryArray[pivotIndex]]);
    animations.push(["comparison2", pivotIndex, endIndex]);
    swap(auxilliaryArray, pivotIndex, endIndex);

    let lessTailIndex = startIndex;

    for (let i = startIndex; i < endIndex; ++i) {
        animations.push(["comparison1", i, endIndex]);
        animations.push(["comparison2", i, endIndex]);
        if (auxilliaryArray[i] <= auxilliaryArray[endIndex]) {
            animations.push(["comparison1", i, lessTailIndex]);
            animations.push(["swap", i, auxilliaryArray[lessTailIndex]]);
            animations.push(["swap", lessTailIndex, auxilliaryArray[i]]);
            animations.push(["comparison2", i, lessTailIndex]);
            swap(auxilliaryArray, i, lessTailIndex);
            lessTailIndex++;
        }
    }
    animations.push(["comparison1", lessTailIndex, endIndex]);
    animations.push(["swap", endIndex, auxilliaryArray[lessTailIndex]]);
    animations.push(["swap", lessTailIndex, auxilliaryArray[endIndex]]);
    animations.push(["comparison2", lessTailIndex, endIndex]);

    swap(auxilliaryArray, lessTailIndex, endIndex);
    return lessTailIndex;
}

function swap(auxilliaryArray, firstIndex, secondIndex) {
    let temp = auxilliaryArray[firstIndex];
    auxilliaryArray[firstIndex] = auxilliaryArray[secondIndex];
    auxilliaryArray[secondIndex] = temp;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}