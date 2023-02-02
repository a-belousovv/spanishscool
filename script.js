window.addEventListener('DOMContentLoaded', () => {
    
    //class for course
    class Course {
        constructor(age, time, priceall,priceone,  data, parentSelector){
            this.age = age;
            this.time = time;
            this.priceall = priceall;
            this.priceone = priceone;
            this.data = data;
            this.parent = document.querySelector(parentSelector);
        }

        render(){
            const courseTableCard = document.createElement('div');
            courseTableCard.innerHTML = `
            <div class="course__table_card">
                                <div class="course__table_age">
                                    <p class="course__table_age-text">${this.age}</p>
                                </div>
                                <div class="course__table_duration">
                                    <p class="course__table_duration-text">
                                        ${this.time} раза в неделю по 2 ак. часа
                                    </p>
                                    <p class="course__table_duration-text">17.00 - 18.30</p>
                                </div>
                                <div class="course__table_price">
                                    <p class="course__table_price-text">
                                        <span>${this.priceall}.</span>(1 ак.час = ${this.priceone}) за 24 занятия
                                    </p>
                                    <p class="course__table_price-text">
                                        Оплата ${this.data} раза в год
                                    </p>
                                    <p class="course__table_price-text">
                                        Стоимость обучения рассчитывается по фактическому количеству занятий, в соответствии с учебным планов
                                    </p>

                                </div>
                            </div>
                            <hr>
            `;

            this.parent.append(courseTableCard);
        }
    }
    new Course(
        '8-9',
        '2',
        '28000 р',
        '600р',
        '3',
        '.course__table',
    ).render();
    new Course(
        '8-9',
        '2',
        '28000 р',
        '600р',
        '3',
        '.course__table',
    ).render();
    new Course(
        '8-9',
        '2',
        '28000 р',
        '600р',
        '3',
        '.course__table',
    ).render();
    new Course(
        '8-9',
        '2',
        '28000 р',
        '600р',
        '3',
        '.course__table',
    ).render();

   class Events {
    constructor(src,title,text,parentSelector  ){
        this.src = src;
        this.title = title;
        this.text = text;
        this.parent = document.querySelector(parentSelector)
    }
    render(){
        const eventCard = document.createElement('div');
        eventCard.innerHTML = `
            
                <img src="${this.src}" alt="" class="events__card_img">
                <h3 class="events__card_title">${this.title} </h3>
                <p class="events__card_text">${this.text}</p>
                <button class="events__card_button">Подробнее</button>
     
        `;
        eventCard.classList.add('events__card')
        this.parent.append(eventCard);
    }


   }
   new Events (
    "img/events1.png",
    "Sed sem vulputate habitant quis eu, vitae quis porttitor augue.",
    "Elementum, sed viverra volutpat nam lacus egestas. Scelerisque quisque egestas maecenas fermentum semper auctor massa tincidunt. Tristique pulvinar commodo fermentum neque. Elementum tortor.",
    ".events__cards"
   ).render();
   new Events (
    "img/events2.png",
    "Magna rhoncus facilisi aliquam odio tempus. Non felis cras.",
    "Tempus libero commodo velit ut aliquam. Sagittis, tristique porttitor platea eu imperdiet interdum cras. Hac blandit sed integer nibh diam in lacus ac. Congue nibh id rhoncus tincidunt imperdiet.",
    ".events__cards"
   ).render();
   new Events (
    "img/events3.png",
    "Id adipiscing aliquet erat mattis. Cursus metus malesuada congue.",
    "Dis non mauris placerat in dictum ullamcorper adipiscing morbi dignissim. Commodo dolor ornare nibh sed pretium tellus. Urna, imperdiet id ac venenatis erat mattis risus, molestie. Felis porta.",
    ".events__cards"
   ).render();


   class News {
    constructor(title,text,parentSelector){
        this.title = title;
        this.text = text;
        this.parent = document.querySelector(parentSelector);
    }

    render(){
        const newsCard = document.createElement('div');
        newsCard.innerHTML = `
            <h3 class="news__card_title">${this.title}</h3>
            <p class="news__card_text">${this.text}</p>
            <button class="news__card_button">Подробнее</button>
        `;
        newsCard.classList.add("news__card");
        this.parent.append(newsCard);
    }
   }
   new News(
    'Eu faucibus facilisi est pharetra, augue vulputate nisi elementum. Molestie id.',
    'Commodo bibendum eget purus vivamus amet ut. Nisl habitant tellus augue quam lectus elementum platea. A imperdiet facilisis quis aliquet. Venenatis sit nibh pellentesque interdum sem. Donec vitae tristique vel dictum sagittis a purus.',
    '.news__cards'
   ).render();
   new News(
    'Semper aenean amet malesuada aliquam. Urna, ornare tincidunt quam non.',
    'Augue laoreet elit urna enim fames leo habitant viverra. Turpis volutpat, scelerisque odio enim tincidunt sit. Duis quam enim vel tempus id scelerisque sapien risus. Ut ut augue porttitor urna ullamcorper hendrerit rutrum metus non. Amet a at integer aenean.',
    '.news__cards'
   ).render();
   new News(
    'Sed blandit mauris, varius semper amet dolor gravida tincidunt quis. Ultrices.',
    'Morbi diam eu risus amet, id egestas quam. Scelerisque lorem consectetur cras nisl risus congue. Nisl sed tellus magna eu, ac fames. Lacinia aliquam mi proin massa. Integer nulla netus tempus, ac netus suscipit pharetra bibendum ut. Eget ligula sodales aenean.',
    '.news__cards'
   ).render();
   new News(
    'Morbi aliquam ornare sagittis tincidunt imperdiet vulputate orci, mauris. Lorem donec.',
    'Et nisl quis sit euismod sit senectus ut interdum. Consequat faucibus fermentum in vitae aliquam, venenatis pellentesque purus. Venenatis interdum tempus aliquet.',
    '.news__cards'
   ).render();


   //Try make slider 

   function slider(){
    const leftButton = document.querySelector('.header__button-first');
    const rightButton = document.querySelector('.header__button-second');
 
    const firstPhoto = document.querySelector('.header__bg_first');
    const secondPhoto = document.querySelector('.header__bg_second');
    const thirdPhoto = document.querySelector('.header__bg_third');
 
    const arrWithPhoto = [firstPhoto, secondPhoto, thirdPhoto];

    firstPhoto.classList.add('show');
    secondPhoto.classList.add('hide');
    thirdPhoto.classList.add('hide');
    
    let count = 0;

   rightButton.addEventListener('click', () => {
        let i = count;
        if(i < 2){
            arrWithPhoto[i].classList.add('hide');
            arrWithPhoto[i].classList.remove('show');
    
            arrWithPhoto[i + 1].classList.add('show');
            arrWithPhoto[i + 1].classList.remove('hide');
            count++;
        }
        else{

        }
   });
   leftButton.addEventListener('click', () => {
        let i = count;
       if(i < 0){
        
       }
       else{
        arrWithPhoto[i- 1].classList.add('show');
        arrWithPhoto[i - 1].classList.remove('hide');

        arrWithPhoto[i].classList.add('hide');
        arrWithPhoto[i].classList.remove('show');
        count--;
       }
   } )



   }
   slider();


} )