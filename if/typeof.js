console.log(typeof 123);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log('-----------------');
console.log(typeof '123');
console.log('-----------------');
console.log(typeof true);
console.log('-----------------');
console.log(typeof []);
console.log(typeof {});
console.log(typeof null);
console.log('-----------------');
console.log(typeof undefined);
console.log('-----------------');
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(['1, 2']));
console.log(Array.isArray(123));
console.log(Array.isArray(true));
console.log(Array.isArray(null));
console.log('-----------------');
console.log(null === null);
console.log('-----------------');

function arTikrasObjektas(item) {
    if (typeof item !== 'object'
        || item === null
        || Array.isArray(item)
    ) {
        return false;
    }
    return true;
}
console.log(arTikrasObjektas(1));
console.log(arTikrasObjektas('s'));
console.log(arTikrasObjektas(true));
console.log(arTikrasObjektas(undefined));
console.log(arTikrasObjektas(null));
console.log(arTikrasObjektas(arTikrasObjektas));
console.log(arTikrasObjektas([]));
console.log(arTikrasObjektas({}));



