---
layout: page
title: "Practise Final: CMPT231"
subtitle: "Tue 13 Dec 2016 14:00-16:00"
ext-js: "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=AM_CHTML"
---

{% include exam.md %}

### Practise Final exam [120 pts] <a onClick="toggleSolns()">###</a>

1. *(6 pts)* **Prove**: \`n log\_2 (n^2) + n^2 = Omega(n^2)\`

1. *(7 pts)* Given the **recurrence**: \`T(n) = sqrt n T(sqrt n) + n log n\`, prove \`T(n)=n log n\`.

1. *(3 pts)* Solve the **recurrence**: \`T(n) = 3T(n/3) + log n\`
  <br/><span class="soln"> Master theorem </span>

1. *(4 pts)* Convert the following array into a **binary max-heap**: <br/>
  `[ 5, 10, 3, 1, 6, 2, 4, 8, 7, 9 ]`

1. *(4 pts)* The **median** of *n* numbers can be found in O(n) time (ch9). What is the **worst-case** complexity of Quicksort if the median is used for the pivot?
  <br/><span class="soln"> O(n lg n) </span>

1. *(6 pts)* Demonstrate **radix sort** in base *5* on the following: <br/>
  `[ 23, 17, 74, 14, 25, 33, 106, 4, 93 ]`

1. *(10 pts)* Demonstrate inserting the keys
  `[ 10, 22, 31, 4, 15, 28, 17, 88, 59 ]` into an open-addressed hash table
  of size `m = 11` using division hash and 
  + (a) linear probing
    <span class="soln"><br/> [22, 88, , , 4, 15, 28, 17, 59, 31, 10] </span>
  + (b) quadratic probing with \`c\_1=1, c\_2=3\`
    <span class="soln"><br/> [22, , 88, 17, 4, , 28, 59, 15, 31, 10] </span>
  + (c) double hashing with \`h\_1(k)=k and h\_2(k) = 1 + (k mod(m-1))\`
    <span class="soln"><br/> [22, , 59, 17, 4, 15, 28, 88, , 31, 10] </span>


1. *(5 pts)* Demonstrate the following sequence of operations on an empty **binary search tree** (`+X` means insert key `X`, `-X` means delete key `X`). Use **successor** for delete. <br/>
  `+F +T +D +V +K +M +E -F +L +P -T`
  <br/><span class="soln"> preorder before '-F': FDETKMV<br/>
  Before '-T': KDEMLPV<br/>
  End: KDEVML</span>

1. *(5 pts)* **Pseudocode** a function to count the **leaves** of a binary tree.

1. *(10 pts)* Draw the **B-tree** of t=3 with the following inserted in order.
  Draw the tree just before and after each insertion which results in a split.
  `AGFBKDHMJESIRX`

1. *(10 pts)* Demonstrate the dynamic programming solution for optimal
   **parenthesisation** to multiply a list of **matrices** with dimensions:
   (2x5), (5x10), (10x4), (4x5), (5x7)

1. *(8 pts)* Demonstrate **fractional knapsack** on items of weight `w = [ 30, 40, 50, 60, 80 ]` and value `v = [ 45, 80, 60, 90, 100 ]`, with total capacity `W = 220`. What is an optimal **0-1** knapsack solution? 

1. *(5 pts)* Assume two **lists** of length \`n\_1\` and \`n\_2\` can be **merged** in \`c(n_1+n_2)\` operations. What is the minimum number of operations in which lists of the following lengths can be merged? <br/>
`[ 7, 3, 11, 4, 6, 12, 2 ]`

1. *(8 pts)* Demonstrate finding the **strongly-connected components** of the following graph: <br/>
  ![SCC](img/components.svg)

1. *(5 pts)* **Prove**, or demonstrate a **counterexample**: If *T* is a **minimum spanning tree** in a weighted directed graph *(V, E, w)*, then for any vertices *u*, *v* the path between them in *T* is a **shortest path** in the graph.

1. *(4 pts)* Consider finding **single-source** shortest paths in a directed, weighed graph with negative-weight edges. A question was asked in lecture whether **Dijkstra's** algorithm with Johnson's **reweighting** would be faster than **Bellman-Ford**, since Dijkstra is faster than B-F when we can assume all edge weights are positive. **Discuss**: would this reweighting be a good idea? 

1. *(10 pts)* Chapter 25: all-pairs shortest paths: Floyd-Warshall, Johnson

