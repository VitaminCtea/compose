const transform = require('../temp/micrometer_level');

test('Is it in the thousandth place (two decimal places are optional)', () => {
    const result = transform.micrometerLevel(561985.156, true);
    expect(result).toBe('561,985.16');
})