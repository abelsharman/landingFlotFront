<template>
    <div class="sudy">
        <Header :isMain="isMain"/>
        <Loading :loading="loading"/>
        <div class="sudy_list">
            <h1>Виды судов.</h1>
            <div>
                <img src="../assets/kar4.png" alt="">
                <div style="background: #C4C4C4;height:3px;width:8vw;display:inline-block;position:relative;top:-20px;"></div>
                <p>Судно-контейнеровоз</p>
            </div>
            <div>
                <p style="border-radius: 0px 20px;">Плавучая гостиница</p>
                <div style="background: #C4C4C4;height:3px;width:8vw;display:inline-block;position:relative;top:-20px;"></div>
                <img src="../assets/kar2.png" alt="">
            </div>
            <div>
                <img src="../assets/kar1.png" alt="">
                <div style="background: #C4C4C4;height:3px;width:8vw;display:inline-block;position:relative;top:-20px;"></div>
                <p>Нефтеналивной танкер</p>
            </div>
            <div>
                <p style="border-radius: 0px 20px;">Судно для перевозки модулей</p>
                <div style="background: #C4C4C4;height:3px;width:8vw;display:inline-block;position:relative;top:-20px;"></div>
                <img src="../assets/kar3.png" alt="">
            </div>
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
    <Footer />
    </div>
</template>


<script>
import Loading from '@/views/Loading.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Sudy',
    data(){
        return{
            loading: true,
            isMain: false,
            name: '',
            phone: '',
        }
    },
    components: {
        Loading, 
        Header,
        Footer
    },
    methods: {
        send(){
            let name = this.name
            let phone = this.phone
            this.$axios.post(`http://localhost:9000/send?name=${name}&phone=${phone}`)
            .then((res)=>{
                console.log(res)
                if(res){
                this.popup = false
                this.name = ''
                this.phone = ''
                alert("Отправлено")
                }
            })
        },
    },
    created(){
        setTimeout(()=>{
            this.loading = false
        }, 2500)
  } ,
}
</script>



<style lang="scss" scoped>
.sudy_list{
    margin-left: 15vw;
    font-family: "Montserrat", sans-serif !important;
    h1{
        font-style: normal;
        font-weight: bold;
        font-size: 4.4vw;
        line-height: 88px;
        color: #000000;
        margin-top: 60px;
        margin-bottom: 94px;
    }
    div{
        margin-bottom: 122px;
        img{
            width: 34vw;
            display: inline-block;
        }
        p{
            display: inline-block;
            font-style: normal;
            font-weight: bold;
            font-size: 1.5vw;
            line-height: 2.4vw;
            width: 20vw;
            text-align: center;
            padding: 1.5vw 0.4vw;
            color: #FFFFFF;
            background: #0773D3;
            border-radius: 20px 0px;
            position: relative;
            top: -140px;
        }
    }
}
.feedback{
  width: 100vw;
  height: 40vw;
  font-family: "Montserrat", sans-serif !important;
  background: url("../assets/shtur.png") no-repeat;
  background-color: rgba(19, 19, 19, 0.8);
  background-size: cover;
  position: relative;
  .feedback_form{
    width: 24vw;
    padding-top: 10vw;
    margin-left: 8vw;
    margin-bottom: 5vw;
  }
  h2{
    font-style: normal;
    font-weight: bold;
    font-size: 2.49vw; //34px;
    line-height: 2.9vw; //40px;
    letter-spacing: -0.02em;
    width:50%;
    color: #FFFFFF;
  }
}
</style>