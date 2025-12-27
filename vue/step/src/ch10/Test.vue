<template>
    <div>
        <h3>Directive Test</h3>
        msg: {{ msg }}
        <br>
        <div v-myDirective="'red'">hello</div>
        <br>
        <h4 v-myDirective:aaa:bbb="'blue'">world</h4>
        <br>
        <p v-myDirective.aaa.bbb="'green'">yah ho</p>
    </div>

</template>
<script>
import myDirective from './myDirective'
export default {
    data() {
        return {
            msg: 'hello',
            data:10
        }
    },
    directives: {
        myDirective
    }
}
</script>
