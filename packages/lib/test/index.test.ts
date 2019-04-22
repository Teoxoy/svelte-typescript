import preprocess from '../src/index'

describe('preprocess test', () => {
  it('should be function', () => {
    expect(preprocess).toBeInstanceOf(Function)
  })

  it('returns object with "script" property', () => {
    expect(preprocess()).toHaveProperty('script')
  })

  it('run preprocess', () => {
    // const code = ``
    const content = `//comment
import path from 'path';
import Form from './Form.svelte';

path.join()
function x(){return 5;}
console.log(x())
let c: number = 5;
`
    const filename = 'Component.svelte'
    const attributes = {
      lang: 'ts'
    }
    const result = preprocess().script({
      content,
      filename,
      attributes
    })
    if (result) {
      expect(result).toHaveProperty('code')
      expect(result.code).toBeTruthy()
    }
  })
})
