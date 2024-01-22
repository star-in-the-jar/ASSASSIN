import {describe,it, expect} from 'vitest'
import TestRenderer from 'react-test-renderer'
import Modal from '../components/ui/Modal'




describe("dsada", ()=>{
    it("dsad",() => {
        const modal=TestRenderer.create(<Modal/>).toJSON()
        expect(modal.children[2].children.length).toBe(6)
       
    })
    
})

describe("Dsad", ()=>{
    it("dsa",()=> {
        const modal=Tes
    })
})
