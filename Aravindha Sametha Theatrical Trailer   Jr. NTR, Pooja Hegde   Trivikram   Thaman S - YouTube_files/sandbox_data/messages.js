var Messages = (function() {
	var Messages = {};

	const CONTENT_PREFIX = "content:";			// the sending side - not the listener side
	const BACKGROUND_PREFIX = "background:";	// the sending side - not the listener side

	// content messages
	Messages.CONTENT = {
		CONTENT_SCRIPT_READY: 					CONTENT_PREFIX + "content-script-ready",
		DOWNLOAD_REQUEST: 						CONTENT_PREFIX + "download-request",
		PING: 									CONTENT_PREFIX + "ping",
		DECRYPTER_REQUEST: 						CONTENT_PREFIX + "decrypter-request",
		DECRYPTER_URL_UPDATE_REQUEST_MESSAGE: 	CONTENT_PREFIX + "decrypter-url-update",
		DECRYPTER_DECRYPT_REQUEST_MESSAGE: 		CONTENT_PREFIX + "decrypter-decrypt-request",
		DECRYPTER_DECRYPT_RESPONSE: 			CONTENT_PREFIX + "decrypter-decrypt-response"
	};

	// background messages
	Messages.BACKGROUND = {
		PING: 							BACKGROUND_PREFIX + "ping",
		TAB_UPDATED: 					BACKGROUND_PREFIX + "tab-updated",
		DECRYPTER_RESPONSE: 			BACKGROUND_PREFIX + "decrypter-response",
		DECRYPTER_URL_UPDATE_RESPONSE: 	BACKGROUND_PREFIX + "decrypter-url-update-response"
	};

	// sandbox messages - there is no specific "sending side" here - it's mixed.
	// the communication is between the content script and the iframe sandbox
	Messages.SANDBOX = {
		SET_DECRYPTER: 			"set-decrypter",				// will be sent from the content
		SET_DECRYPTER_RESPONSE: "set-decrypter-response",		// will be sent from the iframe sandbox
		DECRYPT: 				"decrypt",						// will be sent from the content
		DECRYPT_RESPONSE: 		"decrypt-response",				// will be sent from the iframe sandbox,
		DECRYPT_BATCH: 			"decrypt-batch",				// will be sent from the content
		DECRYPT_BATCH_RESPONSE: "decrypt-batch-response"		// will be sent from the iframe sandbox,
	};

	return Messages;
})();