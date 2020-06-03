---
layout: blog
title: Replace Loops using Recursion (Line-by-line Solution Explanation)
date: 2020-06-03T04:32:03.073Z
---
This is a line-by-line code explanation of <a
              href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion"
              target="_blank"
              rel="noopener noreferrer"
            > freeCodeCamp’s Replace Loops using Recursion module
</a> in their Basic JavaScript section.

As of today, Wednesday June 3rd, 2020, this is what the code challenge looks like:

```javascript
function sum(arr, n) {
  // Only change code below this line
  // Only change code above this line
}
```

After reading through the directions, I still had trouble solving the problem in code so I used the ‘Get Help’ button to Watch a Video (it’s actually an article on explaining recursion) and look at the Get a Hint page for a better understanding. Still, after spending around 2 hours going between reading the article and looking over the solution, I couldn’t quite figure out the whole recursion concept.

So, I searched YouTube in hopes that someone could explain it in a way that clicked for me. That’s when I found Colt Steele’s video: <a
              href="https://www.youtube.com/watch?v=lMBVwYrmFZQ"
              target="_blank"
              rel="noopener noreferrer"
            >Recursion Crash Course</a>.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lMBVwYrmFZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="youtube-embed"></iframe>

The keyword he used to explain recursion that clicked for me was that the recursive case is basically *waiting in line* to be solved before the function could return a value.

So, the way I understand recursive functions is that a recursive statement will be executed until it meets the base case. Then, since all previous statements were solved, the function can return a value.

```
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
```

The above code is the solution.

In order to understand this solution better, I had to figure out the correct way to write out the recursive statement. Building a solid JavaScript foundation in important to me, so I'm making it a point to not move on until I truly understand how every line of code works.

## Here’s the Recursive Case Written Out Line-by-Line

In this example we’ll create an array call are with values 1 through 5. We'll also create and initialize a variable n to equal 3.

```
var arr = [1, 2, 3, 4, 5];
var n = 3;

// Our recursive case
return sum(arr, n - 1) + arr[n - 1]

// Factor in n to solve
sum(arr, 3 - 1) + arr[3 - 1]
sum(arr, 2) + arr[2]
sum(arr, 2) + 3

// Now, n = 2, so we need to plug that into our recursive case
sum(arr, 2 - 1) + arr[2 - 1]
sum(arr, 1) + arr[1]
sum(arr, 1) + 2

// Now, n = 1, so we need to plug that into our recursive case
sum(arr, 1 - 1) + arr[1 - 1]
sum(arr, 0) + arr[0]
sum(arr, 0) + 1

// Refer back to our original function to see that sum(arr, 0) is our base case, which evaluates to 0!
0 + 1 = 1

// From here we can add up all the numbers from each time we solved for n.
3 + 2 + 1 = 6
```