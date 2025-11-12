const findMaxAverage = require('./index');

describe('findMaxAverage', () => {
    // Test cases from README examples
    test('Example 1: should return 12.75 for nums = [1,12,-5,-6,50,3], k = 4', () => {
        const nums = [1, 12, -5, -6, 50, 3];
        const k = 4;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(12.75, 5);
    });

    test('Example 2: should return 5.0 for nums = [5], k = 1', () => {
        const nums = [5];
        const k = 1;
        const result = findMaxAverage(nums, k);
        expect(result).toBe(5.0);
    });

    // Edge cases
    test('should handle array with all positive numbers', () => {
        const nums = [1, 2, 3, 4, 5];
        const k = 3;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(4.0, 5); // [3, 4, 5] = 12/3 = 4
    });

    test('should handle array with all negative numbers', () => {
        const nums = [-1, -2, -3, -4, -5];
        const k = 2;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(-1.5, 5); // [-1, -2] = -3/2 = -1.5
    });

    test('should handle array with mixed positive and negative numbers', () => {
        const nums = [-1, 5, -3, 10, -2];
        const k = 3;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(4.0, 5); // [5, -3, 10] = 12/3 = 4
    });

    test('should handle array where k equals array length', () => {
        const nums = [1, 2, 3, 4];
        const k = 4;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(2.5, 5); // [1, 2, 3, 4] = 10/4 = 2.5
    });

    test('should handle array with duplicate values', () => {
        const nums = [5, 5, 5, 5, 5];
        const k = 3;
        const result = findMaxAverage(nums, k);
        expect(result).toBe(5.0);
    });

    test('should handle array with zeros', () => {
        const nums = [0, 0, 0, 1, 2];
        const k = 3;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(1.0, 5); // [0, 1, 2] = 3/3 = 1
    });

    test('should handle large numbers', () => {
        const nums = [100, 200, 300, 400];
        const k = 2;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(350.0, 5); // [300, 400] = 700/2 = 350
    });

    test('should handle array with single maximum subarray at the beginning', () => {
        const nums = [10, 1, 1, 1, 1];
        const k = 2;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(5.5, 5); // [10, 1] = 11/2 = 5.5
    });

    test('should handle array with single maximum subarray at the end', () => {
        const nums = [1, 1, 1, 1, 10];
        const k = 2;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(5.5, 5); // [1, 10] = 11/2 = 5.5
    });

    test('should handle array with decimal results', () => {
        const nums = [1, 2, 3];
        const k = 2;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(2.5, 5); // [2, 3] = 5/2 = 2.5
    });

    test('should handle array with negative and positive numbers where max is in middle', () => {
        const nums = [1, -10, 5, 10, -1];
        const k = 3;
        const result = findMaxAverage(nums, k);
        expect(result).toBeCloseTo(4.66667, 5); // [5, 10, -1] = 14/3 ≈ 4.66667
    });
});

