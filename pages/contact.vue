<template>
    <div class="container mx-auto px-4 pt-28 mb-28">
        <div class="flex justify-center">
            <span class="text-center text-4xl" id="bold">Talk With Us</span>
        </div>
        <div class="w-full mt-10">
            <div class="flex items-center gap-4 lg:gap-10">
                <div class="w-2/4">
                    <input placeholder="Your Username" class="w-full px-4 py-4 rounded-md outline-none" />
                </div>
                <div class="w-2/4">
                    <input placeholder="Your Email" class="w-full px-4 py-4 rounded-md outline-none" />
                </div>
            </div>
            <textarea class="mt-4 lg:mt-10 w-full h-96 p-4 outline-none rounded-md" placeholder="Your Message"></textarea>
            <div class="w-full flex justify-center items-center mt-6">
                <NuxtLink to="/contact">
                    <button class="border-[3px] border-black px-8 py-4 hover:bg-black hover:text-white text-black duration-200" id="semibold">Lets Talk With Us</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>