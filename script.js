(function(){
    let mainMenu = document.getElementById('main-menu');
let aMenu = document.querySelectorAll('#main-menu .menu ul a')
window.addEventListener('scroll', function(){
   if(pageYOffset > 10){
        mainMenu.style.backgroundColor = "rgb(189,25,25)";
        for (let i = 0; i < aMenu.length; i++) {
            /* aMenu[i].style.color = "rgb(255,255,255)"; */
            aMenu[i].classList.add('hover');
            mainMenu.style.borderBottom = "3px solid black"
        } 
   }
   else{
    mainMenu.style.backgroundColor = "rgba(200,185,185,0.7)";
    for (let i = 0; i < aMenu.length; i++){
        /* aMenu[i].style.color = "rgb(189,25,25)"; */
        aMenu[i].classList.remove('hover');
        mainMenu.style.borderBottom = "none"
    }    
   }
  
})
})();


(function(){

    let slider = document.getElementById('slider');
    let ulSlider = document.querySelector('.visible_area ul');
    
  /*   let images = [
        './images/dish1.jpg',
        './images/dish2.jpg',
        './images/dish3.jpg',
        './images/dish4.jpg',
    ] */

    let images = [
  
      {
        url:'./images/dish2.jpg',
        icon: './images/cake.png',
        title: 'Торт с ягодами',
        text: ` <h2>Торт с ягодами</h2>
        <p>Состав:</p>
        <p>Черника, клубника, малина, киви, крем заварной, шоколад</p>
        
        <b>Цена - 2000 р. за кг.</b>
        `
    },
    {
        url:'./images/dish3.jpg',
        icon: './images/tea.png',
        title: 'Чай черный',
        text: ` <h2>Чай черный</h2>
        <p>Насыщенный аромат и неповторимый вкус
         чая XXXfield</p>
        
        <b>Цена - 100 р.</b>
        </p>`
    },
    {
        url:'./images/dish4.jpg',
        icon: './images/sandwich.png',
        title: 'Сендвич с ветчиной',
        text: ` <h2>Сендвич с ветчиной </h2>
        <p>Состав:</p>
        <p>Хлеб, салат, помидор, ветчина</p>
        <p>
        <b>Цена - 250 р.</b>
        </p>
     `
        
    },
    {
        url:'./images/dish1.jpg',
        icon: './images/tomato.png',
        title: 'Стейк из лосося с овощами',
        text: ` <h2>Стейк из лосося с овощами</h2>
        <p>Состав:</p>
      <p>лосось, помидры, зелень, оливкое масло</p>
      <p>
      <b>Цена - 1200 р.</b>
      </p>`
    },

    ]
    
    images.forEach((elem,index)=>{
        
        let li = document.createElement('li');
        li.style.backgroundImage = `url(${elem.url})`;
        

        //new code
        let div = document.createElement('div');
        div.classList.add('ex');
        div.style.backgroundImage = `url(${elem.icon})`;

        let infoText = document.createElement('div');
        infoText.classList.add('infoText');
        infoText.innerHTML= elem.text;
        
        li.appendChild(div);
        li.appendChild(infoText);
        //end new code
        ulSlider.appendChild(li);


        

    })


    //для размеров экрана меньше 395

    let instedOfSlider = document.getElementById('insted-of-slider');
    let header = document.createElement('h4');
    header.innerText = "Наши фиренные блюда:";
    instedOfSlider.appendChild(header)
    images.forEach( (el) => {
        let div = document.createElement('div');
        div.innerText =el.title;
        div.style.paddingTop = "3px";
        div.style.paddingLeft = "8px";
        instedOfSlider.appendChild(div);
    })


    //parrolax-effect

    let elements = document.querySelectorAll('.visible_area li');
    let visibleArea = document.querySelectorAll('.visible_area')[0];
    let ex = document.querySelectorAll('.ex');

    elements.forEach((el, index) => {
        el.addEventListener('mousemove', (event)=>{
            let offsetX = event.clientX - visibleArea.offsetLeft;
            let offsetY = event.clientY - visibleArea.offsetTop;
            /* ex[index].style.transition = 'all 0.7s' */
            ex[index].style.transform = `translate(${offsetX* 100/1000}px,${-offsetY* 100/1000}px )`
        });

        el.addEventListener('mouseout', ()=>{
            ex[index].style.transform = 'translate(0,0)';
            ex[index].style.transition = 'all 0.7s'; 
        })
    });
    

    //end parrolax-effect
    
    
    let liSlider = ulSlider.querySelectorAll('li');
    let btnLeft = slider.querySelector('.btn_left');
    let btnRight = slider.querySelector('.btn_right');
    
    ulSlider.style.width = liSlider[0].offsetWidth * liSlider.length + 'px';
    let distance = 0;
    let lengthLi = liSlider[0].offsetWidth;
    let isList = false;
    document.body.addEventListener('click', function(event){
        
          
            if(event.target.className === "btn_left"){
                if(!isList){
                    if(Math.abs(distance) < (ulSlider.offsetWidth-lengthLi)) {
                        isList = true;
                        distance -= lengthLi;
                        ulSlider.style.left = distance + 'px';
                        ulSlider.addEventListener('transitionend', function(){
                            isList = false
                        })
                        
                    } else{
                        isList = true;
                        distance = 0;
                        ulSlider.style.left = distance + 'px';
                        ulSlider.addEventListener('transitionend', function(){
                            isList = false;
                        })
                    }
 
                }
                
               
        
            }
            if(event.target.className === "btn_right"){
                    if(!isList){
                        if(distance <0 ){
                            isList = true;
                            distance += lengthLi;
                            ulSlider.style.left = distance + 'px';
                            ulSlider.addEventListener('transitionend', function(){
                                isList = false
                            })
                    }
                    else {
                        islist = true;
                        distance = -(ulSlider.offsetWidth-lengthLi);
                        ulSlider.style.left = distance + 'px';
                        ulSlider.addEventListener('transitionend', function(){
                            isList = false
                        })
                    }
                  
            }

            

            }
           
            
        
        
    })
    
})();
/* -------------------------------------- */


