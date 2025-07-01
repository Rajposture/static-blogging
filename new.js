const posts = [
  {
    title: "A better Blogger experience on the web",
    content:
      "Since 1999, millions of people have expressed themselves on Blogger. From detailed posts about almost every apple variety you could ever imagine to a blog dedicated to the art of blogging itself, the ability to easily share, publish and express oneself on the web is at the core of Blogger’s mission. As the web constantly evolves, we want to ensure anyone using Blogger has an easy and intuitive experience publishing their content to the web. That’s why we’ve been slowly introducing an improved web experience for Blogger. Give the fresh interface a spin by clicking “Try the New Blog... read more",
    category: "Technology",
  },
  {
    title: "An update on Google+ and Blogger",
    content:
      "Following the announcement of Google+ API deprecation scheduled for March 2019, a number of changes will be made to Blogger’s Google+ integration on 4 February 2019. *Google+ widgets:* Support for the “+1 Button”, “Google+ Followers” and “Google+ Badge” widgets in Layout will no longer be available. All instances of these widgets will be removed from all blogs. *+1 buttons:* The +1/G+ buttons and Google+ share links below blog posts and in the navigation bar will be removed. Please note that if you have a custom template that includes Google+ features, you may need to update ... read more",
    category: "Travel",
  },
  {
    title: "It’s spring cleaning time for Blogger",
    content:
      "To make room for some exciting updates coming soon to Blogger, we’re simplifying the platform to enhance the blogging experience for all of our users. Changes to existing features in Blogger *(rolling out over the next few months)*: - *Google+ Integrations:* Throughout the next few months, Blogger will transform Google+ widget integrations into HTML widgets to give you more flexibility in how you share and see your followers. - *OpenID:* Blogger previously allowed users to comment on blogs using an existing third party OpenID identity provider and has also acted as... read more",
    category: "Health",
  },
];
function displayPosts(filter = "") {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = ""; // Clear current posts

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.content.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredPosts.length === 0) {
    postsContainer.innerHTML = "<p>No posts found.</p>";
    return;
  }

  filteredPosts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const content = document.createElement("p");
    content.textContent = post.content;

    postDiv.appendChild(title);
    postDiv.appendChild(content);
    postsContainer.appendChild(postDiv);
  });
}

// Display all posts initially
displayPosts();

// Search functionality
document.getElementById("search").addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  displayPosts(searchTerm);
});
