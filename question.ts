// 吉田マット
// フルスタックが出来るフロントエンジニア

//function
const isTimeWithinRange = (time: number, scope: number[]) => {

    //終了時刻は開始時刻よりも大きい
    if (scope[0] <= scope[1]) { 
        return time >= scope[0] && time < scope[1];
    } 
    //開始時刻は終了時刻よりも大きい
    else {
        return time >= scope[0] || time < scope[1];
    }
}

//execute
console.log('開始時刻よりも大きいが終了時刻よりも小さい',isTimeWithinRange(6, [5, 10]));  // true
console.log('開始時刻と同じ場合',isTimeWithinRange(8, [8, 10])); // true
console.log('終了時刻と同じ場合',isTimeWithinRange(5, [3, 5]));  // false
console.log('開始時刻が22時で終了時刻が5時、というような指定をされても動作すること',isTimeWithinRange(3, [22, 5])); // true