(function(){

    let sliders = {
        currentElem : 0,
        data:[
            {
                image: ['./images/alcohol.jpg', './images/wisky.jpg', './images/wine.jpg'],
                title: 'Бар',
                content: 'bla-bla-1111',
                contentHref: 'показать все',
                id:0
            },
            {
                image: ['./images/dish1.jpg', './images/dish2.jpg', './images/dish3.jpg'],
                title: 'Кухня',
                content: 'bla-bla-2',
                contentHref: 'акции',
                id:1
             }
        ]
    }
    
    let offers = document.getElementById('offers');
    let bannerOffers = document.querySelector('.banners-offers');
    let wrapBanner = offers.querySelector('.wrapper-banners');
    


    let leftPosition = 0;
    createTitleInfo(sliders.data);
    createSliders(sliders.data[0]);
    let widthContain = offers.querySelector('.contain').offsetWidth;

    let hrefs = offers.querySelectorAll('.block-info a');
    let isWorking = false;
    for (let i = 0; i < hrefs.length; i++) {
        hrefs[i].addEventListener('click', (event)=>{
            event.preventDefault();
            
                if(sliders.currentElem != sliders.data[i].id){

                    if(!isWorking){
                            isWorking = true;
                            createSliders(sliders.data[i], widthContain);
                            let allContain = document.querySelectorAll('.contain');
                            allContain.forEach((contain, num) => {
                                setTimeout(() => {
                                    contain.style.left =  (num - 1)*widthContain + 'px';  
                                }, 0);
                            }) 
                            setTimeout( ()=>{
                                document.querySelector('.contain').remove();
                                isWorking = false;
                            }, 1500)
                            sliders.currentElem = sliders.data[i].id  ;
                    }
                }    
            

        })
        
    }





//создание ссылок для переключения слайдеров
    function createTitleInfo(data){
        data.forEach(el => {
            let titleContain = document.createElement('div');
            titleContain.classList.add('block-info');
            let title = document.createElement('a');
            title.setAttribute('href', '/');
            title.innerText = el.title;
            titleContain.appendChild(title);
            bannerOffers.before(titleContain);
        })

        

    }
//------------------

//создание элемента слайдера с 3-мя картинками
    function createSliders(sliderInfo , offset = 0){
        let contain = document.createElement('div');
        contain.classList.add('contain');
        sliderInfo.image.forEach((element) =>{

            let a = document.createElement('a');
    
            a.setAttribute('href', '/');
            a.classList.add('banner');
            a.style.backgroundImage = `url(${element})`;
            a.style.left = leftPosition + '%';
            contain.appendChild(a);
            leftPosition += 33.3;
            if(leftPosition >= 66.7) leftPosition = 0;
            
        })
        let details = document.createElement('div');
        details.classList.add('more');
        details.innerHTML = `
                     <a href="/"><span>${sliderInfo.contentHref}</span></a></div>
        `;
        contain.appendChild(details);
        contain.style.left = offset + 'px';
        wrapBanner.appendChild(contain);

    }
//----------------------      

})();

//открытие меню и пунктов меню при маленьких разрешениях
(function(){

    let iconMenu = document.getElementsByClassName('icon_menu')[0];
    let menuBar = document.querySelector('.menu .menuBar');
    let menu= document.querySelector('.menu');
    let centralStrip = document.querySelector('.central_strip');
   
    iconMenu.addEventListener( 'click',() =>{

        menuBar.classList.toggle('open') ;      
        centralStrip.classList.toggle('cross')
    })



    let fallList = document.getElementsByClassName('fallList');
    
    for (let i = 0; i < fallList.length; i++) {

        fallList[i].previousElementSibling.addEventListener('click' , (e) =>{
            e.preventDefault();
            
            if(fallList[i].style.display === 'block'){
                fallList[i].style.display = 'none';
                
            }else{
                fallList[i].style.display = 'block'
            }
            
        })
    }
    


})()




