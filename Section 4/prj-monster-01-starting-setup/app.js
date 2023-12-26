function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let currentRound = 0;


const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0
    };
  },
  computed: {
    monsterBarStyles() {
      return {
        width: this.monsterHealth + '%'
      };
    },
    playerBarStyles() {
      return {
        width: this.playerHealth + '%'
      };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },

  methods: {
    attackMonster() {
      this.currentRound++
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
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10,25)
      this.monsterHealth = this.monsterHealth - attackValue
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8,20);
      if(this.playerHealth + healValue > 100) {
        this.playerHealth = 100
      }else {
        this.playerHealth = this.playerHealth + healValue
      }
      this.attackPlayer();
    }

  },
});

app.mount("#game");
