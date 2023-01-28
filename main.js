const menuEmail= document.querySelector('.navbar-email'); /* Al que se le hace click*/
const desktopMenu = document.querySelector('.desktop-menu') /* El que se va a mostrar cuando hagan click puedo trabajarlos para validaciones por la clase*/ 


const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardContainer = document.querySelector('.cards-container');

menuCarritoIcon.addEventListener('click', togglesCarritoAside); 
menuEmail.addEventListener('click', toggleshowDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);

function togglesCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive'); // Pregunta si el menu esta abierto = true
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if(isMobileMenuOpen){                              //true
        mobileMenu.classList.add('inactive');           // asigna clase inactive
    }

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }


    aside.classList.toggle('inactive');                 // ejecuta toogle comun

}

function toggleshowDesktopMenu(){

    const isCarritoAsideOpen = !aside.classList.contains('inactive'); // Pregunta si el menu esta abierto = true

    if(isCarritoAsideOpen){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

   desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    const isCarritoAsideOpen = !aside.classList.contains('inactive'); // Pregunta si el menu esta abierto = true

    if(isCarritoAsideOpen){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function listarProductos(arr){

    for (productos of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
               
        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src',productos.Img);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
               
        const productInfoDiv = document.createElement('div');
               
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + productos.Price;
     
        const productName = document.createElement('p');
        productName.innerHTML = productos.name;
         
        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
     
                 figure.appendChild(figureImg);   /* Ahora hay que indicarle la anidacion*/
     
                 productInfoDiv.appendChild(productPrice);      /* Ahora hay que indicarle la anidacion*/
                 productInfoDiv.appendChild(productName);       /* Ahora hay que indicarle la anidacion*/
                 productInfo.appendChild(productInfoDiv);        /* Ahora hay que indicarle la anidacion*/
                 productInfo.appendChild(figure);                /* Ahora hay que indicarle la anidacion*/
                 productCard.appendChild(imageProduct);          /* Ahora hay que indicarle la anidacion*/
                 productCard.appendChild(productInfo);           /* Ahora hay que indicarle la anidacion*/
                 
     
       
       cardContainer.appendChild(productCard);  /* Query selector que apunta a la clase del html e inserte la maquetacion*/
     
     
     
     }


}

listarProductos(productList);

