<script setup>
defineProps({
  modelValue: { type: [String, Number], default: '' },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  error: { type: String, default: '' },
  hint: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="field">
    <label v-if="label" class="field-label">
      {{ label }}
      <span v-if="required" class="required-mark">*</span>
    </label>

    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      class="field-control"
      :class="{ invalid: error }"
      :aria-invalid="Boolean(error)"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <p v-if="error" class="field-error">{{ error }}</p>
    <p v-else-if="hint" class="field-hint">{{ hint }}</p>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.field-label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text);
}

.required-mark {
  color: var(--color-danger);
}

.field-control {
  width: 100%;
  min-height: var(--input-height);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  outline: none;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
}

.field-control:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-soft);
}

.field-control.invalid {
  border-color: var(--color-danger);
}

.field-control:disabled {
  background: var(--color-bg);
  cursor: not-allowed;
}

.field-error {
  margin: 0;
  color: var(--color-danger);
  font-size: var(--font-size-xs);
}

.field-hint {
  margin: 0;
  color: var(--color-muted);
  font-size: var(--font-size-xs);
}
</style>
