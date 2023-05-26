//I have used Dynamic programming Approach 

function Solve(arr) {
    const n = arr.length;
    
    const dp = new Array(n).fill(Number.MAX_VALUE); // Here i have created array of n length and i have filled all array values with max values.
   
    dp[0] = 0;                                      //Here i have initilized starting value of array with '0' 
   
//Now in for loop will check next values directly with a privious value in dp array 
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

//Here is updated array of dp 
/**
[ 0, 1, 1, 1.7976931348623157e+308, 1.7976931348623157e+308 ]
[ 0, 1, 1, 1.7976931348623157e+308, 1.7976931348623157e+308 ]
[ 0, 1, 1, 2, 1.7976931348623157e+308 ]
[ 0, 1, 1, 2, 2 ]
[ 0, 1, 1, 2, 2 ]
 */