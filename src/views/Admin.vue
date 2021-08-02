<template>
    <div class="admin">
        <Header :isMain="isMain" style="z-index: 1000000 !important;position:absolute;"/>
        
        <div v-if="!loading" style="padding-top: 20vh;padding-left: 4vw;">
            <div class="vac_list">
                <div class="vac_list_item" v-for="(item, index) in vacancies" :key="index">
                    <div class="vac_list_item_main">
                        <h1>{{ item.nameVac }}</h1>
                        <h2>{{ item.count }} позиция</h2>
                        <p>{{ item.text }}</p>
                        <v-btn
                            depressed
                            color="primary"
                            @click="deleteSpec(item.id)"
                        >
                            Удалить
                        </v-btn>
                    </div>
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
            </div>

            <div class="vac_form">
                <div class="vac_list_item">
                    <div class="vac_list_item_main">
                        <h1 style="margin: 0;width: 100%;position: absolute;">Форма для заполнения новой должности</h1>
                        <v-text-field
                            style="margin-top: 30px;"
                            label="Название должности"
                            v-model="nameVac"
                            hide-details
                            >
                        </v-text-field>
                        <h2><v-text-field
                            label="Количество"
                            v-model="count"
                            hide-details
                            type="number"
                            style="width:40%;display: inline-block"
                            >
                        </v-text-field> позиция</h2>
                        <v-textarea
                            label="Текст"
                            v-model="text"
                            hide-details
                            auto-grow
                            filled
                            style="margin-top: 20px;"
                            >
                        </v-textarea>
                        <v-btn
                            depressed
                            color="primary"
                            @click="addSpec"
                        >
                            Добавить должность
                        </v-btn>
                    </div>
                    <div class="vac_list_item_dop">
                        <p class="vac_list_item_dop_1">Судно</p>
                        <p class="vac_list_item_dop_2"><v-text-field
                            label="Название судна"
                            v-model="sudno"
                            hide-details
                            style="margin: 0;padding: 0;"
                            >
                        </v-text-field></p>
                        <p class="vac_list_item_dop_1">Продолжительность контракта</p>
                        <p class="vac_list_item_dop_2"><v-text-field
                            label="Продолжительность"
                            v-model="date"
                            hide-details
                            style="margin: 0;padding: 0;"
                            >
                        </v-text-field></p>
                        <p class="vac_list_item_dop_1">Заработная плата</p>
                        <p class="vac_list_item_dop_2"><v-text-field
                            label="Заработная плата"
                            v-model="price"
                            hide-details
                            style="margin: 0;padding: 0;"
                            >
                        </v-text-field></p>
                    </div>
                </div>
            </div>



        </div>

        <v-overlay :value="loading"  :opacity="1" class="">
            <div style="width: 100vw; height: 100vh; padding-top: 40vh;">
                <div class="my-loading d-flex flex-column justify-center align-center">
                    <h1>Подтвердите свои данные</h1>
                    <v-text-field
                        label="Имя"
                        v-model="name"
                        hide-details
                        style="background: rgba(255, 255, 255, 0.3) !important;border: 0.292639px solid #7C7C7C !important;box-sizing: border-box;backdrop-filter: blur(5.85278px) !important;margin-top:30px;padding-left: 10px;"
                        >
                    </v-text-field>
                    <v-text-field
                        label="Пароль"
                        v-model="password"
                        hide-details
                        type="password"
                        style="background: rgba(255, 255, 255, 0.3) !important;border: 0.292639px solid #7C7C7C !important;box-sizing: border-box;backdrop-filter: blur(5.85278px) !important;margin-top:30px;padding-left: 10px;"
                        >
                    </v-text-field>

                    <v-btn color="success" @click="submitAcc" style="margin-top: 5vh;">Подтвердите</v-btn>
                </div>
            </div>
        </v-overlay>
    </div>
</template>



