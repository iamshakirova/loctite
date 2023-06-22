const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length > 0){
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault()
    }
  }
}



let modal = document.getElementById('form-window')
function showFirstAdapt(){
    modal.classList.add('active-form')
}
function closeFirstAdapt(){
    modal.classList.remove('active-form')
}

// let addclients = document.getElementById('clients')
// function showClients(){
//     addclients.classList.add('addClientForm')
// }
// function closeClients(){
//     addclients.classList.remove('addClientForm', 'addSertForm', 'addCalcForm')
// }

// let addSert = document.getElementById('sert')
// function showSert(){
//     addSert.classList.add('addSertForm')
// }
// function closeSert(){
//     addSert.classList.remove('addSertForm')
// }

// let addCalc = document.getElementById('calc')
// function showCalc(){
//     addCalc.classList.add('addCalcForm')
// }
// function closeCalc(){
//     addCalc.classList.remove('addCalcForm')
// }



const tabsBtn  = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();



$('.tabs__item.item').slick({
  nextArrow: '<i class="fa-solid fa-angle-right"></i>',
  prevArrow: '<i class="fa-solid fa-angle-left"></i>',
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});


let resize= document.getElementById('resizeImg')
function showsizeImage(){
    resize.classList.add('active-img')
}
function closeSizeImage(){
    resize.classList.remove('active-img')
}

let Mobilemodal = document.getElementById('mobilelAdapt')
function showFirstMobile(){
    Mobilemodal.classList.add('mobile-modal')
}
function closeFirstMobile(){
    Mobilemodal.classList.remove('mobile-modal')
}