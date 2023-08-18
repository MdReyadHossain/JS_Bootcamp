class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class CircularList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    // insert at first 
    insertFirst(data) {
        let current = this.head;
        if (!this.head) {
            current = new Node(data);
            this.head = current;
            this.tail = current;
            current.next = this.head;
        }
        else {
            let last = this.tail;
            last.next = new Node(data, this.head);
            this.head = last.next;
        }
        this.size++;
    }

    // insert at any index
    insertAt(data, index) {
        let current = this.head, last = this.tail;
        if (!this.head)
            this.insertFirst(data);

        else if (index > this.size + 1 || index < 1)
            console.log(`index ${index} is out of bound!`);

        else {
            let previous = last.next, cnt = 1;
            current = last.next;
            if (index == 1) {
                last.next = new Node(data, current);
                this.head = last.next;
            }
            else {
                while (current.next != this.head) {
                    if (cnt == index) {
                        previous.next = new Node(data, current);
                        break;
                    }
                    previous = current;
                    current = current.next;
                    cnt++;
                }
                if (index == this.size) {
                    let node = new Node(data, current);
                    previous.next = node;
                }
                else {
                    let node = new Node(data, this.head);
                    current.next = node;
                    this.tail = node;
                }
            }
            this.size++;
        }
    }

    // insert at last
    insertLast(data) {
        let current = this.head;
        if (!this.head) {
            this.head = new Node(data);
            current = this.head;
        }

        else {
            let last = this.tail;
            current = last.next;
            while (current.next != this.head)
                current = current.next;

            current.next = new Node(data);
            current = current.next;
        }
        this.tail = current;
        current.next = this.head;
        this.size++;
    }

    // remove first node
    removeFirst() {
        if (!this.head)
            console.log(`The list is empty!`);

        else {
            if (this.size == 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.tail.next = this.head;
            }
            this.size--;
        }
    }

    // revome from any index
    removeAt(index) {
        if (!this.head)
            console.log(`The list is empty!`);

        else if (index < 1 || index > this.size)
            console.log(`index ${index} is out of bound!`);

        else {
            let current = this.head, previous = current, cnt = 1;
            if (index == 1) {
                this.tail.next = this.head.next;
                this.head = this.head.next;
            }
            else {
                while (current.next != this.head) {
                    if (cnt == index) {
                        previous.next = current.next;
                        break;
                    }
                    previous = current;
                    current = current.next;
                    cnt++;
                }
                if (index == this.size) {
                    previous.next = current.next;
                    this.tail = previous;
                }
            }
            this.size--;
        }
    }

    // remove last node 
    removeLast() {
        if (!this.head)
            console.log(`The list is empty!`);

        else {
            let current = this.head;
            if (this.size == 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                while (current.next != this.tail) {
                    current = current.next;
                }
                this.tail = current;
                current.next = this.head;
            }
            this.size--;
        }
    }

    // get a data 
    getData(index) {
        if (!this.head)
            console.log(`The list is empty!`);

        else if (index < 1 || index > this.size)
            console.log(`index ${index} is out of bound!`);

        else {
            let current = this.head, cnt = 1;
            while (current.next != this.head) {
                if (cnt == index)
                    break;

                current = current.next;
                cnt++;
            }
            console.log(current.data);
        }
    }

    // show the list 
    printList() {
        if (!this.head)
            console.log(`The List is empty!`);
        else {
            let current = this.tail;
            current = current.next;
            process.stdout.write("... -> ");
            while (current.next != this.head) {
                process.stdout.write(current.data + " -> ");
                current = current.next;
            }
            console.log(current.data + " -> ...");
        }

        // console.log(this.head);
        // console.log(this.tail);
        console.log(`List Size: ${this.size}`);
    }
}

const list = new CircularList();
list.insertLast(200);
list.insertLast(400);
list.insertLast(500);
list.insertFirst(100);
// list.insertAt(300, 4);

list.printList();

list.getData(2);
// list.removeAt(4);
// list.removeLast();

// list.printList();
// console.log(list);