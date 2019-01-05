const template = `
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Iniciar sesión</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="iniciar-sesion" v-model="valido" lazy-validation>
                  <v-text-field
                    prepend-icon="person"
                    name="legajo"
                    v-model="legajo"
                    label="Número de legajo"
                    type="text"
                    required
                    :rules="[v => !!v || 'Debe ingresar un número de legajo']"
                    ref="legajo"
                    @keyup.enter="$refs.password.focus()"
                  >
                  </v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    name="contraseña"
                    v-model="contraseña"
                    label="Contraseña"
                    type="password"
                    required
                    :rules="[v => !!v || 'Debe ingresar una contraseña']"
                    ref="password"
                    @keyup.enter="ingresar"
                  >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="ingresar" color="primary">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
`

// import data from '../services/data'
// import store from '../services/store'

export default {
  name: 'Login',
  template,
  data: () => ({
    legajo: '',
    contraseña: '',
    valido: true,
  }),
  mounted() {
    this.$refs.legajo.focus()
  },
  methods: {
    ingresar() {
      if (this.$refs['iniciar-sesion'].validate()) {
        // this.axios.post(
        //   '/login',
        //   'legajo='+this.legajo+'&password='+this.contraseña
        // ).then(r => {
        //   // data.setData(r.data)
        //   if (data.esIngresoExitoso(r.data)) {
        //     store.usuario.legajo = this.legajo
        //     store.usuario.nombreApellido = data.buscarNombreAlumno(r.data)
        //     this.$emit('login')
        //   }
        //   console.log(r.data)
        // })
      }
    },
  },
}
