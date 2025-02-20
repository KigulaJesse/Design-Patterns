class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor(){
        this.adjacencyList = new Map();
    }

    addNode(node: string): void {
        if(!this.adjacencyList.has(node)){
            this.adjacencyList.set(node,[]);
        }
    }

    addEdge(node1: string, node2: string):void{
        const node1Available = this.adjacencyList.get(node1);
        const node2Available = this.adjacencyList.get(node2);
        if(node1Available && node2Available){
            node1Available.push(node2);
            node2Available.push(node1);
        }
    }

    bfs(startNode:string): string[]{
        let queue: string[] = [startNode];
        let visited: Set<string> = new Set<string>();
        let result: string[] = [];

        visited.add(startNode);
        while(queue.length > 0){
            let currentNode = queue.shift
        }
        return result;
    }
}

const graph = new Graph();

["A", "B", "C", "D", "E", "F"].forEach((node)=>graph.addNode(node));
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("B","E");
graph.addEdge("C","F");


console.log(graph)