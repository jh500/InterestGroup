/* eslint-disable */
<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                    type="email"
                    required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Passwrod"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rule="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout x12>
                  <v-btn type="submit">
                    Sign up
                  </v-btn>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        email: '',
        passowrd: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassowrd ? 'Passwrord do not match' : ''
      }
    },
    methods: {
      onSignup: function () {
        console.log({
          email: this.email,
          password: this.password,
          confirmPassowrd: this.confirmPassowrd
        })
      }
    }
  }
</script>
