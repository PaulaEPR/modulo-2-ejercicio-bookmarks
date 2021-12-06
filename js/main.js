"use strict"

/* Dia 1*/
/* 1- Prueba mostrar formulario nuevo bookmark */

const newBookmark = document.querySelector('.data-actions__add');
newBookmark.classList.remove('hidden');

/* 2- Prueba mostrar menu */

const menuDropdown = document.querySelector('.menudropdown');
menuDropdown.classList.remove('collapsed');

/* 3- Añadir informacion de los enlaces desde JS */
/* 3.1 Traer el elemento html */
const listLinks = document.querySelector('.js-data__list');
/* 3.2 Variable que contenga toda la información del li por cada uno de los enlaces */
/* const link1 = `          <li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion" target="_blank" rel="noopener noreferrer">
          books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
        </a>
      </p>
      <p class="item__seen">
        <input type="checkbox" checked name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">JS en los materiales de Adalab</p>
      <ul class="item__tags">
        <li class="item__tag">javascript</li><li class="item__tag">HTML</li>
      </ul>
    </article>
  </li>`;
const link2 = `          <li class="data__listitem">
  <article class="data__item">
    <p class="item__url">
      <a href="https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/" target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a></p>
    <p class="item__seen">
      <input type="checkbox" checked name="item_imp_1" id="item_imp_1">
    </p>
    <p class="item__desc">Ideas de proyectos JS</p>
    <ul class="item__tags">
      <li class="item__tag">javascript</li><li class="item__tag">portfolio</li>
    </ul>
  </article>
</li>`;
const link3 = `          <li class="data__listitem">
  <article class="data__item">
    <p class="item__url">
      <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web" target="_blank" rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>
    </p>
    <p class="item__seen">
      <input type="checkbox" name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">HTML en los materiales de Adalab</p>
    <ul class="item__tags">
      <li class="item__tag">HTML</li><li class="item__tag">CSS</li>
    </ul>
  </article>
</li>`;

/* 3.3 Añadir esa info con el innerHTML por cada uno de los enlaces */
// listLinks.innerHTML = link1 + link2 + link3;
 



/* 4- Día 2 */

/* const bmk_1_url = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion"
let bmk_1_url_clean = bmk_1_url.replace("https://", "")
const bmk_1_desc = "JS en los materiales de Adalab";
const bmk_1_seen = "checked";
const bmk_1_tags_1 = "javascript";
const bmk_1_tags_2 = "HTML";
let bmk_1_tags_2_lower = bmk_1_tags_2.toLowerCase(); */

/* const bmk_2_url = "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/"
let bmk_2_url_clean = bmk_2_url.replace("https://", "")
const bmk_2_desc = "Ideas de proyectos JS";
const bmk_2_seen = "checked";
const bmk_2_tags_1 = "javascript";
const bmk_2_tags_2 = "portfolio"; */

/* const bmk_3_url = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web"
let bmk_3_url_clean = bmk_3_url.replace("https://", "")
const bmk_3_desc = "HTML en los materiales de Adalab";
const bmk_3_seen = "";
const bmk_3_tags_1 = "HTML";
let bmk_3_tags_1_lower = bmk_3_tags_1.toLowerCase();
const bmk_3_tags_2 = "CSS";
let bmk_3_tags_2_lower = bmk_3_tags_2.toLowerCase(); */

/* let html = ""; */

/* html += `          <li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a href=${bmk_1_url} target="_blank" rel="noopener noreferrer">
    ${bmk_1_url_clean}
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" ${bmk_1_seen} name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${bmk_1_desc}</p>
  <ul class="item__tags">
    <li class="item__tag">${bmk_1_tags_1}</li><li class="item__tag">${bmk_1_tags_2_lower}</li>
  </ul>
</article>
</li>` */
/* html += `          <li class="data__listitem">
  <article class="data__item">
    <p class="item__url">
      <a href=${bmk_2_url} target="_blank">${bmk_2_url_clean}</a></a></p>
    <p class="item__seen">
      <input type="checkbox" ${bmk_2_seen} name="item_imp_1" id="item_imp_1">
    </p>
    <p class="item__desc">${bmk_2_desc}</p>
    <ul class="item__tags">
      <li class="item__tag">${bmk_2_tags_1}</li><li class="item__tag">${bmk_2_tags_2}</li>
    </ul>
  </article>
</li>`; */

