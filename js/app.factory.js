angular.module('Game.factory', ['ionic'])
    .factory('questions', function(queueQuestion, stackQuestion) {
        return function() {
            return {
                queue: queueQuestion,
                stack: stackQuestion
            };
        }
    })
    .factory('stackQuestion', function() {
        return {
            1: [{
                    question: "Which of the following statement(s) about stack data structure is/are NOT correct",
                    options: [{
                            label: "Linked List are used for implementing Stacks",
                            value: 'a'
                        },
                        {
                            label: "Top of the Stack always contain the new node",
                            value: 'b'
                        },
                        {
                            label: "Stack is the LIFO data structure",
                            value: 'c'
                        },
                        {
                            label: "Null link is present in the last node at the bottom of the stack",
                            value: 'd'
                        }
                    ],
                    answer: "c"
                },
                {
                    question: "Consider the following operation performed on a stack of size 5.  Push(1); Pop(); Push(2); Push(3); Pop(); Push(4); Pop(); Pop(); Push(5); After the completion of all operation, the number of elements present in stack are",
                    options: [{
                            label: "1",
                            value: 'a'
                        },
                        {
                            label: "2",
                            value: 'b'
                        },
                        {
                            label: "3",
                            value: 'c'
                        },
                        {
                            label: "4",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },
                {
                    question: "If the elements “A”, “B”, “C” and “D” are placed in a stack and are deleted one at a time , what is the order of removal?",
                    options: [{
                            label: "ABCD",
                            value: 'a'
                        },
                        {
                            label: "DCBA",
                            value: 'b'
                        },
                        {
                            label: "DCAB",
                            value: 'c'
                        },
                        {
                            label: "ABDC",
                            value: 'd'
                        }
                    ],
                    answer: "b"
                },
                {
                    question: "The data structure required to check whether an expression contains balanced parenthesis is?",
                    options: [{
                            label: "Stack",
                            value: 'a'
                        },
                        {
                            label: "Queue",
                            value: 'b'
                        },
                        {
                            label: "Array",
                            value: 'c'
                        },
                        {
                            label: "Tree",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },
                {
                    question: "Process of inserting an element in stack is called ____________",
                    options: [{
                            label: "Create",
                            value: 'a'
                        },
                        {
                            label: "Push",
                            value: 'b'
                        },
                        {
                            label: "Evaluation",
                            value: 'c'
                        },
                        {
                            label: "Pop",
                            value: 'd'
                        }
                    ],
                    answer: "b"
                },

            ],
            2: [{
                    question: "Process of removing an element from stack is called __________",
                    options: [{
                            label: "Create",
                            value: 'a'
                        },
                        {
                            label: "Push",
                            value: 'b'
                        },
                        {
                            label: "Evaluation",
                            value: 'c'
                        },
                        {
                            label: "Pop",
                            value: 'd'
                        }
                    ],
                    answer: "d"
                },
                {
                    question: "In a stack, if a user tries to remove an element from empty stack it is called _________",
                    options: [{
                            label: "Underflow",
                            value: 'a'
                        },
                        {
                            label: "Empty collection",
                            value: 'b'
                        },
                        {
                            label: "Overflow",
                            value: 'c'
                        },
                        {
                            label: "Garbage Collection",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },
                {
                    question: "Pushing an element into stack already having five elements and stack size of 5 , then stack becomes",
                    options: [{
                            label: "Overflow",
                            value: 'a'
                        },
                        {
                            label: "Crash",
                            value: 'b'
                        },
                        {
                            label: "Underflow",
                            value: 'c'
                        },
                        {
                            label: "User flow",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },
                {
                    question: "Which of the following applications may use a stack?",
                    options: [{
                            label: "A parentheses balancing program",
                            value: 'a'
                        },
                        {
                            label: "Tracking of local variables at run time",
                            value: 'b'
                        },
                        {
                            label: "Compiler Syntax Analyzer",
                            value: 'c'
                        },
                        {
                            label: "All of the mentioned",
                            value: 'd'
                        }
                    ],
                    answer: "d"
                },
                {
                    question: "Entries in a stack are “ordered”. What is the meaning of this statement?",
                    options: [{
                            label: "A collection of stacks is sortable",
                            value: 'a'
                        },
                        {
                            label: "Stack entries may be compared with the ‘<‘ operation",
                            value: 'b'
                        },
                        {
                            label: "There is a Sequential entry that is one by one",
                            value: 'c'
                        },
                        {
                            label: "The entries are stored in a linked list",
                            value: 'd'
                        }
                    ],
                    answer: "c"
                },
            ],
            3: [{
                    question: "What is the result of the following operation   Top (Push (S, X))",
                    options: [{
                            label: "X",
                            value: 'a'
                        },
                        {
                            label: "Null",
                            value: 'b'
                        },
                        {
                            label: "S",
                            value: 'c'
                        },
                        {
                            label: "None of the mentioned",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },
                {
                    question: "Which of the following is true about linked list implementation of stack",
                    options: [{
                            label: "In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from end.",
                            value: 'a'
                        },
                        {
                            label: "in push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning.",
                            value: 'b'
                        },
                        {
                            label: "Both of the above",
                            value: 'c'
                        },
                        {
                            label: "None of the above",
                            value: 'd'
                        }
                    ],
                    answer: "d"
                },
                // {
                //     question: "",
                //     options: [{
                //             label: "",
                //             value: 'a'
                //         },
                //         {
                //             label: "",
                //             value: 'b'
                //         },
                //         {
                //             label: "",
                //             value: 'c'
                //         },
                //         {
                //             label: "",
                //             value: 'd'
                //         }
                //     ],
                //     answer: "a"
                // },
                // {
                //     question: "",
                //     options: [{
                //             label: "",
                //             value: 'a'
                //         },
                //         {
                //             label: "",
                //             value: 'b'
                //         },
                //         {
                //             label: "",
                //             value: 'c'
                //         },
                //         {
                //             label: "",
                //             value: 'd'
                //         }
                //     ],
                //     answer: "a"
                // },
                // {
                //     question: "",
                //     options: [{
                //             label: "",
                //             value: 'a'
                //         },
                //         {
                //             label: "",
                //             value: 'b'
                //         },
                //         {
                //             label: "",
                //             value: 'c'
                //         },
                //         {
                //             label: "",
                //             value: 'd'
                //         }
                //     ],
                //     answer: "a"
                // },
            ]
        };
    })
    .factory('queueQuestion', function() {
        return {
            1: [
            	{
                    question: "A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as a ?",
                    options: [{
                            label: "Queue",
                            value: 'a'
                        },
                        {
                            label: "Stack",
                            value: 'b'
                        },
                        {
                            label: "Tree",
                            value: 'c'
                        },
                        {
                            label: "Linked list",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },
                {
                    question: "the data structure required for Breadth First Traversal on a graph is?",
                    options: [{
                            label: "Stack",
                            value: 'a'
                        },
                        {
                            label: "Array",
                            value: 'b'
                        },
                        {
                            label: "Queue",
                            value: 'c'
                        },
                        {
                            label: "Tree",
                            value: 'd'
                        }
                    ],
                    answer: "c"
                },
                {
                    question: "A queue is a?",
                    options: [{
                            label: "FIFO (FirstIn First Out) ",
                            value: 'a'
                        },
                        {
                            label: "LIFO (LastIn First Out) ",
                            value: 'b'
                        },
                        {
                            label: "Ordered array",
                            value: 'c'
                        },
                        {
                            label: "Lineartree",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },
                {
                    question: "InBreadthFirst Searchof Graph, which of the following data structure is used? ",
                    options: [{
                            label: "Stack ",
                            value: 'a'
                        },
                        {
                            label: "Queue ",
                            value: 'b'
                        },
                        {
                            label: "Linked list",
                            value: 'c'
                        },
                        {
                            label: "None of the mentioned answer",
                            value: 'd'
                        }
                    ],
                    answer: "b"
                },
                {
                    question: "If the elements “A”, “B”, “C” and “D” are placed in a queue and are deleted one at a time, in what order will they be removed?",
                    options: [{
                            label: "ABCD",
                            value: 'a'
                        },
                        {
                            label: "DCBA",
                            value: 'b'
                        },
                        {
                            label: "DCAB",
                            value: 'c'
                        },
                        {
                            label: "ABDC",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },
            ],
            2: [
            	{
                    question: "A data structure in which elements can be inserted or deleted at/from both the ends but not in the middle is?",
                    options: [{
                            label: "dequeue",
                            value: 'a'
                        },
                        {
                            label: "Circular queue",
                            value: 'b'
                        },
                        {
                            label: "queue",
                            value: 'c'
                        },
                        {
                            label: "Priority queue",
                            value: 'd'
                        }
                    ],
                    answer: "c"
                },
                {
                    question: "A normal queue, if implemented using an array of size MAX_SIZE, gets full when",
                    options: [{
                            label: "Rear = front",
                            value: 'a'
                        },
                        {
                            label: "Front = (rear + 1)mod MAX_SIZE",
                            value: 'b'
                        },
                        {
                            label: "Front = rear + 1",
                            value: 'c'
                        },
                        {
                            label: "Rear = max_size - 1",
                            value: 'd'
                        }
                    ],
                    answer: "d"
                },
                {
                    question: "Queues serve major role in",
                    options: [{
                            label: "Simulation of recursion",
                            value: 'a'
                        },
                        {
                            label: "Simulation of arbitrary linked list",
                            value: 'b'
                        },
                        {
                            label: "Simulation of limited resource allocation",
                            value: 'c'
                        },
                        {
                            label: "All of the mentioned",
                            value: 'd'
                        }
                    ],
                    answer: "c"
                },
                {
                    question: "Which of the following is not the type of queue?",
                    options: [{
                            label: "Ordinary queue",
                            value: 'a'
                        },
                        {
                            label: "Single ended queue",
                            value: 'b'
                        },
                        {
                            label: "Circular queue",
                            value: 'c'
                        },
                        {
                            label: "Priority queue",
                            value: 'd'
                        }
                    ],
                    answer: "b"
                },
                {
                    question: "Which  one  of  the  following  is  an  application of  Queue  Data  Structure? ",
                    options: [{
                            label: "When a  resource  is  shared  among  multiple  consumers. ",
                            value: 'a'
                        },
                        {
                            label: "When data is  transferred  asynchronously  (data not  necessarily  received  at  same  rate  as  sent) between  two  processes ",
                            value: 'b'
                        },
                        {
                            label: "Load  Balancing ",
                            value: 'c'
                        },
                        {
                            label: "All  of  the  above ",
                            value: 'd'
                        }
                    ],
                    answer: "d"
                },

            ],
            3: [
            	{
                    question: "Which  one  of  the  following  is  an  application of  Queue  Data  Structure? ",
                    options: [{
                            label: "When  a  resource  is  shared  among  multiple  consumers.",
                            value: 'a'
                        },
                        {
                            label: "When data is  transferred  asynchronously  (data  not  necessarily  received  at  same  rate  as  sent) between  two  processes",
                            value: 'b'
                        },
                        {
                            label: "Load  Balancing ",
                            value: 'c'
                        },
                        {
                            label: "All  the  above",
                            value: 'd'
                        }
                    ],
                    answer: "d"
                },
                {
                    question: "Given an empty queue Q, what does it look like after the following operations? Q.enqueue(5) Q.enqueue(2) Q.dequeue() Q.enqueue(3) Q.dequeue()",
                    options: [{
                            label: "3",
                            value: 'a'
                        },
                        {
                            label: "5",
                            value: 'b'
                        },
                        {
                            label: "9",
                            value: 'c'
                        },
                        {
                            label: "none of the above",
                            value: 'd'
                        }
                    ],
                    answer: "b"
                },
                {
                    question: "Queue is best characterized as",
                    options: [{
                            label: "Last In First Out",
                            value: 'a'
                        },
                        {
                            label: "First In Last Out",
                            value: 'b'
                        },
                        {
                            label: "First In First Out",
                            value: 'c'
                        },
                        {
                            label: "None of the above",
                            value: 'd'
                        }
                    ],
                    answer: "c"
                },
                /*{
                    question: "",
                    options: [{
                            label: "",
                            value: 'a'
                        },
                        {
                            label: "",
                            value: 'b'
                        },
                        {
                            label: "",
                            value: 'c'
                        },
                        {
                            label: "",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },
                {
                    question: "",
                    options: [{
                            label: "",
                            value: 'a'
                        },
                        {
                            label: "",
                            value: 'b'
                        },
                        {
                            label: "",
                            value: 'c'
                        },
                        {
                            label: "",
                            value: 'd'
                        }
                    ],
                    answer: "a"
                },*/

            ]
        };
    })
    .factory('QuestionData',function(){
    	var store;
    	return {
    		save:function(data){
    			store=data
    		},
    		get:function(){
    			return store;
    		}
    	}
    })