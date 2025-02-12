/**
 * @description Interval utility functions
 * @fileoverview Interval utility functions
 * @module utils/interval
 * @requires NodeJS
 * @requires NodeJS.Timeout
 *
 */

type TimeoutList = Array<NodeJS.Timeout>;
type TimeoutHandle<TArgs extends any[]> = (...args: TArgs) => void | boolean;

const loops: TimeoutList = [];

export const createInterval = <TArgs extends any[]>(fn: TimeoutHandle<TArgs>, time: number, ...args: TArgs) => {
    const loop = setInterval(
        (...args) => {
            const out = fn(...args);
            if (out === false) clearInterval(loop);
        },
        time,
        ...args
    );
    loops.push(loop);
    return loop;
};

export const createIntervalSecond = <TArgs extends any[]>(fn: TimeoutHandle<TArgs>, time: number, ...args: TArgs) =>
    createInterval<TArgs>(fn, time * 1000, ...args);
export const createIntervalMinute = <TArgs extends any[]>(fn: TimeoutHandle<TArgs>, time: number, ...args: TArgs) =>
    createIntervalSecond<TArgs>(fn, time * 60, ...args);
export const createIntervalHour = <TArgs extends any[]>(fn: TimeoutHandle<TArgs>, time: number, ...args: TArgs) =>
    createIntervalMinute<TArgs>(fn, time * 60, ...args);

export const deleteIntervals = (loops: NodeJS.Timeout[]) => {
    let stopCnt = 0;
    for (const loop of loops) {
        try {
            if (deleteInterval(loop)) stopCnt++;
        } catch (e) {}
    }
    return stopCnt;
};

export const deleteInterval = (loop: NodeJS.Timeout) => {
    if (loops.includes(loop)) {
        clearInterval(loop);
        loops.splice(loops.indexOf(loop), 1);
        return true;
    } else return false;
};

export const clearIntervals = () => {
    loops.forEach(loop => {
        try {
            clearInterval(loop);
        } catch (e) {}
    });
};

process.on('SIGINT', clearIntervals);
