// Assume ctx is an object with a signals property
const ctx = {
  signals: {
    signal1: 'initial value',
    signal2: function() {
      console.log('signal2 method');
    }
  }
};

// Define a constructor function or class
function MyClass() {
  // Create a new object that inherits from ctx.signals
  this.signals = Object.create(ctx.signals);
}

// Create an instance of MyClass
const myInstance = new MyClass();

// Access inherited properties and methods
console.log(myInstance.signals.signal1); // Output: 'initial value'
myInstance.signals.signal2(); // Output: 'signal2 method'

// Add a new property to the signals object on myInstance
myInstance.signals.signal3 = 'new value';

// Check the signals object on myInstance
console.log(myInstance.signals.signal3); // Output: 'new value'

// Check that the original ctx.signals is unaffected
console.log(ctx.signals.signal3); // Output: undefined
