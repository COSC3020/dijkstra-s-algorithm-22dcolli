# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Plagarism Statement

All exercises must contain the following statement:
“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

## Note
I did not complete this excersise last semester, so I am attempting this completely from scratch. I did discuss this with Lily Brongo and then referenced Ishita Patel's repository from last semester to confirm my logic for the code and response before submission. For this one in particular, I went to her in person to help me through setting up the testing correcting some of my code. For additional clarity, there is one portion of the test called classGraph(Marked in test code) that is directly taken from Ishita's repository, it was used to show me the syntax that she used and I built from there.

## Answer

The first for loop iterates over all the vertices to set each to infinity, which would be $|V|$. Then the following while loop has 2 inner loops, with the first iterating over $|V|$ to obtain the smallest distance and the second of the two inner loops also iterating for $|V|$ over edges. As stated before however, each of the for loops were nested inside of the while loop, which means each of those inner for loops becomes $|V|^2$. So overall thats $|V| + |V|^2 + |V|^2$ which can simplify into $|V| + |V|^2$.  Thinking about this further we are only concerned with the largest order term which would be $2|V|^2$ and additionally we can also get rid of the leading constant which just leaves $|V|^2$. I believe that that makes the final complexity $\Theta(|V|^2)$
