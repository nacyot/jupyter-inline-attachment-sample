require.config({
  paths: {
    ia: "/static/custom/inline-attachment",
  }
});

require([
  'base/js/namespace',
  'base/js/events',
  'codemirror/lib/codemirror',
  'ia',
], function(IPython, events, CodeMirror) {
  events.on("app_initialized.NotebookApp", function () {
    console.log('APP INIT START')
    CodeMirror.defineInitHook(function (codeMirror) {
      console.log('INIT HOOK START')
      var options = {
        uploadUrl: 'http://192.168.59.103:9292/upload',
        uploadFieldName: 'file',
        downloadFieldName: 'filename',
        allowedTypes: [
          'image/jpeg',
          'image/png',
          'image/jpg',
          'image/gif'
        ],
        progressText: '![Uploading file...]()',
        urlText: "![]({filename})",
        errorText: "<Error uploading file>",
        extraParams: {},
        onReceivedFile: function(file) {},
        onUploadedFile: function(json) {},
        customErrorHandler: function() { return true; },
        customUploadHandler: function(file) { return true; },
        dataProcessor: function(data) { return data; }
      }

      inlineAttachment.editors.codemirror4.attach(codeMirror, options);
      console.log('INIT HOOK END')
    });
    console.log('APP INIT END')
  });
});
