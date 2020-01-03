
let countingValleys = (n, s) => {
    let level = 0;
    let valley = 0;
    let step = s.split('');
    for ( let i = 0; i < n; i++){
        if(step[i] == "D"){
            level--;
        }else{
            level ++
            if(level == 0){
                valley++;
            }
        }
    }
    return valley;
}
