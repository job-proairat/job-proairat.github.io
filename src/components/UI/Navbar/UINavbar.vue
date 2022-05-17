<template>
    <nav class="navbar">
        <slot></slot>
    </nav>
</template>

<style scoped lang="scss">
$navbar-bg-color: #000;
.navbar {
  background-image: url('https://i.ytimg.com/vi/oxap6cVBbHE/maxresdefault.jpg');
  background-color: $navbar-bg-color;
  display: flex;
  align-items: center;
  padding: 5px;
}
</style>
