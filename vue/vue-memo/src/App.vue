<script setup>

</script>

<template>
<div class="app">
    <div class="container py-4"><!-- 부트스트랩은 container 클래스가 부모역할-->
        <!-- py-4:padding-top, padding-bottom:4는 아마도 12px -->
        <header class="pb-4 mb-4 border-bottom">
            <router-link to="/" class="text-dark text-decoration-none">               
                <b class="fs-4">Memo Application</b>
            </router-link>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer class="pt-4 mt-4 border-top">&copy; 2026. Memo. All rights reserved</footer>
    </div>
</div>
</template>

<style lang="scss" scoped>
    /*scoped 라고 쓰면 오로지 App.vue에서만 사용함 */
.app .container{
    max-width:576px;
}
</style>