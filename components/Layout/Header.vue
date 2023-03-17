<template>
    <div class="w-full fixed top-0 py-6 px-4 z-50">
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
            </ul>
            <div class="w-9 flex flex-col lg:hidden">
                <div class="w-full h-1 bg-black"></div>
                <div class="w-full h-1 bg-black my-1.5"></div>
                <div class="w-full h-1 bg-black"></div>
            </div>
        </div>
    </div>
</template>