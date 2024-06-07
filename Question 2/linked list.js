    var head; // head of list

    class Node {
        constructor(x) {
            this.data = x;
            this.next = null;
        }
    }
      function push(new_data) {
var new_node = new Node(new_data);

        new_node.next = head;

        head = new_node;
    }

    function detectLoop(h) {
        var s = new Set();
        while (h != null) {
            if (s.has(h))
                return true;

            // If we are seeing the node for
            // the first time, insert it in hash
            s.add(h);

            h = h.next;
        }

        return false;
    }

    

        push(20);
        push(30);
        push(40);
        push(60);
        push(80);

        head.next.next.next.next = head;

        if (detectLoop(head))
            document.write("Loop Found");
        else
            document.write("No Loop");


