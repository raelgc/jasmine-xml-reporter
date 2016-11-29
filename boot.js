var JasmineXMLReporter = {
    output_dir: './',
    junitreport: false,
    detect: function(arguments){
        arguments.forEach(function (param, i, args) {
            var pair = param.split('=');
            var name = pair[0];
            var value = pair.length > 1 ? pair[1] : '';
            switch(name){
                case '--output':
                    if(value) JasmineXMLReporter.output_dir = value;
                    return;
                case '--junitreport':
                    JasmineXMLReporter.junitreport = true;
                    return;
            }
        });
        return this.junitreport;
    },
    attach_to: function(runner){
        var reporters = require('jasmine-reporters');
        var junitReporter = new reporters.JUnitXmlReporter({
            savePath: this.output_dir,
            filePrefix: 'results'
        });
        runner.getEnv().addReporter(junitReporter);
    }
};

if(JasmineXMLReporter.detect(process.argv)){
    JasmineXMLReporter.attach_to(jasmine);
}
