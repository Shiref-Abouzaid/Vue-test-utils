<template>
    <div>
<div v-for="todo in todos" :key="todo.id" data-test="todo">
    <li>{{ todo.text }}</li>
</div>
    </div>
</template>
<script >
export default {
    name:'TodoApp',
    data(){
        return {
            todos:[
            {
                    id:2,
                    text:'Feed Cat',
                    completed:false
                },
                {
                    id:1,
                    text:'Learn Vue testing',
                    completed:false
                },
  
            ]
        }
    }
}

</script>