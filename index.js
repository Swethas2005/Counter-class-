class Counter {
    constructor() {
      this.count = 0;
      this.intervalId = null;
      this.autoMode = true;
  
      this.toggleBtn = document.getElementById('toggleBtn');
      this.stopBtn = document.getElementById('stopBtn');
      this.incrementBtn = document.getElementById('incrementBtn');
      this.decrementBtn = document.getElementById('decrementBtn');
      this.counterDisplay = document.getElementById('counter');
  
      this.toggleBtn.addEventListener('click', this.toggle.bind(this));
      this.stopBtn.addEventListener('click', this.stop.bind(this));
      this.incrementBtn.addEventListener('click', this.increment.bind(this));
      this.decrementBtn.addEventListener('click', this.decrement.bind(this));
    }
  
    startAutoIncrement() {
      this.intervalId = setInterval(() => {
        this.count++;
        this.updateDisplay();
      }, 1000);
    }
  
    stopAutoIncrement() {
      clearInterval(this.intervalId);
    }
  
    toggle() {
      if (this.autoMode) {
        this.startAutoIncrement();
        this.toggleBtn.textContent = 'Stop';
        this.incrementBtn.disabled = true;
        this.decrementBtn.disabled = true;
      } else {
        this.stopAutoIncrement();
        this.toggleBtn.textContent = 'Start';
        this.incrementBtn.disabled = false;
        this.decrementBtn.disabled = false;
      }
  
      this.autoMode = !this.autoMode;
    }
  
    stop() {
      this.stopAutoIncrement();
      this.autoMode = false;
      this.toggleBtn.textContent = 'Start';
      this.incrementBtn.disabled = false;
      this.decrementBtn.disabled = false;
    }
  
    increment() {
      if (!this.autoMode) {
        this.count++;
        this.updateDisplay();
      }
    }
  
    decrement() {
      if (!this.autoMode) {
        this.count--;
        this.updateDisplay();
      }
    }
  
    updateDisplay() {
      this.counterDisplay.textContent = this.count;
    }
  }
  
  const counter = new Counter();