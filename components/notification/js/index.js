import {Notification} from '../../../enteties/notification.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var NotificationComponent = Vue.extend({
	data: function () {
		return {
			prop: new Notification(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Notifications|{count} articles|un seul notification",
						limit: 'Notifications Par Page',
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
          this.prop = await new Notification(a).getone()
        }
	},
	template: all
})
// register
Vue.component('notification-component', NotificationComponent)