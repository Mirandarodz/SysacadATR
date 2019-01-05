const template = `
  <v-app>
      <v-navigation-drawer
        persistent
        clipped
        v-model="menu.status"
        enable-resize-watcher
        fixed
        app
      >
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in menu.items"
            :key="i"
            @click="prueba(item.titulo)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{item.titulo}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        app
        clipped-left
        color="primary"
      >
        <v-toolbar-side-icon @click.stop="menu.status = !menu.status"></v-toolbar-side-icon>
        <v-toolbar-title>{{titulo}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-menu offset-y>
          <v-btn
          slot="activator"
          flat
          >
            {{usuario.nombre}}<v-icon>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              value="true"
              v-for="(accion, i) in usuario.acciones"
              :key="i"
            >
              <v-list-tile-avatar>
                <v-icon>{{accion.icono}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-title>{{accion.nombre}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
        </v-menu>
      </v-toolbar>
      <v-content>
        <router-view/>
      </v-content>
  </v-app>
`
// import store from '../services/store'

export default {
  name: 'AppLayout',
  template,
  data: () => ({
      sesionIniciada: false,
      usuario: {
        nombre: 'John Doe',//store.usuario.nombreApellido,
        acciones: {
          cambiarContraseña: {
            icono: 'cached',
            nombre: 'Cambiar Contraseña',
          },
          salir: {
            icono: 'exit_to_app',
            nombre: 'Salir',
          },
        },
      },
      menu: {
        status: true,
        items: [
          {titulo: 'Horarios de cursada'},
          {titulo: 'Notas de parciales'},
          {titulo: 'Estado académico'},
          {titulo: 'Inscripción a examen'},
          {titulo: 'Inscripción a cursado'},
          {titulo: 'Exámenes'},
          {titulo: 'Correlatividad para cursar'},
          {titulo: 'Correlatividad para rendir'},
          {titulo: 'Materias del plan'},
        ],
      },
      titulo: 'SysacadATR'
    }),
  methods: {
    prueba(i) {
      console.log('teeeesst', i);
    },
  },
}
