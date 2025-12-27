<template>
    <div>
        <div v-smartStyle:background.border.bold="'red'">
            Hello World
        </div>

        <br>

        <h4 v-smartStyle:color.upper.bold="'blue'">
            vue programming
        </h4>

        <br>

        <p v-smartStyle.border="'#eeeeee'">
            Light Gray Background
        </p>
    </div>
</template>

<script>
import smartStyle from './myDirective2'
export default {
    directives: {
        smartStyle // 'v-smartStyle'로 사용 가능
    }
}
</script>