<template>
    <div class="w-full bg-black mt-20 px-4">
        <div class="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 text-[#f5f5f5] py-10">
            <div class="w-full flex flex-col">
                <span class="text-lg" id="bold">LOREM IPSUM DOLOR SIT AMET <span class="text-[#f34539]">CONSECTETUR ADIPISICING</span> ELIT. OFFICIIS QUASI QUAS NIHIL</span>
                <span class="mt-4 text-xs text-[#f5f5f5]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias natus facere dignissimos veritatis amet quisquam nihil magni accusamus! Earum quidem, saepe quia libero cum nisi sequi neque illo reiciendis sint?</span>
            </div>
            <div class="flex flex-col w-full">
                <span class="text-lg" id="bold">About This Page</span>
                <div class="mt-4 flex flex-col gap-2">
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">About US</NuxtLink>
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">Profile</NuxtLink>
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">Career</NuxtLink>
                </div>
            </div>
            <div class="flex flex-col w-full">
                <span class="text-lg" id="bold">Our Service</span>
                <div class="mt-4 flex flex-col gap-2">
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">2D Modeling</NuxtLink>
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">3D Modeling</NuxtLink>
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">Character Modeling</NuxtLink>
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">Environmental Modeling</NuxtLink>
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">Animation</NuxtLink>
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">Cover Art</NuxtLink>
                    <NuxtLink to="/" class="text-sm text-[#f5f5f5]">More</NuxtLink>
                </div>
            </div>
            <div>
                <span class="text-lg" id="bold">Contact Us</span>
                <div class="w-full mt-4">
                    <input type="text" placeholder="Your Username..." class="text-xs px-4 py-2 w-full rounded-md outline-none" />
                    <input type="text" placeholder="Your Email..." class="text-xs px-4 py-2 w-full rounded-md outline-none my-2" />
                    <textarea class="w-full h-20 rounded-md outline-none px-4 py-2 text-xs" placeholder="Your Message..."></textarea>
                    <button class="text-xs px-4 py-2 mt-2 border-2 border-white rounded-md">Send Message</button>
                </div>
            </div>
        </div>
        <div class="container mx-auto border-b-2 border-[#f5f5f5]"></div>
        <div class="py-10 text-[#f5f5f5] container mx-auto">
            <p class="text-center text-xs">&copy; copyright <span>ZaanBasyar</span> 2023</p>
        </div>
    </div>
</template>