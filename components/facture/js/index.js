import {Facture} from '../../../enteties/facture.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var FactureComponent = Vue.extend({
	data: function () {
		return {
			prop: new Facture(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Factures|{count} articles|un seul facture",
						limit: 'Factures Par Page',
						filterBy: "",
					},
					headings: {
						
					},
					filterByColumn:true,
					perPageValues: [10, 25, 50, 100],
					debounce : 500
				}
			}
	},
	methods: {
		view: async function(a) {
          this.prop = await new Facture(a).getone()
        }
	},
	template: all
})
// register
Vue.component('facture-component', FactureComponent)