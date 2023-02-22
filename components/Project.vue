<template>
    <!-- <div class="h-screen flex items-center justify-center"> -->
        <div class="bg-gray-100 w-full h-full rounded-lg">
            <div class="flex justify-center space-x-[5%] w-full h-full">
                <div class="pt-[5%] basis-[57%] h-full">
                    <img :src="require(`~/assets/img/${image}`)" class="object-cover object-top w-full h-full shadow-xl">
                </div>
                <div class="pb-[5%] basis-[28%] h-full">
                    <img :src="require(`~/assets/img/${image}`)" class="object-cover object-left-bottom w-full h-full shadow-xl">
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
export default {
    props: ['image']
}
</script>
