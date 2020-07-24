import { mount } from '@vue/test-utils'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {

	it('is a vue instance', () => {
		const wrapper = mount(Login,{
			propsData : {
				email: "avash",
				password:"",
				errorText: 'hi'
			}
		})
	  expect(wrapper.isVueInstance()).toBeTruthy()
	})

	it('should call login when button is clicked', async () => {

		const wrapper = mount(Login,{
			propsData : {
				email: "",
				password:"",
				errorText: ''
			}
		})
		const loginFn = jest.fn()
		wrapper.setMethods({
			login:loginFn
		})
		wrapper.find('form').trigger('submit')
		expect(loginFn).toHaveBeenCalled()



	})
	it('should show validation errors', async () => {
		const wrapper = mount(Login,{
			propsData : {
				email: "avash",
				password:"",
				errorText: 'hi'
			}
		})
	  expect(wrapper.html()).not.toContain('Please enter email and password')
	  const form = wrapper.find('form')
	  await form.trigger('submit')
	  expect(wrapper.html()).toContain('Please enter email and password')


	})

})

describe('About.vue', () => {
	const wrapper = mount(About)
	it('renders the correct markup', () => {
	  expect(wrapper.html()).toContain('This is a very simple Chat Application')
	})

})
