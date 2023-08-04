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

    // swap two nodes (index1 < index2)
    /*
    * index2 == this.size // last node                  
    * index1 == 1 // first node                         
    * index1 == (index2 - 1) // no nodes are in between x
    */
    swapNode(index1, index2) {
        if (index1 > index2)
            console.log(`index1 must be less than index2!`);
        else if (index1 < 1 || index2 > this.size)
            console.log(`index(s) out of bound!`);
        else {
            let currentX = this.head, currentY = this.head, cnt = 1;
            let previousX = currentX, previousY = currentY;
            let nextY = null;
            while (cnt <= this.size) {
                if (cnt < index1) {
                    previousX = currentX;
                    currentX = currentX.next;
                }

                if (cnt < index2) {
                    previousY = currentY;
                    currentY = currentY.next;
                }
                cnt++;
            }

            if (index2 != this.size) {
                nextY = currentY.next;
                nextY.previous = currentX;
            }

            if (index1 == 1) {
                this.head = currentY;
                currentY.previous = null;
            }
            else {
                previousX.next = currentY;
                currentY.previous = previousX;
            }

            if (index1 == index2 - 1) {
                currentY.next = currentX;
                currentX.previous = currentY;
            }
            else {
                currentY.next = currentX.next;
                previousY.next = currentX;
                currentX.next.previous = currentY;
                currentX.previous = previousY;
            }
            currentX.next = nextY;
        }
    }

    // reverse list
    reverselist() {
        if (!this.head)
            console.log("The list is empty!");
        else {
            let current = this.head, previous = null, nextCurr = current.next;
            while (current.next) {
                current.next = previous;
                current.previous = nextCurr;
                previous = current;
                current = nextCurr;
                nextCurr = nextCurr.next;
            }
            current.next = previous;
            current.previous = null;
            this.head = current;
        }
    }

    // print the list 
    printList() {
        let current = this.head;
        process.stdout.write("Head -> ");
        while (current.next) {
            process.stdout.write(current.data + " <-> ");
            current = current.next;
        }
        console.log(current.data + " -> Null");
        process.stdout.write("Null <- ");
        while (current.previous) {
            process.stdout.write(current.data + " <-> ");
            current = current.previous;
        }
        console.log(current.data + " <- Head");

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

// list.deleteFirst();
// list.deleteAt(3);
// list.deleteLast();

// list.getNode(2);

list.printList();

// list.swapNode(1, 2);
list.reverselist();

list.printList();
// console.log(list);
