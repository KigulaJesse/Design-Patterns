"use strict";
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addNode(node) {
        this.adjacencyList.set(node, []);
    }
    addEdge(node1, node2) {
        const node1Available = this.adjacencyList.get(node1);
        const node2Available = this.adjacencyList.get(node2);
        if (node1Available && node2Available) {
            node1Available.push(node2);
            node2Available.push(node2);
        }
    }
    bfs(startNode) {
        let queue = [startNode];
        let visited = new Set();
        let result = [];
        visited.add(startNode);
        while (queue.length > 0) {
            let currentNode = queue.shift();
            if (currentNode) {
                result.push(currentNode);
                let neighbours = this.adjacencyList.get(currentNode) || [];
                for (let neighbour of neighbours) {
                    if (!visited.has(neighbour)) {
                        visited.add(neighbour);
                        queue.push(neighbour);
                    }
                }
            }
        }
        return result;
    }
    dfs(startNode) {
        let stack = [startNode];
        let visited = new Set();
        let result = [];
        while (stack.length > 0) {
            let node = stack.pop();
            if (node && !visited.has(node)) {
                visited.add(node);
                result.push(node);
                let neighbours = this.adjacencyList.get(node) || [];
                for (let i = neighbours.length - 1; i >= 0; i--) {
                    stack.push(neighbours[i]);
                }
            }
        }
        return result;
    }
}
const graph = new Graph();
["A", "B", "C", "D", "E", "F"].forEach((node) => graph.addNode(node));
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
//console.log(graph)
console.log(graph.bfs("A"));
console.log(graph.dfs("A"));
