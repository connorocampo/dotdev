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

```js
function sum(arr, n) {
  // Only change code below this line
  // Only change code above this line
}
```

After reading through the directions, I still had trouble solving the problem in code so I used the ‘Get Help’ button to Watch a Video (it’s actually an article on explaining recursion) and look at the Get a Hint page for a better understanding.

Still, after spending around 2 hours going between reading the article and looking over the solution, I couldn’t quite figure out the whole recursion concept.

So, I searched YouTube in hopes that someone could explain it in a way that clicked for me. That’s when I found Colt Steele’s video: <a
              href="https://www.youtube.com/watch?v=lMBVwYrmFZQ"
              target="_blank"
              rel="noopener noreferrer"
            >Recursion Crash Course</a>.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lMBVwYrmFZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="youtube-embed"></iframe>

The key words he used to explain recursion that clicked for me was that the recursive case is basically _waiting in line_ to be solved before the function could return a value.

So, the way I understand recursive functions is that a recursive call will be executed until it meets the base case. Then, since all previous calls were solved, the function can return a value.

```js
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
```

The above code is the solution.

In order to understand this solution better, I had to figure out the correct way to write out the recursive call. Building a solid JavaScript foundation in important to me, so I'm making it a point to not move on until I truly understand how every line of code works.

## Recursive Case Written Out Line-by-Line

In this example we’ll create an array called arr with values 1 through 5. We'll also create and initialize a variable n to equal 3.

```js
var arr = [1, 2, 3, 4, 5];
var n = 3;
```

Now, let's plug this information into our recursive case.

```js
// Recursive case

else {
    return sum(arr, n - 1) + arr[n - 1];
  }
```

Since variable n is not equal to 3, we'll plug it into the recursive case and keep solving until we hit our base case.

```js
// Factor in n = 3 to solve

sum(arr, 3 - 1) + arr[3 - 1];
sum(arr, 2) + arr[2];
sum(arr, 2) + 3;
```

Now, our new value of n = 2 from solving our first recursive statement. Also, note that arr[2] equals 3 because the value 3 is at index position 2 of our array.

Moving on...

```js
// Factor in n = 2 to solve

sum(arr, 2 - 1) + arr[2 - 1];
sum(arr, 1) + arr[1];
sum(arr, 1) + 2;
```

Now, our new value of n = 1 from solving our second recursive statement. Also, note that arr[1] equals 2 because the value 2 is at index position 1 of our array.

```js
// Now, factor n = 1 to solve

sum(arr, 1 - 1) + arr[1 - 1];
sum(arr, 0) + arr[0];
sum(arr, 0) + 1;
```

In the last line you'll see that we hit our base case!

```js
// Base case

if (n <= 0) {
  return 0;
}
```

So, because our variable n is now equal to 0, we can return the value 0.

Also, note that arr[0] equals 1 because the value 1 is at index position 0 of our array.

### Now, We Can Solve the Example

So, the last statement of the previous code block can be evaluated like this...

```js
0 + 1 = 1;
```

From here we can add up all the numbers from each time we solved for n.

```js
0 + 1 + 2 + 3 = 6;
```

I hope that makes sense!

## Recursion Flowchart

In case the above code blocks still have you wondering, here's a flow chart of how we solved the above example.

![Recursive Image 1](../assets/images/recursive1.png)

Now, we can add up each value that we got from each recursive call to get our answer: 6!

![Recursive Image 2](../assets/images/recursive2.png)

Hey look, you made it to the end! 🎉

I really hope this post helped you understand this freeCodeCamp challenge. To really drive the concept home, I suggest typing it out a few times with different array and variable values in CodePen. Or even better, on paper!
