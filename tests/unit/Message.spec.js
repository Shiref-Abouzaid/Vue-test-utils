import  { mount } from '@vue/test-utils';
import Message from '@/components/Message.vue';

describe('Message.vue',()=>{
    it('render props.msg when passed',()=>{
        const message = 'Hello, World!';
        const wrapper = mount(Message,{
            propsData:{
                msg:message
            }
        })
        expect(wrapper.text()).toContain(message)
    })
})