/* html += `          <li class="data__listitem">
  <article class="data__item">
    <p class="item__url">
      <a href=${bmk_3_url} target="_blank" rel="noopener noreferrer">${bmk_3_url_clean}</a>
    </p>
    <p class="item__seen">
      <input type="checkbox" ${bmk_3_seen} name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">${bmk_3_desc}</p>
    <ul class="item__tags">
      <li class="item__tag">${bmk_3_tags_1_lower}</li><li class="item__tag">${bmk_3_tags_2_lower}</li>
    </ul>
  </article>
</li>`; */

/* listLinks.innerHTML = html; */


/* Día 3-Ejercicio 1 */
const listaEnlaces = document.querySelector(".data");

if (listaEnlaces.classList.contains("tableview")) {
  listaEnlaces.classList.remove("tableview");
  listaEnlaces.classList.add("listview");
}
else {
  listaEnlaces.classList.remove("listview");
  listaEnlaces.classList.add("tableview");
}

/* Día 3-Ejercicio 2 */

const input_search_desc = document.querySelector(".js-in_search_desc");

//Forma larga
//input_search_desc.value = "materiales";
//const descrSearchText = input_search_desc.value;

//Forma corta
const descrSearchText = (input_search_desc.value = "materiales");
let html = "";

const bmk_1_url = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion"
let bmk_1_url_clean = bmk_1_url.replace("https://", "")
const bmk_1_desc = "JS en los materiales de Adalab";
const bmk_1_seen = "checked";
const bmk_1_tags_1 = "javascript";
const bmk_1_tags_2 = "HTML";
let bmk_1_tags_2_lower = bmk_1_tags_2.toLowerCase();

if (bmk_1_desc.includes(descrSearchText) ) {
  html += `          <li class="data__listitem">
  <article class="data__item">
    <p class="item__url">
      <a href=${bmk_1_url} target="_blank" rel="noopener noreferrer">
      ${bmk_1_url_clean}
      </a>
    </p>
    <p class="item__seen">
      <input type="checkbox" ${bmk_1_seen} name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">${bmk_1_desc}</p>
    <ul class="item__tags">
      <li class="item__tag">${bmk_1_tags_1}</li><li class="item__tag">${bmk_1_tags_2_lower}</li>
    </ul>
  </article>
  </li>`
}

const bmk_2_url = "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/"
let bmk_2_url_clean = bmk_2_url.replace("https://", "")
const bmk_2_desc = "Ideas de proyectos JS";
const bmk_2_seen = "checked";
const bmk_2_tags_1 = "javascript";
const bmk_2_tags_2 = "portfolio";

if (bmk_2_desc.includes(descrSearchText) ) {
  html += `          <li class="data__listitem">
  <article class="data__item">
    <p class="item__url">
      <a href=${bmk_2_url} target="_blank">${bmk_2_url_clean}</a></a></p>
    <p class="item__seen">
      <input type="checkbox" ${bmk_2_seen} name="item_imp_1" id="item_imp_1">
    </p>
    <p class="item__desc">${bmk_2_desc}</p>
    <ul class="item__tags">
      <li class="item__tag">${bmk_2_tags_1}</li><li class="item__tag">${bmk_2_tags_2}</li>
    </ul>
  </article>
</li>`;
}

const bmk_3_url = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web"
let bmk_3_url_clean = bmk_3_url.replace("https://", "")
const bmk_3_desc = "HTML en los materiales de Adalab";
const bmk_3_seen = "";
const bmk_3_tags_1 = "HTML";
let bmk_3_tags_1_lower = bmk_3_tags_1.toLowerCase();
const bmk_3_tags_2 = "CSS";
let bmk_3_tags_2_lower = bmk_3_tags_2.toLowerCase();

if (bmk_3_desc.includes(descrSearchText) ) {
  html += `          <li class="data__listitem">
  <article class="data__item">
    <p class="item__url">
      <a href=${bmk_3_url} target="_blank" rel="noopener noreferrer">${bmk_3_url_clean}</a>
    </p>
    <p class="item__seen">
      <input type="checkbox" ${bmk_3_seen} name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">${bmk_3_desc}</p>
    <ul class="item__tags">
      <li class="item__tag">${bmk_3_tags_1_lower}</li><li class="item__tag">${bmk_3_tags_2_lower}</li>
    </ul>
  </article>
</li>`;
}

listLinks.innerHTML = html;