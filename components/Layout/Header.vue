<template>
    <div class="w-full fixed top-0 py-6 px-4 z-50 bg-[#f5f5f5]">
        <div class="container mx-auto flex justify-between items-center">
            <span class="text-black text-xl lg:text-2xl" id="bold">ZaanBasyar</span>
            <ul class="gap-10 hidden lg:flex">
                <li class="relative group">
                    <NuxtLink to="/" class="text-black group-hover:text-[#f34539] duration-200" id="semibold">Home</NuxtLink>
                    <div class="absolute -bottom-2 w-0 h-1 bg-[#f34539] group-hover:w-full duration-200"></div>
                </li>
                <li class="relative group">
                    <NuxtLink to="/work" class="text-black group-hover:text-[#f34539] duration-200" id="semibold">Work</NuxtLink>
                    <div class="absolute -bottom-2 w-0 h-1 bg-[#f34539] group-hover:w-full duration-200"></div>
                </li>
                <li class="relative group">
                    <NuxtLink to="/news" class="text-black group-hover:text-[#f34539] duration-200" id="semibold">News</NuxtLink>
                    <div class="absolute -bottom-2 w-0 h-1 bg-[#f34539] group-hover:w-full duration-200"></div>
                </li>
                <li class="relative group">
                    <NuxtLink to="/news" class="text-black group-hover:text-[#f34539] duration-200" id="semibold">Contact</NuxtLink>
                    <div class="absolute -bottom-2 w-0 h-1 bg-[#f34539] group-hover:w-full duration-200"></div>
                </li>
                |
                <li class="flex items-center gap-4">
                    <NuxtLink to="/" target="_blank" class="text-black group-hover:text-[#f34539] duration-200 text-xs">
                        <div class="flex items-center gap-1">
                            <img src="@/assets/images/icon-phone.svg" class="w-4" />
                            +1 234 567 890
                        </div>
                    </NuxtLink>
                    <NuxtLink to="https://gmail.com" target="_blank" class="text-black group-hover:text-[#f34539] duration-200 text-xs">
                        <div class="flex items-center gap-1">
                            <img src="@/assets/images/icon-message.svg" class="w-4" />
                            compeny@name.com
                        </div>
                    </NuxtLink>
                </li>
            </ul>
            <div class="w-9 flex flex-col items-end lg:hidden cursor-pointer" @click="openMenu()">
                <div class="w-full h-1 bg-black"></div>
                <div class="w-3/4 h-1 bg-black my-1.5"></div>
                <div class="w-2/4 h-1 bg-black"></div>
            </div>
            <div :class="{'fixed' : status, 'hidden' : !status}" class="top-0 left-0 bg-white w-full h-full">
                <div class="w-full h-fit relative py-6 px-4 flex justify-between items-center">
                    <span class="text-black text-xl lg:text-2xl" id="bold">ZaanBasyar</span>
                    <div class="w-8 flex flex-col items-end lg:hidden cursor-pointer relative" @click="closeMenu()">
                        <div class="w-full h-1 bg-black absolute top-0 rotate-45 rounded-full"></div>
                        <div class="w-full h-1 bg-black absolute top-0 -rotate-45 rounded-full"></div>
                    </div>
                </div>
                <div class="h-full px-4 flex flex-col">
                    <NuxtLink to="/" class="pb-4">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/" class="pb-4">
                        Work
                    </NuxtLink>
                    <NuxtLink to="/" class="pb-4">
                        News
                    </NuxtLink>
                    <NuxtLink to="/" class="pb-4">
                        Contact
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: false
        }
    },
    methods: {
        openMenu() {
            this.status = true;
        },
        closeMenu() {
            this.status = false
        }
    }
}
</script>