import { elements } from "./../data/base.js";

export const renderUser = ({
  avatar_url,
  html_url,
  public_repos,
  followers,
  following,
}) => {
  const testEmpty = (value) => value == undefined ? 0 : value
  const markup = `
    <div class="profile-header">
      <img src="${avatar_url}" alt="Avatar" style="display:${avatar_url == null ? "none" : "block"}">
      <a href="${html_url == null ? "https://github.com/" : html_url}" target="_blank" class="button">Visitar perfil</a>
    </div>   
    <ul class="profile-list">
      <li>Repositórios: ${testEmpty(public_repos)}</li>
      <li>Seguidores: ${testEmpty(followers)}</li>
      <li>Seguindo: ${testEmpty(following)}</li>
    </ul> 
  `;

  elements.profile.insertAdjacentHTML("afterbegin", markup);
};