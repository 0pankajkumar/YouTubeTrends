var Sandbox = (function() {
	const ORIGIN = "https?://www.youtube.com";

	class Sandbox {
		constructor() {
			this.addMessageListener();
		}

		addMessageListener() {
			window.addEventListener("message", this.onMessageReceived.bind(this), false);
		}

		onMessageReceived(event) {
			let { message, payload } = event.data;
			let { origin, source } = event;

			if (!this.verifyOrigin(origin)) { return; }

			if (message === Messages.SANDBOX.SET_DECRYPTER) {
				this.handleSetDecrypterMessage(source, payload);
			} else if (message === Messages.SANDBOX.DECRYPT) {
				this.handleDecryptMessage(source, payload);
			} else if (message === Messages.SANDBOX.DECRYPT_BATCH) {
				this.handleDecryptBatchMessage(source, payload);
			}

			log(message);
			log(payload);
		}

		handleSetDecrypterMessage(source, payload)  {
			this.setDecrypter(payload);

			source.postMessage({
				message: Messages.SANDBOX.SET_DECRYPTER_RESPONSE,
				payload: null
			}, "*");
		}

		handleDecryptMessage(source, payload) {
			let decryptedSig = this.decrypt(payload);
			log(`decrypted sig: ${decryptedSig}`);

			source.postMessage({
				message: Messages.SANDBOX.DECRYPT_RESPONSE,
				payload: decryptedSig
			}, "*");
		}

		handleDecryptBatchMessage(source, payload) {
			this.decryptBatch(payload);
			// log(`decrypted sig: ${decryptedSig}`);

			source.postMessage({
				message: Messages.SANDBOX.DECRYPT_BATCH_RESPONSE,
				payload
			}, "*");
		}

		verifyOrigin(origin) {
			let verifyOriginRegExp = new RegExp(ORIGIN);

			return verifyOriginRegExp.test(origin);
		}

		setDecrypter(decrypter) {
			try {
				decrypter = atob(decrypter);
				let script = document.createElement("script");
				let textNode = document.createTextNode(decrypter);
				script.appendChild(textNode);
				document.head.appendChild(script);
				if (!window.decSig) {
					throw new Error("Sandbox.setDecrypter: 'failed to set decrypter'");
				}
				log("Sandbox.setDecrypter: decrypter set");
			} catch(ex) { 
				log(ex); 
			}
		}

		decrypt(sig) {
			try {
				if (!window.decSig) {
					throw new Error("Sandbox.decrypt: 'window.decSig' is undefined");
				}

				return window.decSig(sig);
			} catch(ex) {
				log(ex);
			}
		}

		decryptBatch(sigBatch) {
			for (let sigObject of sigBatch) {
				sigObject.decryptedSig = this.decrypt(sigObject.sig);
			}
		}
	}

	return Sandbox;

})();

let sandbox = new Sandbox();

// how to post a message to the sandbox
// test1.contentWindow.postMessage();