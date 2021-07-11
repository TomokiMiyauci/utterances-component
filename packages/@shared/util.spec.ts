import { putChildElement } from './util'

describe('pubChildElement', () => {
  it('should be replace child element', () => {
    const parent = document.createElement('div')
    const child = document.createElement('div')

    parent.appendChild(child)

    expect(parent.firstChild).toEqual(child)
    expect(parent.childNodes.length).toBe(1)

    const anotherEl = document.createElement('span')
    putChildElement(parent, anotherEl)

    expect(parent.firstChild).toEqual(anotherEl)
    expect(parent.childNodes.length).toEqual(1)
  })

  it('should be replace child elements', () => {
    const parent = document.createElement('div')
    const child1 = document.createElement('div')
    const child2 = document.createElement('div')
    const child3 = document.createElement('div')
    const child4 = document.createElement('div')

    parent.appendChild(child1)
    parent.appendChild(child2)
    parent.appendChild(child3)
    parent.appendChild(child4)

    expect(parent.firstChild).toEqual(child1)
    expect(parent.childNodes.length).toBe(4)

    const anotherEl = document.createElement('span')
    putChildElement(parent, anotherEl)

    expect(parent.firstChild).toEqual(anotherEl)
    expect(parent.childNodes.length).toEqual(1)
  })
})
