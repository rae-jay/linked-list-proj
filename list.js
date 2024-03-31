console.log('working test');

class ListNode{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}


class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    head(){
        return this.head;
    }
    tail(){
        return this.tail;
    }


    #firstNodeCheck(newNode){
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
            return true;
        }
        return false;
    }

    append(value){
        let newNode = new ListNode(value);

        if(this.#firstNodeCheck(newNode) == false){
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
    }

    prepend(value){
        let newNode = new ListNode(value);

        if(this.#firstNodeCheck(newNode) == false){ 
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    

    toString(){
        let outText = '';

        function printAll(current){
            if(!current){
                outText += 'null';
            }
            else{
                outText += `${current.value} -> `;
                printAll(current.next);
            }
        };

        printAll(this.head);


        console.log(outText);
    }


    size(){
        let count = 0;

        function countAll(current){
            if(current){
                count += 1;
                countAll(current.next);
            }
        }

        countAll(this.head);

        console.log('total count: ' + count);
        return count;
    }


    pop(){
        // if i don't seperate out 'fullList' we get a 'this' problem in secondToLast so...
        let fullList = this;
        let popped = null;
        

        function secondToLast(current){
            if(current){
                // if(current.next == fullList.tail || fullList.tail == fullList.head){
                //     popped = fullList.tail;
                //     current.next = null;

                //     if(current.next == fullList.tail){
                //         fullList.tail = current;
                //     }
                //     else{
                //         // fullList.head = null;
                //         // fullList.tail = null;
                //     }
                // }
                // else{
                //     secondToLast(current.next);
                // }

                if(current.next == fullList.tail){
                    popped = fullList.tail;
                    current.next = null;
                    fullList.tail = current;
                }
                else{
                    secondToLast(current.next);
                }
            }
        }

        secondToLast(this.head);

        return popped;
    }

}


const testList = new LinkedList();

testList.append('one');
testList.append('two');
testList.append('three');
testList.prepend('zero');

testList.toString();
testList.size();

testList.pop();
testList.toString();
testList.size();
testList.pop();
testList.toString();
testList.pop();
testList.toString();
testList.pop();
testList.toString();
testList.pop();
testList.toString();





/*
at(index) - return node at given index
pop - remove last node
contains(value) - return true/false if node with 'value' is present in list
find(value) - return index of node with value (or null if not present)

insertAt(value, index) - create new node and insert at given index
removeAt(index) remove node at given index
*/