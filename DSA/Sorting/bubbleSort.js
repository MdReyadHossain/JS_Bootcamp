function bubbleSort(a) {
    let temp, flag = false;
    for (let i = 0; i < a.length; i++) {
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

console.log(bubbleSort([3, 2, 6, 1, 7, 4]));

// 3, 2, 6, 1, 7, 4
