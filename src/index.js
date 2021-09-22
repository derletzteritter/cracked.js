export const initApp = (selector, component) => {
	const app = document.querySelector(selector);
	const newEl = document.createElement(component.type);
	const newTxtContent = document.createTextNode(component.template);

	newEl.append(newTxtContent);
	app.append(newEl);
}