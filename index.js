
// a plain DOM example of creating a  counter widget using the DOM

function Counter() {
    return {
      count: 0,
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
    };
  }

  // ensure that AlpineJS is properly loaded
  document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
  });