// Head <-> 100 <-> 200 <-> 300 <-> 400 <-> 500 <-> 600 <-> Null
class Node {
    constructor(data = null, next = null, previous = null) {
        this.previous = previous;
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
    insertFirst(data) {
        if (!this.head)
            this.head = new Node(data, this.head);

        else {
            let current = this.head;
            let node = new Node(data, current);
            current.previous = node;
            this.head = node;
        }
        this.size++;
    }

    //insert at any index
    insertAt(data, index) {
        let node = new Node(data);
        if (!this.head)
            this.head = node;
        else if (this.size < index || index < 1)
            console.log(`index ${index} is out of bound!`);
        else if (index == 1) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let current = this.head, previous = current, cnt = 1;
            while (current.next) {
                if (cnt == index) {
                    previous.next = node;
                    node.previous = previous;
                    node.next = current;
                    current.previous = node;
                    break;
                }
                previous = current;
                current = current.next;
                cnt++;
            }
        }
        this.size++;
    }

    //insert at last index
    insertLast(data) {
        let node = new Node(data);
        if (!this.head)
            this.head = node;

        else {
            let current = this.head;
            while (current.next)
                current = current.next;

            current.next = node;
            node.previous = current;
        }
        this.size++;
    }

    // get a node
    getNode(index) {
        if (!this.head)
            console.log(`The list is empty!`);
        else if (this.size < index || index < 1)
            console.log(`index ${index} is out of bound!`);
        else {
            let current = this.head, cnt = 1;
            while (cnt < index) {
                current = current.next;
                cnt++;
            }
            console.log(current.data);
        }
    }

    // delete first node
    deleteFirst() {
        if (!this.head)
            console.log(`The list is empty!`);
        else {
            this.head = this.head.next;
            this.head.previous = null;
        }

        this.size--;
    }

    // delete at any node
    deleteAt(index) {
        if (!this.head)
            console.log(`The list is empty!`);
        else if (this.size < index || index < 1)
            console.log(`index ${index} is out of bound!`);
        else {
            let current = this.head, previous = current, cnt = 1;
            while (current.next) {
                if (cnt == index) {
                    if (index == 1) {
                        this.head = current.next;
                        current.next.previous = null;
                    }
                    else {
                        previous.next = current.next;
                        current = current.next;
                        current.previous = previous;
                    }
                    break;
                }
                previous = current;
                current = current.next;
                cnt++;
            }
        }

        this.size--;
    }

    // delete last node
    deleteLast() {
        if (!this.head)
            console.log(`This list is empty!`);
        else {
            let current = this.head, previous = current;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }

        this.size--;
    }

    // print the list 
    printList() {
        let current = this.head;
        process.stdout.write("Head <-> ");
        while (current.next) {
            process.stdout.write(current.data + " <-> ");
            current = current.next;
        }
        console.log(current.data + " <-> Null");
        process.stdout.write("Null <-> ");
        while (current.previous) {
            process.stdout.write(current.data + " <-> ");
            current = current.previous;
        }
        console.log(current.data + " <-> Head");

        console.log("List Size: " + this.size);
    }
}

const list = new LinkedList();
list.insertLast(500);
list.insertFirst(400);
list.insertFirst(300);
list.insertFirst(200);
list.insertFirst(100);
list.insertLast(600);
list.insertAt(900, 2);

list.deleteFirst();
list.deleteAt(3);
list.deleteLast();

list.getNode(2);

list.printList();
// console.log(list);