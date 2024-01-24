import {describe,it, expect,vi, test} from 'vitest'
import TestRenderer from 'react-test-renderer'
import TestResult from '../components/ui/TestResult'
import results from '../../../exampleData/results.json'


describe("TestResult.jsx()",()=>{
    it("Testing children",()=>{

        const result=results
        const testResult=TestRenderer.create(<TestResult testResult={result}/>).toJSON()

        expect(testResult.children.length).toBe(2)
        expect(testResult.props.className).toBe('testResult-container')
        expect(testResult.children[0].type).toBe('div')
        expect(testResult.children[1].type).toBe('div')
    })
})