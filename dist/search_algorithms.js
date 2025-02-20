"use strict";
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addNode(node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }
    addEdge(node1, node2) {
        const node1Available = this.adjacencyList.get(node1);
        const node2Available = this.adjacencyList.get(node2);
        if (node1Available && node2Available) {
            node1Available.push(node2);
            node2Available.push(node1);
        }
    }
    bfs(startNode) {
        let queue = [startNode];
        let visited = new Set();
        let result = [];
        visited.add(startNode);
        while (queue.length > 0) {
            let currentNode = queue.shift;
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
console.log(graph);
