<template>
    <nav class="container py-5">
        <div class="flex flex-wrap md:items-center md:justify-between">
            <div class="flex-none w-full md:w-auto flex items-center justify-between">
                <h2 class="font-semibold text-xl md:text-2xl">ZuloDev</h2>
                <button @click="openMenu" type="button" class="md:hidden focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="text-gray-600 hover:text-gray-900 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
            </div>
            <div id="menu" class="menu">
                <div class="w-full pt-5 md:pt-0">
                    <ul class="flex flex-col md:flex-row md:items-center space-y-3 md:space-x-8 md:space-y-0 font-medium text-gray-600 mb-3 md:mb-0">
                        <li>
                            <a href="#layanan" class="hover:text-gray-900">Layanan</a>
                        </li>
                        <li>
                            <a href="#keahlian" class="hover:text-gray-900">Keahlian & Pengalaman</a>
                        </li>
                        <li>
                            <a href="#portfolio" class="hover:text-gray-900">Portfolio</a>
                        </li>
                        <li>
                            <a href="#kontak" class="hover:text-gray-900">Kontak</a>
                        </li>
                    </ul>
                </div>
                <div class="md:hidden w-full md:w-auto">
                    <button class="w-full border-2 border-[#8873EF] px-5 py-3 rounded-xl font-semibold text">Hire Saya</button>
                </div>
            </div>
            <button class="hidden md:block border-2 border-[#8873EF] px-5 py-3 rounded-xl font-semibold text">Hire Saya</button>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        openMenu() {
            const menu = document.getElementById('menu')
            if (menu.style.maxHeight) {
                menu.style.maxHeight = null;
            } else {
                menu.style.maxHeight = menu.scrollHeight + 'px';
            }
        }
    }
}
</script>
