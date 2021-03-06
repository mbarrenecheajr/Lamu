/**
 * Ushahidi RequireJS initialisation and config
 *
 * @author     Ushahidi Team <team@ushahidi.com>
 * @copyright  2013 Ushahidi
 * @license    https://www.gnu.org/licenses/agpl-3.0.html GNU Affero General Public License Version 3 (AGPL3)
 */

require.config(
{
	baseUrl : './media/kohana/js/app',
	// 3rd party script alias names (Easier to type 'jquery' than 'libs/jquery, etc')
	// probably a good idea to keep version numbers in the file names for updates checking
	paths :
	{
		'jquery' : '../libs/jquery',
		'underscore' : '../libs/lodash',
		'backbone' : '../libs/backbone',
		'marionette' : '../libs/backbone.marionette',
		'handlebars' : '../libs/handlebars',
		'leaflet' : '../libs/leaflet',
		'l.geosearch' : '../libs/L.GeoSearch/src/js',
		'leaflet-locatecontrol' : '../libs/leaflet-locatecontrol/src',
		'jso2' : '../libs/jso2',
		'store' : '../libs/jso2/store',
		'utils' : '../libs/jso2/utils',
		'moment' : '../libs/moment',
		'underscore.string' : '../libs/underscore.string',
		'foundation' : '../libs/foundation',
		'foundation-loader' : '../libs/foundation-loader',
		'backbone.validateAll' : '../libs/Backbone.validateAll',
		'backbone-pageable' : '../libs/backbone-pageable',
		'handlebars-paginate' : '../libs/handlebars-paginate',
		'backbone.syphon' : '../libs/backbone.syphon',
		'backbone-forms' : '../libs/backbone-forms',
		'backbone-deep-model' : '../libs/deep-model',
		'backbone-validation' : '../libs/backbone-validation-amd',
		'alertify' : '../libs/alertify',
		'text' : '../libs/requirejs-text'
	},
	// Sets the configuration for your third party scripts that are not AMD compatible
	shim :
	{
		'backbone' :
		{
			'deps' : ['underscore', 'jquery'],
			// Exports the global window.Backbone object
			'exports' : 'Backbone'
		},
		'marionette' :
		{
			'deps' : ['underscore', 'backbone', 'jquery'],
			// Exports the global window.Marionette object
			'exports' : 'Marionette'
		},
		'handlebars' :
		{
			'exports' : 'Handlebars'
		},
		// Backbone.validateAll plugin (https://github.com/gfranko/Backbone.validateAll)
		'backbone.validateAll' : ['backbone'],

		// Deep model supposedly has AMD support but adds a bunch of underscore mixins before loading underscore
		'backbone-deep-model' : ['underscore', 'backbone'],

		'leaflet': {
			deps: ['jquery'],
			exports: 'L'
		},
		'l.geosearch/l.control.geosearch': {
			deps: ['leaflet'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.bing': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.esri': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.google': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.nokia': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.openstreetmap': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'leaflet-locatecontrol/L.Control.Locate.js': {
			deps: ['leaflet'],
			exports: 'L'
		},

		'moment': {
			exports: 'moment'
		},
		
		'foundation/foundation' : {exports: 'Foundation'},
		'foundation/foundation.abide': {deps: ['foundation/foundation'] },
		'foundation/foundation.alerts': {deps: ['foundation/foundation'] },
		'foundation/foundation.clearing': {deps: ['foundation/foundation'] },
		'foundation/foundation.cookie': {deps: ['foundation/foundation'] },
		'foundation/foundation.dropdown': {deps: ['foundation/foundation'] },
		'foundation/foundation.forms': {deps: ['foundation/foundation'] },
		'foundation/foundation.interchange': {deps: ['foundation/foundation'] },
		'foundation/foundation.joyride': {deps: ['foundation/foundation'] },
		'foundation/foundation.magellan': {deps: ['foundation/foundation'] },
		'foundation/foundation.orbit': {deps: ['foundation/foundation'] },
		'foundation/foundation.placeholder': {deps: ['foundation/foundation'] },
		'foundation/foundation.reveal': {deps: ['foundation/foundation'] },
		'foundation/foundation.section': {deps: ['foundation/foundation'] },
		'foundation/foundation.tooltips': {deps: ['foundation/foundation'] },
		'foundation/foundation.topbar': {deps: ['foundation/foundation'] },
	}
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(['App', 'routers/AppRouter', 'controllers/Controller', 'jquery'],
	function(App, AppRouter, Controller)
	{
		App.appRouter = new AppRouter(
		{
			controller : new Controller()
		});
		App.start();
		window.App = App;
	});
