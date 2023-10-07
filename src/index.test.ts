import Outward, { Angle, Dimensions, TwoDimensional, Position, Size } from '.';




describe('test class Dimensions', () => {
	const isTypeDimensions = (dimensions: Dimensions) => (Object.getPrototypeOf(dimensions).constructor.name === 'Dimensions');


	describe('constructor and getCoordinate', () => {
		test('zero dimensional', () => {
			const numberOfCoordinates = 0;
			let dimensions: Dimensions;
			let dimensionalNumber: number;

			dimensions = new Dimensions(numberOfCoordinates);
			dimensionalNumber = -1;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));

			dimensions = new Dimensions(numberOfCoordinates, []);
			dimensionalNumber = -1;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));

			dimensions = new Dimensions(numberOfCoordinates, [0]);
			dimensionalNumber = -1;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));
		})
		test('one dimensional', () => {
			const numberOfCoordinates = 1;
			let dimensions: Dimensions;
			let dimensionalNumber: number;

			dimensions = new Dimensions(numberOfCoordinates);
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(0);
			dimensionalNumber = 2;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));

			dimensions = new Dimensions(numberOfCoordinates, []);
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(0);
			dimensionalNumber = 2;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));

			dimensions = new Dimensions(numberOfCoordinates, [1]);
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(1);
			dimensionalNumber = 2;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));

			dimensions = new Dimensions(numberOfCoordinates, [1, 2]);
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(1);
			dimensionalNumber = 2;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));
		})
		test('two dimensional', () => {
			const numberOfCoordinates = 2;
			let dimensions: Dimensions;
			let dimensionalNumber: number;

			dimensions = new Dimensions(numberOfCoordinates);
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(0);
			dimensionalNumber = 2;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(0);
			dimensionalNumber = 3;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));

			dimensions = new Dimensions(numberOfCoordinates, []);
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(0);
			dimensionalNumber = 2;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(0);
			dimensionalNumber = 3;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));

			dimensions = new Dimensions(numberOfCoordinates, [1]);
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(1);
			dimensionalNumber = 2;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(0);
			dimensionalNumber = 3;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));

			dimensions = new Dimensions(numberOfCoordinates, [1, 2]);
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(1);
			dimensionalNumber = 2;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(2);
			dimensionalNumber = 3;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));

			dimensions = new Dimensions(numberOfCoordinates, [1, 2, 3]);
			dimensionalNumber = 0;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`));
			dimensionalNumber = 1;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(1);
			dimensionalNumber = 2;
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(2);
			dimensionalNumber = 3;
			expect(() => dimensions.getCoordinate(dimensionalNumber)).toThrow(new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${numberOfCoordinates}).`));
		})
	})
	describe('setCoordinate', () => {
		test('one dimensional', () => {
			const numberOfCoordinates = 1;
			const dimensions = new Dimensions(numberOfCoordinates);
			let dimensionalNumber: number;

			dimensionalNumber = 1;
			dimensions.setCoordinate(dimensionalNumber, 1);
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(1);
			dimensions.setCoordinate(dimensionalNumber, -1);
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(-1);
		})
		test('two dimensional', () => {
			const numberOfCoordinates = 2;
			const dimensions = new Dimensions(numberOfCoordinates);
			let dimensionalNumber: number;

			dimensionalNumber = 1;
			dimensions.setCoordinate(dimensionalNumber, 1);
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(1);
			dimensions.setCoordinate(dimensionalNumber, -1);
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(-1);

			dimensionalNumber = 2;
			dimensions.setCoordinate(dimensionalNumber, 1);
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(1);
			dimensions.setCoordinate(dimensionalNumber, -1);
			expect(dimensions.getCoordinate(dimensionalNumber)).toBe(-1);
		})
	})
	

	const getZeroDimensionalPoint = (): Dimensions => new Dimensions(0, []);

	const getOneDimensionalPoint = (length: number): Dimensions => new Dimensions(1, [length]);
	const getReferencePointInPositiveDirection = (): Dimensions => getOneDimensionalPoint(10);
	const getReferencePointInNegativeDirection = (): Dimensions => getOneDimensionalPoint(-15);

	const getTwoDimensionalPoint = (x: number, y: number): Dimensions => new Dimensions(2, [x, y]);
	const getReferencePointInI = (): Dimensions => getTwoDimensionalPoint(1, 2);
	const getReferencePointInII = (): Dimensions => getTwoDimensionalPoint(-3, 4);

	
	describe('clone', () => {
		test('zero dimensional', () => {
			const dimensions = getZeroDimensionalPoint();
			const clonedDimensions = dimensions.clone();

			expect(dimensions).not.toBe(clonedDimensions);
			expect(dimensions).toStrictEqual(clonedDimensions);
			expect(isTypeDimensions(clonedDimensions)).toBe(true);
			
			expect(dimensions).toStrictEqual(getZeroDimensionalPoint());
			expect(clonedDimensions).toStrictEqual(getZeroDimensionalPoint());
		})
		test('one dimensional', () => {
			let dimensions: Dimensions;
			let clonedDimensions: Dimensions;


			dimensions = getOneDimensionalPoint(0);
			clonedDimensions = dimensions.clone();
			expect(dimensions).not.toBe(clonedDimensions);
			expect(dimensions).toStrictEqual(clonedDimensions);
			expect(isTypeDimensions(clonedDimensions)).toBe(true);
			
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(0));
			expect(clonedDimensions).toStrictEqual(getOneDimensionalPoint(0));

			dimensions.setCoordinate(1, 1);
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(1));
			expect(clonedDimensions).toStrictEqual(getOneDimensionalPoint(0));

			clonedDimensions.setCoordinate(1, -1);
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(1));
			expect(clonedDimensions).toStrictEqual(getOneDimensionalPoint(-1));
			

			dimensions = getOneDimensionalPoint(1);
			clonedDimensions = dimensions.clone();
			expect(dimensions).not.toBe(clonedDimensions);
			expect(dimensions).toStrictEqual(clonedDimensions);
			expect(isTypeDimensions(clonedDimensions)).toBe(true);
			
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(1));
			expect(clonedDimensions).toStrictEqual(getOneDimensionalPoint(1));

			dimensions.setCoordinate(1, 3);
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(3));
			expect(clonedDimensions).toStrictEqual(getOneDimensionalPoint(1));

			clonedDimensions.setCoordinate(1, -1);
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(3));
			expect(clonedDimensions).toStrictEqual(getOneDimensionalPoint(-1));
			

			dimensions = getOneDimensionalPoint(-3);
			clonedDimensions = dimensions.clone();
			expect(dimensions).not.toBe(clonedDimensions);
			expect(dimensions).toStrictEqual(clonedDimensions);
			expect(isTypeDimensions(clonedDimensions)).toBe(true);
			
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(-3));
			expect(clonedDimensions).toStrictEqual(getOneDimensionalPoint(-3));

			dimensions.setCoordinate(1, 3);
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(3));
			expect(clonedDimensions).toStrictEqual(getOneDimensionalPoint(-3));

			clonedDimensions.setCoordinate(1, -1);
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(3));
			expect(clonedDimensions).toStrictEqual(getOneDimensionalPoint(-1));
		})
		test('two dimensional', () => {
			let dimensions: Dimensions;
			let clonedDimensions: Dimensions;


			dimensions = getTwoDimensionalPoint(0, 0);
			clonedDimensions = dimensions.clone();
			expect(dimensions).not.toBe(clonedDimensions);
			expect(dimensions).toStrictEqual(clonedDimensions);
			expect(isTypeDimensions(clonedDimensions)).toBe(true);

			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, 0));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(0, 0));

			dimensions.setCoordinate(1, 1);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 0));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(0, 0));

			dimensions.setCoordinate(2, 2);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(0, 0));

			clonedDimensions.setCoordinate(1, 3);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 0));

			clonedDimensions.setCoordinate(2, 4);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));


			dimensions = getTwoDimensionalPoint(1, 2);
			clonedDimensions = dimensions.clone();
			expect(dimensions).not.toBe(clonedDimensions);
			expect(dimensions).toStrictEqual(clonedDimensions);
			expect(isTypeDimensions(clonedDimensions)).toBe(true);

			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));

			dimensions.setCoordinate(1, 0);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, 2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));

			dimensions.setCoordinate(2, -2);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, -2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));

			clonedDimensions.setCoordinate(1, 3);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, -2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 2));

			clonedDimensions.setCoordinate(2, 4);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, -2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));


			dimensions = getTwoDimensionalPoint(-3, 4);
			clonedDimensions = dimensions.clone();
			expect(dimensions).not.toBe(clonedDimensions);
			expect(dimensions).toStrictEqual(clonedDimensions);
			expect(isTypeDimensions(clonedDimensions)).toBe(true);

			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-3, 4));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(-3, 4));

			dimensions.setCoordinate(1, -1);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-1, 4));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(-3, 4));

			dimensions.setCoordinate(2, -2);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-1, -2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(-3, 4));

			clonedDimensions.setCoordinate(1, 3);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-1, -2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));

			clonedDimensions.setCoordinate(2, 0);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-1, -2));
			expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 0));
		})
	})
	
	describe('toString', () => {
		test('zero dimensional', () => {
			expect(getZeroDimensionalPoint().toString()).toBe(`Dimensions[${0}] {coordinates: [${[].join(', ')}]}`);
		})
		test('one dimensional', () => {
			expect(getOneDimensionalPoint(0).toString()).toBe(`Dimensions[${1}] {coordinates: [${[0].join(', ')}]}`);

			expect(getOneDimensionalPoint(1).toString()).toBe(`Dimensions[${1}] {coordinates: [${[1].join(', ')}]}`);
			expect(getOneDimensionalPoint(-1).toString()).toBe(`Dimensions[${1}] {coordinates: [${[-1].join(', ')}]}`);
			
			expect(getOneDimensionalPoint(3).toString()).toBe(`Dimensions[${1}] {coordinates: [${[3].join(', ')}]}`);
			expect(getOneDimensionalPoint(-3).toString()).toBe(`Dimensions[${1}] {coordinates: [${[-3].join(', ')}]}`);
		})
		test('two dimensional', () => {
			expect(getTwoDimensionalPoint(0, 0).toString()).toBe(`Dimensions[${2}] {coordinates: [${[0, 0].join(', ')}]}`);
			

			expect(getTwoDimensionalPoint(1, 0).toString()).toBe(`Dimensions[${2}] {coordinates: [${[1, 0].join(', ')}]}`);
			expect(getTwoDimensionalPoint(0, 1).toString()).toBe(`Dimensions[${2}] {coordinates: [${[0, 1].join(', ')}]}`);
			expect(getTwoDimensionalPoint(1, 1).toString()).toBe(`Dimensions[${2}] {coordinates: [${[1, 1].join(', ')}]}`);
			
			expect(getTwoDimensionalPoint(-1, 0).toString()).toBe(`Dimensions[${2}] {coordinates: [${[-1, 0].join(', ')}]}`);
			expect(getTwoDimensionalPoint(0, -1).toString()).toBe(`Dimensions[${2}] {coordinates: [${[0, -1].join(', ')}]}`);
			expect(getTwoDimensionalPoint(-1, -1).toString()).toBe(`Dimensions[${2}] {coordinates: [${[-1, -1].join(', ')}]}`);
			

			expect(getTwoDimensionalPoint(3, 0).toString()).toBe(`Dimensions[${2}] {coordinates: [${[3, 0].join(', ')}]}`);
			expect(getTwoDimensionalPoint(0, 5).toString()).toBe(`Dimensions[${2}] {coordinates: [${[0, 5].join(', ')}]}`);
			expect(getTwoDimensionalPoint(3, 5).toString()).toBe(`Dimensions[${2}] {coordinates: [${[3, 5].join(', ')}]}`);
			
			expect(getTwoDimensionalPoint(-3, 0).toString()).toBe(`Dimensions[${2}] {coordinates: [${[-3, 0].join(', ')}]}`);
			expect(getTwoDimensionalPoint(0, -5).toString()).toBe(`Dimensions[${2}] {coordinates: [${[0, -5].join(', ')}]}`);
			expect(getTwoDimensionalPoint(-3, -5).toString()).toBe(`Dimensions[${2}] {coordinates: [${[-3, -5].join(', ')}]}`);
		})
	})


	describe('add', () => {
		test('zero dimensional', () => {
			const dimensions = getZeroDimensionalPoint();
			const addend = getZeroDimensionalPoint();
			const resultDimensions = dimensions.add(addend);

			expect(dimensions).not.toBe(addend);
			expect(dimensions).not.toBe(resultDimensions);
			expect(addend).not.toBe(resultDimensions);
			expect(isTypeDimensions(resultDimensions)).toBe(true);
		})
		test('one dimensional', () => {
			const dimensions = getOneDimensionalPoint(1);
			const addend = getOneDimensionalPoint(2);
			const resultDimensions = dimensions.add(addend);

			expect(dimensions).not.toBe(addend);
			expect(dimensions).not.toBe(resultDimensions);
			expect(addend).not.toBe(resultDimensions);
			expect(isTypeDimensions(resultDimensions)).toBe(true);
			
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(1));
			expect(addend).toStrictEqual(getOneDimensionalPoint(2));
			expect(resultDimensions).toStrictEqual(getOneDimensionalPoint(3));
		})
		test('two dimensional', () => {
			const dimensions = getTwoDimensionalPoint(1, 2);
			const addend = getTwoDimensionalPoint(3, 5);
			const resultDimensions = dimensions.add(addend);

			expect(dimensions).not.toBe(addend);
			expect(dimensions).not.toBe(resultDimensions);
			expect(addend).not.toBe(resultDimensions);
			expect(isTypeDimensions(resultDimensions)).toBe(true);
			
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
			expect(addend).toStrictEqual(getTwoDimensionalPoint(3, 5));
			expect(resultDimensions).toStrictEqual(getTwoDimensionalPoint(4, 7));
		})
		test('mixed dimensions', () => {
			expect(    () => getZeroDimensionalPoint().add(getOneDimensionalPoint(0))    ).toThrow(new Error(`Both number of coordinates aren't same.`));
			expect(    () => getZeroDimensionalPoint().add(getTwoDimensionalPoint(0, 0))    ).toThrow(new Error(`Both number of coordinates aren't same.`));
			expect(    () => getOneDimensionalPoint(0).add(getTwoDimensionalPoint(0, 0))    ).toThrow(new Error(`Both number of coordinates aren't same.`));
		})
	})
	describe('subtract', () => {
		test('zero dimensional', () => {
			const dimensions = getZeroDimensionalPoint();
			const subtrahend = getZeroDimensionalPoint();
			const resultDimensions = dimensions.subtract(subtrahend);

			expect(dimensions).not.toBe(subtrahend);
			expect(dimensions).not.toBe(resultDimensions);
			expect(subtrahend).not.toBe(resultDimensions);
			expect(isTypeDimensions(resultDimensions)).toBe(true);
		})
		test('one dimensional', () => {
			const dimensions = getOneDimensionalPoint(3);
			const subtrahend = getOneDimensionalPoint(2);
			const resultDimensions = dimensions.subtract(subtrahend);

			expect(dimensions).not.toBe(subtrahend);
			expect(dimensions).not.toBe(resultDimensions);
			expect(subtrahend).not.toBe(resultDimensions);
			expect(isTypeDimensions(resultDimensions)).toBe(true);
			
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(3));
			expect(subtrahend).toStrictEqual(getOneDimensionalPoint(2));
			expect(resultDimensions).toStrictEqual(getOneDimensionalPoint(1));
		})
		test('two dimensional', () => {
			const dimensions = getTwoDimensionalPoint(4, 7);
			const subtrahend = getTwoDimensionalPoint(1, 2);
			const resultDimensions = dimensions.subtract(subtrahend);

			expect(dimensions).not.toBe(subtrahend);
			expect(dimensions).not.toBe(resultDimensions);
			expect(subtrahend).not.toBe(resultDimensions);
			expect(isTypeDimensions(resultDimensions)).toBe(true);
			
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(4, 7));
			expect(subtrahend).toStrictEqual(getTwoDimensionalPoint(1, 2));
			expect(resultDimensions).toStrictEqual(getTwoDimensionalPoint(3, 5));
		})
		test('mixed dimensions', () => {
			expect(    () => getZeroDimensionalPoint().subtract(getOneDimensionalPoint(0))    ).toThrow(new Error(`Both number of coordinates aren't same.`));
			expect(    () => getZeroDimensionalPoint().subtract(getTwoDimensionalPoint(0, 0))    ).toThrow(new Error(`Both number of coordinates aren't same.`));
			expect(    () => getOneDimensionalPoint(0).subtract(getTwoDimensionalPoint(0, 0))    ).toThrow(new Error(`Both number of coordinates aren't same.`));
		})
	})
	describe('multiply', () => {
		test('zero dimensional', () => {
			const dimensions = getZeroDimensionalPoint();
			const resultDimensions = dimensions.multiply(2);
			expect(dimensions).not.toBe(resultDimensions);
			expect(dimensions).toStrictEqual(resultDimensions);
		})
		test('one dimensional', () => {
			const dimensions = getOneDimensionalPoint(3);
			const resultDimensions = dimensions.multiply(2);
			expect(dimensions).not.toBe(resultDimensions);
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(3));
			expect(resultDimensions).toStrictEqual(getOneDimensionalPoint(6));
		})
		test('two dimensional', () => {
			const dimensions = getTwoDimensionalPoint(3, 4);
			const resultDimensions = dimensions.multiply(2);
			expect(dimensions).not.toBe(resultDimensions);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));
			expect(resultDimensions).toStrictEqual(getTwoDimensionalPoint(6, 8));
		})
	})
	describe('divide', () => {
		test('zero dimensional', () => {
			const dimensions = getZeroDimensionalPoint();
			const resultDimensions = dimensions.divide(2);
			expect(dimensions).not.toBe(resultDimensions);
			expect(dimensions).toStrictEqual(resultDimensions);
		})
		test('one dimensional', () => {
			const dimensions = getOneDimensionalPoint(3);
			const resultDimensions = dimensions.divide(2);
			expect(dimensions).not.toBe(resultDimensions);
			expect(dimensions).toStrictEqual(getOneDimensionalPoint(3));
			expect(resultDimensions).toStrictEqual(getOneDimensionalPoint(1.5));
		})
		test('two dimensional', () => {
			const dimensions = getTwoDimensionalPoint(3, 4);
			const resultDimensions = dimensions.divide(2);
			expect(dimensions).not.toBe(resultDimensions);
			expect(dimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));
			expect(resultDimensions).toStrictEqual(getTwoDimensionalPoint(1.5, 2));
		})
	})
	
	describe('equal', () => {
		test('zero dimensional', () => {
			expect(    getZeroDimensionalPoint().equal(getZeroDimensionalPoint())    ).toBe(true);
		})
		test('one dimensional', () => {
			expect(    getOneDimensionalPoint(0).equal(getOneDimensionalPoint(0))    ).toBe(true);
			expect(    getOneDimensionalPoint(1).equal(getOneDimensionalPoint(1))    ).toBe(true);
			expect(    getOneDimensionalPoint(-1).equal(getOneDimensionalPoint(-1))    ).toBe(true);

			expect(    getOneDimensionalPoint(0).equal(getOneDimensionalPoint(1))    ).toBe(false);
			expect(    getOneDimensionalPoint(1).equal(getOneDimensionalPoint(0))    ).toBe(false);
			expect(    getOneDimensionalPoint(1).equal(getOneDimensionalPoint(-1))    ).toBe(false);
			expect(    getOneDimensionalPoint(-1).equal(getOneDimensionalPoint(1))    ).toBe(false);
			expect(    getOneDimensionalPoint(1).equal(getOneDimensionalPoint(2))    ).toBe(false);
			expect(    getOneDimensionalPoint(2).equal(getOneDimensionalPoint(1))    ).toBe(false);
			expect(    getOneDimensionalPoint(-1).equal(getOneDimensionalPoint(-2))    ).toBe(false);
			expect(    getOneDimensionalPoint(-2).equal(getOneDimensionalPoint(-1))    ).toBe(false);
		})
		test('two dimensional', () => {
			expect(    getTwoDimensionalPoint(0, 0).equal(getTwoDimensionalPoint(0, 0))    ).toBe(true);
			expect(    getTwoDimensionalPoint(1, -2).equal(getTwoDimensionalPoint(1, -2))    ).toBe(true);
			expect(    getTwoDimensionalPoint(1, -2).equal(getTwoDimensionalPoint(1, 2))    ).toBe(false);
			expect(    getTwoDimensionalPoint(1, -2).equal(getTwoDimensionalPoint(-1, -2))    ).toBe(false);
			expect(    getTwoDimensionalPoint(1, -2).equal(getTwoDimensionalPoint(-1, 2))    ).toBe(false);
			expect(    getTwoDimensionalPoint(1, -2).equal(getTwoDimensionalPoint(3, 4))    ).toBe(false);
		})
		test('mixed dimensions', () => {
			expect(    getZeroDimensionalPoint().equal(getOneDimensionalPoint(0))    ).toBe(false);
			expect(    getZeroDimensionalPoint().equal(getTwoDimensionalPoint(0, 0))    ).toBe(false);
			expect(    getOneDimensionalPoint(0).equal(getTwoDimensionalPoint(0, 0))    ).toBe(false);
		})
	})


	describe('getAbsoluteValue', () => {
		test('zero dimensional', () => {
			expect(  isTypeDimensions(getZeroDimensionalPoint().getAbsoluteValue())  ).toBe(true);

			expect(getZeroDimensionalPoint().getAbsoluteValue()).toStrictEqual(getZeroDimensionalPoint());
		})
		test('one dimensional', () => {
			expect(  isTypeDimensions(getOneDimensionalPoint(0).getAbsoluteValue())  ).toBe(true);
			expect(  isTypeDimensions(getOneDimensionalPoint(1).getAbsoluteValue())  ).toBe(true);
			expect(  isTypeDimensions(getOneDimensionalPoint(-1).getAbsoluteValue())  ).toBe(true);

			expect(getOneDimensionalPoint(0).getAbsoluteValue()).toStrictEqual(getOneDimensionalPoint(0));

			expect(getOneDimensionalPoint(1).getAbsoluteValue()).toStrictEqual(getOneDimensionalPoint(1));
			expect(getOneDimensionalPoint(-1).getAbsoluteValue()).toStrictEqual(getOneDimensionalPoint(1));

			expect(getOneDimensionalPoint(3).getAbsoluteValue()).toStrictEqual(getOneDimensionalPoint(3));
			expect(getOneDimensionalPoint(-3).getAbsoluteValue()).toStrictEqual(getOneDimensionalPoint(3));
		})
		test('two dimensional', () => {
			expect(  isTypeDimensions(getTwoDimensionalPoint(0, 0).getAbsoluteValue())  ).toBe(true);
			expect(  isTypeDimensions(getTwoDimensionalPoint(1, 2).getAbsoluteValue())  ).toBe(true);
			expect(  isTypeDimensions(getTwoDimensionalPoint(3, -4).getAbsoluteValue())  ).toBe(true);

			expect(getTwoDimensionalPoint(0, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 0));

			expect(getTwoDimensionalPoint(1, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(1, 0));
			expect(getTwoDimensionalPoint(0, 1).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 1));
			expect(getTwoDimensionalPoint(1, 1).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(1, 1));
			
			expect(getTwoDimensionalPoint(-1, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(1, 0));
			expect(getTwoDimensionalPoint(0, -1).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 1));
			expect(getTwoDimensionalPoint(-1, -1).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(1, 1));
			
			expect(getTwoDimensionalPoint(3, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(3, 0));
			expect(getTwoDimensionalPoint(0, 5).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 5));
			expect(getTwoDimensionalPoint(3, 5).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(3, 5));
			
			expect(getTwoDimensionalPoint(-3, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(3, 0));
			expect(getTwoDimensionalPoint(0, -5).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 5));
			expect(getTwoDimensionalPoint(-3, -5).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(3, 5));
		})
	})
	describe('getDistance', () => {
		test('zero dimensional', () => {
			expect(getZeroDimensionalPoint().getDistance()).toBe(0);
		})
		test('one dimensional', () => {
			expect(getOneDimensionalPoint(0).getDistance()).toBe(0);
			expect(getOneDimensionalPoint(1).getDistance()).toBe(1);
			expect(getOneDimensionalPoint(-5).getDistance()).toBe(5);

			expect(getOneDimensionalPoint(0).add(getReferencePointInPositiveDirection()).getDistance(getReferencePointInPositiveDirection())).toBe(0);
			expect(getOneDimensionalPoint(1).add(getReferencePointInPositiveDirection()).getDistance(getReferencePointInPositiveDirection())).toBe(1);
			expect(getOneDimensionalPoint(-5).add(getReferencePointInPositiveDirection()).getDistance(getReferencePointInPositiveDirection())).toBe(5);

			expect(getOneDimensionalPoint(0).add(getReferencePointInNegativeDirection()).getDistance(getReferencePointInNegativeDirection())).toBe(0);
			expect(getOneDimensionalPoint(1).add(getReferencePointInNegativeDirection()).getDistance(getReferencePointInNegativeDirection())).toBe(1);
			expect(getOneDimensionalPoint(-5).add(getReferencePointInNegativeDirection()).getDistance(getReferencePointInNegativeDirection())).toBe(5);
		})
		test('two dimensional', () => {
			expect(getTwoDimensionalPoint(0, 0).getDistance()).toBe(0);
			expect(getTwoDimensionalPoint(1, 0).getDistance()).toBe(1);
			expect(getTwoDimensionalPoint(0, 2).getDistance()).toBe(2);
			expect(getTwoDimensionalPoint(-3, 0).getDistance()).toBe(3);
			expect(getTwoDimensionalPoint(0, -4).getDistance()).toBe(4);
			expect(getTwoDimensionalPoint(3, 4).getDistance()).toBe(5);
			expect(getTwoDimensionalPoint(1, 1).getDistance()).toBe(Math.sqrt(2));
			
			expect(getTwoDimensionalPoint(3, 4).getDistance()).toBe(5);
			expect(getTwoDimensionalPoint(-3, 4).getDistance()).toBe(5);
			expect(getTwoDimensionalPoint(-3, -4).getDistance()).toBe(5);
			expect(getTwoDimensionalPoint(3, -4).getDistance()).toBe(5);
			expect(getTwoDimensionalPoint(4, 3).getDistance()).toBe(5);
			
			
			expect(getTwoDimensionalPoint(0, 0).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(0);
			expect(getTwoDimensionalPoint(1, 0).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(1);
			expect(getTwoDimensionalPoint(0, 2).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(2);
			expect(getTwoDimensionalPoint(-3, 0).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(3);
			expect(getTwoDimensionalPoint(0, -4).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(4);
			expect(getTwoDimensionalPoint(3, 4).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(5);
			expect(getTwoDimensionalPoint(1, 1).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(Math.sqrt(2));
			
			expect(getTwoDimensionalPoint(3, 4).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(5);
			expect(getTwoDimensionalPoint(-3, 4).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(5);
			expect(getTwoDimensionalPoint(-3, -4).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(5);
			expect(getTwoDimensionalPoint(3, -4).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(5);
			expect(getTwoDimensionalPoint(4, 3).add(getReferencePointInI()).getDistance(getReferencePointInI())).toBe(5);
			
			
			expect(getTwoDimensionalPoint(0, 0).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(0);
			expect(getTwoDimensionalPoint(1, 0).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(1);
			expect(getTwoDimensionalPoint(0, 2).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(2);
			expect(getTwoDimensionalPoint(-3, 0).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(3);
			expect(getTwoDimensionalPoint(0, -4).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(4);
			expect(getTwoDimensionalPoint(3, 4).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(5);
			expect(getTwoDimensionalPoint(1, 1).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(Math.sqrt(2));
			
			expect(getTwoDimensionalPoint(3, 4).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(5);
			expect(getTwoDimensionalPoint(-3, 4).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(5);
			expect(getTwoDimensionalPoint(-3, -4).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(5);
			expect(getTwoDimensionalPoint(3, -4).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(5);
			expect(getTwoDimensionalPoint(4, 3).add(getReferencePointInII()).getDistance(getReferencePointInII())).toBe(5);
		})
	})
	describe('getCenter', () => {
		const getAverage = (number01: number, number02: number) => {
			return ((number01 - number02) / 2) + number02;
		}


		test('zero dimensional', () => {
			expect(  isTypeDimensions(getZeroDimensionalPoint().getCenter())  ).toBe(true);

			expect(getZeroDimensionalPoint().getCenter()).toStrictEqual(getZeroDimensionalPoint());
		})
		test('one dimensional', () => {
			expect(  isTypeDimensions(getOneDimensionalPoint(0).getCenter())  ).toBe(true);
			expect(  isTypeDimensions(getOneDimensionalPoint(1).getCenter())  ).toBe(true);
			expect(  isTypeDimensions(getOneDimensionalPoint(-1).getCenter())  ).toBe(true);


			expect(getOneDimensionalPoint(0).getCenter()).toStrictEqual(getOneDimensionalPoint(getAverage(0, 0)));

			expect(getOneDimensionalPoint(1).getCenter()).toStrictEqual(getOneDimensionalPoint(getAverage(1, 0)));
			expect(getOneDimensionalPoint(-1).getCenter()).toStrictEqual(getOneDimensionalPoint(getAverage(-1, 0)));

			expect(getOneDimensionalPoint(4).getCenter()).toStrictEqual(getOneDimensionalPoint(getAverage(4, 0)));
			expect(getOneDimensionalPoint(-4).getCenter()).toStrictEqual(getOneDimensionalPoint(getAverage(-4, 0)));


			expect(getOneDimensionalPoint(0).getCenter(getOneDimensionalPoint(5))).toStrictEqual(getOneDimensionalPoint(getAverage(0, 5)));
			
			expect(getOneDimensionalPoint(1).getCenter(getOneDimensionalPoint(5))).toStrictEqual(getOneDimensionalPoint(getAverage(1, 5)));
			expect(getOneDimensionalPoint(-1).getCenter(getOneDimensionalPoint(5))).toStrictEqual(getOneDimensionalPoint(getAverage(-1, 5)));
			
			expect(getOneDimensionalPoint(5).getCenter(getOneDimensionalPoint(5))).toStrictEqual(getOneDimensionalPoint(getAverage(5, 5)));
			expect(getOneDimensionalPoint(-5).getCenter(getOneDimensionalPoint(5))).toStrictEqual(getOneDimensionalPoint(getAverage(-5, 5)));


			expect(getOneDimensionalPoint(0).getCenter(getOneDimensionalPoint(-10))).toStrictEqual(getOneDimensionalPoint(getAverage(0, -10)));
			
			expect(getOneDimensionalPoint(1).getCenter(getOneDimensionalPoint(-10))).toStrictEqual(getOneDimensionalPoint(getAverage(1, -10)));
			expect(getOneDimensionalPoint(-1).getCenter(getOneDimensionalPoint(-10))).toStrictEqual(getOneDimensionalPoint(getAverage(-1, -10)));
			
			expect(getOneDimensionalPoint(5).getCenter(getOneDimensionalPoint(-10))).toStrictEqual(getOneDimensionalPoint(getAverage(5, -10)));
			expect(getOneDimensionalPoint(-5).getCenter(getOneDimensionalPoint(-10))).toStrictEqual(getOneDimensionalPoint(getAverage(-5, -10)));
		})
		test('two dimensional', () => {
			expect(  isTypeDimensions(getTwoDimensionalPoint(0, 0).getCenter())  ).toBe(true);
			expect(  isTypeDimensions(getTwoDimensionalPoint(1, 2).getCenter())  ).toBe(true);
			expect(  isTypeDimensions(getTwoDimensionalPoint(-3, 4).getCenter())  ).toBe(true);


			expect(getTwoDimensionalPoint(0, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(0, 0)));
			
			expect(getTwoDimensionalPoint(1, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(1, 0), getAverage(0, 0)));
			expect(getTwoDimensionalPoint(0, 1).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(1, 0)));
			expect(getTwoDimensionalPoint(1, 1).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(1, 0), getAverage(1, 0)));
			
			expect(getTwoDimensionalPoint(-1, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, 0), getAverage(0, 0)));
			expect(getTwoDimensionalPoint(0, -1).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(-1, 0)));
			expect(getTwoDimensionalPoint(-1, -1).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, 0), getAverage(-1, 0)));
			
			expect(getTwoDimensionalPoint(2, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(2, 0), getAverage(0, 0)));
			expect(getTwoDimensionalPoint(0, 6).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(6, 0)));
			expect(getTwoDimensionalPoint(2, 6).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(2, 0), getAverage(6, 0)));
			
			expect(getTwoDimensionalPoint(-2, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, 0), getAverage(0, 0)));
			expect(getTwoDimensionalPoint(0, -6).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(-6, 0)));
			expect(getTwoDimensionalPoint(-2, -6).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, 0), getAverage(-6, 0)));

			
			expect(getTwoDimensionalPoint(0, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(0, 2)));
			
			expect(getTwoDimensionalPoint(1, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(1, 1), getAverage(0, 2)));
			expect(getTwoDimensionalPoint(0, 1).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(1, 2)));
			expect(getTwoDimensionalPoint(1, 1).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(1, 1), getAverage(1, 2)));
			
			expect(getTwoDimensionalPoint(-1, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, 1), getAverage(0, 2)));
			expect(getTwoDimensionalPoint(0, -1).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(-1, 2)));
			expect(getTwoDimensionalPoint(-1, -1).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, 1), getAverage(-1, 2)));
			
			expect(getTwoDimensionalPoint(2, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(2, 1), getAverage(0, 2)));
			expect(getTwoDimensionalPoint(0, 6).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(6, 2)));
			expect(getTwoDimensionalPoint(2, 6).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(2, 1), getAverage(6, 2)));
			
			expect(getTwoDimensionalPoint(-2, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, 1), getAverage(0, 2)));
			expect(getTwoDimensionalPoint(0, -6).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(-6, 2)));
			expect(getTwoDimensionalPoint(-2, -6).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, 1), getAverage(-6, 2)));

			
			expect(getTwoDimensionalPoint(0, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(0, 4)));
			
			expect(getTwoDimensionalPoint(1, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(1, -3), getAverage(0, 4)));
			expect(getTwoDimensionalPoint(0, 1).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(1, 4)));
			expect(getTwoDimensionalPoint(1, 1).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(1, -3), getAverage(1, 4)));
			
			expect(getTwoDimensionalPoint(-1, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, -3), getAverage(0, 4)));
			expect(getTwoDimensionalPoint(0, -1).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(-1, 4)));
			expect(getTwoDimensionalPoint(-1, -1).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, -3), getAverage(-1, 4)));
			
			expect(getTwoDimensionalPoint(2, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(2, -3), getAverage(0, 4)));
			expect(getTwoDimensionalPoint(0, 6).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(6, 4)));
			expect(getTwoDimensionalPoint(2, 6).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(2, -3), getAverage(6, 4)));
			
			expect(getTwoDimensionalPoint(-2, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, -3), getAverage(0, 4)));
			expect(getTwoDimensionalPoint(0, -6).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(-6, 4)));
			expect(getTwoDimensionalPoint(-2, -6).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, -3), getAverage(-6, 4)));
		})
	})
})




