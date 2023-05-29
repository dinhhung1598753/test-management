<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Nhập email"
        />

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Nhập mật"
          placeholder="Nhập mật khẩu"
        />

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Đăng nhập
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>
