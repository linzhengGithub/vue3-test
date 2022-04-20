
<template>
    <a-form
        layout="inline"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
    >
        <a-form-item label="管理组织">
            <a-input v-model:value="formState.user" placeholder="Username">
                <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
        </a-form-item>
        <a-form-item label="告警时间">
            <a-input v-model:value="formState.password" type="password" placeholder="Password">
                <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
        </a-form-item>
        <a-form-item label="隔离地点">
            <a-input v-model:value="formState.user" placeholder="Username">
                <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
        </a-form-item>
        <a-form-item label="门磁标识">
            <a-input v-model:value="formState.password" type="password" placeholder="Password">
                <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
        </a-form-item>
        <a-form-item label="摄像头标识">
            <a-input v-model:value="formState.user" placeholder="Username">
                <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit" > Log in </a-button>
        </a-form-item>
    </a-form>
</template>

<script setup>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { reactive } from 'vue'

const formState = reactive({
    user: '',
    password: '',
})
const handleFinish = values => {
    console.log(values, formState)
}
const handleFinishFailed= errors => {
    console.log(errors)
}

</script>