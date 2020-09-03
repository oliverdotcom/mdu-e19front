"use strict"; // to enable strict mode and modern JavaScript functionality

async function fetchInstagramPosts(userName) {
  let url = `https://instagram.com/${userName}/?__a=1`;
  let response = await fetch(url); // fetch and wait the response
  let data = await response.json(); // read response body and wait for parsing the JSON
  let posts = data.graphql.user.edge_owner_to_timeline_media.edges;
  appendPosts(posts);
}

function appendPosts(posts) {
  let htmlTemplate = "";
  for (const post of posts) {
    let imageUrl = post.node.thumbnail_src;
    let imageCaption = post.node.edge_media_to_caption.edges[0].node.text;
    let likes = post.node.edge_liked_by.count;
    let comments = post.node.edge_media_to_comment.count;
    let location = post.node.location.name;
    let taggedUsers = taggedUsersToString(post.node.edge_media_to_tagged_user.edges);

    htmlTemplate += /*html*/ `
      <article>
        <img src="${imageUrl}">
        <p>Likes: ${likes}, Comments: ${comments}</p>
        <p>${imageCaption}</p>
        <p>Location: ${location}</p>
        Tagged Users: ${taggedUsers}
      </article>
    `;
  }
  document.querySelector("#instagram-posts").innerHTML = htmlTemplate;
}

function taggedUsersToString(taggedUsers) {
  let htmlTemplate = "<ul>";
  for (const taggedUser of taggedUsers) {
    htmlTemplate += `<li>${taggedUser.node.user.full_name}</li>`;
  }
  return htmlTemplate + "</ul>";
}

fetchInstagramPosts("cederdorff");