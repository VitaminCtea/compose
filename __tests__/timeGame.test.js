jest.useFakeTimers();
test('calls the callback after 1 second', () => {
    const timeGame = require('../temp/timerGame');
    const callback = jest.fn();
    timeGame(callback);
    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
})