Vue.createApp({
  data: function() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }

}).mount('#app');


const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal(){
  const enteredValue = inputEl.value;
  // create DOM list to store enteredValue
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  // clear text input
  inputEl.value='';
}
buttonEl.addEventListener('click',addGoal);