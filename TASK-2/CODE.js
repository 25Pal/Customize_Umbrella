// function Solve(arr) {
//     let n = arr.length, cnt = arr[0], ans = 1;
//     for (let i = 1; i < n; i++) {
//         if (cnt == 0) {
//             return -1;
//         }
//         cnt--;
//         cnt = Math.max(cnt, arr[i]);
//         if (i == n - 1) {
//             break;
//         }
//         if (cnt == 0) {
//             cnt = arr[i];
//             ans++;
//         }
//     }
//     return ans;
// }

function Solve(arr) {
    const n = arr.length;
    const dp = new Array(n).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= i + arr[i] && j < n; j++) {
            dp[j] = Math.min(dp[j], dp[i] + 1);
        }
    }
    if (dp[n - 1] == Number.MAX_VALUE) {
        return -1;
    }
    return dp[n - 1];
}
// const arr = [2, 1, 2, 3, 1];
// console.log(Solve(arr));

const arr = [2,1,2,3,1];
console.log(Solve(arr));