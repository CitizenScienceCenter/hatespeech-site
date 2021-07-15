<i18n>
  {

  "de": {

  "page-title": "Textquellen",

  "page-heading": "Woher stammen die Texte?",

  "paragraph-1": "Die WhatsApp Gespräche, die hier Verwendung finden, wurden uns 2014 von der Schweizer Bevölkerung mit der Erlaubnis geschickt, sie für wissenschaftliche Zwecke zu verwenden. Sie wurden bereits in einem <b><a href='https://www.whatsup-switzerland.ch' target='_blank'>grösseren Projekt</a></b> von WissenschaftlerInnen erforscht, allerdings unter anderen Fragestellungen.",
  "paragraph-2": "Wenn man private Unterhaltungen untersuchen will, stellt sich die Frage, wie man zu diesen Daten kommt. In unserem Fall bauten wir bereits 2014 auf die Mitarbeit der Schweizer Bevölkerung. Nach entsprechenden Aufrufen in der Presse erhielten wir 617 ganze Chats zugeschickt. Diese enthielten ~750'000 Nachrichten, bestehend aus insgesamt ~5.5 Millionen Wörtern, die wir unter der Leitung von Prof. Dr. Elisabeth Stark in einem grösseren Projekt Doktorierenden und Post-Docs für deren Forschungsarbeiten zur Verfügung stellten.",
  "paragraph-3": "Die Daten wurden durch uns anonymisiert, d.h. alle Namen und sonstigen persönlichen Informationen wurden nach bestem Wissen und Gewissen entfernt oder im Falle von Vornamen verändert, um die Identität der Daten-SpenderInnen zu schützen. Wenn Sie also im Text den Namen <i>Peter</i> sehen, so stand hier im ursprünglichen Text vielleicht <i>Paul</i> oder Hans."

  }

  }
</i18n>

<template>
  <div>
    <app-content-section class="overflow-hidden">
      <div
        class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1"
      >
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div
              class="col col-tablet-portrait-10 col-large-7 col-large-before-1 col-wrapping col-large-no-bottom-margin"
            >
              <img src="/img/people-with-phones.jpg" style="border-radius:50%" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row">
          <div
            class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping scroll-effect"
          >
            <h2 class="heading centered left-aligned-large">{{ $t("page-heading") }}</h2>
            <p v-html="$t('paragraph-1')"></p>
            <p v-html="$t('paragraph-2')"></p>
            <p v-html="$t('paragraph-3')"></p>
          </div>
        </div>
      </div>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ContentSection from "@/components/shared/ContentSection.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";

export default {
  name: "Home",
  components: {
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  metaInfo: function() {
    return {
      title: this.$t("page-title"),
      meta: [
        {
          property: "og:title",
          content: this.$t("page-title"),
          template: "%s | " + this.$t("site-title"),
        },
      ],
    };
  },
  computed: {
    // ...mapState({
    //     user: state => state.c3s.user
    // })
  },
};
</script>

<style lang="scss"></style>
