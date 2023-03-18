<template>
    <div class="pt-28">
        <div class="container mx-auto px-4 lg:px-0">
            <div class="flex gap-10 cursor-pointer mb-10 flex-col lg:flex-row">
                <div class="flex flex-col lg:w-2/3 w-full">
                    <span class="lg:text-2xl text-xl" id="bold">News Updated From Twitter</span>
                    <div class="w-full h-1 bg-black my-6"></div>
                    <span class="text-3xl lg:text-5xl" id="bold">Lorem ipsum dolor sit amet <span class="text-[#f34539]">consectetur adipisicing</span> elit. Sunt provident</span>
                    <span class="my-6 text-black/50 text-sm lg:text-base" id="bold">Marth, 20 2023</span>
                    <span class="text-sm text-black/50 lg:text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit a, unde iusto accusamus quam aperiam repellendus repudiandae quia ad, rerum odio temporibus quaerat dicta nesciunt delectus omnis corrupti dolorum.
                    Veritatis rem tempora ex voluptates ducimus voluptas delectus eveniet repudiandae quae quod. Ea provident temporibus minus maiores placeat corrupti ipsum. Eaque ad similique esse architecto unde, deleniti libero dolorem commodi!</span>
                </div>
                <div class="flex justify-center items-center w-full lg:w-1/3">
                    <img src="@/assets/images/image-1.jpg" class="rounded-md" />
                </div>
            </div>
            <span class="text-2xl lg:text-4xl" id="bold">This Week Update News</span>
            <div class="w-full" v-for="(data, index) in news" :key="index">
                <div class="w-full h-1 bg-black mt-6"></div>
                <div class="flex gap-10 cursor-pointer mt-10 items-center flex-col lg:flex-row">
                    <div class="flex justify-center items-center w-full lg:w-1/3">
                        <img src="@/assets/images/image-4.jpg" />
                    </div>
                    <div class="flex flex-col w-full lg:w-1/3">
                        <span class="text-4xl" id="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident</span>
                        <span class="mt-4 text-black/50" id="bold">Marth, 20 2023</span>
                    </div>
                    <div class="w-full lg:w-1/3">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit a, unde iusto accusamus quam aperiam repellendus repudiandae quia ad, rerum odio temporibus quaerat dicta nesciunt delectus omnis corrupti dolorum.
                        Veritatis rem tempora ex voluptates ducimus voluptas delectus eveniet repudiandae quae quod.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const news = [1, 2, 3, 4, 5]
</script>