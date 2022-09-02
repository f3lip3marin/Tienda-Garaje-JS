const menuEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu')
//
const burguerMenu= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu')

//
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector(".product-detail")


menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleeCarritoMenu);


function toggleDesktopMenu () {
  //llamando a la clase con (classList, y con el toggle la coloreamos)
  //la quita a poner las clases



          const isAsideClosed = aside.classList.contains("inactive")

           if(!isAsideClosed){
          aside.classList.add("inactive")
        }


  desktopMenu.classList.toggle("inactive");
}
 //lo que hicimos aca, y dejo esta nota para mi, fue agragar una seccion de la clase 7 al index principal, para que una vez los usuarios den click en la esquina superior derecha les aparezcan sus ordenes... hicimos esto con la ayuda del DOM, cree dos constantes llamando asus clases, cree el escuchar de enventos y por ultimo una funcion que me muestre y me lo quite cuando este o 


 function toggleMobileMenu () {

          const isAsideClosed = aside.classList.contains("inactive")

           if(!isAsideClosed){
          aside.classList.add("inactive")
        }


     mobileMenu.classList.toggle("inactive");
 }

 function toggleeCarritoMenu (){
      const isMobileMenuClosed = mobileMenu.classList.contains("inactive")



        if(!isMobileMenuClosed){
          mobileMenu.classList.add("inactive")
        }

    aside.classList.toggle("inactive");
 }