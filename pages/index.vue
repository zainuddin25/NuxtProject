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
    <div class="container mx-auto mt-20 px-4 lg:px-0">
        <div class="flex justify-between items-start gap-10 flex-col-reverse lg:flex-row">
            <div class="w-full lg:w-1/3">
                <img src="@/assets/images/image-3.jpg" class="rounded-xl" />
            </div>
            <div class="w-full lg:w-2/3 flex flex-col lg:items-start text-center items-center lg:text-start">
                <span class="text-xl" id="bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nostrum provident omnis unde maxime dolor accusantium nemo.</span>
                <span class="text-xs text-black/50 my-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas alias vero optio nostrum animi cumque ab eligendi sequi pariatur temporibus illo, quidem veritatis nemo totam mollitia reprehenderit quod eum!
                    Debitis distinctio atque dolores eligendi inventore assumenda iure in est sint voluptates animi, eius repudiandae, a numquam. Iure veniam voluptatibus libero, id incidunt sunt unde ullam quidem aliquid, sint perferendis?
                    Qui nostrum nobis ad, dolores doloribus provident veritatis optio sit libero consectetur, eaque tempora eligendi. Quis mollitia quo nesciunt numquam autem optio exercitationem quae sit. Tenetur blanditiis iure eum possimus.
                </span>
                <span class="text-xs text-black/50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laudantium molestias unde quae porro, facilis dignissimos eos sapiente perferendis sequi debitis amet quibusdam, sint minus ratione earum cumque quas. Est.
                    Harum ratione ex voluptatibus, modi, quasi suscipit sequi nisi doloribus accusantium adipisci neque quia aliquam recusandae rem distinctio obcaecati possimus ipsa. Sapiente officiis eum error dicta veniam cum vel esse!
                    Officiis id earum ut sequi veritatis at nemo distinctio rerum et repellendus illo eligendi, cupiditate illum, dolor commodi animi blanditiis sint quidem doloremque facilis, tenetur laboriosam mollitia laudantium! Doloremque, itaque!
                </span>
                <button class="text-sm mt-6 px-4 py-2 border border-black/50 text-black/50 rounded-md">
                    Show All Project
                </button>
            </div>
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