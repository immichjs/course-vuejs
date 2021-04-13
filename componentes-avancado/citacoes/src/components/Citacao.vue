<template>
    <div class="citacao">
        <div class="autor">
            <slot name="autor"></slot>
        </div>
        <slot></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    activated() {
        console.log('ativado')
    },
    deactivated() {
        console.log('desativado')
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    h1 {
        color: red !important;
    }
    
    .autor {
        float: right;
    }
</style>