describe('test class TwoDimensional', () => {
	const isTypeTwoDimensional = (twoDimensional: TwoDimensional) => (Object.getPrototypeOf(twoDimensional).constructor.name === 'TwoDimensional');

	const getTwoDimensionalPoint = (x: number, y: number): TwoDimensional => {
		const dimensions = new TwoDimensional();
		dimensions.setCoordinate(1, x);
		dimensions.setCoordinate(2, y);
		return dimensions;
	}
	const getReferencePointInI = (): TwoDimensional => getTwoDimensionalPoint(1, 2);
	const getReferencePointInII = (): TwoDimensional => getTwoDimensionalPoint(-3, 4);

	
	test('clone', () => {
		let dimensions: TwoDimensional;
		let clonedDimensions: TwoDimensional;


		dimensions = getTwoDimensionalPoint(0, 0);
		clonedDimensions = dimensions.clone();
		expect(dimensions).not.toBe(clonedDimensions);
		expect(dimensions).toStrictEqual(clonedDimensions);
		expect(isTypeTwoDimensional(clonedDimensions)).toBe(true);

		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, 0));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(0, 0));

		dimensions.setCoordinate(1, 1);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 0));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(0, 0));

		dimensions.setCoordinate(2, 2);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(0, 0));

		clonedDimensions.setCoordinate(1, 3);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 0));

		clonedDimensions.setCoordinate(2, 4);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));


		dimensions = getTwoDimensionalPoint(1, 2);
		clonedDimensions = dimensions.clone();
		expect(dimensions).not.toBe(clonedDimensions);
		expect(dimensions).toStrictEqual(clonedDimensions);
		expect(isTypeTwoDimensional(clonedDimensions)).toBe(true);

		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));

		dimensions.setCoordinate(1, 0);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, 2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));

		dimensions.setCoordinate(2, -2);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, -2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));

		clonedDimensions.setCoordinate(1, 3);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, -2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 2));

		clonedDimensions.setCoordinate(2, 4);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(0, -2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));


		dimensions = getTwoDimensionalPoint(-3, 4);
		clonedDimensions = dimensions.clone();
		expect(dimensions).not.toBe(clonedDimensions);
		expect(dimensions).toStrictEqual(clonedDimensions);
		expect(isTypeTwoDimensional(clonedDimensions)).toBe(true);

		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-3, 4));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(-3, 4));

		dimensions.setCoordinate(1, -1);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-1, 4));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(-3, 4));

		dimensions.setCoordinate(2, -2);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-1, -2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(-3, 4));

		clonedDimensions.setCoordinate(1, 3);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-1, -2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));

		clonedDimensions.setCoordinate(2, 0);
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(-1, -2));
		expect(clonedDimensions).toStrictEqual(getTwoDimensionalPoint(3, 0));
	})


	test('add', () => {
		const dimensions = getTwoDimensionalPoint(1, 2);
		const addend = getTwoDimensionalPoint(3, 5);
		const resultDimensions = dimensions.add(addend);

		expect(dimensions).not.toBe(addend);
		expect(dimensions).not.toBe(resultDimensions);
		expect(addend).not.toBe(resultDimensions);
		expect(isTypeTwoDimensional(resultDimensions)).toBe(true);
		
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(1, 2));
		expect(addend).toStrictEqual(getTwoDimensionalPoint(3, 5));
		expect(resultDimensions).toStrictEqual(getTwoDimensionalPoint(4, 7));
	})
	test('subtract', () => {
		const dimensions = getTwoDimensionalPoint(4, 7);
		const subtrahend = getTwoDimensionalPoint(1, 2);
		const resultDimensions = dimensions.subtract(subtrahend);

		expect(dimensions).not.toBe(subtrahend);
		expect(dimensions).not.toBe(resultDimensions);
		expect(subtrahend).not.toBe(resultDimensions);
		expect(isTypeTwoDimensional(resultDimensions)).toBe(true);
		
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(4, 7));
		expect(subtrahend).toStrictEqual(getTwoDimensionalPoint(1, 2));
		expect(resultDimensions).toStrictEqual(getTwoDimensionalPoint(3, 5));
	})
	test('multiply', () => {
		const dimensions = getTwoDimensionalPoint(3, 4);
		const resultDimensions = dimensions.multiply(2);

		expect(dimensions).not.toBe(resultDimensions);
		expect(isTypeTwoDimensional(resultDimensions)).toBe(true);

		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));
		expect(resultDimensions).toStrictEqual(getTwoDimensionalPoint(6, 8));
	})
	test('divide', () => {
		const dimensions = getTwoDimensionalPoint(3, 4);
		const resultDimensions = dimensions.divide(2);

		expect(dimensions).not.toBe(resultDimensions);
		expect(isTypeTwoDimensional(resultDimensions)).toBe(true);
		
		expect(dimensions).toStrictEqual(getTwoDimensionalPoint(3, 4));
		expect(resultDimensions).toStrictEqual(getTwoDimensionalPoint(1.5, 2));
	})


	describe('getAbsoluteValue', () => {
		expect(  isTypeTwoDimensional(getTwoDimensionalPoint(0, 0).getAbsoluteValue())  ).toBe(true);
		expect(  isTypeTwoDimensional(getTwoDimensionalPoint(1, 2).getAbsoluteValue())  ).toBe(true);
		expect(  isTypeTwoDimensional(getTwoDimensionalPoint(3, -4).getAbsoluteValue())  ).toBe(true);

		expect(getTwoDimensionalPoint(0, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 0));

		expect(getTwoDimensionalPoint(1, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(1, 0));
		expect(getTwoDimensionalPoint(0, 1).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 1));
		expect(getTwoDimensionalPoint(1, 1).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(1, 1));
		
		expect(getTwoDimensionalPoint(-1, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(1, 0));
		expect(getTwoDimensionalPoint(0, -1).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 1));
		expect(getTwoDimensionalPoint(-1, -1).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(1, 1));
		
		expect(getTwoDimensionalPoint(3, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(3, 0));
		expect(getTwoDimensionalPoint(0, 5).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 5));
		expect(getTwoDimensionalPoint(3, 5).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(3, 5));
		
		expect(getTwoDimensionalPoint(-3, 0).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(3, 0));
		expect(getTwoDimensionalPoint(0, -5).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(0, 5));
		expect(getTwoDimensionalPoint(-3, -5).getAbsoluteValue()).toStrictEqual(getTwoDimensionalPoint(3, 5));
	})
	describe('getCenter', () => {
		const getAverage = (number01: number, number02: number) => {
			return ((number01 - number02) / 2) + number02;
		}


		expect(  isTypeTwoDimensional(getTwoDimensionalPoint(0, 0).getCenter())  ).toBe(true);
		expect(  isTypeTwoDimensional(getTwoDimensionalPoint(1, 2).getCenter())  ).toBe(true);
		expect(  isTypeTwoDimensional(getTwoDimensionalPoint(-3, 4).getCenter())  ).toBe(true);


		expect(getTwoDimensionalPoint(0, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(0, 0)));
		
		expect(getTwoDimensionalPoint(1, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(1, 0), getAverage(0, 0)));
		expect(getTwoDimensionalPoint(0, 1).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(1, 0)));
		expect(getTwoDimensionalPoint(1, 1).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(1, 0), getAverage(1, 0)));
		
		expect(getTwoDimensionalPoint(-1, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, 0), getAverage(0, 0)));
		expect(getTwoDimensionalPoint(0, -1).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(-1, 0)));
		expect(getTwoDimensionalPoint(-1, -1).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, 0), getAverage(-1, 0)));
		
		expect(getTwoDimensionalPoint(2, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(2, 0), getAverage(0, 0)));
		expect(getTwoDimensionalPoint(0, 6).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(6, 0)));
		expect(getTwoDimensionalPoint(2, 6).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(2, 0), getAverage(6, 0)));
		
		expect(getTwoDimensionalPoint(-2, 0).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, 0), getAverage(0, 0)));
		expect(getTwoDimensionalPoint(0, -6).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 0), getAverage(-6, 0)));
		expect(getTwoDimensionalPoint(-2, -6).getCenter()).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, 0), getAverage(-6, 0)));

		
		expect(getTwoDimensionalPoint(0, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(0, 2)));
		
		expect(getTwoDimensionalPoint(1, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(1, 1), getAverage(0, 2)));
		expect(getTwoDimensionalPoint(0, 1).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(1, 2)));
		expect(getTwoDimensionalPoint(1, 1).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(1, 1), getAverage(1, 2)));
		
		expect(getTwoDimensionalPoint(-1, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, 1), getAverage(0, 2)));
		expect(getTwoDimensionalPoint(0, -1).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(-1, 2)));
		expect(getTwoDimensionalPoint(-1, -1).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, 1), getAverage(-1, 2)));
		
		expect(getTwoDimensionalPoint(2, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(2, 1), getAverage(0, 2)));
		expect(getTwoDimensionalPoint(0, 6).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(6, 2)));
		expect(getTwoDimensionalPoint(2, 6).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(2, 1), getAverage(6, 2)));
		
		expect(getTwoDimensionalPoint(-2, 0).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, 1), getAverage(0, 2)));
		expect(getTwoDimensionalPoint(0, -6).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, 1), getAverage(-6, 2)));
		expect(getTwoDimensionalPoint(-2, -6).getCenter(getTwoDimensionalPoint(1, 2))).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, 1), getAverage(-6, 2)));

		
		expect(getTwoDimensionalPoint(0, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(0, 4)));
		
		expect(getTwoDimensionalPoint(1, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(1, -3), getAverage(0, 4)));
		expect(getTwoDimensionalPoint(0, 1).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(1, 4)));
		expect(getTwoDimensionalPoint(1, 1).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(1, -3), getAverage(1, 4)));
		
		expect(getTwoDimensionalPoint(-1, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, -3), getAverage(0, 4)));
		expect(getTwoDimensionalPoint(0, -1).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(-1, 4)));
		expect(getTwoDimensionalPoint(-1, -1).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(-1, -3), getAverage(-1, 4)));
		
		expect(getTwoDimensionalPoint(2, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(2, -3), getAverage(0, 4)));
		expect(getTwoDimensionalPoint(0, 6).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(6, 4)));
		expect(getTwoDimensionalPoint(2, 6).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(2, -3), getAverage(6, 4)));
		
		expect(getTwoDimensionalPoint(-2, 0).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, -3), getAverage(0, 4)));
		expect(getTwoDimensionalPoint(0, -6).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(0, -3), getAverage(-6, 4)));
		expect(getTwoDimensionalPoint(-2, -6).getCenter(getTwoDimensionalPoint(-3, 4))).toStrictEqual(getTwoDimensionalPoint(getAverage(-2, -3), getAverage(-6, 4)));
	})


	describe('getAngle', () => {
		test('no angle', () => {
			expect(  getTwoDimensionalPoint(0, 0).getAngle()  ).toBe(null);
			expect(  getReferencePointInI().getAngle(getReferencePointInI())  ).toBe(null);
			expect(  getReferencePointInII().getAngle(getReferencePointInII())  ).toBe(null);
		});
		test('regardless of length', () => {
			expect(  getTwoDimensionalPoint(1, 0).multiply(1).getAngle()  ).toBe(0);
			expect(  getTwoDimensionalPoint(3, 4).multiply(1).getAngle()  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(3, -4).multiply(1).getAngle()  ).toBeCloseTo(-53.13, 2);
			expect(  getTwoDimensionalPoint(1, 0).multiply(10).getAngle()  ).toBe(0);
			expect(  getTwoDimensionalPoint(3, 4).multiply(10).getAngle()  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(3, -4).multiply(10).getAngle()  ).toBeCloseTo(-53.13, 2);
			
			expect(  getTwoDimensionalPoint(1, 0).multiply(1).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBe(0);
			expect(  getTwoDimensionalPoint(3, 4).multiply(1).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(3, -4).multiply(1).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo(-53.13, 2);
			expect(  getTwoDimensionalPoint(1, 0).multiply(10).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBe(0);
			expect(  getTwoDimensionalPoint(3, 4).multiply(10).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(3, -4).multiply(10).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo(-53.13, 2);

			expect(  getTwoDimensionalPoint(1, 0).multiply(1).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBe(0);
			expect(  getTwoDimensionalPoint(3, 4).multiply(1).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(3, -4).multiply(1).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo(-53.13, 2);
			expect(  getTwoDimensionalPoint(1, 0).multiply(10).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBe(0);
			expect(  getTwoDimensionalPoint(3, 4).multiply(10).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(3, -4).multiply(10).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo(-53.13, 2);
		});
		test('first quadrant', () => {
			expect(  getTwoDimensionalPoint(3, 4).getAngle()  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(4, 3).getAngle()  ).toBeCloseTo(36.87, 2);
			expect(  getTwoDimensionalPoint(2, 2).getAngle()  ).toBe(45);
			
			expect(  getTwoDimensionalPoint(3, 4).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(4, 3).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo(36.87, 2);
			expect(  getTwoDimensionalPoint(2, 2).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBe(45);
			
			expect(  getTwoDimensionalPoint(3, 4).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(4, 3).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo(36.87, 2);
			expect(  getTwoDimensionalPoint(2, 2).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBe(45);
		});
		test('axis', () => {
			expect(  getTwoDimensionalPoint(1, 0).getAngle()  ).toBe(0);
			expect(  getTwoDimensionalPoint(0, 1).getAngle()  ).toBe(90);
			expect(  getTwoDimensionalPoint(-1, 0).getAngle()  ).toBe(180);
			expect(  getTwoDimensionalPoint(0, -1).getAngle()  ).toBe(-90);
			
			expect(  getTwoDimensionalPoint(1, 0).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBe(0);
			expect(  getTwoDimensionalPoint(0, 1).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBe(90);
			expect(  getTwoDimensionalPoint(-1, 0).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBe(180);
			expect(  getTwoDimensionalPoint(0, -1).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBe(-90);
			
			expect(  getTwoDimensionalPoint(1, 0).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBe(0);
			expect(  getTwoDimensionalPoint(0, 1).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBe(90);
			expect(  getTwoDimensionalPoint(-1, 0).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBe(180);
			expect(  getTwoDimensionalPoint(0, -1).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBe(-90);
		});
		test('quadrant (each)', () => {
			expect(  getTwoDimensionalPoint(3, 4).getAngle()  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(-3, 4).getAngle()  ).toBeCloseTo((180 - 53.13), 2);
			expect(  getTwoDimensionalPoint(-3, -4).getAngle()  ).toBeCloseTo(-(180 - 53.13), 2);
			expect(  getTwoDimensionalPoint(3, -4).getAngle()  ).toBeCloseTo(-53.13, 2);

			expect(  getTwoDimensionalPoint(3, 4).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(-3, 4).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo((180 - 53.13), 2);
			expect(  getTwoDimensionalPoint(-3, -4).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo(-(180 - 53.13), 2);
			expect(  getTwoDimensionalPoint(3, -4).add(getReferencePointInI()).getAngle(getReferencePointInI())  ).toBeCloseTo(-53.13, 2);
			
			expect(  getTwoDimensionalPoint(3, 4).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo(53.13, 2);
			expect(  getTwoDimensionalPoint(-3, 4).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo((180 - 53.13), 2);
			expect(  getTwoDimensionalPoint(-3, -4).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo(-(180 - 53.13), 2);
			expect(  getTwoDimensionalPoint(3, -4).add(getReferencePointInII()).getAngle(getReferencePointInII())  ).toBeCloseTo(-53.13, 2);
		});
	})
	
	describe('rotate', () => {
		describe('original position is on the positive x axis', () => {
			describe('check value (transform to first quadrant)', () => {
				test('no reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;

					originalDimensions = new TwoDimensional([Math.sqrt(2), 0]);
					newDimensions = originalDimensions.rotate(45);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([Math.sqrt(2), 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(1, 2);

					originalDimensions = new TwoDimensional([5, 0]);
					newDimensions = originalDimensions.rotate(53.13);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([5, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(3, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(4, 2);
			
					originalDimensions = new TwoDimensional([2, 0]);
					newDimensions = originalDimensions.rotate(60);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(1.73, 2);
				});
				test('have a reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;

					originalDimensions = new TwoDimensional([Math.sqrt(2), 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(45, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([Math.sqrt(2), 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([5, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(53.13, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([5, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((3 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((4 + getReferencePointInI().getCoordinate(2)), 2);
			
					originalDimensions = new TwoDimensional([2, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(60, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((1.73 + getReferencePointInI().getCoordinate(2)), 2);
				});
			});describe
			describe('regardless of whether the angle is simplified or not', () => {
				test('no reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;

					originalDimensions = new TwoDimensional([2, 0]);
					newDimensions = originalDimensions.rotate(60 - 360);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(1.73, 2);

					originalDimensions = new TwoDimensional([2, 0]);
					newDimensions = originalDimensions.rotate(60);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(1.73, 2);
					
					originalDimensions = new TwoDimensional([2, 0]);
					newDimensions = originalDimensions.rotate(60 + 360);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(1.73, 2);

					originalDimensions = new TwoDimensional([2, 0]);
					newDimensions = originalDimensions.rotate(60 + 720);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(1.73, 2);
				});
				test('have a reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;

					originalDimensions = new TwoDimensional([2, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(60 - 360, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((1.73 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([2, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(60, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((1.73 + getReferencePointInI().getCoordinate(2)), 2);
					
					originalDimensions = new TwoDimensional([2, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(60 + 360, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((1.73 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([2, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(60 + 720, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((1.73 + getReferencePointInI().getCoordinate(2)), 2);
				});
			});
			describe('transform to each quadrant and axis', () => {
				test('no reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;
			

					originalDimensions = new TwoDimensional();
					expect( originalDimensions.rotate(0) ).toStrictEqual( new TwoDimensional() );
					expect( originalDimensions ).toStrictEqual(new TwoDimensional());

					originalDimensions = new TwoDimensional([1, 0]);
					expect( originalDimensions.rotate(0) ).toStrictEqual( new TwoDimensional([1, 0]));
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, 0]));

					originalDimensions = new TwoDimensional([1, 0]);
					newDimensions = originalDimensions.rotate(90);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(0, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(1, 2);

					originalDimensions = new TwoDimensional([1, 0]);
					newDimensions = originalDimensions.rotate(180);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(-1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(0, 2);
					
					originalDimensions = new TwoDimensional([1, 0]);
					newDimensions = originalDimensions.rotate(270);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(0, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(-1, 2);

					
					originalDimensions = new TwoDimensional([2, 0]);
					newDimensions = originalDimensions.rotate(60);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(1.73, 2);

					originalDimensions = new TwoDimensional([2, 0]);
					newDimensions = originalDimensions.rotate(180 - 60);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(-1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(1.73, 2);

					originalDimensions = new TwoDimensional([2, 0]);
					newDimensions = originalDimensions.rotate(180 + 60);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(-1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(-1.73, 2);
					
					originalDimensions = new TwoDimensional([2, 0]);
					newDimensions = originalDimensions.rotate(360 - 60);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(1, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(-1.73, 2);
				});
				test('have a reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;
			

					originalDimensions = new TwoDimensional().add(getReferencePointInI());
					expect( originalDimensions.rotate(0, getReferencePointInI()) ).toStrictEqual( new TwoDimensional().add(getReferencePointInI()) );
					expect( originalDimensions ).toStrictEqual(new TwoDimensional().add(getReferencePointInI()));

					originalDimensions = new TwoDimensional([1, 0]).add(getReferencePointInI());
					expect( originalDimensions.rotate(0, getReferencePointInI()) ).toStrictEqual( new TwoDimensional([1, 0]).add(getReferencePointInI()));
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, 0]).add(getReferencePointInI()));

					originalDimensions = new TwoDimensional([1, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(90, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([1, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(180, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((-1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(2)), 2);
					
					originalDimensions = new TwoDimensional([1, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(270, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((-1 + getReferencePointInI().getCoordinate(2)), 2);

					
					originalDimensions = new TwoDimensional([2, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(60, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((1.73 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([2, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((180 - 60), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((-1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((1.73 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([2, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((180 + 60), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((-1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((-1.73 + getReferencePointInI().getCoordinate(2)), 2);
					
					originalDimensions = new TwoDimensional([2, 0]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((360 - 60), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([2, 0]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((1 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((-1.73 + getReferencePointInI().getCoordinate(2)), 2);
				});
			});
		});
		describe('original position is in the first quadrant', () => {
			describe('check value (transform to x axis)', () => {
				test('no reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;

					originalDimensions = new TwoDimensional([1, 1]);
					newDimensions = originalDimensions.rotate(-45);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, 1]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(Math.sqrt(2), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(0, 2);

					originalDimensions = new TwoDimensional([3, 4]);
					newDimensions = originalDimensions.rotate(-53.13);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([3, 4]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(5, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(0, 2);
			
					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]);
					newDimensions = originalDimensions.rotate(-60);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, Math.sqrt(3)]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(2, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(0, 2);
				});
				test('have a reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;

					originalDimensions = new TwoDimensional([1, 1]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(-45, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, 1]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((Math.sqrt(2) + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([3, 4]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(-53.13, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([3, 4]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((5 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(2)), 2);
			
					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(-60, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((2 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(2)), 2);
				});
			});
			describe('regardless of whether the angle is simplified or not', () => {
				test('no reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]);
					newDimensions = originalDimensions.rotate(-(60 - 53.13) - 360);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(6, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(8, 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]);
					newDimensions = originalDimensions.rotate(-(60 - 53.13));
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(6, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(8, 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]);
					newDimensions = originalDimensions.rotate(-(60 - 53.13) + 360);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(6, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(8, 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]);
					newDimensions = originalDimensions.rotate(-(60 - 53.13) + 720);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(6, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(8, 2);
				});
				test('have to reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-(60 - 53.13) - 360), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((6 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((8 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(-(60 - 53.13), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((6 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((8 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-(60 - 53.13) + 360), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((6 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((8 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-(60 - 53.13) + 720), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((6 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((8 + getReferencePointInI().getCoordinate(2)), 2);
				});
			});
			describe('transform to each quadrant and axis', () => {
				test('no reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;


					originalDimensions = new TwoDimensional();
					expect( originalDimensions.rotate(0) ).toStrictEqual(new TwoDimensional());
					expect( originalDimensions ).toStrictEqual(new TwoDimensional());

					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]);
					newDimensions = originalDimensions.rotate(-60);
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, Math.sqrt(3)]));
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(2, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(0, 2);

					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]);
					newDimensions = originalDimensions.rotate(-60 - 90);
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, Math.sqrt(3)]));
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(0, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(-2, 2);

					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]);
					newDimensions = originalDimensions.rotate(-60 - 180);
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, Math.sqrt(3)]));
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(-2, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(0, 2);

					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]);
					newDimensions = originalDimensions.rotate(-60 - 270);
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, Math.sqrt(3)]));
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(0, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(2, 2);


					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]);
					newDimensions = originalDimensions.rotate(-60 - 53.13);
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(6, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(-8, 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]);
					newDimensions = originalDimensions.rotate(-60 - (180 - 53.13));
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(-6, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(-8, 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]);
					newDimensions = originalDimensions.rotate(-60 - (180 + 53.13));
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(-6, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(8, 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]);
					newDimensions = originalDimensions.rotate(-60 - (360 - 53.13));
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo(6, 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo(8, 2);
				});
				test('have a reference point', () => {
					let originalDimensions: TwoDimensional;
					let newDimensions: TwoDimensional;


					originalDimensions = new TwoDimensional().add(getReferencePointInI());
					expect( originalDimensions.rotate(0, getReferencePointInI()) ).toStrictEqual(new TwoDimensional().add(getReferencePointInI()));
					expect( originalDimensions ).toStrictEqual(new TwoDimensional().add(getReferencePointInI()));

					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate(-60, getReferencePointInI());
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI()));
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((2 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-60 - 90), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI()));
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((-2 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-60 - 180), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI()));
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((-2 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-60 - 270), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual(new TwoDimensional([1, Math.sqrt(3)]).add(getReferencePointInI()));
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((0 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((2 + getReferencePointInI().getCoordinate(2)), 2);


					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-60 - 53.13), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((6 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((-8 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-60 - (180 - 53.13)), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((-6 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((-8 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-60 - (180 + 53.13)), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((-6 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((8 + getReferencePointInI().getCoordinate(2)), 2);

					originalDimensions = new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI());
					newDimensions = originalDimensions.rotate((-60 - (360 - 53.13)), getReferencePointInI());
					expect( originalDimensions ).toStrictEqual( new TwoDimensional([ (1 * 5), (Math.sqrt(3) * 5) ]).add(getReferencePointInI()) );
					expect( newDimensions.getCoordinate(1) ).toBeCloseTo((6 + getReferencePointInI().getCoordinate(1)), 2);
					expect( newDimensions.getCoordinate(2) ).toBeCloseTo((8 + getReferencePointInI().getCoordinate(2)), 2);
				})
			})
		})
		
		test('check return type', () => {
			expect(    getTwoDimensionalPoint(0, 0).rotate(0) instanceof TwoDimensional    ).toBe(true);
			expect(    getTwoDimensionalPoint(0, 0).rotate(45) instanceof TwoDimensional    ).toBe(true);
			expect(    getTwoDimensionalPoint(1, 2).rotate(0) instanceof TwoDimensional    ).toBe(true);
			expect(    getTwoDimensionalPoint(1, 2).rotate(45) instanceof TwoDimensional    ).toBe(true);
			
			expect(    getTwoDimensionalPoint(0, 0).rotate(0, getReferencePointInI()) instanceof TwoDimensional    ).toBe(true);
			expect(    getTwoDimensionalPoint(0, 0).rotate(45, getReferencePointInI()) instanceof TwoDimensional    ).toBe(true);
			expect(    getTwoDimensionalPoint(1, 2).rotate(0, getReferencePointInI()) instanceof TwoDimensional    ).toBe(true);
			expect(    getTwoDimensionalPoint(1, 2).rotate(45, getReferencePointInI()) instanceof TwoDimensional    ).toBe(true);
			
			expect(    getTwoDimensionalPoint(0, 0).rotate(0, getReferencePointInII()) instanceof TwoDimensional    ).toBe(true);
			expect(    getTwoDimensionalPoint(0, 0).rotate(45, getReferencePointInII()) instanceof TwoDimensional    ).toBe(true);
			expect(    getTwoDimensionalPoint(1, 2).rotate(0, getReferencePointInII()) instanceof TwoDimensional    ).toBe(true);
			expect(    getTwoDimensionalPoint(1, 2).rotate(45, getReferencePointInII()) instanceof TwoDimensional    ).toBe(true);
		})
	})
})




describe('test class Position', () => {
	const isTypePosition = (position: Position) => (Object.getPrototypeOf(position).constructor.name === 'Position');


	test('attributes x and y', () => {
		const position = new Position();
		expect(position.x).toBe(0);
		expect(position.y).toBe(0);

		position.x = 1;
		position.y = -2;
		expect(position.x).toBe(1);
		expect(position.y).toBe(-2);

		position.x = -2;
		position.y = 3;
		expect(position.x).toBe(-2);
		expect(position.y).toBe(3);
	})
	test('constructor', () => {
		let position: Position;

		position = new Position(1, 0);
		expect(position.x).toBe(1);
		expect(position.y).toBe(0);

		position = new Position(0, 1);
		expect(position.x).toBe(0);
		expect(position.y).toBe(1);

		position = new Position(1, -2);
		expect(position.x).toBe(1);
		expect(position.y).toBe(-2);

		position = new Position({});
		expect(position.x).toBe(0);
		expect(position.y).toBe(0);

		position = new Position({x: 1});
		expect(position.x).toBe(1);
		expect(position.y).toBe(0);

		position = new Position({y: -2});
		expect(position.x).toBe(0);
		expect(position.y).toBe(-2);

		position = new Position({x: 1, y: -2});
		expect(position.x).toBe(1);
		expect(position.y).toBe(-2);

		position = new Position({x: 1, y: -2, other: 0});
		expect(position.x).toBe(1);
		expect(position.y).toBe(-2);
	})


	test('clone', () => {
		const position = new Position(1, -2);
		const clonedPosition = position.clone();

		expect(position).not.toBe(clonedPosition);
		expect(position).toStrictEqual(clonedPosition);
		expect(isTypePosition(clonedPosition)).toBe(true);

		position.x = -2;
		position.y = -3;
		expect(clonedPosition.x).toBe(1);
		expect(clonedPosition.y).toBe(-2);

		clonedPosition.x = 5;
		clonedPosition.y = 7;
		expect(position.x).toBe(-2);
		expect(position.y).toBe(-3);
	})
	test('toString', () => {
		let position: Position;

		position = new Position(1, -2);
		expect(position.toString()).toBe(`Position {x: ${position.x}, y: ${position.y}}`);

		position = new Position(5, 7);
		expect(position.toString()).toBe(`Position {x: ${position.x}, y: ${position.y}}`);
	})
	

	describe('add', () => {
		test('check parameter type', () => {
			expect(    new Position(1, 2).add(new TwoDimensional([3, 4]))    ).toStrictEqual(new Position(4, 6));
			expect(    new Position(1, 2).add(new Position(3, 4))    ).toStrictEqual(new Position(4, 6));
			expect(    new Position(1, 2).add(new Size(3, 4))    ).toStrictEqual(new Position(4, 6));
		})
		test('check return type', () => {
			expect(    isTypePosition(new Position(1, 2).add(new TwoDimensional([3, 4])))    ).toBe(true);
			expect(    isTypePosition(new Position(1, 2).add(new Position(3, 4)))    ).toBe(true);
			expect(    isTypePosition(new Position(1, 2).add(new Size(3, 4)))    ).toBe(true);
		})
	})
	describe('subtract', () => {
		test('check parameter type', () => {
			expect(    new Position(1, 2).subtract(new TwoDimensional([3, 4]))    ).toStrictEqual(new Position(-2, -2));
			expect(    new Position(1, 2).subtract(new Position(3, 4))    ).toStrictEqual(new Position(-2, -2));
			expect(    new Position(3, 4).subtract(new Size(1, 2))    ).toStrictEqual(new Position(2, 2));
		})
		test('check return type', () => {
			expect(    isTypePosition(new Position(1, 2).subtract(new Position(3, 4)))    ).toBe(true);
			expect(    isTypePosition(new Position(1, 2).subtract(new Size(3, 4)))    ).toBe(true);
			expect(    isTypePosition(new Position(1, 2).subtract(new TwoDimensional([3, 4])))    ).toBe(true);
		})
	})
	describe('multiply', () => {
		test('check return type', () => {
			expect(  isTypePosition(new Position().multiply(0))  ).toBe(true);
			expect(  isTypePosition(new Position().multiply(1))  ).toBe(true);
			expect(  isTypePosition(new Position().multiply(-1))  ).toBe(true);
		})
	})
	describe('divide', () => {
		test('check return type', () => {
			expect(  isTypePosition(new Position().divide(1))  ).toBe(true);
			expect(  isTypePosition(new Position().divide(-1))  ).toBe(true);
		})
	})

	
	describe('getAbsoluteValue', () => {
		test('check return type', () => {
			expect(  isTypePosition(new Position().getAbsoluteValue())  ).toBe(true);
			expect(  isTypePosition(new Position(1, 2).getAbsoluteValue())  ).toBe(true);
			expect(  isTypePosition(new Position(-3, 4).getAbsoluteValue())  ).toBe(true);
		})
	})
	describe('getCenter', () => {
		const getAverage = (number01: number, number02: number) => {
			return ((number01 - number02) / 2) + number02;
		}


		test('check parameter type', () => {
			expect(    new Position(1, 2).getCenter()    ).toStrictEqual(    new Position(getAverage(1, 0), getAverage(2, 0))    );
			expect(    new Position(1, 2).getCenter(new TwoDimensional([3, 4]))    ).toStrictEqual(    new Position(getAverage(1, 3), getAverage(2, 4))    );
			expect(    new Position(1, 2).getCenter(new Position(3, 4))    ).toStrictEqual(    new Position(getAverage(1, 3), getAverage(2, 4))    );
			expect(    new Position(1, 2).getCenter(new Size(3, 4))    ).toStrictEqual(    new Position(getAverage(1, 3), getAverage(2, 4))    );
		})
		test('check return type', () => {
			expect(    isTypePosition(new Position(1, 2).getCenter())    ).toBe(true);
			expect(    isTypePosition(new Position(1, 2).getCenter(new TwoDimensional([3, 4])))    ).toBe(true);
			expect(    isTypePosition(new Position(1, 2).getCenter(new Position(3, 4)))    ).toBe(true);
			expect(    isTypePosition(new Position(1, 2).getCenter(new Size(3, 4)))    ).toBe(true);
		})
	})
	

	describe('getAngle', () => {
		test('check parameter type', () => {
			expect(  new Position(1, 0).getAngle()  ).toBe(0);
			expect(  new Position(1, 0).getAngle(new TwoDimensional())  ).toBe(0);
			expect(  new Position(1, 0).getAngle(new Position())  ).toBe(0);
			expect(  new Position(1, 0).getAngle(new Size())  ).toBe(0);
		})
	})
	describe('rotate', () => {
		test('check return type', () => {
			expect(  isTypePosition(new Position().rotate(0))  ).toBe(true);
			expect(  isTypePosition(new Position().rotate(45))  ).toBe(true);
			
			expect(  isTypePosition(new Position(1, 0).rotate(0))  ).toBe(true);
			expect(  isTypePosition(new Position(1, 0).rotate(45))  ).toBe(true);
		})
	})


	describe('transform to', () => {
		test('web', () => {
			let originalPosition: Position;
			let position: Position;
			
			originalPosition = new Position();
			position = originalPosition.transformToWeb();
			expect(originalPosition.x).toBe(0);
			expect(originalPosition.y).toBe(0);
			expect(position.x).toBe(0);
			expect(position.y).toBe(-0);
			
			originalPosition = new Position(1, 2);
			position = originalPosition.transformToWeb();
			expect(originalPosition.x).toBe(1);
			expect(originalPosition.y).toBe(2);
			expect(position.x).toBe(1);
			expect(position.y).toBe(-2);
			
			originalPosition = new Position(4, -3);
			position = originalPosition.transformToWeb();
			expect(originalPosition.x).toBe(4);
			expect(originalPosition.y).toBe(-3);
			expect(position.x).toBe(4);
			expect(position.y).toBe(3);
		})
		test('math', () => {
			let originalPosition: Position;
			let position: Position;
			
			originalPosition = new Position();
			position = originalPosition.transformToMath();
			expect(originalPosition.x).toBe(0);
			expect(originalPosition.y).toBe(0);
			expect(position.x).toBe(0);
			expect(position.y).toBe(-0);
			
			originalPosition = new Position(1, 2);
			position = originalPosition.transformToMath();
			expect(originalPosition.x).toBe(1);
			expect(originalPosition.y).toBe(2);
			expect(position.x).toBe(1);
			expect(position.y).toBe(-2);
			
			originalPosition = new Position(4, -3);
			position = originalPosition.transformToMath();
			expect(originalPosition.x).toBe(4);
			expect(originalPosition.y).toBe(-3);
			expect(position.x).toBe(4);
			expect(position.y).toBe(3);
		})
	})
})


describe('test class Size', () => {
	const isTypeSize = (size: Size) => (Object.getPrototypeOf(size).constructor.name === 'Size');


	test('attributes width and height', () => {
		const size = new Size();
		expect(size.width).toBe(0);
		expect(size.height).toBe(0);

		size.width = 1;
		size.height = 2;
		expect(size.width).toBe(1);
		expect(size.height).toBe(2);

		size.width = 5;
		size.height = 7;
		expect(size.width).toBe(5);
		expect(size.height).toBe(7);
	})
	test('constructor', () => {
		let size: Size;

		size = new Size(1, 0);
		expect(size.width).toBe(1);
		expect(size.height).toBe(0);

		size = new Size(0, 1);
		expect(size.width).toBe(0);
		expect(size.height).toBe(1);

		size = new Size(1, 2);
		expect(size.width).toBe(1);
		expect(size.height).toBe(2);

		size = new Size({});
		expect(size.width).toBe(0);
		expect(size.height).toBe(0);

		size = new Size({width: 1});
		expect(size.width).toBe(1);
		expect(size.height).toBe(0);

		size = new Size({width: 3});
		expect(size.width).toBe(3);
		expect(size.height).toBe(0);

		size = new Size({width: 1, height: 2});
		expect(size.width).toBe(1);
		expect(size.height).toBe(2);

		size = new Size({width: 1, height: 2, other: 0});
		expect(size.width).toBe(1);
		expect(size.height).toBe(2);
	})
	test(`check that width and height aren't negative`, () => {
		expect(() => new Size(-1, 0)).toThrow(new Error(`Width cannot be negative.`));
		expect(() => new Size(0, -1)).toThrow(new Error(`Height cannot be negative.`));
		expect(() => new Size(-1, -1)).toThrow(new Error(`Width cannot be negative.`));
		
		expect(() => new Size({width: -1})).toThrow(new Error(`Width cannot be negative.`));
		expect(() => new Size({height: -1})).toThrow(new Error(`Height cannot be negative.`));
		expect(() => new Size({width: -1, height: -1})).toThrow(new Error(`Width cannot be negative.`));

		const size = new Size();
		expect(() => { size.width = -1 }).toThrow(new Error(`Width cannot be negative.`));
		expect(() => { size.height = -1 }).toThrow(new Error(`Height cannot be negative.`));
	})


	test('clone', () => {
		const size = new Size(1, 2);
		const clonedSize = size.clone();

		expect(size).not.toBe(clonedSize);
		expect(size).toStrictEqual(clonedSize);
		expect(isTypeSize(clonedSize)).toBe(true);

		size.width = 5;
		size.height = 7;
		expect(clonedSize.width).toBe(1);
		expect(clonedSize.height).toBe(2);

		clonedSize.width = 3;
		clonedSize.height = 4;
		expect(size.width).toBe(5);
		expect(size.height).toBe(7);
	})
	test('toString', () => {
		let size: Size;

		size = new Size(1, 2);
		expect(size.toString()).toBe(`Size {width: ${size.width}, height: ${size.height}}`);

		size = new Size(5, 7);
		expect(size.toString()).toBe(`Size {width: ${size.width}, height: ${size.height}}`);
	})
	

	describe('add', () => {
		test('check parameter type', () => {
			expect(    new Size(1, 2).add(new TwoDimensional([3, 4]))    ).toStrictEqual(new Size(4, 6));
			expect(    new Size(1, 2).add(new Position(3, 4))    ).toStrictEqual(new Size(4, 6));
			expect(    new Size(1, 2).add(new Size(3, 4))    ).toStrictEqual(new Size(4, 6));
		})
		test('check return type', () => {
			expect(    isTypeSize(new Size(1, 2).add(new TwoDimensional([3, 4])))    ).toBe(true);
			expect(    isTypeSize(new Size(1, 2).add(new Position(3, 4)))    ).toBe(true);
			expect(    isTypeSize(new Size(1, 2).add(new Size(3, 4)))    ).toBe(true);
		})
	})
	describe('subtract', () => {
		test('check parameter type', () => {
			expect(    new Size(3, 4).subtract(new TwoDimensional([1, 2]))    ).toStrictEqual(new Size(2, 2));
			expect(    new Size(3, 4).subtract(new Position(1, 2))    ).toStrictEqual(new Size(2, 2));
			expect(    new Size(3, 4).subtract(new Size(1, 2))    ).toStrictEqual(new Size(2, 2));
		})
		test('check return type', () => {
			expect(    isTypeSize(new Size(1, 2).subtract(new TwoDimensional([3, 4])))    ).toBe(true);
			expect(    isTypeSize(new Size(1, 2).subtract(new Position(3, 4)))    ).toBe(true);
			expect(    isTypeSize(new Size(1, 2).subtract(new Size(3, 4)))    ).toBe(true);
		})
	})
	describe('multiply', () => {
		test('check return type', () => {
			expect(  isTypeSize(new Size().multiply(0))  ).toBe(true);
			expect(  isTypeSize(new Size().multiply(1))  ).toBe(true);
			expect(  isTypeSize(new Size().multiply(-1))  ).toBe(true);
		})
	})
	describe('divide', () => {
		test('check return type', () => {
			expect(  isTypeSize(new Size().divide(1))  ).toBe(true);
			expect(  isTypeSize(new Size().divide(-1))  ).toBe(true);
		})
	})

	
	describe('getAbsoluteValue', () => {
		test('check return type', () => {
			expect(  isTypeSize(new Size().getAbsoluteValue())  ).toBe(true);
			expect(  isTypeSize(new Size(1, 2).getAbsoluteValue())  ).toBe(true);
		})
	})
	describe('getCenter', () => {
		const getAverage = (number01: number, number02: number) => {
			return ((number01 - number02) / 2) + number02;
		}


		test('check parameter type', () => {
			expect(    new Size(1, 2).getCenter()    ).toStrictEqual(    new Size(getAverage(1, 0), getAverage(2, 0))    );
			expect(    new Size(1, 2).getCenter(new TwoDimensional([3, 4]))    ).toStrictEqual(    new Size(getAverage(1, 3), getAverage(2, 4))    );
			expect(    new Size(1, 2).getCenter(new Position(3, 4))    ).toStrictEqual(    new Size(getAverage(1, 3), getAverage(2, 4))    );
			expect(    new Size(1, 2).getCenter(new Size(3, 4))    ).toStrictEqual(    new Size(getAverage(1, 3), getAverage(2, 4))    );
		})
		test('check return type', () => {
			expect(    isTypeSize(new Size(1, 2).getCenter())    ).toBe(true);
			expect(    isTypeSize(new Size(1, 2).getCenter(new TwoDimensional([3, 4])))    ).toBe(true);
			expect(    isTypeSize(new Size(1, 2).getCenter(new Position(3, 4)))    ).toBe(true);
			expect(    isTypeSize(new Size(1, 2).getCenter(new Size(3, 4)))    ).toBe(true);
		})
		test(`check that width and height aren't negative`, () => {
			expect(() => new Size().getCenter(new TwoDimensional([-2, 0]))).toThrow(new Error(`Width cannot be negative.`));
			expect(() => new Size().getCenter(new TwoDimensional([0, -2]))).toThrow(new Error(`Height cannot be negative.`));
			expect(() => new Size().getCenter(new TwoDimensional([-2, -2]))).toThrow(new Error(`Width cannot be negative.`));
		})
	})
	

	describe('getAngle', () => {
		test('check parameter type', () => {
			expect(  new Size(1, 0).getAngle()  ).toBe(0);
			expect(  new Size(1, 0).getAngle(new TwoDimensional())  ).toBe(0);
			expect(  new Size(1, 0).getAngle(new Position())  ).toBe(0);
			expect(  new Size(1, 0).getAngle(new Size())  ).toBe(0);
		})
	})
	describe('rotate', () => {
		test('check return type', () => {
			expect(  isTypeSize(new Size().rotate(0))  ).toBe(true);
			expect(  isTypeSize(new Size().rotate(45))  ).toBe(true);

			expect(  isTypeSize(new Size(1, 0).rotate(0))  ).toBe(true);
			expect(  isTypeSize(new Size(1, 0).rotate(45))  ).toBe(true);
		})
	})
})


describe('class Angle', () => {
	test('radianToDegree', () => {
		expect( Angle.radianToDegree(0) ).toBe(0);
		expect( Angle.radianToDegree(Math.PI) ).toBe(180);
		expect( Angle.radianToDegree(0.25) ).toBeCloseTo(14.32, 2);
		expect( Angle.radianToDegree(1.36) ).toBeCloseTo(77.92, 2);
	})
	test('degreeToRadian', () => {
		expect( Angle.degreeToRadian(0) ).toBe(0);
		expect( Angle.degreeToRadian(180) ).toBe(Math.PI);
		expect( Angle.degreeToRadian(14.32) ).toBeCloseTo(0.25, 2);
		expect( Angle.degreeToRadian(77.92) ).toBeCloseTo(1.36, 2);
	})

	describe('isEqual', () => {
		test('angle = 0° (axis)', () => {
			expect( Angle.isEqual(0, 0) ).toBe(true);

			expect( Angle.isEqual(0, (0 + 360)) ).toBe(true);
			expect( Angle.isEqual(0, (0 + 720)) ).toBe(true);
			expect( Angle.isEqual(0, (0 - 360)) ).toBe(true);
			expect( Angle.isEqual(0, (0 - 720)) ).toBe(true);
			expect( Angle.isEqual((0 + 360), 0) ).toBe(true);
			expect( Angle.isEqual((0 + 720), 0) ).toBe(true);
			expect( Angle.isEqual((0 - 360), 0) ).toBe(true);
			expect( Angle.isEqual((0 - 720), 0) ).toBe(true);

			expect( Angle.isEqual((0 - 360), (0 + 360)) ).toBe(true);
			expect( Angle.isEqual((0 - 720), (0 + 720)) ).toBe(true);
			expect( Angle.isEqual((0 + 360), (0 - 360)) ).toBe(true);
			expect( Angle.isEqual((0 + 720), (0 - 720)) ).toBe(true);
		})
		test('angle = 45° (first quadrant)', () => {
			expect( Angle.isEqual(45, 45) ).toBe(true);
        
			expect( Angle.isEqual(45, (45 + 360)) ).toBe(true);
			expect( Angle.isEqual(45, (45 + 720)) ).toBe(true);
			expect( Angle.isEqual(45, (45 - 360)) ).toBe(true);
			expect( Angle.isEqual(45, (45 - 720)) ).toBe(true);
			expect( Angle.isEqual((45 + 360), 45) ).toBe(true);
			expect( Angle.isEqual((45 + 720), 45) ).toBe(true);
			expect( Angle.isEqual((45 - 360), 45) ).toBe(true);
			expect( Angle.isEqual((45 - 720), 45) ).toBe(true);

			expect( Angle.isEqual((45 - 360), (45 + 360)) ).toBe(true);
			expect( Angle.isEqual((45 - 720), (45 + 720)) ).toBe(true);
			expect( Angle.isEqual((45 + 360), (45 - 360)) ).toBe(true);
			expect( Angle.isEqual((45 + 720), (45 - 720)) ).toBe(true);
		})
		test('angle = 350° (fourth quadrant)', () => {
			expect( Angle.isEqual(350, 350) ).toBe(true);
        
			expect( Angle.isEqual(350, (350 + 360)) ).toBe(true);
			expect( Angle.isEqual(350, (350 + 720)) ).toBe(true);
			expect( Angle.isEqual(350, (350 - 360)) ).toBe(true);
			expect( Angle.isEqual(350, (350 - 720)) ).toBe(true);
			expect( Angle.isEqual((350 + 360), 350) ).toBe(true);
			expect( Angle.isEqual((350 + 720), 350) ).toBe(true);
			expect( Angle.isEqual((350 - 360), 350) ).toBe(true);
			expect( Angle.isEqual((350 - 720), 350) ).toBe(true);

			expect( Angle.isEqual((350 - 360), (350 + 360)) ).toBe(true);
			expect( Angle.isEqual((350 - 720), (350 + 720)) ).toBe(true);
			expect( Angle.isEqual((350 + 360), (350 - 360)) ).toBe(true);
			expect( Angle.isEqual((350 + 720), (350 - 720)) ).toBe(true);
		})
	})
	describe('simplify', () => {
		describe('|angle| <= 360°', () => {
			test('axis', () => {
				expect( Angle.simplify(0) ).toBe(0);
				expect( Angle.simplify(90) ).toBe(90);
				expect( Angle.simplify(180) ).toBe(180);
				expect( Angle.simplify(270) ).toBe(-90);
				expect( Angle.simplify(360) ).toBe(0);
                
				expect( Angle.simplify(-0) ).toBe(0);
				expect( Angle.simplify(-90) ).toBe(-90);
				expect( Angle.simplify(-180) ).toBe(180);
				expect( Angle.simplify(-270) ).toBe(90);
				expect( Angle.simplify(-360) ).toBe(0);
			})
			test('quadrant', () => {
				expect( Angle.simplify(0 + 1) ).toBe(1);
				expect( Angle.simplify(90 + 1) ).toBe(91);
				expect( Angle.simplify(180 + 1) ).toBe(-179);
				expect( Angle.simplify(270 + 1) ).toBe(-89);
                
				expect( Angle.simplify(-(0 + 1)) ).toBe(-1);
				expect( Angle.simplify(-(90 + 1)) ).toBe(-91);
				expect( Angle.simplify(-(180 + 1)) ).toBe(179);
				expect( Angle.simplify(-(270 + 1)) ).toBe(89);
			})
		})
		describe('|angel| > 360°', () => {
			test('axis', () => {
				expect( Angle.simplify(0 + 360) ).toBe(0);
				expect( Angle.simplify(90 + 360) ).toBe(90);
				expect( Angle.simplify(180 + 360) ).toBe(180);
				expect( Angle.simplify(270 + 360) ).toBe(-90);
				expect( Angle.simplify(360 + 360) ).toBe(0);
                
				expect( Angle.simplify(-(0 + 360)) ).toBe(0);
				expect( Angle.simplify(-(90 + 360)) ).toBe(-90);
				expect( Angle.simplify(-(180 + 360)) ).toBe(180);
				expect( Angle.simplify(-(270 + 360)) ).toBe(90);
				expect( Angle.simplify(-(360 + 360)) ).toBe(0);
			})
			test('quadrant', () => {
				expect( Angle.simplify((0 + 1) + 360) ).toBe(1);
				expect( Angle.simplify((90 + 1) + 360) ).toBe(91);
				expect( Angle.simplify((180 + 1) + 360) ).toBe(-179);
				expect( Angle.simplify((270 + 1) + 360) ).toBe(-89);
				expect( Angle.simplify((360 + 1) + 360) ).toBe(1);
                
				expect( Angle.simplify(-((0 + 1) + 360)) ).toBe(-1);
				expect( Angle.simplify(-((90 + 1) + 360)) ).toBe(-91);
				expect( Angle.simplify(-((180 + 1) + 360)) ).toBe(179);
				expect( Angle.simplify(-((270 + 1) + 360)) ).toBe(89);
				expect( Angle.simplify(-((360 + 1) + 360)) ).toBe(-1);
			})
		})
	})
	describe('getPositiveMinimum', () => {
		describe('|angle| <= 360°', () => {
			test('axis', () => {
				expect( Angle.getPositiveMinimum(0) ).toBe(0);
				expect( Angle.getPositiveMinimum(90) ).toBe(90);
				expect( Angle.getPositiveMinimum(180) ).toBe(180);
				expect( Angle.getPositiveMinimum(270) ).toBe(270);
				expect( Angle.getPositiveMinimum(360) ).toBe(0);

				expect( Angle.getPositiveMinimum(-0) ).toBe(0);
				expect( Angle.getPositiveMinimum(-90) ).toBe(270);
				expect( Angle.getPositiveMinimum(-180) ).toBe(180);
				expect( Angle.getPositiveMinimum(-270) ).toBe(90);
				expect( Angle.getPositiveMinimum(-360) ).toBe(0);
			})
			test('quadrant', () => {
				expect( Angle.getPositiveMinimum(0 + 1) ).toBe(1);
				expect( Angle.getPositiveMinimum(90 + 1) ).toBe(91);
				expect( Angle.getPositiveMinimum(180 + 1) ).toBe(181);
				expect( Angle.getPositiveMinimum(270 + 1) ).toBe(271);
        
				expect( Angle.getPositiveMinimum(-(0 + 1)) ).toBe(359);
				expect( Angle.getPositiveMinimum(-(90 + 1)) ).toBe(269);
				expect( Angle.getPositiveMinimum(-(180 + 1)) ).toBe(179);
				expect( Angle.getPositiveMinimum(-(270 + 1)) ).toBe(89);
			})
		})
		describe('|angel| > 360°', () => {
			test('axis', () => {
				expect( Angle.getPositiveMinimum(0 + 360) ).toBe(0);
				expect( Angle.getPositiveMinimum(90 + 360) ).toBe(90);
				expect( Angle.getPositiveMinimum(180 + 360) ).toBe(180);
				expect( Angle.getPositiveMinimum(270 + 360) ).toBe(270);
				expect( Angle.getPositiveMinimum(360 + 360) ).toBe(0);
                
				expect( Angle.getPositiveMinimum(-(0 + 360)) ).toBe(0);
				expect( Angle.getPositiveMinimum(-(90 + 360)) ).toBe(270);
				expect( Angle.getPositiveMinimum(-(180 + 360)) ).toBe(180);
				expect( Angle.getPositiveMinimum(-(270 + 360)) ).toBe(90);
				expect( Angle.getPositiveMinimum(-(360 + 360)) ).toBe(0);
			})
			test('quadrant', () => {
				expect( Angle.getPositiveMinimum((0 + 1) + 360) ).toBe(1);
				expect( Angle.getPositiveMinimum((90 + 1) + 360) ).toBe(91);
				expect( Angle.getPositiveMinimum((180 + 1) + 360) ).toBe(181);
				expect( Angle.getPositiveMinimum((270 + 1) + 360) ).toBe(271);
				expect( Angle.getPositiveMinimum((360 + 1) + 360) ).toBe(1);
        
				expect( Angle.getPositiveMinimum(-((0 + 1) + 360)) ).toBe(359);
				expect( Angle.getPositiveMinimum(-((90 + 1) + 360)) ).toBe(269);
				expect( Angle.getPositiveMinimum(-((180 + 1) + 360)) ).toBe(179);
				expect( Angle.getPositiveMinimum(-((270 + 1) + 360)) ).toBe(89);
				expect( Angle.getPositiveMinimum(-((360 + 1) + 360)) ).toBe(359);
			})
		})
	})


	describe('transform to', () => {
		test('web', () => {
			expect(Angle.transformToWeb(0)).toBe(-0);
			expect(Angle.transformToWeb(1)).toBe(-1);
			expect(Angle.transformToWeb(-3)).toBe(3);
		})
		test('math', () => {
			expect(Angle.transformToMath(0)).toBe(-0);
			expect(Angle.transformToMath(1)).toBe(-1);
			expect(Angle.transformToMath(-3)).toBe(3);
		})
	})
})




describe('test class Outward', () => {
	test('attributes x, y, width, height, and angle', () => {
		const outward = new Outward();
		expect(outward.x).toBe(0);
		expect(outward.y).toBe(0);
		expect(outward.width).toBe(0);
		expect(outward.height).toBe(0);
		expect(outward.angle).toBe(0);

		outward.x = 2;
		outward.y = 3;
		outward.width = 5;
		outward.height = 7;
		outward.angle = 11;
		expect(outward.x).toBe(2);
		expect(outward.y).toBe(3);
		expect(outward.width).toBe(5);
		expect(outward.height).toBe(7);
		expect(outward.angle).toBe(11);

		outward.x = -1;
		outward.y = -5;
		outward.width = 11;
		outward.height = 0;
		outward.angle = 13;
		expect(outward.x).toBe(-1);
		expect(outward.y).toBe(-5);
		expect(outward.width).toBe(11);
		expect(outward.height).toBe(0);
		expect(outward.angle).toBe(13);

		outward.position = new Position(1, 2);
		outward.size = new Size(3, 4);
		expect(outward.x).toBe(1);
		expect(outward.y).toBe(2);
		expect(outward.width).toBe(3);
		expect(outward.height).toBe(4);
	})
	
	test('constructor', () => {
		let outward: Outward;

		outward = new Outward({x: 1});
		expect(outward.x).toBe(1);
		expect(outward.y).toBe(0);
		expect(outward.width).toBe(0);
		expect(outward.height).toBe(0);
		expect(outward.angle).toBe(0);

		outward = new Outward({y: 1});
		expect(outward.x).toBe(0);
		expect(outward.y).toBe(1);
		expect(outward.width).toBe(0);
		expect(outward.height).toBe(0);
		expect(outward.angle).toBe(0);

		outward = new Outward({width: 1});
		expect(outward.x).toBe(0);
		expect(outward.y).toBe(0);
		expect(outward.width).toBe(1);
		expect(outward.height).toBe(0);
		expect(outward.angle).toBe(0);

		outward = new Outward({height: 1});
		expect(outward.x).toBe(0);
		expect(outward.y).toBe(0);
		expect(outward.width).toBe(0);
		expect(outward.height).toBe(1);
		expect(outward.angle).toBe(0);

		outward = new Outward({angle: 1});
		expect(outward.x).toBe(0);
		expect(outward.y).toBe(0);
		expect(outward.width).toBe(0);
		expect(outward.height).toBe(0);
		expect(outward.angle).toBe(1);

		outward = new Outward({x: -1, y: -3, width: 2, height: 5, angle: 7});
		expect(outward.x).toBe(-1);
		expect(outward.y).toBe(-3);
		expect(outward.width).toBe(2);
		expect(outward.height).toBe(5);
		expect(outward.angle).toBe(7);

		outward = new Outward({x: -1, y: -3, width: 2, height: 5, angle: 7, other: 10});
		expect(outward.x).toBe(-1);
		expect(outward.y).toBe(-3);
		expect(outward.width).toBe(2);
		expect(outward.height).toBe(5);
		expect(outward.angle).toBe(7);
	})

	test('clone', () => {
		const outward = new Outward({x: 1, y: 2, width: 3, height: 5, angle: 7});
		const clonedOutward = outward.clone();

		expect(outward).not.toBe(clonedOutward);
		expect(outward).toStrictEqual(clonedOutward);

		outward.x = -3;
		outward.y = -1;
		outward.width = 11;
		outward.height = 19;
		outward.angle = 5;
		expect(clonedOutward.x).toBe(1);
		expect(clonedOutward.y).toBe(2);
		expect(clonedOutward.width).toBe(3);
		expect(clonedOutward.height).toBe(5);
		expect(clonedOutward.angle).toBe(7);

		clonedOutward.x = -7;
		clonedOutward.y = -5;
		clonedOutward.width = 1;
		clonedOutward.height = 3;
		clonedOutward.angle = 11;
		expect(outward.x).toBe(-3);
		expect(outward.y).toBe(-1);
		expect(outward.width).toBe(11);
		expect(outward.height).toBe(19);
		expect(outward.angle).toBe(5);
	})

	test('toString', () => {
		let outward: Outward;

		outward = new Outward({x: 1, y: 2, width: 3, height: 5, angle: 7});
		expect(outward.toString()).toBe(`Outward {x: ${outward.x}, y: ${outward.y}, width: ${outward.width}, height: ${outward.height}, angle: ${outward.angle}}`);

		outward = new Outward({x: -3, y: -5, width: 1, height: 7, angle: -11});
		expect(outward.toString()).toBe(`Outward {x: ${outward.x}, y: ${outward.y}, width: ${outward.width}, height: ${outward.height}, angle: ${outward.angle}}`);
	})
})