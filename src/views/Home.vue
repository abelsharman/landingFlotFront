<template>
  <div>
    <Header id="header" :isMain="isMain" />
    <Loading :loading="loading" />
    <div class="home" v-if="!loading">
      <video width="100%" height="100%" id="video_1" autoplay loop muted style="background: rgba(57, 57, 57, 0.49);transform: matrix(-1, 0, 0, 1, 0, 0);">
        <source src="../assets/final.mp4" type='video/mp4'>
        Тег video не поддерживается вашим браузером. 
      </video>

      <img class="home_main_img" id="home_main_img" src="../assets/image3.png" alt="">

      <p v-scroll-to="{el: '#about',  offset: -100,}" class="home_1">a</p>
      <a href="/vacancies" class="home_2">a</a>
      <p @click="popup = true" class="home_3">a</p>
      <p v-scroll-to="{el: '#footer',  offset: -100,}" class="home_4">a</p>
      <p v-scroll-to="{el: '#header',  offset: -100,}" class="home_5">a</p>
      <p v-scroll-to="{el: '#education',  offset: -100,}" class="home_6">a</p>
      <p v-scroll-to="{el: '#cert',  offset: -100,}" class="home_7">a</p>
      <p v-scroll-to="{el: '#cert',  offset: -100,}" class="home_8">a</p>
    </div>
    <div class="about" id="about">
      <img class="about_1" src="../assets/hat.png" alt="">
      <div class="about_info">
        <div class="about_div"></div>
        <h1>О нас.</h1>
      </div>
      <div class="about_text">
        <div class="about_text_1">
          <p>Качественное трудоустройство моряков на суда торгового флота</p>
          <img src="../assets/image2.png" alt="">
          <strong>„У моряка нет трудного или легкого пути, есть только один путь — славный.“</strong>
          <h2>Павел Нахимов</h2>
        </div>
        <div class="about_text_2">
          <p>Мы занимаемся крюинговой деятельностью, помогая морякам устраиваться на морские суда. Первостепенная задача нашей компании - обеспечить полный цикл необходимых инициатив для успешного трудоустройства наших клиентов. Так, мы проводим обязательное обучение, оказываем консультации, координируем клиента и сопровождаем его на протяжении всего срока сбора документов.</p>
          <p>Мы ценим ваше время. Опытные специалисты нашей компании предпримут для вас все нужные шаги для получения достойной вакансии.</p>
        </div>
      </div>
    </div>

    <div style="width: 100vw; height: 10vw;background-color: white;"></div>

    <div class="education" id="education">
      <div class="education_info">
        <div class="education_info_img"><img src="../assets/wheel.png" alt=""></div>
         <div style="width: 95px;height: 4px;background: #01DFFD;"></div>
         <h1>Обучение.</h1>
         <div class="education_info_text">
           <p>Одним из ключевых преимуществ работы с нашей компанией является качественное обучение. Перед приемом на работу вы сможете успешно завершить несколько курсов подготовки, улучшив собственные знания и навыки.</p>
           <p style="margin-bottom: 38px;">Для ознакомления с текущим списком активных курсов свяжитесь с нами по телефону: наш HR-менеджер с удовольствием проконсультирует вас по вопросам обучения.</p>
            <v-btn
            depressed
            color="primary"
            style="position:absolute;bottom:0%;right:0%;"
          >
            Начать обучение
          </v-btn>        
         </div>


      </div>

      <img src="../assets/image1.png" alt="">
    </div>

    <div class="vac">
      <img class="vac_1" src="../assets/star1.png" alt="">
      <img class="vac_2" src="../assets/star2.png" alt="">
      <img class="vac_3" src="../assets/star3.png" alt="">
      <h1>Вакансии.</h1>
     <div class="vac_list_item" v-for="(item, index) in vacancies" :key="index">
          <div class="vac_list_item_main">
            <h1>{{ item.nameVac }} | {{ item.count }} позиция</h1>
            <p>{{ item.text }}</p>
            <v-btn
              depressed
              color="primary"
              @click="(example = item.nameVac), (popup = true)"
            >
              Отправить анкету
            </v-btn>
          </div>
          <div style="background: #C4C4C4;height:1px;width:10%;display:inline-block;position:relative;top:-100px;"></div>
          <div class="vac_list_item_dop">
            <p class="vac_list_item_dop_1">Судно</p>
            <p class="vac_list_item_dop_2">{{ item.sudno }}</p>
            <v-divider></v-divider>
            <p class="vac_list_item_dop_1">Продолжительность контракта</p>
            <p class="vac_list_item_dop_2">{{ item.date }}</p>
            <v-divider></v-divider>
            <p class="vac_list_item_dop_1">Заработная плата</p>
            <p class="vac_list_item_dop_2">{{ item.price }}</p>
          </div>
      </div>
      <a href="/vacancies">
      <v-btn depressed
            color="primary"
            style="height: 50px;margin-left:32%;margin-top: 5%;margin-bottom:5%;width: 25%"
            >
            Показать больше вакансий</v-btn>
      </a>
    </div>




    <!-- <div class="work">
      <h1>Вакансии.</h1>
      <div class="work_item" v-for="(item, index) in workItems" :key="index">
        <h2>{{ item.name }}</h2>
        <h3>{{ item.count }} позиции</h3>
        <a href="/vacancies">
          <v-btn depressed
            color="primary"
            style="height: 50px;margin-left:68%;margin-top: 5%;width: 25%"
            >
          Подробнее    
        </v-btn>
        </a>
      </div>

      <a href="/vacancies">
      <v-btn depressed
            color="primary"
            style="height: 50px;margin-left:32%;margin-top: 5%;margin-bottom:5%;width: 25%"
            >
            Показать больше вакансий</v-btn>
      </a>
    </div> -->

    <div class="cert" id="cert">
      <h1>Сертификаты.</h1>
      <img class="cert_1" src="../assets/rock1.png" alt="">
      <img class="cert_2" src="../assets/rock2.png" alt="">
      <img class="cert_3" src="../assets/tower2.png" alt="">
      <div class="cert_img">
        <div>
          <img @click="changeImage" src="../assets/slide1.png" alt="">
          <img @click="changeAnotherImage" style="left: 0vw;" class="cert_img_upd" src="../assets/slide1upd.png" alt="">
        </div>

        <div>
          <img @click="changeImage" src="../assets/slide2.png" alt="">
          <img @click="changeAnotherImage" style="left: 0vw;" class="cert_img_upd" src="../assets/slide2upd.png" alt="">
        </div>

        <div>
          <img @click="changeImage" src="../assets/slide3.png" alt="">
          <img @click="changeAnotherImage" style="left: 0vw;" class="cert_img_upd" src="../assets/slide3upd.png" alt="">
        </div>

        <div>
          <img @click="changeImage" src="../assets/slide4.png" alt="">
          <img @click="changeAnotherImage" style="left: 0vw;" class="cert_img_upd" src="../assets/slide4upd.png" alt="">
        </div>
      </div>
    </div>

    <!-- <div class="sudna">
      <h1>Наши суда.</h1>
      <div class="sudna_item" style="width:15vw;">
        <img src="../assets/sudno1.png" alt="">
        <div><p>Нефтетакновый талкер</p></div>
      </div>

      <div class="sudna_item" style="width:24vw;">
        <img src="../assets/sudno2.png" alt="">
        <div><p>Судно-контейнеровоз</p></div>
      </div>

      <div class="sudna_item" style="width:24vw;">
        <img src="../assets/sudno3.png" alt="">
        <div><p>Плавучая гостиница</p></div>
      </div>

      <div class="sudna_item" style="width:15vw;">
        <img src="../assets/sudno4.png" alt="">
        <div><p>Судно для перевозки модулей</p></div>
      </div>
    </div> -->

    <div class="count">
      <h1 v-if="!loading">Мы в цифрах.</h1>
      <div class="count_numb" ref="count">
        <span class="count_numb_1" id="a">5</span>
        <span class="count_numb_2" id="b">119</span>
      </div>
      <div class="count_text">
        <span class="count_text_1">Видов судов</span>
        <span class="count_text_2">Человек, штат компании</span>
      </div>
      <div style="background: #DEDEDE;height:6px;width:100vw;position:relative;top:20px;"></div>

      <span class="count_know">Узнайте больше  о кораблях, на которые мы трудоустраиваем</span>
      <a href="/sudy" style="opacity:1;"><v-btn depressed color="primary" style="position: relative;top:0px;left:65vw;width:15vw;height:60px;font-size:20px;">Подробнее</v-btn></a>
    </div>

    <div class="feedback">
      <div style="background-color: rgba(19, 19, 19, 0.8);width:100vw;height:40vw;">
      <div class="feedback_form">

        <h2>Свяжитесь с нами</h2>
        <v-text-field
          label="Имя"
          v-model="name"
          hide-details
          style="background: rgba(255, 255, 255, 0.3) !important;border: 0.292639px solid #7C7C7C !important;box-sizing: border-box;backdrop-filter: blur(5.85278px) !important;margin-top:30px;padding-left: 10px;"
        ></v-text-field>
        <v-text-field
          label="Телефон"
          v-model="phone"
          hide-details
          style="background: rgba(255, 255, 255, 0.3) !important;border: 0.292639px solid #7C7C7C !important;box-sizing: border-box;backdrop-filter: blur(5.85278px) !important;margin-top:10px;padding-left: 10px;"
        ></v-text-field>
        <v-btn
        style="width:100%;height: 50px;margin-top: 50px;padding-left: 10px;"
              depressed
              color="primary"
              @click="send"
            >
          Отправить заявку
        </v-btn>
      </div>
      </div>
    </div>
    <Footer id="footer"/>
    <v-dialog v-model="popup"
    width="600"
    >
      <v-card style="padding: 10px;">
          <h2>Свяжитесь с нами</h2>
          <v-row>
          <v-col cols="5">
            <v-text-field
              label="Имя"
              v-model="name"
              style="margin-top:10px;"
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="5">
            <v-text-field
              label="Телефон"
              style="margin-top:10px;"
              v-model="phone"
              hide-details
            ></v-text-field>
          </v-col>
          </v-row>
          <v-btn
              style="margin-top:10px;margin-left: 200px;"
                depressed
                color="primary"
                @click="send"
              >
            Отправить заявку
          </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Loading from '@/views/Loading.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  data(){
    return{
      name: '',
      example: '',
      popup: false, 
      phone: '',
      loading: true,
      isMain: true,
      speed: 10,
      workItems: [
        {
          name: 'Deputy Harbour Master – (IOW)',
          count: 2,
        },
        {
          name: 'Deputy Harbour Master – (IOW)',
          count: 2,
        },
        {
          name: 'Deputy Harbour Master – (IOW)',
          count: 2,
        },
        {
          name: 'Deputy Harbour Master – (IOW)',
          count: 2,
        },
      ],
      vacancies: [
      {
        name: "Капитан",
        count: 1,
        text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
        sudno: 'MCV Беркут',
        time: '4+1 месяца',
        cost: '2000 USD'
      },
      {
        name: "Старший механик",
        count: 3,
        text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
        sudno: 'MCV Беркут',
        time: '4+1 месяца',
        cost: '2000 USD'
      },
      ],
    }
  },
  created(){
    this.getVac();
    setTimeout(()=>{
      this.loading = false
      this.playVideo()
    }, 2500)

    setTimeout(()=>{
      let inputs = document.querySelectorAll(".v-input input")
      for(let item of inputs){
        item.style.maxHeight = '37px'
      }
    }, 1000)

    document.querySelector("#video_1").play()
  },
  mounted(){
    const obj = document.querySelector("#b")
    const obj1 = document.querySelector("#a")
    setInterval(()=>{
        this.animateValue(obj, 0, 119, 5000);
        this.animateValue(obj1, 0, 5, 5000);
    },10000)
  },
  methods: {
    getVac(){
            this.$axios.get("http://localhost:9000/crewings")
            .then((res)=>{
                this.vacancies = res.data
                this.vacancies.splice(1, 8);
                console.log(this.vacancies)
            })
        },
    playVideo(){
      var autoPlayVideo = document.querySelector("#video_1")
      autoPlayVideo.oncanplaythrough = function() {
        autoPlayVideo.muted = true;
        autoPlayVideo.play();
        autoPlayVideo.pause();
        autoPlayVideo.play();
      }
    },
    send(){
      let name = this.name
      let phone = this.phone
      let example = this.example
      if(example.length > 0){
        this.$axios.post(`http://localhost:9000/send?name=${name}&phone=${phone}&example=${example}`)
          .then((res)=>{
            console.log(res)
            if(res){
              this.popup = false
              this.name = ''
              this.phone = ''
              this.example = ''
              alert("Отправлено")
            }
          })
      }
      else{
        this.$axios.post(`http://localhost:9000/send?name=${name}&phone=${phone}`)
        .then((res)=>{
          console.log(res)
          if(res){
            this.popup = false
            this.name = ''
            this.phone = ''
            this.example = ''
            alert("Отправлено")
          }
        })
      }
    },
    animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end + start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
    changeImage(event){
      event.target.style.transform = 'rotateY(90deg)'
      event.target.parentNode.childNodes[1].style.transform = 'rotateY(0deg)'
    },
    changeAnotherImage(){
      event.target.style.transform = 'rotateY(90deg)'
      event.target.parentNode.childNodes[0].style.transform = 'rotateY(0deg)'
    }
  },
  components: {
    Loading,
    Header,
    Footer
  },
}
</script>

