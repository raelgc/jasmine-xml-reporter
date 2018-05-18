var JasmineXMLReporter = {
    output_dir: './',
    junitreport: false,
    filePrefix: 'results',
    detect: function(arguments){
        arguments.forEach(function (param, i, args) {
            var pair = param.split('=');
            var name = pair[0];
            var value = pair.length > 1 ? pair[1] : '';
            switch(name){
                case '--filePrefix':
                    if(value) JasmineXMLReporter.filePrefix = value;
                    return JasmineXMLReporter.remove(param);
                case '--output':
                    if(value) JasmineXMLReporter.output_dir = value;
                    return JasmineXMLReporter.remove(param);
                case '--junitreport':
                    JasmineXMLReporter.junitreport = true;
                    return JasmineXMLReporter.remove(param);
            }
        });
        return this.junitreport;
    },
    remove: function(argument){
        var index = process.argv.indexOf(argument);
        if(index !== -1) return process.argv.splice(index, 1);
        return false;
    },
    attach_to: function(runner){
        var reporters = require('jasmine-reporters');
        var junitReporter = new reporters.JUnitXmlReporter({
            savePath: this.output_dir,
            filePrefix: this.filePrefix
        });
        runner.getEnv().addReporter(junitReporter);
    }
};

if(JasmineXMLReporter.detect(process.argv.slice(2))){
    JasmineXMLReporter.attach_to(jasmine);
}
