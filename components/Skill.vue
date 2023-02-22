<template>
    <div>
        <div class="bg-gray-900 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 fill-white">
                <slot />
            </svg>
        </div>
        <div class="font-semibold">{{ name }}</div>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>
