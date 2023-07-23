// head -> 100 | o -> 200 | o -> 300 | o -> Null

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at first index
    insertfirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // insert at between
    insertAt(data, index) {
        if (index > this.size || index < 1) {
            console.log(`index ${index} is out of bound!`);
            return;
        }

        if (index == 1) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        } else {
            const node = new Node(data);
            let current, previous, cnt = 1;
            current = this.head;

            while (cnt < index) {
                previous = current; // current node will replace to previous
                current = current.next; // the next node will replace to current
                cnt++;
            }

            node.next = current;
            previous.next = node;
            this.size++;
        }
    }

    // insert at last index
    insertLast(data) {
        const node = new Node(data);
        let current = this.head;
        if (!this.head) {
            this.head = node;
        }
        else {
            while (current.next)
                current = current.next;

            current.next = node;
        }
        this.size++;
    }

    // update at any index
    updateDataAt(data, index) {
        let current = this.head, cnt = 1;
        if (!this.head) {
            console.log(`indext ${index} is out of bound`);
        } else {
            while (cnt < index) {
                current = current.next;
                cnt++;
            }
            current.data = data;
        }
    }

    // delete first node 
    deletefirst() {
        if (!this.head) {
            console.log("List is Empty");
        } else {
            this.head = this.head.next;
            this.size--;
        }
    }

    //delete at between
    deleteAt(index) {
        if (!this.head) {
            console.log("List is Empty");
            return;
        }
        else if (index > this.size || index < 1) {
            console.log(`index ${index} is out of bound`);
            return;
        }

        if (index == 1) {
            this.head = this.head.next;
            this.size--;
        }
        else {
            let current = this.head, cnt = 1;
            let previous = current;
            while (cnt < index) {
                previous = current;
                current = current.next;
                cnt++;
            }
            previous.next = current.next;
            this.size--;
        }
    }

    // delete last node
    deletelast() {
        if (!this.head) {
            console.log("List is Empty");
        } else {
            let current = this.head, previous;
            while (current.next) {
                previous = current;
                current = current.next;
            }

            previous.next = null;
            this.size--;
        }
    }

    // Get a data
    getSingleData(index) {
        let current = this.head, cnt = 1;
        if (!this.head || index > this.size || index < 1)
            console.log(`index ${index} is out of bound`);
        else {
            while (cnt < index) {
                current = current.next;
                cnt++;
            }

            console.log(current.data);
        }
    }

    // display the list
    printList() {
        let current = this.head;
        if (!this.head) {
            console.log("Head -> Null");
        }
        else {
            process.stdout.write("Head -> ");
            while (current.next) {
                process.stdout.write(current.data + " -> ");
                current = current.next;
            }
            console.log(current.data + " -> Null");
        }
    }
}

const list = new LinkedList();
list.insertLast(200);
list.insertLast(100);
list.insertLast(300);

list.insertfirst(400);
list.insertAt(500, 2);
list.insertAt(600, 1);

list.updateDataAt(900, 2);

list.deletelast();
list.deleteAt(6);

list.printList();
list.getSingleData(2);

console.log(list);
// console.log(list.head);
