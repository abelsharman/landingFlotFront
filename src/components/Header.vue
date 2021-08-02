<template>
    <div class="header" :style="[isMain && width < 456 ? {'background-color': 'transparent'} : {}]">
       <a href="/" class="header_img"><img :class="{ header_logo_scroll : !isMain }" src="../assets/loading.png" alt=""></a>
        <div class="header_nav">
            <a href="/">Главная</a>
            <a href="/vacancies">Вакансии</a>
            <a href="/sudy">Виды судов</a>
        </div>
        <a class="header_tel" href="tel:+78633220190">+7 (863) 322 01 90</a>


        <v-app-bar
            :style="[!isMain ? {'background': 'white'} : {'background': 'transparent'}]"
            style="height: 93px;box-shadow:none"
            dark
            prominent
            class="header_mobile"
        >
            <a href="/"><img class="header_mobile_img" :class="{ header_logo_scroll : !isMain }" src="../assets/new_logo.png" alt=""></a>
            <p :style="[isMain ? {color: 'white'} : {color: '#173760'}]">Marine Personal & Consulting</p>
            <v-app-bar-nav-icon large @click.stop="drawer = !drawer" style="margin-left: 30vw;margin-top:24px;" :style="[isMain ? {color: 'white'} : {color: '#173760'}]"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            left
            temporary
            style="background: linear-gradient(264.1deg, #063661 0%, #078FD3 99.34%);position: fixed;"
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    active-class="deep-purple--text text--accent-4"
                    style="margin-top: 30px;"
                    >
                    <v-list-item>
                        <v-list-item-title><a style="color: white;text-decoration: none;font-size: 4vw;" class="header_mobile_a" href="/">Главная</a></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title><a style="color: white;text-decoration: none;font-size: 4vw;" class="header_mobile_a" href="/vacancies">Вакансии</a></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title><a style="color: white;text-decoration: none;font-size: 4vw;" class="header_mobile_a" href="/sudy">Виды судов</a></v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            </v-navigation-drawer>

    </div>
</template>


<script>
export default {
    name: 'Header',
    data(){
        return {
            width: window.innerWidth,
            drawer: false,
        }
    },
    mounted(){
        setTimeout(()=>{
            let images = document.querySelectorAll(".header_mobile_img")
            console.log(images)
            for(let item of images){
                console.log(item)
                // if(this.isMain){
                //     item.src= "/img/loading.cf9d4046.png"
                // }
                // else{
                //     item.src= "http://localhost:8080/assets/new_logo.png"
                // }
            }
            console.log(images)
        }, 1000)
    },
    props: {
        isMain: Boolean
    },
}
</script>


<style lang="scss">
@media screen and (min-width: 456px) {
    .header{
        font-family: "Montserrat", sans-serif !important;
        height: 123px;
        width: 100vw;
        padding-left: 8vw;
        background: linear-gradient(264.1deg, #063661 0%, #078FD3 99.34%);
        img{
            height: 81%;
            position: relative;
            top: 11px;
            display: inline-block;
        }
        .header_mobile{
            display: none;
        }
        .header_nav{
            margin-left: 19vw;
            width: 45vw;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            top: -35px;
            p, a{
                margin: 0 2vw;
                display: inline-block;
                font-family: "Montserrat", sans-serif !important;
                font-style: normal;
                font-weight: 350;
                font-size: 1.222vw; //18px;
                top: 0px;
                line-height: 24px;
                text-align: center;
                text-decoration: none;
                color: #FFFFFF !important;
                cursor: pointer;
            }
        }
        .header_tel{
            display: inline-block;
            width: max-content;
            text-decoration: none;
            font-family: "Montserrat", sans-serif !important;
            font-style: normal;
            font-weight: 350;
            font-size: 1.222vw; //18px;
            line-height: 24px;
            position: relative;
            margin-left:6vw;
            top: -35px;
            color: #fff !important;
            cursor: pointer;
        }

    }
}

@media screen and (max-width: 456px) {
    .header_img, .header_nav, .header_tel{
        display: none;
    }
    .header{
        background: transparent;
        height: 93px;
        position: relative;
        top: 93px;
        z-index: 999;
    }
    .header_mobile {
        img{
            width: 13vw;
            margin-top: 20px;
        }
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 2.4vw;
            line-height: 12px;
            letter-spacing: 0.255em;
            text-transform: uppercase;
            color: white;
            margin-top: 36px;
            width: 33vw;
            margin-left: 8px;
        }
    }
}
@keyframes rotateBlock {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.header_logo_scroll{
    animation: infinite 10s rotateBlock ease-in-out;
}
</style>