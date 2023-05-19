function runCode() {
	const code = document.getElementById('codeEditor').value;
	const outputFrame = document.getElementById('outputFrame').contentWindow.document;
	outputFrame.open();
	outputFrame.write(code);
	outputFrame.close();
}
