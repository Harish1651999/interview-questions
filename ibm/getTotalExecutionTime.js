// Question 9 ALL When multiple tasks are executed on a single- threaded CPU, the tasks
// are scheduled based on the principle of pre-emption. When a higher- priority task arrives
// in the execution queue, then the lower-priority task is pre-empted, i.e. its execution is paused
// until the higher-priority task is complete.

function exclusiveTime(n, logs) {
  const exclusiveTimes = new Array(n).fill(0);
  const stack = [];
  let prevTime = 0;

  for (const log of logs) {
    const [id, event, timestamp] = parseLog(log);
    const parsedTimestamp = parseInt(timestamp);

    if (event === "start") {
      if (stack.length > 0) {
        exclusiveTimes[stack[stack.length - 1]] += parsedTimestamp - prevTime;
      }
      stack.push(id);
      prevTime = parsedTimestamp;
    } else {
      // event === "end"
      exclusiveTimes[stack.pop()] += parsedTimestamp - prevTime + 1;
      prevTime = parsedTimestamp + 1;
    }
  }

  return exclusiveTimes;
}

function parseLog(log) {
  const [id, event, timestamp] = log.split(":");
  return [parseInt(id), event, parseInt(timestamp)];
}

// Example usage:

const n = 3;
const logs = [
  "0:start:0",
  "1:start:2",
  "2:start:3",
  "2:end:4",
  "1:end:5",
  "0:end:6",
];
console.log(exclusiveTime(n, logs)); // Output: [3, 2, 2]
