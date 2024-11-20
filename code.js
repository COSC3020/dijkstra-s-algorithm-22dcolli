/*PsuedoCode to remember
    -initialize the dist to each vertex to ∞
    -initialize source to 0
        -while there are unmarked vertices left in the graph(TRAVERSAL)
            -select the unmarked vertex v with the lowest dist
            -mark v with distance dist
            -for each edge(v,w)
                -dist(w) = min (dist(w),dist(v) + weight of (v,w))
*/

function dijkstra(graph, sourceNode) {

    //initialize process
    let dist = []
    let markedVertices = []

    // vertex to ∞
    for(let i = 0;i < graph.length;i++){
        dist[i] = Infinity;
    }
    //source to 0
    dist[sourceNode] = 0

    //start traversing all nodes
    while (markedVertices.length != graph.length) 
        {
          let node = 0;
          let min = Infinity;

          //value traversal
          for (let i = 0; i < graph.length; i++) {
            //Ishita explained this if to me statement but I coded it
            if (dist[i] < min && markedVertices.indexOf(i) === -1) 
            {
              min = dist[i];
              node = i;
            }
          }
            
          markedVertices.push(node);

         // edge traversal
          for (let next = 0; next < graph.length; next++){ 
            //she explained the following line and i coded it, but i got the graph[node][next] part wrong so she told me and I fixed it
            let tempDist = dist[node] + graph[node][next];
              
            //Ishita sat at my computer and coded this logic
            if (graph[node][next] > 0 && dist[next] > tempDist) {
              dist[next] = tempDist;
            //
            }
          }
        }
        return dist;
}

/*
//test case checker
let loopTest = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];


console.log("first: ", dijkstra(loopTest, 0));
console.log("second: ", dijkstra(loopTest, 2));
*/
