const validateEmail = (email) => email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
export const Globals = {
    
	validateEmail: validateEmail,
	socialMedia: [{ name: 'Facebook', code: 'FB' }, { name: 'Linkedin', code: 'LK' }, { name: 'Instagram', code: 'IT' }, { name: 'Youtube', code: 'YB' }],


};