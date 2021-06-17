<template>
  <DxTagBox
    id="tagBox"
    :data-source="dataSource"
    value-expr="ID"
    display-expr="Name"
    :search-enabled="true"
    :show-selection-controls="true"
    :grouped="true"
    :multiline="true"
    :max-displayed-tags="6"
    @value-changed="onValueChanged"
    :drop-down-options="dropDownOptions"
  />
</template>

<script>
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import { DxTagBox } from 'devextreme-vue';
import DataSource from 'devextreme/data/data_source';
import { data } from './data';

export default {
  name: 'App',
  components: {
    DxTagBox
  },
  data() {
    return {
      dataSource: new DataSource({
        store: {
          data: data,
          type: 'array',
          key: 'ID'
        },
        group: 'Category'
      }),
      dropDownOptions: {
        maxHeight: 300
      }
    };
  },
  methods: {
    onValueChanged(e) {
      console.log(e.previousValue);
      console.log(e.value);
    }
  }
};
</script>

<style>
#tagBox {
  width: 500px;
}
</style>