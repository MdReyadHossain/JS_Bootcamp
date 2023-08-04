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

    printList() {
        if (!this.head)
            console.log(`This List is empty!`);
        else {
            let current = this.tail;
            let firstNode = current.next;
            current = current.next;
            process.stdout.write("... -> ");
            while (current.next != firstNode) {
                process.stdout.write(current.data + " -> ");
                current = current.next;
            }
            console.log(current.data + " -> ...");
        }

        // console.log(this.head);
        // console.log(this.tail);
    }
}

const list = new CircularList();
list.insertLast(200);
list.insertLast(300);
list.insertFirst(100);

list.printList();
// console.log(list);