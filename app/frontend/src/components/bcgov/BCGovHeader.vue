<template>
  <header :class="{ 'gov-header': true }">
    <!-- header for browser print only -->
    <div class="printHeader d-none d-print-block">
      <img
        alt="B.C. Government Logo"
        class="mr-1 d-inline"
        contain
        :src="PrintLogo"
      />
      <h1
        v-if="!formSubmitMode"
        data-test="btn-header-title"
        class="font-weight-bold text-h6 d-none d-md-inline pl-4"
      >
        {{ appTitle }}
      </h1>
    </div>

    <v-toolbar color="#003366" flat class="px-md-12 d-print-none">
      <!-- Navbar content -->
      <a href="https://www2.gov.bc.ca" data-test="btn-header-logo">
        <v-img
          alt="B.C. Government Logo"
          class="d-flex"
          contain
          height="3.5rem"
          src="@/assets/images/bc_logo.svg"
          width="10rem"
        />
      </a>
      <h1
        v-if="!formSubmitMode"
        data-test="btn-header-title"
        class="font-weight-bold text-h6 d-none d-md-flex pl-4"
      >
        {{ appTitle }}
      </h1>
      <v-spacer />
      <BaseAuthButton />
      <BaseInternationalization />
    </v-toolbar>
  </header>
</template>

<script>
import PrintLogo from '@/assets/images/bc_logo_print.svg';

export default {
  name: 'BCGovHeader',
  data() {
    return {
      PrintLogo: PrintLogo,
    };
  },
  computed: {
    appTitle() {
      return this.$route && this.$route.meta && this.$route.meta.title
        ? this.$route.meta.title
        : process.env.VUE_APP_TITLE;
    },
    formSubmitMode() {
      // hide header content on form submitter pages
      return this.$route && this.$route.meta && this.$route.meta.formSubmitMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.gov-header {
  .printHeader {
    align-items: center;
    img {
      width: 10rem;
      height: 3.5rem;
    }
    .text-h6 {
      color: inherit;
    }
  }
  @media not print {
    border-bottom: 2px solid #fcba19;
  }
  .text-h6 {
    font-family: inherit !important;
    color: #ffffff;
    overflow: hidden;
    margin-bottom: 0;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 1rem !important;
    }
  }
}
</style>
