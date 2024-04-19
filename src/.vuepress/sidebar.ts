import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  

  // "/": [
    // "",
    
    // "/reading/",
    // {
    //   text: "开发",
    //   icon: "laptop-code",
    //   prefix: "dev/",
    //   link: "dev/",
    //   children: "structure",
      
    // },
    // {
    //   text: "读书",
    //   icon: "book",
    //   prefix: "reading/",
    //   link: "dev/",
    //   children: "structure",
    // },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  // ],
 
  "/dev/" :[

{
      text: "语言类",
      icon: "laptop-code",
      children: "structure",
  }

  ],
  "/reading/": [
    // "",
    {
          text: "编程类",
          icon: "laptop-code",
          children: "structure",
    },
    


      ],
});

