const nMeetings = (start, end) => {
  const meetings = Array.from({ length: start.length }, () => ({
    start: 0,
    end: 0,
    pos: 0,
  }));
  let result = 1;

  for (let i = 0; i < start.length; i++) {
    meetings[i].start = start[i];
    meetings[i].end = end[i];
    meetings[i].pos = i + 1;
  }

  meetings.sort((a, b) => {
    if (a.end > b.end) return 1;
    else if (a.end < b.end) return -1;
    else if (a.pos > b.pos) return 1;
    else return -1;
  });

  let limit = meetings[0].end;

  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i].start > limit) {
      limit = meetings[i].end;
      result++;
    }
  }

  return result;
};

console.log(nMeetings([1, 0, 3, 8, 5, 8], [2, 6, 4, 9, 7, 9]));
