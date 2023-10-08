export class Dimensions {
	private _numberOfCoordinates: number;
	protected get numberOfCoordinates(): number {
		return this._numberOfCoordinates;
	}

	private _coordinates: Array<number>;
	protected get coordinates(): Array<number> {
		return this._coordinates;
	}


	constructor(numberOfCoordinates: number, coordinates: Array<number> = []) {
		this._numberOfCoordinates = numberOfCoordinates;
		
		const length = numberOfCoordinates - coordinates.length;
		coordinates.splice(    coordinates.length, 0, ...new Array((length >= 0)? length : 0).fill(0)    );
		this._coordinates = coordinates;
	}
	

	clone(): Dimensions {
		const newDimensions = new Dimensions(this.numberOfCoordinates);
		this.coordinates.forEach((coordinate, index) => newDimensions.setCoordinate((index + 1), coordinate));
		return newDimensions;
	}
	toString(): string {
		return `Dimensions[${this.numberOfCoordinates}] {coordinates: [${this.coordinates.join(', ')}]}`;
	}


	private checkDimensionalNumber(dimensionalNumber: number): void {
		if (dimensionalNumber > this.numberOfCoordinates) throw new Error(`The dimensional number (${dimensionalNumber}) cannot be more than the number of coordinates (${this.numberOfCoordinates}).`);
		if (dimensionalNumber <= 0) throw new Error(`The dimensional number (${dimensionalNumber}) cannot be less than or equal to 0.`);
	}
	getCoordinate(dimensionalNumber: number): number {
		this.checkDimensionalNumber(dimensionalNumber);
		return this.coordinates[dimensionalNumber - 1];
	}
	setCoordinate(dimensionalNumber: number, value: number): void {
		this.checkDimensionalNumber(dimensionalNumber);
		this._coordinates[dimensionalNumber - 1] = value;
	}


	private checkSameNumberOfCoordinates(dimensions: Dimensions): void {
		if (this.numberOfCoordinates !== dimensions.numberOfCoordinates) throw new Error(`Both number of coordinates aren't same.`);
	}
	add(addend: Dimensions): Dimensions {
		this.checkSameNumberOfCoordinates(addend);

		const clonedDimensions = this.clone();
		clonedDimensions.coordinates.forEach((coordinate, index) => {
			clonedDimensions.setCoordinate((index + 1), (coordinate + addend.coordinates[index]));
		})
		return clonedDimensions;
	}
	multiply(multiple: number): Dimensions {
		const clonedDimensions = this.clone();
		clonedDimensions.coordinates.forEach((coordinate, index) => {
			clonedDimensions.setCoordinate((index + 1), (coordinate * multiple));
		})
		return clonedDimensions;
	}
	subtract(subtrahend: Dimensions): Dimensions {
		return this.add(subtrahend.multiply(-1));
	}
	divide(divisor: number): Dimensions {
		return this.multiply(1 / divisor);
	}
	
	equal(dimensions: Dimensions): boolean {
		if (this.numberOfCoordinates !== dimensions.numberOfCoordinates) return false;
		else return this.coordinates.every((coordinate, index) => (coordinate === dimensions.coordinates[index]));
	}

	
	getAbsoluteValue(): Dimensions {
		const clonedDimensions = this.clone();
		clonedDimensions.coordinates.forEach((coordinate, index) => {
			clonedDimensions.setCoordinate((index + 1), Math.abs(coordinate));
		});
		return clonedDimensions;
	}

	getDistance(): number
	getDistance(referencePoint: Dimensions): number
	getDistance(referencePoint = new Dimensions(this.numberOfCoordinates)): number {
		return Math.sqrt(
			this.coordinates.reduce((sum, coordinate, index) => (
				sum + Math.pow((coordinate - referencePoint.getCoordinate(index + 1)), 2)
			), 0)
		);
	}

	getCenter(): Dimensions
	getCenter(referencePoint: Dimensions): Dimensions
	getCenter(referencePoint = new Dimensions(this.numberOfCoordinates)): Dimensions {
		return this.subtract(referencePoint).divide(2).add(referencePoint);
	}
}


export class TwoDimensional extends Dimensions {
	constructor()
	constructor(coordinates: Array<number>)
	constructor(coordinates = new Array(2).fill(0)) {
		super(2, coordinates);
	}
	

	clone(): TwoDimensional {
		return new TwoDimensional(this.coordinates.concat());
	}


