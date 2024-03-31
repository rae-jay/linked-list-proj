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
                // if we're at second-to-last, OR only one remains
                if(current.next == fullList.tail || fullList.tail == fullList.head){
                    popped = fullList.tail;
                    current.next = null;

                    // if there was only one node left
                    if(popped == fullList.head){
                        fullList.head = null;
                        fullList.tail = null;
                    }
                    else{
                        fullList.tail = current;
                    }
                }
                else{
                    secondToLast(current.next);
                }
            }
        }

        secondToLast(this.head);

        return popped;
    }

    contains(value){
        let found = false;

        function searchValue(current){
            if(current){
                if(current.value == value){
                    found = true;
                }
                else{
                    searchValue(current.next);
                }
            }
        }
        searchValue(this.head);

        return found;
    }

    at(index){
        let node = null;

        function checkIndex(current){
            if(current){
                if(index == 0){
                    node = current;
                }
                else{
                    index -= 1;
                    checkIndex(current.next);
                }
            }
        }
        checkIndex(this.head);

        return node;
    }

    find(value){
        let index = 0;
        let success = false;

        function checkValue(current){
            if(current){
                if(current.value == value){
                    success = true;
                }
                else{
                    index += 1;
                    checkValue(current.next);
                }
            }
        }
        checkValue(this.head);

        if(success == true){
            return index;
        }
        else{
            return null;
        }
    }

}


const testList = new LinkedList();

testList.append('one');
testList.append('two');
testList.append('three');
testList.prepend('zero');

testList.toString();
testList.size();

// testList.pop();
// testList.toString();
// testList.size();
// testList.pop();
// testList.toString();
// testList.append('hi');
// testList.toString();
// testList.pop();
// testList.toString();
// testList.pop();
// testList.toString();
// testList.pop();
// testList.toString();

// console.log(testList.contains('hi'));
// console.log(testList.contains('three'));

// console.log(testList.at(0));
// console.log(testList.at(3));
// console.log(testList.at(7));

// console.log(testList.find('two'));
// console.log(testList.find('potato'));





/*

insertAt(value, index) - create new node and insert at given index
removeAt(index) remove node at given index
*/