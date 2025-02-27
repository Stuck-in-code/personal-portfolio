if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  console.log("dosometing@frosty.onion");
  let links = document.getElementsByClassName("my-links");
  let newLink = Array.from(links);
  console.log(newLink);

  newLink.forEach((link) => {
    console.log(link);
  });
  /*

  links.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove "active" class from all links
      links.forEach((item) => item.classList.remove("active.link"));

      // Add "active" class to the clicked link
      link.classList.add("active-link");
    });
  });*/
}
