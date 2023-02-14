import { mount } from '@vue/test-utils'
import App from './App.vue'
import ClickableComponent from './ClickableComponent.vue'
import { createStore } from 'vuex'

const createVuexStore = () => {
  return createStore({
    state() {
      return {
        count: 0
      }
    },
    mutations: {
      increment(state) {
        state.count += 1
      }
    }
  })
}

function factory() {
  const store = createVuexStore()
  return mount(App, {
    global: {
      plugins: [store],
      stubs: {
        Fetcher: true
      }
    }
  })
}

describe('App', () => {
  it('render count when even', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })

  it('render count when odd', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
})

test('emits a count event with correct payload', async () => {
  const wrapper = mount(ClickableComponent)
  
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted().count[0][0]).toBe(1)

  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted().count[1][0]).toBe(2)
  
  console.log(wrapper.emitted())
})