<template>
    <div class="w-full h-screen flex items-center relative px-4" id="hero">
        <div class="container mx-auto flex justify-between items-center">
            <div class="w-full lg:w-2/4 flex flex-col items-start">
                <span class="text-sm text-[#f34539] lg:text-base" id="semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit</span>
                <span class="my-4 text-2xl lg:text-4xl uppercase" id="bold">Lorem ipsum dolor sit amet <span class="text-[#f34539]">consectetur adipisicing</span> elit. Officiis quasi quas nihil</span>
                <span class="lg:text-sm text-black/50 text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quos. Tempora vel ipsum officia quos temporibus consequuntur reiciendis dolores, explicabo voluptate sunt at, cumque cupiditate illum possimus facere dicta velit! Amet omnis rem assumenda ea, sed velit laudantium officia eos error officiis minus quidem, aliquam accusamus inventore asperiores blanditiis possimus totam, fugit aliquid placeat qui. Tenetur nemo excepturi recusandae reiciendis.</span>
                <button class="mt-4 text-sm px-4 py-2 lg:px-8 lg:py-3 border-2 rounded-md text-[#f34539] border-[#f34539] hover:bg-[#f34539] hover:text-white duration-200">
                    Contact Now
                </button>
            </div>
        </div>
    </div>
    <div class="container mx-auto grid grid-cols-1 xl:grid-cols-4 my-6 gap-y-6">
        <div class="w-full flex flex-col items-center mt-10" v-for="(items, index) in service" :key="index">
            <img src="@/assets/images/icon-turbine.svg" class="w-16" alt="icon" />
            <span class="mt-8 text-2xl text-[#f34539]" id="bold">{{ items.title }}</span>
            <span class="w-[80%] mx-auto text-xs text-center mt-4 text-black/50">{{ items.subtitle }}</span>
            <NuxtLink class="text-xs mt-6 text-black/50" to="/service">View More</NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                service: [ 
                    {
                        img: '@/assets/images/icon-turbine.svg',
                        title: '2D Modeling',
                        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt consequuntur delectus laboriosam nam earum, dignissimos, enim culpa dolor beatae repellat sit aperiam ad mollitia sint a. Et, culpa doloremque?'
                    },
                    {
                        img: '@/assets/images/icon-turbine.svg',
                        title: '3D Modeling',
                        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt consequuntur delectus laboriosam nam earum, dignissimos, enim culpa dolor beatae repellat sit aperiam ad mollitia sint a. Et, culpa doloremque?'
                    },
                    {
                        img: '@/assets/images/icon-turbine.svg',
                        title: 'Character  Modeling',
                        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt consequuntur delectus laboriosam nam earum, dignissimos, enim culpa dolor beatae repellat sit aperiam ad mollitia sint a. Et, culpa doloremque?'
                    },
                    {
                        img: '@/assets/images/icon-turbine.svg',
                        title: 'Environmental  Modeling',
                        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt consequuntur delectus laboriosam nam earum, dignissimos, enim culpa dolor beatae repellat sit aperiam ad mollitia sint a. Et, culpa doloremque?'
                    },
                    {
                        img: '@/assets/images/icon-turbine.svg',
                        title: 'Animation',
                        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt consequuntur delectus laboriosam nam earum, dignissimos, enim culpa dolor beatae repellat sit aperiam ad mollitia sint a. Et, culpa doloremque?'
                    },
                    {
                        img: '@/assets/images/icon-turbine.svg',
                        title: 'Cover Art',
                        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt consequuntur delectus laboriosam nam earum, dignissimos, enim culpa dolor beatae repellat sit aperiam ad mollitia sint a. Et, culpa doloremque?'
                    },
                    {
                        img: '@/assets/images/icon-turbine.svg',
                        title: 'More',
                        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt consequuntur delectus laboriosam nam earum, dignissimos, enim culpa dolor beatae repellat sit aperiam ad mollitia sint a. Et, culpa doloremque?'
                    },
                ]
            }
        }
    }
</script>