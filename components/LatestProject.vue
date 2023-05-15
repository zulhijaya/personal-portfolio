<template>
    <div class="border-t-2 border-gray-900 pt-5">
        <div class="font-semibold text-3xl md:text-4xl leading-tight md:leading-tight mb-2" v-html="title"></div>
        <div class="mb-4">{{ category }}</div>
        <div class="w-full aspect-[1/0.94]">
            <Project :image="image" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'category', 'image']
}
</script>
