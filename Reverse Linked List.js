https://leetcode.com/problems/reverse-linked-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
 //iterative solution, I prefer this way.
 
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    var dummy = new ListNode(0);
    var res = dummy.next;
    while (head !== null) {
        var next = head.next;
        head.next = res;
        res = head;
        head = next;
    }
    return res;
};

//recursive solution

var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    var res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
};
