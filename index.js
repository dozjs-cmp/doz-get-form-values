module.exports = function(Doz, app, options = {}){
    Doz.mixin({
        getFormValues() {
            options = Object.assign({
                formRef: 'form'
            }, options);

            const formValues = {};
            this.ref[options.formRef].querySelectorAll('input, select, textarea').forEach(el => {
                if (el.name)
                    formValues[el.name] = el.value;
            });
            return formValues
        }
    });
};

