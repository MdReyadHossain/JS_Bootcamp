function bubbleSort(a) {
    let temp, flag = false;
    for (let i = 0; i < a.length - 1; i++) {
        flag = false;
        for (let j = 0; j < a.length - i - 1; j++) {

            if (a[j] > a[j + 1]) {
                temp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = temp;
                flag = true;
            }
        }
        if (!flag)
            break;
    }
    return a;
}

console.log(bubbleSort([7, 6, 5, 4, 3, 2]));

// 3, 2, 6, 1, 7, 4
// 3, 2, 6, 1, 4, 7* // i = 0
// 3, 2, 6, 1, 6*, 7* // i = 1
// 3, 2, 6, 4*, 6*, 7* // i = 2
// 3, 2, 3*, 4*, 6*, 7* // i = 3
// 3, 2*, 3*, 4*, 6*, 7* // i = 4
// 1*, 2*, 3*, 4*, 6*, 7* // i = 5

