<script setup>
    import KaboltLogo from './icons/KaboltLogo.vue';
</script>

<template>
    <div class="header">
        <h1>Companies webapp - technical test</h1>
        <KaboltLogo></KaboltLogo>
    </div>
</template>
<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .header svg {
        max-width: 150px;
    }
    .header svg path {
        fill: #161616;
    }

    @media screen and (max-width: 640px) {

        .header {
            gap: 25px;
        }   
        .header svg {
            max-width: 30%;
        }
    }
</style>
