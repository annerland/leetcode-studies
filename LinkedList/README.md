# Linked List

## Singly Linked List

![image](https://github.com/user-attachments/assets/d6f3f307-18bb-4d43-9d37-2ca5b8600a8b)

## Doubly Linked List

![image](https://github.com/user-attachments/assets/f65bd661-64ba-450a-8def-d7a2c3a129cc)


The image seems self-explanatory, buuuuuuut... It is even more than that!

Linked lists could be an alternative to arrays, but why exactly it would be better than it?

Of course the answer is **IT DEPENDS**, but let's first see some of the differences between them:

### Arrays
- **Fixed Size**: Traditional arrays have a fixed size defined at the time of their creation. Resizing an array (e.g., increasing its capacity) typically involves creating a new array and copying all elements, which can be inefficient.
- **Dynamic Arrays**: While some languages offer dynamic arrays (like Python’s lists or Javascript’s ArrayList), they still handle resizing behind the scenes, which can incur performance overhead.
- **Insertion/Deletion Cost**: Adding or removing elements, especially in the middle of the array, requires shifting subsequent elements, leading to O(n) time complexity for these operations.
- **Contiguous Memory**: Arrays require contiguous memory blocks, which can be a limitation in systems with fragmented memory or when dealing with very large datasets.

### Linked Lists
- **Dynamic Size**: Linked lists can easily grow and shrink by adding or removing nodes without the need to allocate or deallocate large blocks of memory.
- **Efficient Memory Usage**: They use memory more efficiently when the number of elements fluctuates frequently.
- **Constant Time Operations**: Once you have a reference to the node (e.g., during traversal), inserting or deleting a node can be done in O(1) ~~(but sometimes it depends haha)~~ time by adjusting the pointers.
- **No Shifting Needed**: There's no need to shift elements, making linked lists more efficient for frequent insertions and deletions.

So, now you might be thinking - "This sounds so much better, why not apply it to every situation?"

![image](https://github.com/user-attachments/assets/7e7e599e-ba79-485a-b285-af19285d7b79)

hmm... Actually

Stick with arrays unless you have a specific reason to use a linked list (like constant insertions/deletions).
Arrays are fast, flexible, and optimized for most cases. 

If you need a linked list, you’ll have to implement it manually, which adds complexity you might not need.

In short, arrays are your go-to in most situations, and linked lists are for special cases!








