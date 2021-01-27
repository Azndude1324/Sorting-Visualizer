import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSort.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort.js';
import { getHeapSortAnimations } from '../sortingAlgorithms/heapSort.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort.js';
import { getInsertionSortAnimations } from '../sortingAlgorithms/insertionSort.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
var ANIMATION_SPEED_MS = 3;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'grey';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [], arrLength: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.resetArray();
    }

    handleChange(event){
        let { value, min, max } = event.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        this.setState({ arrLength: value });
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < this.state.arrLength; i++) {
            array.push(randomIntFromInterval(1, 600));
        }
        this.setState({ array });
    }

    mergeSort() {
        this.disableSortButtons();
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }

        const restore = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreSortButtons(), restore);
    }

    quickSort() {
        this.disableSortButtons();
        const animations = getQuickSortAnimations(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparison1") || (animations[i][0] === "comparison2")
            const arrayBars = document.getElementsByClassName('array-bar');
            
            if (isColorChange) {
                const color = (animations[i][0] === "comparison1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [comparison, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [temp, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

        const restore = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreSortButtons(), restore);
    }

    heapSort() {
        this.disableSortButtons();
        const animations = getHeapSortAnimations(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');

            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;

                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);  
            }
        }


        const restore = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreSortButtons(), restore);
    }

    bubbleSort() {
        this.disableSortButtons();
        const animations = getBubbleSortAnimations(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [comparison, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            } else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);  
            }
        }

        const restore = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreSortButtons(), restore);
    }

    insertionSort(){
        this.disableSortButtons();
        const animations = getInsertionSortAnimations(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparison1") || (animations[i][0] === "comparison2")
            const arrayBars = document.getElementsByClassName('array-bar');
            
            if(isColorChange === true){
                const color = (animations[i][0] === "comparison1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    let temp = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = temp;
                    
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

        const restore = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreSortButtons(), restore);
    }

    disableSortButtons(){
        document.getElementById("mergeSort").disabled = true;
        let buttonStyle = document.getElementById("mergeSort").style;
        document.getElementById("mergeSort").title = "Currently Disabled";
        buttonStyle.cursor = "default";

        document.getElementById("quickSort").disabled = true;
        buttonStyle = document.getElementById("quickSort").style;
        document.getElementById("quickSort").title = "Currently Disabled";
        buttonStyle.cursor = "default";
        
        document.getElementById("heapSort").disabled = true;
        buttonStyle = document.getElementById("heapSort").style;
        document.getElementById("heapSort").title = "Currently Disabled";
        buttonStyle.cursor = "default";
        
        document.getElementById("bubbleSort").disabled = true;
        buttonStyle = document.getElementById("bubbleSort").style;
        document.getElementById("bubbleSort").title = "Currently Disabled";
        buttonStyle.cursor = "default";
        
        document.getElementById("insertionSort").disabled = true;
        buttonStyle = document.getElementById("insertionSort").style;
        document.getElementById("insertionSort").title = "Currently Disabled";
        buttonStyle.cursor = "default";
    }
    restoreSortButtons(){
        document.getElementById("mergeSort").disabled = false;
        let buttonStyle = document.getElementById("mergeSort").style;
        document.getElementById("mergeSort").title = "Currently Enabled";
        buttonStyle.cursor = "default";

        document.getElementById("quickSort").disabled = false;
        buttonStyle = document.getElementById("quickSort").style;
        document.getElementById("quickSort").title = "Currently Enabled";
        buttonStyle.cursor = "default";
        
        document.getElementById("heapSort").disabled = false;
        buttonStyle = document.getElementById("heapSort").style;
        document.getElementById("heapSort").title = "Currently Enabled";
        buttonStyle.cursor = "default";
        
        document.getElementById("bubbleSort").disabled = false;
        buttonStyle = document.getElementById("bubbleSort").style;
        document.getElementById("bubbleSort").title = "Currently Enabled";
        buttonStyle.cursor = "default";
        
        document.getElementById("insertionSort").disabled = false;
        buttonStyle = document.getElementById("insertionSort").style;
        document.getElementById("insertionSort").title = "Currently Enabled";
        buttonStyle.cursor = "default";
    }

    render() {
        const { array } = this.state;

        return (
            //Create Top Panel & Visualizer
            <>
                <div className="panel-container">
                    <h2>Sorting Visualizer by Ed</h2>
                    <h4>
                        <label>Size of Array[5,100]: </label>
                        <input type="number" value={this.state.value} onChange={this.handleChange} min="5" max="100" />
                        <input type="submit" value="Generate" onClick={() => this.resetArray()}/>
                    </h4>
                    <button id = "mergeSort" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button id = "quickSort" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button id = "heapSort" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button id = "bubbleSort" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button id = "insertionSort" onClick={() => this.insertionSort()}>Insertion Sort</button>
                </div>

                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`,
                            }}></div>
                    ))}
                </div>

                <script>
                    var numArray = document.getElementById("numArray");
                    var animationSpd = document.getElementById("animationSpd");
                    var output = document.getElementById("demo");

                    output.innerHTML = <slider className="value"></slider>
                </script>
            </>
        );
    }
}

//RNG Generator
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}