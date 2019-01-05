const template = `
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-data-table
          :headers="cabeceras"
          :items="horarios"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.hora }}</td>
            <td class="text-xs-right">{{ props.item.lun }}</td>
            <td class="text-xs-right">{{ props.item.mar }}</td>
            <td class="text-xs-right">{{ props.item.mie }}</td>
            <td class="text-xs-right">{{ props.item.jue }}</td>
            <td class="text-xs-right">{{ props.item.vie }}</td>
            <td class="text-xs-right">{{ props.item.sab }}</td>
          </template>
        </v-data-table>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
`

export default {
  name: 'HorariosCursada',
  template,
  data: () => ({
    cabeceras: [
      {
        text: 'Horario',
        sortable: false,
        value: 'hora'
      },
      {
        text: 'Lunes',
        sortable: false,
        value: 'lun'
      },
      {
        text: 'Martes',
        sortable: false,
        value: 'mar'
      },
      {
        text: 'Miércoles',
        sortable: false,
        value: 'mie'
      },
      {
        text: 'Jueves',
        sortable: false,
        value: 'jue'
      },
      {
        text: 'Viernes',
        sortable: false,
        value: 'vie'
      },
      {
        text: 'Sabado',
        sortable: false,
        value: 'sab'
      },
    ],
    horarios: [
      {
        // value: false,
        hora: '17:00',
        lun: 159,
        mar: 6.0,
        mie: 24,
        jue: 4.0,
        vie: '1%',
        sab: '1%'
      },
      {
        // value: false,
        hora: '17:45',
        lun: 159,
        mar: 6.0,
        mie: 24,
        jue: 4.0,
        vie: '1%',
        sab: '1%'
      },
      {
        // value: false,
        hora: '18:30',
        lun: 159,
        mar: 6.0,
        mie: 24,
        jue: 4.0,
        vie: '1%',
        sab: '1%'
      },
      {
        // value: false,
        hora: '19:15',
        lun: 159,
        mar: 6.0,
        mie: 24,
        jue: 4.0,
        vie: '1%',
        sab: '1%'
      },
      {
        // value: false,
        hora: '20:00',
        lun: 159,
        mar: 6.0,
        mie: 24,
        jue: 4.0,
        vie: '1%',
        sab: '1%'
      },
      {
        // value: false,
        hora: '21:00',
        lun: 159,
        mar: 6.0,
        mie: 24,
        jue: 4.0,
        vie: '1%',
        sab: '1%'
      },
      {
        // value: false,
        hora: '21:45',
        lun: 159,
        mar: 6.0,
        mie: 24,
        jue: 4.0,
        vie: '1%',
        sab: '1%'
      },
      {
        // value: false,
        hora: '22:30',
        lun: 159,
        mar: 6.0,
        mie: 24,
        jue: 4.0,
        vie: '1%',
        sab: '1%'
      },
      {
        // value: false,
        hora: '23:15',
        lun: 159,
        mar: 6.0,
        mie: 24,
        jue: 4.0,
        vie: '1%',
        sab: '1%'
      },
    ]
  }),
}
