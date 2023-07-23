const node1 = {
    data: "Bappi",
    next: null,
}

const node2 = {
    data: "Athoy",
    next: node1
}

const node3 = {
    data: "Sumon",
    next: null
}

node2.next = node3;

node3.next = node1;

console.log(node3);

// 2 -> 3 -> 7 -> 5 -> 8
//        