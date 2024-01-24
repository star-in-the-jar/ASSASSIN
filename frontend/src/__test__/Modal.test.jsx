import {describe,it, expect,vi} from 'vitest'
import TestRenderer from 'react-test-renderer'
import Modal from '../components/ui/Modal'
import { TextFail } from '../components/ui/Modal'




describe("Modal.jsx", ()=>{
    it("Testing children",() => {
        const modal=TestRenderer.create(<Modal/>).toJSON()
        //console.log(modal)
        expect(modal.children[2].children.length).toBe(6)
        expect(modal.children.length).toBe(3)
        expect(modal.type).toBe('div')
       
    })

    it('Testing error text',()=>{
        const textfail=TestRenderer.create(<TextFail/>).toJSON()
        console.log(textfail)

        expect(textfail.type).toBe('div')
        expect(textfail.children.length).toBe(2)
        expect(textfail.children[0].type).toBe('strong')
        expect(textfail.children[1].type).toBe('img')
    })
    
})


