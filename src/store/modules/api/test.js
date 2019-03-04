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
function ListNode (val, nextListNode) {
    this.val = val
    // if (val >= 10) {
    //   val -= 10
    //   if (nextListNode) {
    //     nextListNode.val += 1
    //   } else {
    //     nextListNode = new ListNode(1, null)
    //   }
    // }
    // Object.defineProperty(this, "val", {
    //   set(value) {
    //     if (value >= 10) {
    //       val = value - 10
    //       if (this.next) {
    //         this.next.val += 1
    //       } else {
    //         this.next = new ListNode(1, null)
    //       }
    //     } else {
    //       val = value
    //     }
    //   },
    //   get() {
    //     return val;
    //   }
    // })
    this.next = nextListNode
}
// function reverseLinkedList (listNode, previousNode = null) {
//   if (listNode === null) {
//     return listNode
//   }
//   else if (listNode.next) {
//     let nextNode = listNode.next
//     listNode.next = previousNode
//     return reverseLinkedList(nextNode, listNode)
//   } else {
//     listNode.next = previousNode
//     return listNode
//   }
// }
function mergeList (l1, l2) {
    if (l1 && l2) {
        val = l1.val + l2.val
        if (进位值) {
            val += 进位值
        } else {
            var 进位值 = 0
        }
        if (val >= 10) {
            val -= 10
            var 进位值 = 1
        } else {
            var 进位值 = 0
        }
        return new ListNode(
            val,
            mergeList(l1.next, l2.next, 进位值)
        )
    } else if (l1 || l2) {
        return l1 ? new ListNode(l1.val + val, mergeList(l1.next)) : new ListNode(l2.val, mergeList(l2.next))
    } else {
        return null
    }
};

var addTwoNumbers = (l1, l2) => mergeList(l1, l2)
