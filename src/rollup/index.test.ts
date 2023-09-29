/* eslint-disable @typescript-eslint/no-var-requires */
import Outward, { Position, Angle } from '../../build/index.js';


test('import functions from outward', () => {
	expect(typeof Outward).toBe('function');
	expect(typeof Position).toBe('function');
	expect(typeof Angle).toBe('function');
})

test('require functions from outward', () => {
	const Outward = require('outward');
	const { Position, Angle } = require('outward');
	expect(typeof Outward).toBe('function');
	expect(typeof Position).toBe('function');
	expect(typeof Angle).toBe('function');
})