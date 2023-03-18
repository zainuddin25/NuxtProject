<template>
    <div class="container mx-auto px-4 pt-28">
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
            <div class="w-full lg:w-[20%] mx-auto mt-4 lg:mt-10">
                <button class="w-full border-2 border-[#f34539] py-4 rounded-lg text-[#f34539]">
                    Send Message
                </button>
            </div>
        </div>
    </div>
</template>