function myFunction1() {
  const element = document.getElementById("populares");
  element.scrollIntoView((AlignToTop = false));
  element.scrollIntoView((AlignToRight = false));
  element.scrollIntoView((AlignToBottom = false));
  element.scrollIntoView((AlignToLeft = true));
}
function myFunction2() {
  setTimeout(function () {
    const element = document.getElementById("boton-1");
    element.scrollIntoView((AlignToTop = false));
    element.scrollIntoView((AlignToRight = false));
    element.scrollIntoView((AlignToBottom = false));
    element.scrollIntoView((AlignToLeft = true));
  }, 100);
}
function funcion1() {
  myFunction1();
  myFunction2();
}
function myFunction3() {
  const element = document.getElementById("promociones");
  element.scrollIntoView((AlignToTop = true));
  element.scrollIntoView((AlignToRight = false));
  element.scrollIntoView((AlignToBottom = true));
  element.scrollIntoView((AlignToLeft = false));
}
function myFunction4() {
  setTimeout(function () {
    const element = document.getElementById("boton-2");
    element.scrollIntoView((AlignToTop = false));
    element.scrollIntoView((AlignToRight = false));
    element.scrollIntoView((AlignToBottom = false));
    element.scrollIntoView((AlignToLeft = true));
  }, 150);
}
function funcion2() {
  myFunction3();
  myFunction4();
}

function myFunction5() {
  const element = document.getElementById("desayunos");
  element.scrollIntoView((AlignToTop = false));
  element.scrollIntoView((AlignToRight = false));
  element.scrollIntoView((AlignToBottom = false));
  element.scrollIntoView((AlignToLeft = true));
}
function myFunction6() {
  setTimeout(function () {
    const element = document.getElementById("boton-3");
    element.scrollIntoView((AlignToTop = false));
    element.scrollIntoView((AlignToRight = false));
    element.scrollIntoView((AlignToBottom = false));
    element.scrollIntoView((AlignToLeft = true));
  }, 450);
}
function funcion3() {
  myFunction5();
  myFunction6();
}
