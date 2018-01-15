/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 //Recursion Solution
var mergeTwoLists = function(l1, l2) {
    if (l1 === null || l2 === null) {
        return l1 || l2;
    }
    if (l1.val <= l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

//iteration Solution
var mergeTwoLists = function(l1, l2) {
    var res = new ListNode(0);
    var cur = res
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val){
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 || l2;
    return res.next;
};
