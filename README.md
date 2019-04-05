# doz-get-form-values
Get all values from a form

## Install
```
npm install doz-get-form-values
```

Live <a href="https://dozjs-cmp.github.io/doz-get-form-values/dist/">here</a>


## Usage

Globally
```javascript
import Doz from 'doz'
import dozGetFormValues from 'doz-get-form-values'

Doz.use(dozGetFormValues);

new Doz({
    root: '#app',
    template(h) {
        return h`
        <form d-ref="form">
          First name:<br>
          <input type="text" name="firstname" value="Mickey">
          <br>
          Last name:<br>
          <input type="text" name="lastname" value="Mouse">
          <br><br>
        </form>
        <button onclick="this.onClick()">Submit</button>
        `
    },

    onClick(){
        console.log(this.getFormValues())
    }
});

```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs-cmp/doz-get-form-values/blob/master/CHANGELOG.md">here</a>

## License
doz-get-form-values is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
Pietro Lembo
