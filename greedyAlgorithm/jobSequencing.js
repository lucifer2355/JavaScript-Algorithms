const jobSequencing = (jobs, n) => {
  jobs.sort((a, b) => {
    if (a.profit > b.profit) return -1;
  });
  let maxDeadline = jobs[0].deadline;
  let jobCount = 0;
  let jobProfit = 0;

  for (const job of jobs) {
    maxDeadline = Math.max(maxDeadline, job.deadline);
  }

  const slot = Array.from({ length: maxDeadline }, () => -1);

  for (let i = 0; i < n; i++) {
    for (let j = jobs[i].deadline; j > 0; j--) {
      if (slot[j] === -1) {
        slot[j] = i;
        jobCount++;
        jobProfit += jobs[i].profit;
      }
    }
  }

  return [jobCount, jobProfit];
};

console.log(
  jobSequencing(
    [
      { id: 1, deadline: 4, profit: 20 },
      { id: 2, deadline: 5, profit: 60 },
      { id: 3, deadline: 6, profit: 70 },
      { id: 4, deadline: 6, profit: 65 },
      { id: 5, deadline: 4, profit: 25 },
      { id: 6, deadline: 2, profit: 80 },
      { id: 7, deadline: 2, profit: 10 },
      { id: 8, deadline: 2, profit: 22 },
    ],
    8
  )
);
