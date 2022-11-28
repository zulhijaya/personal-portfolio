<template>
    <div>
        <div class="flex items-center space-x-10">
            <div class="w-5/12">
                <div class="font-semibold text-purple-main w-2 h-4 -rotate-[25deg] -ml-4">Hello!</div>
                <h1 class="font-semibold text-6xl leading-[1.15] mb-10">We have <br> Design <br> Experience</h1>
                <div class="flex space-x-5 mb-10">
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 -ml-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur quia perferendis cupiditate, obcaecati!</div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex items-center space-x-2">
                        <button class="border-2 border-[#8873EF] bg-[#8873EF] px-5 py-4 rounded-2xl text-sm text-white">
                            <div class="flex items-center space-x-4">
                                <span class="font-semibold">Let's Chat</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-rotate-45 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </div>
                        </button>
                        <button class="px-5 py-4 text-sm">
                            <div class="flex items-center space-x-4">
                                <span class="font-semibold">Portfolio</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rotate-45 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-7/12">
                <img src="~/assets/img/code-typing.png" alt="Code Typing" class="w-full">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Home Page',
    },
    name: 'IndexPage',
}
</script>
