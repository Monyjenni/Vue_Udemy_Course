function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      // function to calculate random number between 12 and 5
      const attackValue = getRandomValue(5,12)
      this.monsterHealth = this.monsterHealth - attackValue;
      //this.monsterHealth -= attackValue;
      // when player attacks monster then monster attack player back
      this.attackPlayer()
      console.log(monsterHealth)
    },
    attackPlayer() {
      const attackValue = getRandomValue(8,15)
      this.playerHealth = this.playerHealth - attackValue
      console.log(playerHealth)
    },
  },
});

app.mount("#game");
