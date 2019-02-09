<template>
  <div class="page-wrap">
    <a-form
      :form="form"
      id="components-form-demo-normal-login"
      @submit="handleSubmit"
      class="login-form"
    >
      <div class="flexbox">
        <h1 class="form-title">{{ $t('login.title') }}</h1>
        <a-dropdown :trigger="['click']" placement="bottomCenter">
          <icon-font type="icon-fanyi-full" class="ant-dropdown-link"/>
          <a-menu slot="overlay">
            <a-menu-item
              v-for="(value, key) in $store.state.i18n.languageLookupTable"
              :key="key"
              :disabled="locale === key ? true : false"
              @click="$store.commit('CHANGE_LOCALE', key)"
            >{{ value }}</a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <a-form-item>
        <a-input
          :placeholder="$t('login.username')"
          v-decorator="[
          'userName',
          { rules: [
              { required: true, message: $t('login.usernameRequired')},
              { pattern: /^[0-9A-Za-z]{6,12}$/, message: `${$t('login.usernameValidate')}` }
            ] }
        ]"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [
              { required: true, message: $t('login.passwordRequired')},
              { pattern: /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/, message: `${$t('login.passwordValidate')}`}
            ] }
        ]"
          type="password"
          :placeholder="$t('login.password')"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
        >{{$t('login["remenber me"]')}}</a-checkbox>
        <a class="login-form-forgot" href>{{$t("login['forgot password']")}}</a>
        <a-button type="primary" htmlType="submit" class="login-form-button">{{$t('login.logIn')}}</a-button>Or
        <a href>{{$t('login["register now!"]')}}</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          window.console.log("Received values of form: ", values);
          this.$router.push("/");
        }
      });
    }
  },
  computed: {
    ...mapGetters(["locale"])
  },
  mounted() {}
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>

<style lang="scss" scoped>
.page-wrap {
  height: 100%;
  background-color: #324157;
}
.login-form {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 500px;
  max-width: 96%;
  min-width: 3cm;
  height: fit-content;
}
.flexbox {
  display: flex;
  align-items: center;
}
.form-title {
  text-align: center;
  flex-grow: 1;
}
</style>
