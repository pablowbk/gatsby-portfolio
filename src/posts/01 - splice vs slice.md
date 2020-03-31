---
title: sPlice !== slice
published: true
description: A brief post on the difference between .splice() and .slice() array methods in javascript
tags: javascript, codenewbie, webdev
date: '2019-12-20'
---

This is a short post for my future self.
Hi Pablo! Back here already? Yeah, I know, splice, slice, which one is it?? But don't worry, you've got this, only this time we're writting it down!

So, long story short: do you want your array to be **mutated**? Really? Well, go ahead, **sPlice** the hell out of it. See what I did there? Capital **P**, as in "**P**roduces Side Effects, **P**al!"

Why, you ask? Because...
>The splice() method *changes* the contents of an array by removing or replacing existing elements and/or adding new elements.
see [MDN Docs] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

---

Conversly, **.slice()** method will graciously return the desired data, keeping your beloved original array **un**mutated. Just tell it where to start and finish (optionally)... slice will comply, no questions asked:
>The slice() method returns a *shallow copy* of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The *original array will not be modified*. see [MDN Docs] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


You can search the webs for examples and more in depth docs, but this should make it easier next time you hit the mental crossroad... splice or slice, you choose (wisely, now)...