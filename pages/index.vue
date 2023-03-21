<style scoped>

@keyframes blink {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

<template>
    <div class="container mx-auto lg:px-4 px-0">
        <div class="w-full h-screen flex justify-between lg:justify-center items-center gap-10 flex-col-reverse lg:flex-row">
            <div class="w-full lg:w-1/3 flex items-center justify-end h-[600px] lg:h-full overflow-hidden pr-0 lg:pr-10">
                <div class="w-fit relative">
                    <video autoplay muted loop class="border-0 lg:border-[16px] border-white lg:rounded-3xl shadow-2xl lg:w-[300px] w-full">
                        <source src="@/assets/videos/hero-video.mp4" type="video/mp4"> 
                    </video>
                    <div class="hidden lg:flex absolute -top-4 -left-4 h-5 w-5 border-t-2 border-l-2 rounded-tl-3xl border-gray-300"></div>
                    <div class="hidden lg:flex absolute -top-4 -right-4 h-5 w-5 border-t-2 border-r-2 rounded-tr-3xl border-gray-300"></div>
                    <div class="hidden lg:flex absolute -bottom-4 -left-4 h-5 w-5 border-b-2 border-l-2 rounded-bl-3xl border-gray-300"></div>
                    <div class="hidden lg:flex absolute -bottom-4 -right-4 h-5 w-5 border-b-2 border-r-2 rounded-br-3xl border-gray-300"></div>
                </div>
            </div>
            <div class="w-full lg:w-1/3 flex flex-col pt-28 lg:pt-0 px-4 lg:px-0">
                <span id="bold">Hallo Welcome To The <span class="text-[#f34539]">ZaanBasyar</span></span>
                <Typewriter class="py-4 lg:py-8" />
                <div class="relative w-fit group">
                    <button class="px-10 py-4 text-[#f34539]" id="semibold">Lets Talk</button>
                    <div class="absolute top-0 left-0 w-[5px] h-[5px] bg-[#f34539] group-hover:w-full duration-300"></div>
                    <div class="absolute top-0 left-0 w-[5px] h-[5px] bg-[#f34539] group-hover:h-full duration-300"></div>
                    <div class="absolute bottom-0 right-0 w-[5px] h-[5px] bg-[#f34539] group-hover:w-full duration-300"></div>
                    <div class="absolute bottom-0 right-0 w-[5px] h-[5px] bg-[#f34539] group-hover:h-full duration-300"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full bg-black">
        <div class="container mx-auto text-white px-4 py-8 flex justify-between">
            <div class="w-2/4">
                <span class="text-4xl" id="bold">What We Do</span>
                <div class="my-6 bg-white/50 w-full h-[1px]"></div>
                <div class="flex relative w-fit">
                    <div v-for="(data, index) in datas" :key="index" class="w-7 flex justify-center cursor-pointer" id="number" :class="{'text-white' : index + 1 === view, 'text-white/50' : index + 1 !== view}" @click="handleClick(index + 1)">
                        {{ index + 1 }}
                    </div>
                    <div class="absolute -right-6 cursor-pointer" @click="handleNext">
                        <img src="@/assets/images/icon-arrow.svg" />
                    </div>
                </div>
                <div class="flex flex-col mt-6">
                    <span class="text-4xl text-[#f34539]" id="bold">{{ title }}</span>
                    <span class="mt-4 text-white/50">{{ subTitle }}</span>
                </div>
            </div>
            <div class="gap-6">
                <div class="flex items-center gap-4">
                    <div class="w-fit relative">
                        <video autoplay loop class="shadow-2xl lg:w-[700px] w-full" ref="videoPlayer" muted>
                            <source :src="video" type="video/mp4"> 
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    data() {
        return {
            default: 1,
            view: 1,
            video: `/_nuxt/assets/videos/cinematik-1.mp4`,
            secondVideo: '/_nuxt/assets/videos/cinematik-2.mp4',
            datas: [
                {
                    id: 1,
                    title: "Hallo World 1",
                    subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eum nobis molestias, distinctio expedita facilis iusto voluptas, optio nesciunt dolores debitis. Voluptates sapiente quidem nemo rerum illum perferendis, veniam provident?",
                    videoPath: "/_nuxt/assets/videos/cinematik-1.mp4"
                },
                {
                    id: 2,
                    title: "Hallo World 2",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatem ducimus dignissimos? In fugiat maxime laborum id ipsam! At sint dicta hic minima provident dolor quia inventore asperiores magni voluptatem.",
                    videoPath: "/_nuxt/assets/videos/cinematik-2.mp4"
                },
                {
                    id: 3,
                    title: "Hallo World 3",
                    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate, incidunt est quae veritatis odit iure non aliquid cupiditate quas autem ut consequatur quis corrupti. Harum earum quaerat deserunt eligendi.",
                    videoPath: "/_nuxt/assets/videos/cinematik-3.mp4"
                },
                {
                    id: 4,
                    title: "Hallo World 4",
                    subTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum dolor dolore ut veritatis, pariatur consequuntur minima illum dolorem, consequatur repellat iste soluta alias quo aliquam tempore nisi eos autem.",
                    videoPath: "/_nuxt/assets/videos/cinematik-4.mp4"
                },
                {
                    id: 5,
                    title: "Hallo World 5",
                    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam ipsum ut sapiente, nemo quae cum quod natus perspiciatis ipsa neque omnis recusandae accusantium maxime aut necessitatibus iure modi hic.",
                    videoPath: "/_nuxt/assets/videos/cinematik-1.mp4"
                },
                {
                    id: 6,
                    title: "Hallo World 6",
                    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum! Totam, perspiciatis laudantium esse sit culpa corporis porro accusantium. Cum consectetur tenetur tempore atque reprehenderit consequatur nesciunt unde architecto non.",
                    videoPath: "/_nuxt/assets/videos/cinematik-2.mp4"
                },
                {
                    id: 7,
                    title: "Hallo World 7",
                    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus, sunt nobis iusto vero blanditiis deleniti impedit. Dicta, culpa, laborum voluptas dolorum molestias accusantium repellat quo dolor cupiditate fugit eos.",
                    videoPath: "/_nuxt/assets/videos/cinematik-3.mp4"
                },
                {
                    id: 8,
                    title: "Hallo World 8",
                    subTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, delectus odit dolorum velit voluptatum deleniti non itaque eius mollitia accusantium, odio molestiae quisquam illo maxime? Facilis, voluptas consectetur. Eius, amet?",
                    videoPath: "/_nuxt/assets/videos/cinematik-4.mp4"
                },
            ],
            title: 'Hallo World 1',
            subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eum nobis molestias, distinctio expedita facilis iusto voluptas, optio nesciunt dolores debitis. Voluptates sapiente quidem nemo rerum illum perferendis, veniam provident?',
        }
    },
    methods: {
        handleClick(number) {
            this.view = number
            this.title = this.objectById.title 
            this.subTitle = this.objectById.subTitle
            this.video = this.objectById.videoPath
            this.$refs.videoPlayer.load();
        },
        handleNext() {
            this.view = this.view + 1
            this.objectById
            if (this.view >= this.datas.length) {
                this.view = this.datas.length
            }
            this.title = this.objectById.title
            this.subTitle = this.objectById.subTitle
            this.video = this.objectById.videoPath
            this.$refs.videoPlayer.load();
        },
    },
    computed: {
        objectById() {
            return this.datas.find(item => item.id === this.view);
        }
    },
})
</script>