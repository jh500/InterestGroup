<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">{{ meetup.title }}</h3>
            <template v-if = "true">
              <v-spacer></v-spacer>
              <app-edit-meetup-dialog></app-edit-meetup-dialog>
            </template>
          </v-card-title>
          <v-card-media
            :src = "meetup.imageUrl"
            height ="400px">
          </v-card-media>
          <v-card-text>
            <div class="info--text"> Time: {{ meetup.date }} </div>
            <div class="info--text"> Venue: {{ meetup.venue }} </div>
            <div class="info--text"> Organizer: {{ meetup.organizer }} </div>
            <div>Details: {{meetup.description}}</div>
          </v-card-text>
          <template v-if = "true">
            <app-memory-dialog></app-memory-dialog>
          </template>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>
