class Node{
    constructor(val, left=null, right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(root=null){
        this.root = root;
    }

    insert(val){
        if(this.root === null){
            this.root = new Node(val);
            return this;
        }

        let curr = this.root;
        while(true){
            if(val < curr.val){
                if(curr.left === null){
                    curr.left = new Node(val);
                    return this;
                } else {
                    curr = curr.left;
                }
            } else if (val > curr.val){
                if(curr.right === null){
                    curr.right = new Node(val);
                    return this;
                } else {
                    curr = curr.right;
                }
            }
        }
    }

    insertRecursively(val, curr = this.root){
        if(this.root === null){
            this.root = new Node(val);
            return this;
        }

        if(val < curr.val){
            if(curr.left === null){
                curr.left = new Node(val);
                return this;
            } this.insertRecursively(val, curr.left)
        } else {
            if(curr.right === null){
                curr.right = new Node(val);
                return this;
            } this.insertRecursively(val, curr.right);
        }
    }

    find(val){
        let currNode = this.root;
        let found = false;
        if(val == currNode.val) currNode;

        while(currNode && !found){
            if(val < currNode.val){
                currNode = currNode.left;
            } else if (val > currNode.val){
                currNode = currNode.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return currNode;
    }

    findRecursively(val, curr = this.root){
        if(this.root === null) undefined;

        if (val < curr.val){
            if(curr.left === null) return undefined;
            return this.findRecursively(val, curr.left);
        } else if (val > curr.val){
            if (curr.right === null) return undefined;
            return this.findRecursively(val, curr.right);
        } return current;
    }

    dfsPreOrder(){
        let data = [];
        let curr = this.root;

        function traverse(node){
            data.push(node.val);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }

        traverse(curr);
        return data;
    }

    dfsPostOrder(){
        let data = [];
        let curr = this.root;

        function traverse(node){
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            data.push(node.val);
        }
        traverse(curr);
        return data;
    }

    bfs(){
        let node = this.root;
        let queue = [];
        let data = [];

        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if (node.left){
                queue.push(node.left);
            }
            if (node.right){
                queue.push(node.right);
            }
        }
        return data;
    }
}