<style lang="scss" scoped>
.about{
  background: linear-gradient(264.1deg, #063661 0%, #0773D3 99.34%);
  width: 100vw;
  z-index: 1;
  height: 35vw;
  padding-top: 55px;
  top: -10px;
  position: relative;
  font-family: "Montserrat", sans-serif !important;
  .about_1{
    font-family: "Montserrat", sans-serif !important;
    position: absolute;
    top: 2%;
    right: -8vw;
    z-index: 4;
  }
  .about_info{
    margin-left: 51vw;
    font-family: "Montserrat", sans-serif !important;
    margin-top: 50px;
    .about_div{
      width: 95px;
      height: 4px;
      font-family: "Montserrat", sans-serif !important;
      background: #01DFFD;
    }
    h1{
      font-style: normal;
      font-weight: bold;
      font-family: "Montserrat", sans-serif !important;
      font-size: 5.19vw; //72px;
      line-height: 6.15vw; //88px;
      letter-spacing: -0.02em;
      color: #FFFFFF;
      margin: 0;
    }
    h2{
      font-style: normal;
      font-family: "Montserrat", sans-serif !important;
      font-weight: bold;
      font-size: 2.0vw; //30px;
      line-height: 2.592vw; //37px;
      letter-spacing: -0.02em;
      color: #32A3B2;
    }
  }
  .about_text{
    background: #FFFFFF;
    font-family: "Montserrat", sans-serif !important;
    box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    width: 85vw;
    margin-left: 7.5vw;
    margin-top: 25px;
    z-index: 2;
    height: 25vw;
    position: relative;
    .about_text_1{
      display: inline-block;
      font-family: "Montserrat", sans-serif !important;
      margin-left: 3%;
      margin-right: 5%;
      width: 34%;
      position: relative;
      height: max-content;
      top: -20vw;
      z-index: 3;
      p{
        font-style: normal;
        font-weight: normal;
        font-family: "Montserrat", sans-serif !important;
        font-size: 1.1vw; //18px;
        line-height: 1.44vw; //21px;
        letter-spacing: -0.02em;
        width: 80%;
        margin-left: 2%;
        color: #C0C0C0;
      }
      img{
        width: 28vw; //520px;
        height: 31vw; //568px;
        object-fit: cover;
        font-family: "Montserrat", sans-serif !important;
      }
      strong{
        font-style: normal;
        font-family: "Montserrat", sans-serif !important;
        font-weight: bold;
        font-size: 1.73vw; //25px;
        line-height: 2.1vw; //30px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #000000;
      }
      h2{
        font-style: normal;
        font-weight: bold;
        font-family: "Montserrat", sans-serif !important;
        font-size: 1.736vw; //25px;
        line-height: 2.1vw; //30px;
        text-align: right;
        letter-spacing: -0.02em;

        color: #494949;
      }
    }
    .about_text_2{
      display: inline-block;
      font-family: "Montserrat", sans-serif !important;
      width: 58%;
      vertical-align: top;
      margin: 36px 0 46px 0;
      p{
        font-style: normal;
        font-weight: normal;
        font-family: "Montserrat", sans-serif !important;
        font-size: 1.36vw; //20px;
        line-height: 1.7vw; //27px;

        color: #000000;
      }
    }
  }
}
.education{
  width: 100vw;
  font-family: "Montserrat", sans-serif !important;
  padding-top: 5vw;
  .education_info_img{
    img{
      width: 100%;
      position: relative;
      height: auto;
      top: -180px;
      margin-left: 40%;
    }
    position: absolute;
  }
  .education_info{
    display: inline-block;
    width: 74vw;
    font-family: "Montserrat", sans-serif !important;
    vertical-align: top;
    padding: 6% 0 0 8vw;
    position: relative;
    background: linear-gradient(264.1deg, #063661 0%, #078FD3 99.34%);
    height: 50vw;
    h1{
      font-style: normal;
      font-weight: bold;
      font-size: 4.8vw; //72px;
      font-family: "Montserrat", sans-serif !important;
      line-height: 6.4vw; //88px;
      letter-spacing: -0.02em;
      color: #FFFFFF;
      margin-top: 1%;
    }
    button{
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 20px;
      border-top-left-radius: 20px;
      border-top-right-radius: 0px;
      font-size: 0.9vw;
      font-style: normal;
      line-height: 15px;
      text-align: center;
      color: #FFFFFF;
      width: 17vw;
      height: 2.5vw;
    }
    .education_info_text{
      background: #FFFFFF;
      font-family: "Montserrat", sans-serif !important;
      box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      width: 68%;
      padding: 3%;
      margin-top: 3%;
      position: relative;
      p{
        font-style: normal;
        font-weight: normal;
        font-family: "Montserrat", sans-serif !important;
        font-size: 1.26vw; //20px;
        line-height: 1.78vw; //27px;

        color: #000000
      }
    }
  }
  img{
    display: inline-block;
    width: 26vw;
    height: 50vw;
  }
}
.work{
  width: 100vw;
  font-family: "Montserrat", sans-serif !important;
  padding-top: 5vw;
  padding-left: 8vw;
  h1{
    font-style: normal;
    font-weight: bold;
    font-family: "Montserrat", sans-serif !important;
    font-size: 4.89vw; //72px;
    line-height: 6.4vw; //88px;
    letter-spacing: -0.02em;
    color: #1A1A1A;
  }
  .work_item{
    background: #FFFFFF;
    border: 0.5px solid #848484;
    box-sizing: border-box;
    display: inline-block;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    width: 40vw;
    font-family: "Montserrat", sans-serif !important;
    margin-right: 2vw;
    margin-top: 2vw;
    padding-top: 2vw;
    padding-left: 2vw;
    padding-bottom: 1.5vw;
    h2, h3{
      font-style: normal;
      font-weight: bold;
      font-family: "Montserrat", sans-serif !important;
      font-size: 1.91vw; //26px;
      line-height: 2.2vw; //30px;
      letter-spacing: -0.02em;
      color: #000000;
    }
    h3{
      color: grey;
    }
  }
}
.cert{
  width: 100vw;
  font-family: "Montserrat", sans-serif !important;
  padding-top: 5vw;
  padding-left: 8vw;
  position: relative;
  h1{
    font-style: normal;
    font-weight: bold;
    font-family: "Montserrat", sans-serif !important;
    font-size: 4.89vw; //72px;
    line-height: 6.4vw; //88px;
    letter-spacing: -0.02em;
    color: #1A1A1A;
  }
  .cert_1{
    position: absolute;
    left: 0%;
    font-family: "Montserrat", sans-serif !important;
    top: 60%;
  }
  .cert_2{
    position: absolute;
    left: 2%;
    font-family: "Montserrat", sans-serif !important;
    top: 60%;
  }
  .cert_3{
    position: absolute;
    right: 0%;
    top: 0%;
    font-family: "Montserrat", sans-serif !important;
  }
  .cert_img{
    margin-top: 5vw;
    font-family: "Montserrat", sans-serif !important;
    height: 30vw;
    div{
      position: relative;
      width: 22%;
      display: inline-block;
      height: 30vw;
    }
    img{
      width: 90%;
      margin: 10% 5%;
      cursor: pointer;
      transition: 0.5s all ease-in;
    }
    img:hover{
      width: 100%;
      margin: 0%;
    }
  }
  .cert_img_upd{
    position: absolute;
    transform:rotateY(90deg);
  }
}
.sudna{
  width: 100vw;
  font-family: "Montserrat", sans-serif !important;
  padding-top: 5vw;
  padding-left: 8vw;
  padding-bottom: 5vw;
  h1{
    font-style: normal;
    font-weight: bold;
    font-family: "Montserrat", sans-serif !important;
    font-size: 4.89vw; //72px;
    line-height: 6.4vw; //88px;
    letter-spacing: -0.02em;
    color: #1A1A1A;
  }
  .sudna_item{
    display: inline-block;
    margin-right: 1vw;
    font-family: "Montserrat", sans-serif !important;
    height: 300px;
    p{
      font-style: normal;
      font-family: "Montserrat", sans-serif !important;
      font-weight: bold;
      font-size: 1.06vw; //20px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #FFFFFF;
      margin: 0;
      padding-top: 1vw;
    }
    div{
      background: linear-gradient(264.1deg, #063661 0%, #0773D3 99.34%);
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      font-family: "Montserrat", sans-serif !important;
      margin: 0;
      position: relative;
      top: -10px;
      height: 5vw;
    }
    img{ 
      object-fit: contain;
      width: 100%;
      border-radius: 15px 15px 0px 0px;
    }
  }
}
.count{
  width: 100vw;
  font-family: "Montserrat", sans-serif !important;
  padding-top: 5vw;
  padding-bottom: 5vw;
  margin-bottom: 5vw;
  position: relative;
  h1{
    font-style: normal;
    font-weight: bold;
    font-size: 4.89vw; //72px;
    line-height: 6.4vw; //88px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    position: absolute;
    top: 20px;
    font-family: "Montserrat", sans-serif !important;
    z-index: 100;
    margin-left: 8vw;
  }
  .count_numb{
    background: linear-gradient(264.1deg, #063661 0%, #0773D3 99.34%);
    font-family: "Montserrat", sans-serif !important;
    width: 100vw;
    position: relative;
    top:60px;
    .count_numb_1, .count_numb_2{
      font-weight: bold;
      font-size: 229.661px;
      line-height: 280px;
      font-family: "Montserrat", sans-serif !important;
      text-align: center;
      letter-spacing: -0.02em;
      display: inline-block;
      color: #FFFFFF;
      
    }
    .count_numb_1{
      margin-left: 28vw;
    }
    .count_numb_2{
      margin-left: 16vw;
    }

  }
  .count_text{
    background: white;
    width: 100vw;
    height: 150px;
    position: relative;
    font-family: "Montserrat", sans-serif !important;
    top: 40px;
    padding-top: 50px;
    .count_text_1, .count_text_2{
      font-style: normal;
      font-weight: normal;
      font-size: 26px;
      line-height: 31px;
      font-family: "Montserrat", sans-serif !important;
      text-align: center;
      letter-spacing: -0.02em;

      color: #000000;
    }
    .count_text_1{
      margin-left: 27vw;
    }
    .count_text_2{
      margin-left: 15vw;
    }
  }
  .count_know{
    position: relative;
    top: 80px;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    display: block;
    line-height: 43px;
    color: #000000;
    width: 36vw;
    margin-left: 13vw;
  }

}
.feedback{
  width: 100vw;
  height: 40vw;
  font-family: "Montserrat", sans-serif !important;
  background: url("../assets/shtur.png") no-repeat;
  background-color: rgba(19, 19, 19, 0.8);
  background-size: cover;
  font-family: "Montserrat", sans-serif !important;
  position: relative;
  .feedback_form{
    font-family: "Montserrat", sans-serif !important;
    width: 24vw;
    padding-top: 10vw;
    margin-left: 8vw;
    margin-bottom: 5vw;
  }
  h2{
    font-style: normal;
    font-weight: bold;
    font-family: "Montserrat", sans-serif !important;
    font-size: 2.49vw; //34px;
    line-height: 2.9vw; //40px;
    letter-spacing: -0.02em;
    width:50%;
    color: #FFFFFF;
  }
}
.vac{
  width: 100vw;
  font-family: "Montserrat", sans-serif !important;
  padding-top: 5vw;
  padding-left: 8vw;
  padding-bottom: 5vw;
  position: relative;
  h1{
    font-style: normal;
    font-weight: bold;
    font-family: "Montserrat", sans-serif !important;
    font-size: 4.89vw; //72px;
    line-height: 6.4vw; //88px;
    letter-spacing: -0.02em;
    color: #1A1A1A;
  }
  .vac_1{
    position: absolute;
    display: inline-block;
    top: -5%;
    left: 46%;
  }
  .vac_2{
    position: absolute;
    display: inline-block;
    top: 52%;
    right: 0%;
  }
  .vac_3{
    position: absolute;
    display: inline-block;
    top: 32%;
    left: 0%;
  }
}
.vac_list_item{
  position: relative;
  font-family: "Montserrat", sans-serif !important;
      margin-top: 44px;
      width: 100%;



      .vac_list_item_main{
        display: inline-block;
        width: 50%;
        font-family: "Montserrat", sans-serif !important;
        vertical-align: top;
        background: #FFFFFF;
      border: 0.5px solid #848484;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      padding: 36px 2% 36px 2%;
        h1,h2{
          font-style: normal;
          font-weight: bold;
          font-size: 1.81vw;//26px;
          line-height: 2vw; //30px;
          letter-spacing: -0.02em;
          color: #000000;
          font-family: "Montserrat", sans-serif !important;
          margin: 0;
        }
        h2{
          font-size: 1.71vw;
          color: grey;

        }
        p{
          font-style: normal;
          font-weight: normal;
          font-size: 1.22vw; //18px;
          line-height: 1.62vw; //25px;
          margin-top: 24px;
          font-family: "Montserrat", sans-serif !important;
          color: #000000;
          width: 70%;
        }
        button{
          margin-top: 00px;
          height: 47px;
          margin-left: 70%;
          font-family: "Montserrat", sans-serif !important;
          width: 30%;
          font-size: 0.8vw;
        }
      }






      .vac_list_item_dop{
        display: inline-block;
        width: 23%;
        background: #FFFFFF;
        border: 0.5px solid #848484;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif !important;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        margin-top: 10px;
        padding: 35px 5% 35px 3%;
        p{
          margin: 0;
          font-family: "Montserrat", sans-serif !important;
        }
        .vac_list_item_dop_1, .vac_list_item_dop_2{
          font-style: normal;
          font-weight: bold;
          font-family: "Montserrat", sans-serif !important;
          font-size: 1.02vw; //14.2963px;
          line-height: 1.18vw; //17px;
          margin: 12px 0;
          color: #000000;
        }
        .vac_list_item_dop_2{
          font-weight: 300;
          font-family: "Montserrat", sans-serif !important;
        }
      }
    
}
.home img{
  position: absolute;
  z-index: 5;
  width: 53vw;
  top: 16vw;
  left: 23vw;
}
.home{
  position: relative;
  font-family: "Montserrat", sans-serif !important;
}
.home p, .home a{
  position: absolute;
  width: 5vw;
  height: 5vw;
  border-radius: 50px;
  font-family: "Montserrat", sans-serif !important;
  background-color: black;
  z-index: 8;
  opacity: 0;
  cursor: pointer;
}
.home .home_1{
  left: 47vw;
  top: 16vw;
}
.home .home_2{
  left: 55.7vw;
  top: 19.5vw;
}
.home_3{
  left: 59.7vw;
  top: 28.5vw;
}
.home .home_4{
  left: 56vw;
  top: 37.3vw;
}
.home .home_5{
  left: 47vw;
  top: 41vw;
}
.home .home_6{
  left: 38vw;
  top: 19.5vw;
}
.home .home_7{
  left: 35vw;
  top: 28.5vw;
}
.home .home_8{
  left: 38.2vw;
  top: 37.3vw;
}
@keyframes scrollLeft{
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(-15deg);
  }
  66%{
    transform: rotate(15deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
.home_main_img{
  animation: scrollLeft 2s ease-in;
}
</style>
