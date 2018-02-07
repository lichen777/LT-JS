https://leetcode.com/problems/merge-k-sorted-lists/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var len = lists.length
    if (len === 0) {
        return null
    }
    if (len === 1) {
        return lists[0]
    }
    var mid = Math.floor(len / 2)
    var left = lists.splice(0, mid)
    var right = lists
    return mergeTwoLists(mergeKLists(left), mergeKLists(right))
};

var mergeTwoLists = function (a, b) {
    if (a === null || b === null) {
        return a || b
    }
    if (a.val <= b.val) {
        a.next = mergeTwoLists(a.next, b)
        return a
    }else {
        b.next = mergeTwoLists(a, b.next)
        return b
    }
};