<script>
import Header from '@/components/Header.vue'
export default {
    name: 'Admin',
    data(){
        return{
            isMain: false,
            loading: true,
            name: '',
            password: '',
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
                    name: "Старший помощник капитана",
                    count: 2,
                    text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
                    sudno: 'MCV Беркут, Буксир Талас',
                    time: '4+1 месяца',
                    cost: '1200 USD'
                },
                {
                    name: "Второй помощник капитана",
                    count: 1,
                    text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
                    sudno: 'MCV Беркут, Буксир Талас',
                    time: '4+1 месяца',
                    cost: '1200 USD'
                },
                {
                    name: "Третий помощник капитана",
                    count: 1,
                    text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
                    sudno: 'MCV Беркут, Буксир Талас',
                    time: '4+1 месяца',
                    cost: '1200 USD'
                },
                {
                    name: "Старший механик",
                    count: 3,
                    text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
                    sudno: 'MCV Беркут, Буксир Талас',
                    time: '4+1 месяца',
                    cost: '1200 USD'
                },
                {
                    name: "Второй механик",
                    count: 1,
                    text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
                    sudno: 'MCV Беркут, Буксир Талас',
                    time: '4+1 месяца',
                    cost: '1200 USD'
                },
                {
                    name: "Электромеханик",
                    count: 1,
                    text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
                    sudno: 'MCV Беркут, Буксир Талас',
                    time: '4+1 месяца',
                    cost: '1200 USD'
                },
                {
                    name: "Боцман",
                    count: 1,
                    text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
                    sudno: 'MCV Беркут, Буксир Талас',
                    time: '4+1 месяца',
                    cost: '1200 USD'
                },
                {
                    name: "Матрос",
                    count: 1,
                    text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
                    sudno: 'MCV Беркут, Буксир Талас',
                    time: '4+1 месяца',
                    cost: '1200 USD'
                },
                {
                    name: "Моторист",
                    count: 1,
                    text: 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.',
                    sudno: 'MCV Беркут, Буксир Талас',
                    time: '4+1 месяца',
                    cost: '1200 USD'
                },
            ],
            nameVac: '',
            count: '',
            text: '',
            sudno: '',
            date: '',
            price: '',
        }
    },
    created(){
        this.getVac();
    },
    methods: {
        getVac(){
            this.$axios.get("http://localhost:9000/crewings")
            .then((res)=>{
                this.vacancies = res.data
            })
        },
        addSpec(){
            var config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };
            if(this.nameVac.length > 0 && this.count.length > 0 && this.text.length > 0 && this.sudno.length > 0 && this.date.length > 0 && this.price.length > 0){
                this.$axios.post(`http://localhost:9000/addCrewing`, {
                    nameVac: this.nameVac,
                    count: this.count, 
                    text: this.text,
                    sudno: this.sudno,
                    date: this.date,
                    price: this.price
                }, config)
                .then((res)=>{
                    this.nameVac = ''
                    this.count = ''
                    this.text = ''
                    this.sudno = ''
                    this.date = ''
                    this.price = ''
                    console.log(res)
                    this.getVac();
                    alert("Добавлена новая вакансия")
                })
            }
            else{
                alert("Введите все данные формы")
            }
        },
        deleteSpec(id){
            var config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };
            this.$axios.delete(`http://localhost:9000/crewingsDelete/${id}`, config)
            .then((res)=>{
                console.log(res)
                this.getVac();
                alert("Удалена вакансия")
            })
        },
        submitAcc(){
            if(this.name == "admin" && this.password == "something"){
                this.loading = false;
                alert("Вы успешно подтвердили свою личность")
            }
            else{
                alert("Неправильно введены данные")
            }
        }
    },
    components: {
        Header
    }
}
</script>


<style lang="scss">
.vac_list{
    width: 43vw;
    display: inline-block;
}
.vac_form{
    width: 47vw;
    display: inline-block;
    margin-left: 2vw;
    vertical-align: top;
}
.vac_list_item{
    margin-top: 44px;
    width: 100%;
    background: #FFFFFF;
    border: 0.5px solid #848484;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 36px 0 36px 5%;
    .vac_list_item_main{
      display: inline-block;
      width: 50%;
      vertical-align: top;
      h1,h2{
        font-style: normal;
        font-weight: bold;
        font-size: 1.81vw;//26px;
        line-height: 2vw; //30px;
        letter-spacing: -0.02em;
        color: #000000;
        margin: 0;
      }
      h2{
        font-size: 1.71vw;
        color: grey;
        input{
            font-weight: 300;
        }
      }
      p{
        font-style: normal;
        font-weight: normal;
        font-size: 1.22vw; //18px;
        line-height: 1.62vw; //25px;
        margin-top: 24px;
        color: #000000;
      }
      button{
        margin-top: 70px;
        height: 47px;
      }
    }
    .vac_list_item_dop{
      display: inline-block;
      width: 34%;
      background: #FFFFFF;
      border: 0.5px solid #848484;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      margin-left: 5%;
      margin-top: 60px;
      padding: 15px 5% 15px 3%;
      p{
        margin: 0;
      }
      .vac_list_item_dop_1, .vac_list_item_dop_2{
        font-style: normal;
        font-weight: bold;
        font-size: 1.02vw; //14.2963px;
        line-height: 1.18vw; //17px;
        margin: 9px 0;
        color: #000000;
      }
      .vac_list_item_dop_2{
        font-weight: 300;
      }
    }
}
</style>