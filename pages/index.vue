<template>
    <div class="font-medium">
        <!-- Jumbotron -->
        <section class="container section pt-10">
            <div class="flex flex-col md:flex-row md:items-center md:space-x-10">
                <div class="flex-1 md:basis-5/12">
                    <div class="italic-text">Halo!</div>
                    <h1 class="section-title">Kami punya <br> Pengalaman <br> Coding</h1>
                    <img src="~/assets/img/code-typing-hidden.png" alt="Code Typing" class="md:hidden w-full">
                    <div class="flex space-x-5 mb-10">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 -ml-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                        <div>Hai! Saya seorang Full Stack Web Developer, memberikan solusi terbaik dalam membangun website untuk menyelesaikan masalah pada bisnis Anda.</div>
                    </div>
                    <div class="flex items-center space-x-2 mb-16">
                        <button class="border-2 border-[#8873EF] bg-[#8873EF] px-5 py-4 rounded-xl text-white">
                            <div class="flex items-center space-x-4">
                                <span class="font-semibold">Ayo Chat</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </div>
                        </button>
                        <button class="px-5 py-4">
                            <div class="flex items-center space-x-4">
                                <span class="font-semibold">Portfolio</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div class="flex items-center space-x-5">
                        <div>Kontak Saya</div>
                        <div class="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-900 w-5 h-5 cursor-pointer" x="0px" y="0px" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                        </div>
                        <div class="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-900 w-5 h-5 cursor-pointer" x="0px" y="0px" viewBox="0 0 320 512">
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                            </svg>
                        </div>
                        <div class="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-900 w-5 h-5 cursor-pointer" x="0px" y="0px" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block md:basis-7/12">
                    <img src="~/assets/img/code-typing-hidden.png" alt="Code Typing" class="w-full">
                </div>
            </div>
        </section>

        <!-- Servies I Offer -->
        <section id="layanan" class="section bg-yellow-main">
            <div class="container">
                <div class="italic-text">Layanan</div>
                <div class="flex flex-col md:flex-row md:justify-between">
                    <div class="basis-full md:basis-5/12">
                        <h2 class="section-title">Jasa yang <br> Ditawarkan</h2>
                        <div class="flex space-x-5 mb-10">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 -ml-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </div>
                            <div>Kami membantu bisnis ambisius seperti Anda menghasilkan lebih banyak keuntungan dengan membangun kewaspadaan, mendorong lalu lintas web, terhubung dengan pelanggan, dan meningkatkan penjualan secara keseluruhan.</div>
                        </div>
                    </div>
                    <div class="basis-full md:basis-5/12">
                        <Service number="01" name="Web UI/UX <br> Design"/>
                        <Service number="02" name="Mobile App UI/UX Design"/>
                        <Service number="03" name="Dashboard UI/UX Design"/>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skill & Experience -->
        <section id="keahlian" class="container section">
            <div class="italic-text">Pengalaman</div>
            <div class="flex flex-col md:flex-row md:justify-between">
                <div class="basis-full md:basis-5/12 mb-10">
                    <h2 class="section-title">Skill &<br> Pengalaman</h2>
                    <div class="flex space-x-5 mb-10">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 -ml-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                        <div>Spesialis dalam aplikasi website. Semangat saya adalah merancang dan memecahkan masalah melalui pengalaman pengguna, terutama pada website modern.</div>
                    </div>

                    <!-- Sklills -->
                    <div>
                        <h2 class="font-semibold text-3xl mb-8">Keahlian</h2>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-y-10">
                            <skill name="Visual Design">
                                <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd" />
                                <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
                            </skill>
                            <skill name="Wireframe">
                                <path fill-rule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z" clip-rule="evenodd" />
                            </skill>
                            <skill name="User Experience Design">
                                <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                            </skill>
                            <skill name="Prototype">
                                <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clip-rule="evenodd" />
                            </skill>
                            <skill name="Art Direction">
                                <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                                <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                                <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                            </skill>
                            <skill name="User Research">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                            </skill>
                        </div>
                    </div>
                </div>
                <div class="basis-full md:basis-5/12">
                    <!-- Experience -->
                    <div>
                        <h2 class="font-semibold text-3xl mb-8">Pengalaman</h2>
                        <div class="border-t-2 border-gray-900 font-semibold py-4 mb-5">
                            <div class="flex space-x-8">
                                <div class="flex-none">2020 - Sekarang</div>
                                <div>
                                    <h3 class="text-xl mb-3">Full Stack Web Developer</h3>
                                    <div class="text-gray-500">Fulltime Freelance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Latest Projects -->
        <section id="portfolio" class="section bg-yellow-main">
            <div class="container">
                <div class="italic-text">Project</div>
                <h2 class="section-title">Project <br> Terbaru</h2>
                <div class="grid md:grid-cols-3 gap-y-16 md:gap-10 md:mt-20">
                    <div>
                        <LatestProject title="Labelin SecureTag Landing Page" category="Landing Page" image="Labelin.png"/>
                    </div>
                    <div class="md:-mt-28">
                        <LatestProject title="SIAKA SMK Advent Kaima" category="Sistem Informasi" image="SMK Advent Kaima.png"/>
                    </div>
                    <div class="md:-mt-56">
                        <LatestProject title="Customisasi Website E-commerce" category="E-commerce" image="Katakanada.png"/>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonial -->
        <!-- <section class="container pt-24">
        </section> -->

        <!-- Contact -->
        <section id="kontak" class="container section">
            <div class="italic-text">Kontak</div>
            <div class="flex flex-col md:flex-row md:justify-between">
                <div class="basis-full md:basis-5/12">
                    <h2 class="section-title">Diskusikan<br> Project Anda</h2>
                    <div class="mt-16">
                        <div class="flex items-center space-x-6 border-t-2 border-gray-900 py-5 mb-2">
                            <div class="flex-none">
                                <div class="bg-gray-900 w-14 h-14 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 fill-white">
                                        <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div>Email</div>
                                <div class="font-bold text-lg">zulhijayaa@gmail.com</div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-6 border-t-2 border-gray-900 py-5">
                            <div class="flex-none">
                                <div class="bg-gray-900 w-14 h-14 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 fill-white">
                                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div>Lokasi</div>
                                <div class="font-bold text-lg">Makassar, Sulawesi Selatan, 98412</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block md:basis-5/12">
                    <!-- Say Hi! -->
                    <div class="w-full aspect-square flex items-center justify-center border-2 border-gray-900 rounded-full">
                        <div class="relative w-[71%] mr-10 border-b-2 border-gray-900 rotate-[15deg] mt-32">
                            <div class="absolute bottom-4 right-0">
                                <div class="bg-purple-main w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-white w-10 h-10 md:w-14 md:h-14 rotate-[30deg]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                                    </svg>
                                </div>
                            </div>
                            <div class="absolute bottom-4 left-0">
                                <div class="flex items-end space-x-1 -rotate-[15deg]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                                        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                    </svg>
                                    <div class="font-bold text-lg">Halo!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Zulo',
    },
    name: 'IndexPage'
}
</script>
