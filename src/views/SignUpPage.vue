<template>
  <div id="wrap">
    <div id="main holder-div">
      <main id="main holder">
        <div class="form-input">
        <h2 id="login-header"> Welcome to postit </h2>
          <form id="login-form">
            <div class="signupinput">
              <label>Email</label>
              <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Email" v-model="this.username" required/>
            </div>
            <div class="signupinput">
              <label>Password</label>
              <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password" v-model="this.password" required/>
            </div>
            <div class="button">
              <button @click="signup">Signup</button>
              <p v-if="valid"> Sign up successful</p>
              <p v-else>{{error}}</p>
            </div>

          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import router from "../router/index.js";
export default {
  name: "SignUpPage",
  data() {
      return {
        username:"",
        password:"",
        valid:false,
        error:""
      };
  },
  methods: {
    signup() {
      let data = this.validateData();
      console.log(data);
      if (data !== null) {
        fetch("http://localhost:3000/auth/signup", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: "include",
          body: JSON.stringify(data),
        }).then((res) => {
          console.log(res.status);
          if (res.status === 400) {
            this.error = "User with this email already registered.";
          } else if (res.status === 201) {
            router.push("/")
            //this.$router.push("/");
          }
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    validateData() {
      this.error = ""
      console.log('valideerin')
      let username = this.username;
      if (username.split("@").length <= 1) {
        this.error = "Email has to contain '@' "
      } else if (username.split("@")[0] === "") {
        this.error = "Email should have something before the '@'"
      } else if (username.split("@")[1] === "") {
        this.error = "Email should have something after the '@'"
      } else if (!username.split("@")[1].includes(".")) {
        this.error = "Email should end in '.something'"
      }
      let password = this.password;
      if (password.length < 8 || password.length > 15) {
        this.error = "password must be between 8 and 15 characters long"
      } else if (password.split(/[a-z]/).length <= 2) {
        this.error = "password must contain atleast 2 lowercase letters"
      } else if (password.split(/[A-Z]/).length <= 1) {
        this.error = "password must contain atleast 1 uppercase letter"
      } else if (password.split(/[0-9]/).length <= 1) {
        this.error = "password must contain atleast 1 numeric value"
      } else if (password.at(0).toUpperCase() !== password.at(0)) {
        this.error = "password must begin with uppercase letter"
      } else if (password.split(/[_]/).length <= 1) {
        this.error = "password must contain '_' symbol"
      }

      if (this.error.length === 0) {
        return {email:this.username, password:this.password}
      }
      return null;
    }
  }
}
</script>

<style scoped>
#wrap {
  height: 70vh;
}

#login-form {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-input {
  width: 70%;
  margin: auto;
  color: black;
  font-weight: bold;
  border-radius: 1.2rem;
  background-color: lightgray;
}
#login-header{
  padding-top: 20px;
  color: rebeccapurple;
}

.signupinput label {
  min-width: 70px;
  padding: 5px;
  margin: 5px;
  float: right;
  font-size: large;
}

.signupinput input {
  margin: 5px;
  padding: 5px;
  float: left;
}

.signupinput{
  display: flex;
  flex-direction: column;
}

button{
  margin-top: 20px;
  width: 150px;
  height: 30px;
  color: white;
  text-align: center;
  background: cornflowerblue;
  border: none;
  border-radius: 1.2rem;
  margin-right: 15px;
  margin-left: 20px;

}



@media(max-width: 400px) {
  .signupinput {
    flex-direction: column;
  }
}
</style>