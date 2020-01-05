function hourglassSum(arr) {
    let maxSum= -63;
for(let r = 0; r<=arr.length-3; r++){
    for (let c = 0 ; c<= arr.length-3; c++){
        let sum = 0
        sum += arr[r][c]
        sum += arr[r][c+1]
        sum += arr[r][c+2]
        sum += arr[r+1][c+1]
        sum += arr[r+2][c]
        sum += arr[r+2][c+1]
        sum += arr[r+2][c+2]
        if (sum > maxSum){
        maxSum = sum
        }
    }
}
return maxSum
}