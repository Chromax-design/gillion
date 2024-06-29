import { PostType } from "../utils/Types";
import post1 from '/assets/posts/post-img-1.jpg'
import post2 from '/assets/posts/post-img-2.jpg'
import post3 from '/assets/posts/post-img-3.jpg'
import post4 from '/assets/posts/post-img-4.jpg'


export const Posts: PostType[] = [
  {
    id: 1,
    imgUrl: `${post1}`,
    category: "fashion",
    title:
      "The Greatest Thing in The World is to Know How to Belong to Oneself",
    author: "CONNOR RANDALL",
    date: new Date(3, 6, 2019),
    excerpt:
      "Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no control boxes under seats for the in-flight entertainment system, which means it’s all open for you to stretch your legs. The planes will offer improved built-in broadband connectivity that’ll allow passengers to use their phones and tablets",
  },
  {
    id: 2,
    imgUrl: `${post2}`,
    category: "health",
    title: "The Two Most Powerful Warriors Are Patience and Time",
    author: "DANNY INGS",
    date: new Date(3, 6, 2019),
    excerpt:
      "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no control boxes under seats for the in-flight entertainment system, which means it’s all open for you to stretch your legs. The planes will offer improved built-in broadband connectivity that’ll allow passengers to use their phones and tablet",
  },
  {
    id: 3,
    imgUrl: `${post3}`,
    category: "health",
    title: "You Will Become as Small as Your Controlling Desire",
    author: "AVA ISABELLA",
    date: new Date(3, 6, 2019),
    excerpt:
      "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no control boxes under seats for the in-flight entertainment system, which means it’s all open for you to stretch your legs. The planes will offer improved built-in broadband connectivity that’ll allow passengers to use their phones and tablet",
  },
  {
    id: 4,
    imgUrl: `${post4}`,
    category: "health",
    title:
      "You Will Become as Small as Your Controlling Desire",
    author: "ISABELLA CRUISE",
    date: new Date(3, 6, 2019),
    excerpt:
      "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no control boxes under seats for the in-flight entertainment system, which means it’s all open for you to stretch your legs. The planes will offer improved built-in broadband connectivity that’ll allow passengers to use their phones and tablet",
  },
];
