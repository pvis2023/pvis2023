/*!
 * Basically Basic Jekyll Theme 1.4.5
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/

window.onload = function() {
  let click = document.querySelector('.trigger_popup_fricc');
  let click2 = document.querySelector('.hover_bkgr_fricc');
  let click3 = document.querySelector('.popupCloseButton');

  click.addEventListener('click', function() {
    document.querySelector('.hover_bkgr_fricc').style.display = 'inline-block';
  });

  click2.addEventListener('click', function() {
    document.querySelector('.hover_bkgr_fricc').style.display = 'none';
  });

  click3.addEventListener('click', function() {
    document.querySelector('.hover_bkgr_fricc').style.display = 'none';
  });
}