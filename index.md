---
layout: page
title: "Practise Final: CMPT231"
subtitle: "Tue 13 Dec 2016 14:00-16:00"
ext-js: "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=AM_CHTML"
---

{% include exam.md %}

### Practise Final exam [120 pts]

1. *(6 pts)* Chapter 1-3: Complexity, &Theta;, Insertion sort

1. *(7 pts)* Chapter 4-5: Merge sort, induction, master theorem, randomization

1. *(3 pts)* Solve the **recurrence**: \`T(n) = 3T(n/3) + log n\`

1. *(2 pts)* Chapter 6-7: heap sort, priority queue, quick sort

1. *(4 pts)* Convert the following array into a **binary max-heap**:
  `[ 5, 10, 3, 1, 6, 2, 4, 8, 7, 9 ]`

1. *(4 pts)* The **median** of *n* numbers can be found in O(n) time (ch9). What is the **worst-case** complexity of Quicksort if the median is used for the pivot? 

1. *(8 pts)* Chapter 8: counting sort, radix sort, bucket sort

1. *(10 pts)* Chapter 11: hash tables, hash functions, open addressing

1. *(5 pts)* Chapter 10,12: linked lists, BSTs, tree ops

1. *(5 pts)* **Pseudocode** a function to count the **leaves** of a binary tree.

1. *(10 pts)* Draw the **B-tree** of t=3 with the following inserted in order.
  Draw the tree just before and after each insertion which results in a split.
  `AGFBKDHMJESIRX`

1. *(10 pts)* Demonstrate the dynamic programming solution for optimal
   **parenthesisation** to multiply a list of **matrices** with dimensions:
   (2x5), (5x10), (10x4), (4x5)

1. *(10 pts)* Chapter 16: greedy: proving greedy property, activity sel, list merge, Huffman, fractional knapsack

1. *(8 pts)* Chapter 22: graphs, BFS, DFS, topological sort, connected components

1. *(5 pts)* Chapter 23: minimum spanning tree: Prim, Kruskal

1. *(5 pts)* **Prove**, or demonstrate a **counterexample**: If *T* is a **minimum spanning tree** in a weighted directed graph *(V, E, w)*, then for any vertices *u*, *v* the path between them in *T* is a **shortest path** in the graph.

1. *(8 pts)* Chapter 24: single-source shortest paths: Bellman-Ford, Dijkstra

1. *(4 pts)* Consider finding **single-source** shortest paths in a directed, weighed graph with negative-weight edges. A question was asked in lecture whether **Dijkstra's** algorithm with Johnson's **reweighting** would be faster than **Bellman-Ford**, since Dijkstra is faster than B-F when we can assume all edge weights are positive. **Discuss**: would this reweighting be a good idea? 

1. *(10 pts)* Chapter 25: all-pairs shortest paths: Floyd-Warshall, Johnson

