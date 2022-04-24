import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';

export function useModal() {

  function deleteModal(title: string, contentTitle: string, onOk: void, onCancel:void, width = 300) {
    Modal.confirm({
      title: title,
      icon: createVNode(ExclamationCircleOutlined),
      width: width,
      content: createVNode('div', { style: 'color:black;' }, contentTitle),
      onOk() {
        onOk
      },
      onCancel() {
        onCancel
      },
    });
  }

  return { deleteModal }
}