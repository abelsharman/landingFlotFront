<template>
    <div class="header">
       <a href="/" class="header_img"><img :class="{ header_logo_scroll : !isMain }" src="../assets/loading.png" alt=""></a>
        <div class="header_nav">
            <a href="/">Главная</a>
            <a href="/vacancies">Вакансии</a>
            <a href="/sudy">Виды судов</a>
        </div>
        <a class="header_tel" href="tel:+78633220190">+7 (863) 322 01 90</a>


        <v-app-bar
            style="background: linear-gradient(264.1deg, #063661 0%, #078FD3 99.34%);"
            dark
            prominent
            class="header_mobile"
        >
            <a href="/"><img :class="{ header_logo_scroll : !isMain }" src="../assets/loading.png" alt=""></a>
            <p>Marine Personal & Consulting</p>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            left
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    active-class="deep-purple--text text--accent-4"
                    >
                    <v-list-item>
                        <v-list-item-title>Foo</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Bar</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Fizz</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Buzz</v-list-item-title>
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
            drawer: false,
        }
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
    .header_mobile img{
        width: 13vw;
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