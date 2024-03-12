const express = require('express');
const app = express();
const port = 3000;

app.get('/mean', (req, res) => {
    const nums = req.query.nums;
    if (!nums) return res.status(400).send('nums are required.');

    const numberArray = nums.split(',').map(Number);
    const invalidNum = numberArray.find(n => isNaN(n));
    if (invalidNum) return res.status(400).send(`${invalidNum} is not a number.`);

    const mean = calculateMean(numberArray);
    res.json({ operation: 'mean', value: mean });
});

app.get('/median', (req, res) => {
    const nums = req.query.nums;
    if (!nums) return res.status(400).send('nums are required.');

    const numberArray = nums.split(',').map(Number);
    const invalidNum = numberArray.find(n => isNaN(n));
    if (invalidNum) return res.status(400).send(`${invalidNum} is not a number.`);

    const median = calculateMedian(numberArray);
    res.json({ operation: 'median', value: median });
});

app.get('/mode', (req, res) => {
    const nums = req.query.nums;
    if (!nums) return res.status(400).send('nums are required.');

    const numberArray = nums.split(',').map(Number);
    const invalidNum = numberArray.find(n => isNaN(n));
    if (invalidNum) return res.status(400).send(`${invalidNum} is not a number.`);

    const mode = calculateMode(numberArray);
    res.json({ operation: 'mode', value: mode });
});

function calculateMean(arr) {
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}

function calculateMedian(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function calculateMode(arr) {
    const frequencyMap = {};
    let maxFreq = 0;
    let modes = [];
    arr.forEach(number => {
        if (frequencyMap[number]) {
            frequencyMap[number]++;
        } else {
            frequencyMap[number] = 1;
        }
        if (frequencyMap[number] > maxFreq) {
            maxFreq = frequencyMap[number];
            modes = [number];
        } else if (frequencyMap[number] === maxFreq) {
            modes.push(number);
        }
    });
    return [...new Set(modes)]; 
}

app.listen(port, () => console.log(`Server running on port ${port}`));