	add(addend: TwoDimensional): TwoDimensional {
		return super.add(addend) as TwoDimensional;
	}
	subtract(subtrahend: TwoDimensional): TwoDimensional {
		return super.subtract(subtrahend) as TwoDimensional;
	}
	multiply(multiple: number): TwoDimensional {
		return super.multiply(multiple) as TwoDimensional;
	}
	divide(divisor: number): TwoDimensional {
		return super.divide(divisor) as TwoDimensional;
	}

	
	getAbsoluteValue(): TwoDimensional {
		return super.getAbsoluteValue() as TwoDimensional;
	}

	getCenter(): TwoDimensional
	getCenter(referencePoint: TwoDimensional): TwoDimensional
	getCenter(referencePoint = new TwoDimensional()): TwoDimensional {
		return super.getCenter(referencePoint) as TwoDimensional;
	}


	getAngle(): number | null
	getAngle(referencePoint: TwoDimensional): number | null
	getAngle(referencePoint = new TwoDimensional()): number | null {
		const variableDimension = this.subtract(referencePoint);
		if (variableDimension.equal(new TwoDimensional())) return null;
		else return Angle.simplify(Angle.radianToDegree( Math.atan2(variableDimension.getCoordinate(2), variableDimension.getCoordinate(1)) ));
	}
	rotate(angle: number): TwoDimensional
	rotate(angle: number, referencePoint: TwoDimensional): TwoDimensional
	rotate(angle: number, referencePoint = new TwoDimensional()): TwoDimensional {
		const originalAngle = this.getAngle(referencePoint);
		if (originalAngle === null) return this.clone();

		const hypotenuse = super.getDistance(referencePoint);
		const variableRadianAngle = Angle.degreeToRadian(originalAngle + angle);
		const clonedDimensions = this.clone();
		clonedDimensions.setCoordinate(1, (hypotenuse * Math.cos(variableRadianAngle)));
		clonedDimensions.setCoordinate(2, (hypotenuse * Math.sin(variableRadianAngle)));
		return clonedDimensions.add(referencePoint);
	}
}




export class Position extends TwoDimensional {
	constructor()
	constructor(object: {x?: number, y?: number} | {[key: string]: unknown})
	constructor(x: number, y: number)
	constructor(firstParameter: number | {x?: number, y?: number} | {[key: string]: unknown} = 0, y: number = 0) {
		super();

		if (typeof firstParameter === 'number') {
			this.setCoordinate(1, firstParameter);
			this.setCoordinate(2, y);
		} else {
			if (typeof firstParameter.x === 'number') this.setCoordinate(1, firstParameter.x);
			if (typeof firstParameter.y === 'number') this.setCoordinate(2, firstParameter.y);
		}
	}

	get x(): number {
		return this.getCoordinate(1);
	}
	set x(value: number) {
		this.setCoordinate(1, value);
	}
	get y(): number {
		return this.getCoordinate(2);
	}
	set y(value: number) {
		this.setCoordinate(2, value);
	}

	clone(): Position {
		return new Position(this);
	}
	toString(): string {
		return `Position {x: ${this.x}, y: ${this.y}}`;
	}

	add(addend: TwoDimensional): Position {
		return super.add(addend) as Position;
	}
	subtract(subtrahend: TwoDimensional): Position {
		return super.subtract(subtrahend) as Position;
	}
	multiply(multiple: number): Position {
		return super.multiply(multiple) as Position;
	}
	divide(divisor: number): Position {
		return super.divide(divisor) as Position;
	}
	
	getAbsoluteValue(): Position {
		return super.getAbsoluteValue() as Position;
	}
	getCenter(): Position
	getCenter(referencePoint: TwoDimensional): Position
	getCenter(referencePoint = new TwoDimensional()): Position {
		return super.getCenter(referencePoint) as Position;
	}
	
	rotate(angle: number): Position
	rotate(angle: number, referencePoint: TwoDimensional): Position
	rotate(angle: number, referencePoint = new TwoDimensional()): Position {
		return super.rotate(angle, referencePoint) as Position;
	}

	transformToWeb(): Position {
		return new Position(this.x, -this.y);
	}
	transformToMath(): Position {
		return new Position(this.x, -this.y);
	}
}

export class Size extends TwoDimensional {
	private checkNotNegative(name: 'Width' | 'Height', value: number): void {
		if (value < 0) throw new Error(`${name} cannot be negative.`);
	}

