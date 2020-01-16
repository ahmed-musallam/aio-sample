<template>
  <div class="root">
    <label :id="id" class="coral-FieldLabel">{{ label }}</label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      is="coral-textfield"
      :labelledby="'#' + id"
      class="coral-Form-field"
      variant="quiet"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: ["value", "label"],
  computed: {
    id() {
      return this.label.replace(/[\W_]+/g, "-");
    }
  }
};
</script>

<style scoped>
.root {
  width: auto;
  display: inline;
}
.coral-FieldLabel {
  display: block;
  width: 60%;
}
.coral-Form-field._coral-Textfield {
  display: inline-block;
  width: 60%;
}
</style>
