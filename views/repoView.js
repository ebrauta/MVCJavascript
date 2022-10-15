import { elements } from "./../data/base.js";

export const renderRepositories = (repositories) => {
  let markup = "";

  repositories.forEach(({ html_url, name }) => {
    markup += `
      <a href="${html_url}" class="repo-url" target="_blank">
        ${name}
      </a>
    `;
  });

  elements.repos.innerHTML = markup;
};