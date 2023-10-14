---
title: 'Recreating React From Scratch (with Typescript!)'
excerpt: 'Learnings about how React works under the hood & deciphering the magic of hooks'
coverImage: '/assets/projects/keylime.png'
date: '2023-06-16T05:35:07.322Z'
author:
  name: Annie Sun
  picture: '/assets/blog/authors/annie.jpg'
ogImage:
  url: '/assets/projects/keylime.png'
---

React is by far the most popular web framework out there today. It's a really beautiful framwork, and I've always wonderew how does the magic work under the hood? This write-up explains how I tried recreating React!

Now React is a huge, powerful framework. and I am but a mere CS student, so my little recreation covers only a few key features of React. Topics I delved into include **rendering**, **attributes**, **event handling**, & **hooks**!

### Rendering
The core part of any web-framework is that it has to make stuff show up on the page. React uses a Virtual DOM, which now is a bit controversial, but I thought this method was easiest to understand and recreate.

Somehow I never really understood what "The Virtual DOM" meant until I realized it's just a fancy schmancy way of saying representing the displayed HTML as a Javascript object. 

For example something like this in code:

```tsx
{
    tag: "div",
    className: "container",
    children: [
      {
        tag: "p"
        children: ["Item #1"]
      },
      {
        tag: "p"
        children: ["Item #2"]
      }
    ]
}
```
Would map to something like this in HTML
```tsx
<div className="container">
  <p>Item #1</p>
  <p>Item #2</p>
</div>
```
At it's core React is made up of basic building blocks that generate Javascript objects like so:
```
React.createElement("div", props)
```

How do custom components work? Well all components are functions, and these functions all return JSX which is just a cleaner way of representing those basic functions. 

Custom components just return a pre-assembled collection of building blocks, which just fill in props as given.
```tsx
<CustomContainer>
  <Text>Item #1</Text>
</CustomContainer>
```
Translates to:
```tsx
CustomContainer({
  children: [Text("Item #1")]
})
```
And decomposing this function even more would result in something like so:
```tsx
React.createElement("div", { 
  className: "custom-container-style" ## pre-existing prop
  children: [React.createElement("p", { 
    className: "custom-text-style", 
    children: [Item #1"] 
  })]
})
```
### Hooks

### Future Plans