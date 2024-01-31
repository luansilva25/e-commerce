<template>
    <VCarousel cycle show-arrows="hover">
        	<VCarouselItem v-for="img in imagens" :key="img.id" >
                <VImg :src="img.img"></VImg>
            </VCarouselItem>
    </VCarousel>
</template>
<script setup>
import { reactive } from "vue";

    const imagens = reactive([
        {
            id: 1,
            img: "https://www.innovasport.com/medias/IS-S23867-5.png?context=bWFzdGVyfGltYWdlc3w1MTMxMDR8aW1hZ2UvcG5nfGltYWdlcy9oNjIvaDcxLzEwMzc4MjA5MjYzNjQ2LnBuZ3w1NzFlNzU0OTUwNmU3YTY2M2Q2ZTNjYmRjODBmNzdhMGY2ODhlYzdhZTY3NTQ3NWY1NDMwYmRjMzhkOGEzMzM0" 
        },
        {
            id: 2,
            img: "https://tse1.mm.bing.net/th?id=OIP.kPsWjAxnpEQ9Bt5BYjzGcQHaHa&amp;pid=Api&amp;P=0&amp;w=400&amp;h=400"
        },
        {
            id: 3,
            img: "https://thumblr.uniid.it/product/207977/0e85387f6829.jpg"
        },
        {
            id: 4,
            img: "https://tse1.mm.bing.net/th?id=OIP.PA2Wzxn9c-4H40zqlmpNPgHaIp&amp;pid=Api&amp;P=0&amp;w=400&amp;h=467" 
        },
        {
            id: 5,
            img: "https://tse2.mm.bing.net/th?id=OIP.LIOT7jM7Exfr1Xm34BRY6gHaHa&amp;pid=Api&amp;P=0&amp;w=400&amp;h=400"
        },
        {
            id: 6,
            img: "https://static.dafiti.com.br/p/adidas-Originals-Jaqueta-Bomber-adidas-Originals-Bordado-Preta-8034-2302154-3-zoom.jpg" 
        },
        {
            id: 7,
            img: "https://tse1.mm.bing.net/th?id=OIP.NBdA2AFBHjFQ8R-FkluPGgHaHa&amp;pid=Api&amp;P=0&amp;w=400&amp;h=400" 
        },
        {
            id: 8,
            img: "https://tse2.mm.bing.net/th?id=OIP.cncN3nVta05oMQ230Ou6CAHaHa&amp;pid=Api&amp;P=0&amp;w=400&amp;h=400" 
        },
        {
            id: 9,
            img: "https://zapaswalk.com/wp-content/uploads/2020/03/0ae67245562fc53e9ee1ed4071e5787c.jpeg"
        },
        {
            id: 10,
            img: "https://tse2.mm.bing.net/th?id=OIP.RYvXFKYdReJdKouQ3Ue2bQHaKu&amp;pid=Api&amp;P=0&amp;w=400&amp;h=580"
        }
    ])
</script>