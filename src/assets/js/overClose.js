import {Dialog, Drawer, Table, Form, FormItem} from 'element-ui';
import { noop, getPropByPath } from 'element-ui/src/utils/util';
delete FormItem.mounted;
const overFormItem = {
  extends: FormItem,
  mounted() {
    if (this.prop) {
      this.dispatch('ElForm', 'el.form.addField', [this]);

      var initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue,
        configurable: true,
      });
      this.addValidateEvents();
    }
  },

  methods: {
    resetInitValue() {
      let initValue = this.fieldValue;
      if (Array.isArray(initValue)) {
        initValue = [].concat(initValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: '',
        configurable: true,
      });
    },
  }
}

const overForm = {
  extends: Form,
  methods: {
    resetInitValue() {
      if (!this.model) {
        console.warn('[Element Warn][Form]model is required for resetFields to work.');
        return;
      }
      this.fields.forEach(field => {
        field.resetInitValue();
      });
    },
  }
}

export default {
  install(Vue) {
    Vue.component(Form.name, overForm);
    Vue.component(FormItem.name, overFormItem);
  }
}
