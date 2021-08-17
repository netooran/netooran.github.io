var app = new Vue({
  el: "#app",
  data: {
    firstName: "Sarath",
    lastName: "Sasindrakumar",
    profession: "Software Consultant",
    company: "ThoughtWorks",
    projects: [
      {
        name: "Live Wall",
        description: "A website that plays live wallpapers from veriety of categories.",
        url: "https://netooran.github.io/live-wall/",
        github: "https://github.com/netooran/live-wall",
        stack: ["html", "css", "js"],
      },
      {
        name: "Blog",
        description: "I write various aspects of frontend development",
        url: "https://netooran.github.io/blog/",
        github: "https://github.com/netooran/blog",
        stack: ["html", "css", "js"],
      },
    ],
  },
});
