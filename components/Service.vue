<template>
    <div class="border-t-2 border-gray-900 pt-4 pb-6 mb-5">
        <div class="flex space-x-8">
            <div class="font-semibold text-xl">{{ number }}</div>
            <div class="w-full">
                <h3 class="font-semibold text-4xl md:text-5xl mb-6" v-html="name"></h3>
                <div class="flex items-center justify-between">
                    <div class="font-semibold">Explore</div>
                    <div class="bg-purple-main w-12 h-12 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-5 w-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['number', 'name']
}
</script>
