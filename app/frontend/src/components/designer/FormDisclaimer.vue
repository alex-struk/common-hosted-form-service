<template>
  <div>
    <h3 class="mb-5" :lang="lang">
      {{ $t('trans.formDisclaimer.disclaimerAndStatement') }}
    </h3>
    <ul :class="isRTL ? 'mr-6' : null">
      <li :lang="lang">
        {{ $t('trans.formDisclaimer.privacyLaw') }}
      </li>
      <li :lang="lang">
        {{ $t('trans.formDisclaimer.disclosure') }}
      </li>
      <li :lang="lang">
        {{ $t('trans.formDisclaimer.consent') }}
      </li>
      <li :lang="lang">
        {{ $t('trans.formDisclaimer.formIntention') }}
        <a
          href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy/resources/privacy-officers"
          target="_blank"
          :hreflang="lang"
        >
          {{ $t('trans.formDisclaimer.privacyOfficer') }}
          <v-icon small color="primary">open_in_new</v-icon>
        </a>
        {{ $t('trans.formDisclaimer.assement') }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'FormDisclaimer',
  computed: {
    ...mapGetters('form', ['isRTL', 'lang']),
  },
};
</script>
