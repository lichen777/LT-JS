https://leetcode.com/problems/add-two-numbers/description/
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
var addTwoNumbers = function(l1, l2) {
    if (l1 === null || l2 === null) {
        return l1 || l2;
    }
    
    var carry = 0;
    var result = new ListNode(0);
    var cur = result;
    while (l1 || l2){
        var val1 = l1 === null ? 0 : l1.val;
        var val2 = l2 === null ? 0 : l2.val;
        var value = ( val1 + val2 + carry ) % 10;
        cur.next = new ListNode(value);
        carry = parseInt ( ( val1 + val2 + carry ) / 10 );
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
        cur = cur.next;
    }
    if (carry > 0) {
        cur.next = new ListNode(1)
    }
    return result.next;
};
