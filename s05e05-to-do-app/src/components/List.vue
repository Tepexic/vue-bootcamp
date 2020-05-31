<template>
    <ul>
        <li v-for="(item, key) in items" :key="item">
            <div>{{ item }}</div>
            <button v-on:click="$emit('remove-item', key)">X</button>
        </li>
    </ul>
</template>

<script>
    module.exports = {
        props: ['items']
    }
</script>

<style></style>
