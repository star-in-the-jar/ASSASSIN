import {describe,it, expect,vi} from 'vitest'
import TestRenderer from 'react-test-renderer'
import PatientInfo from '../components/ui/PatientInfo'
import { MemoryRouter } from 'react-router-dom'
import result from '../../../exampleData/result_request.json'


describe("PatientInfo.jsx",()=>{
    it("Testing children",()=>{
        const lek=["janas","jonczyk"]
        const res=result

        const patientInfo=TestRenderer.create(<MemoryRouter><PatientInfo patientName={lek} testInfo={res} /></MemoryRouter>).toJSON()
        console.log(patientInfo)

        expect(patientInfo.children[0].type).toBe('a')
        expect(patientInfo.children.length).toBe(2)
        expect(patientInfo.type).toBe('div')
        expect(patientInfo.props.className).toBe('patientinfo-container')
    })
})