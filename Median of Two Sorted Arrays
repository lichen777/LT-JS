/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len = nums1.length + nums2.length;
    if (len % 2 == 1) {
        return findKth (nums1, 0, nums2, 0, (len + 1) / 2 );
    } else {
        return ( findKth (nums1, 0, nums2, 0, len / 2) + findKth (nums1, 0, nums2, 0, len / 2 + 1) ) / 2;
    }
};

var findKth = function(A, startA, B, startB, k) {
    if (startA >= A.length) {
        return B[startB + k - 1];
    }
    if (startB >= B.length) {
        return A[startA + k - 1];
    }
    if (k == 1) {
        return Math.min(A[startA], B[startB]);
    }

    var valueA = startA + parseInt(k / 2) - 1 < A.length
        ? A[startA + parseInt(k / 2) - 1]
        : Number.MAX_VALUE;
    var valueB = startB + parseInt(k / 2) - 1 < B.length
        ? B[startB + parseInt(k / 2) - 1]
        : Number.MAX_VALUE;

    if (valueA < valueB) {
        return findKth (A, startA + parseInt(k / 2), B, startB, k - parseInt(k / 2) );
    } else {
        return findKth (A, startA, B, startB + parseInt(k / 2), k - parseInt(k / 2) );
    }
};
