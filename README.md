# Outward &middot; [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/SNinjo/outward/blob/master/LICENSE) [![NPM](https://img.shields.io/badge/npm-v1.0.1-blue)](https://www.npmjs.com/package/outward) [![CI](https://img.shields.io/badge/CI-passing-brightgreen)](https://github.com/SNinjo/outward/actions/workflows/ci.yml)
Outward is a tool that can calculate 2D coordinates, and it also used to parse the outward attributes of element in DOM, such as position, size, and angle.


## Usage
#### get the distance between two position
``` javascript
import { Position } from 'outward';
const position01 = new Position(1, 2);
const position02 = new Position(4, 6);

console.log(position02.subtract(position01).getDistance()); // 5
```


#### drag and drop element
``` javascript
import { Position } from 'outward';

const element = document.createElement('div');
element.setAttribute('style', `
	position: fixed;
	left: 0;
	top: 0;
	width: 30px;
	height: 30px;
	
	border: solid 1px red;
	background-color: pink;
`);
document.body.append(element);

let isLeftMousePressed = false;
let originalPosition = new Position();
let pressedPosition = new Position();
element.addEventListener('mousedown', (event) => {
	isLeftMousePressed = true;
	originalPosition = new Position(element.getBoundingClientRect());
	pressedPosition = new Position(event.pageX, event.pageY);
});
window.addEventListener('mousemove', (event) => {
	if (isLeftMousePressed) {
		const currentPosition = new Position(event.pageX, event.pageY);
		const previewPosition = currentPosition.subtract(pressedPosition).add(originalPosition);

		element.style.left = `${previewPosition.x}px`;
		element.style.top = `${previewPosition.y}px`;
	}
});
window.addEventListener('mouseup', (event) => {
	isLeftMousePressed = false;
});
```


## Installation
```
npm install outward
```


## License
RegularListener is [MIT licensed](./LICENSE).