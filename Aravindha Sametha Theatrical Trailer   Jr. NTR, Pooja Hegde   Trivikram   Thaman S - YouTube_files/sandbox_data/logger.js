if (!DevSettings) { console.error("Logger: 'DevSettings' dependency is not found"); }

var log;
var warn;
var error;
var info;

class Logger {
	static constructor() {
		if (DevSettings.DEBUG_ON) {
			Logger.enableLoggingFunctions();
			if (!DevSettings.INCLUDE_WARNINGS) {
				Logger.disableWarnings();
			}
		} else {
			Logger.disableLoggingFunctions();
		}
	}

	static enableLoggingFunctions() {
		log = console.log;
		warn = console.warn;
		error = console.error;
		info = console.info;
	}

	static disableLoggingFunctions() {
		let empty = () => {};
		log = warn = error = info = empty; 
	}

	static disableWarnings() {
		let empty = () => {};
		warn = empty;
	}
}

Logger.constructor();