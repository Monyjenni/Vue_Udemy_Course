function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let currentRound = 0;


const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null
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

  watch: {
    playerHealth(value) {
      if(value <= 0 && this.monsterHealth <= 0){
        // a draw or smer knea
        this.winner = 'draw'
      }else if(value <= 0){
        // player lose
        this.winner = 'monster'
      }
    },

    monsterHealth(value){
      if(value <= 0 && this.playerHealth <= 0 ){
        this.winner = 'draw'
      }else if(value <= 0){
        // Monster lost 
        this.winner = 'player'
      
      }
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
