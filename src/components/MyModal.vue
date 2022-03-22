<template>
  <Transition name="modal" >
    <div v-if="store.state.statusModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> </slot>
          </div>
          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>
          <div class="modal-footer">
            <button class="modal-default-button" @click="CloseModal">
              <slot name="footer">default footer</slot>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

function CloseModal() {
  store.commit('ChangeStatusModal', {
    value: false,
  });
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    const { target } = e;

    if (target.classList.contains('modal-mask')) {
      CloseModal();
    }
  });
});

</script>

<style lang="less">
:root {
  --translateY: 100%;
  --timing: 0.2s;
}

.modal-mask {
  position: fixed;
  z-index: 1e5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  transition: transform var(--timing) linear;
}

.modal-wrapper {
  align-self: flex-end;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: transform var(--timing) linear;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(var(--translateY));
}
</style>