	constructor()
	constructor(object: {width: number, height: number} | {[key: string]: unknown})
	constructor(width: number, height: number)
	constructor(firstParameter: number | {width: number, height: number} | {[key: string]: unknown} = 0, height: number = 0) {
		super();

		if (typeof firstParameter === 'number') {
			this.checkNotNegative('Width', firstParameter);
			this.checkNotNegative('Height', height);
			this.setCoordinate(1, firstParameter);
			this.setCoordinate(2, height);
		} else {
			if (typeof firstParameter.width === 'number') {
				this.checkNotNegative('Width', firstParameter.width);
				this.setCoordinate(1, firstParameter.width);
			}
			if (typeof firstParameter.height === 'number') {
				this.checkNotNegative('Height', firstParameter.height);
				this.setCoordinate(2, firstParameter.height);
			}
		}
	}

	get width(): number {
		return this.getCoordinate(1);
	}
	set width(value: number) {
		this.checkNotNegative('Width', value);
		this.setCoordinate(1, value);
	}
	get height(): number {
		return this.getCoordinate(2);
	}
	set height(value: number) {
		this.checkNotNegative('Height', value);
		this.setCoordinate(2, value);
	}
	
	clone(): Size {
		return new Size(this);
	}
	toString(): string {
		return `Size {width: ${this.width}, height: ${this.height}}`;
	}
	
	add(addend: TwoDimensional): Size {
		return super.add(addend) as Size;
	}
	subtract(subtrahend: TwoDimensional): Size {
		return super.subtract(subtrahend) as Size;
	}
	multiply(multiple: number): Size {
		return super.multiply(multiple) as Size;
	}
	divide(divisor: number): Size {
		return super.divide(divisor) as Size;
	}
	
	getAbsoluteValue(): Size {
		return super.getAbsoluteValue() as Size;
	}
	getCenter(): Size
	getCenter(referencePoint: TwoDimensional): Size
	getCenter(referencePoint = new TwoDimensional()): Size {
		const center = new TwoDimensional([this.width, this.height]).getCenter(referencePoint);
		return new Size(center.getCoordinate(1), center.getCoordinate(2));
	}
	
	rotate(angle: number): Size
	rotate(angle: number, referencePoint: TwoDimensional): Size
	rotate(angle: number, referencePoint = new TwoDimensional()): Size {
		const rotatedPoint = new TwoDimensional([this.width, this.height]).rotate(angle, referencePoint);
		return new Size(rotatedPoint.getCoordinate(1), rotatedPoint.getCoordinate(2));
	}
}

export class Angle {
	static degreeToRadian(number: number): number {
		return number * Math.PI / 180;
	}
	static radianToDegree(number: number): number {
		return number * 180 / Math.PI;
	}

	// -180° < angle <= 180°
	static simplify(angle: number): number {
		const anglePositiveMinimum = Angle.getPositiveMinimum(angle);
		return (anglePositiveMinimum <= 180)? anglePositiveMinimum : (anglePositiveMinimum - 360);
	}
	// 0° <= angle < 360°
	static getPositiveMinimum(angle: number): number {
		return ((angle % 360) + 360) % 360;
	}

	static isEqual(angle01: number, angle02: number): boolean {
		return Angle.getPositiveMinimum(angle01) === Angle.getPositiveMinimum(angle02);
	}

	static transformToWeb(value: number): number {
		return -value;
	}
	static transformToMath(value: number): number {
		return -value;
	}
}




export default class Outward {
	position = new Position();
	size = new Size();
	private angleDegree = 0;


	constructor()
	constructor(object: {x: number, y: number, width: number, height: number, angle: number} | {[key: string]: unknown})
	constructor(object?: {x: number, y: number, width: number, height: number, angle: number} | {[key: string]: unknown}) {
		if (object) {
			if (typeof object.x === 'number') this.position.x = object.x;
			if (typeof object.y === 'number') this.position.y = object.y;
			if (typeof object.width === 'number') this.size.width = object.width;
			if (typeof object.height === 'number') this.size.height = object.height;
			if (typeof object.angle === 'number') this.angleDegree = object.angle;
		}
	}

	get x(): number {
		return this.position.x;
	}
	set x(value: number) {
		this.position.x = value;
	}
	get y(): number {
		return this.position.y;
	}
	set y(value: number) {
		this.position.y = value;
	}
	get width(): number {
		return this.size.width;
	}
	set width(value: number) {
		this.size.width = value;
	}
	get height(): number {
		return this.size.height;
	}
	set height(value: number) {
		this.size.height = value;
	}
	get angle(): number {
		return this.angleDegree;
	}
	set angle(value: number) {
		this.angleDegree = Angle.simplify(value);
	}
	
	
	clone(): Outward {
		return new Outward(this);
	}
	toString(): string {
		return `Outward {x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height}, angle: ${this.angleDegree}}`;
	}
}