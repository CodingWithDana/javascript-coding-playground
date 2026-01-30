// Here’s an example of a live coding exercise and the instructions to complete it. You will have
// 20 min to solve it during the interview. You need to have your coding environment ready, and
// you will not be permitted to search on google during the interview:
// Given a list of video clipsstart and end times, merge all overlapping clip intervals

// Input: intervals= [[1,4], [10, 11], [4,5]]
// Output: [[1,5], [10, 11]]

// Explanation: Since intervals [1,4] and [4,5] overlaps, merge them into [1,5].

function mergeIntervals(intervals) {
    // if there are no intervals, nothing to merge
    if (intervals.length === 0) {
        return [];
    }

    // 1/ sort intervals by their start time (ascending)
    // this makes it easy to check overlaps in one go
    intervals.sort((a, b) => a[0] - b[0]);

    // to store merged intervals
    const merged = [];

    // take the first interval as the current one we are building
    let [currStart, currEnd] = intervals[0];

    // 2/ go through the rest of the intervals
    for (let i = 1; i < intervals.length; i++) {
        // get the start and end of the next interval
        const [nextStart, nextEnd] = intervals[i];

        // if the next interval overlaps the current one
        if (nextStart <= currEnd) {
            // extend the current interval
            currEnd = Math.max(currEnd, nextEnd);
        } else {
            // if no overlap, save the finished current interval
            merged.push([currStart, currEnd]);
            // start tracking a new current interval
            [currStart, currEnd] = [nextStart, nextEnd];
        }
    }

    // 3/ add the last interval we were tracking
    merged.push([currStart,currEnd]);
    // return all merged intervals
    return merged;
}

// tests
const intervals= [[1,4], [10, 11], [4,5]]
console.log(mergeIntervals(intervals))