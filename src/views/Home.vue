<i18n>
{

  "de": {

  "cover-heading": "Geschlechts&shy;spezifische Hassausdrücke",
  "cover-subheading": "Identifizieren und klassifizieren anhand von Whatsapp Texten",
  "cover-button-primary": "Zur Identifikation",
  "cover-button-secondary": "Über das Projekt",

  "intro-heading": "Worum geht’s?",
  "intro-text": "Hassausdrücke in den neuen Medien sind im Moment in aller Munde. Doch werden sie auch in privater Korrespondenz verwendet? Das möchten wir anhand von WhatsApps Texten, die uns von der Bevölkerung zur Verfügung gestellt wurden, herausfinden.",
  "intro-button": "Mehr erfahren",

  "identification-heading": "Ihre Hilfe ist gefragt",
  "identification-text": "Um unsere Ziele zu erreichen, bitten wir um Ihre Hilfe. In einem ersten Schritt (Identifikation) geht es darum, möglichst viele Texte anzuschauen und nach möglichen geschlechtsspezifischen Hassausdrücken zu suchen. Wenn uns möglichst viele Leute dabei helfen, sollte diese Suche einigermassen schnell zu Resultaten führen. Damit nicht alle 750'000 Botschaften gelesen werden müssen, werden wir danach die gefundenen Hassausdrücke auch in den noch nicht gelesenen Botschaften suchen. So sollten wir zu einer stattlichen Anzahl von Belegen kommen.",
  "identification-button": "Zur Identifikation",

  "sources-heading": "Woher stammen die Texte?",
  "sources-text": "Die WhatsApp Gespräche, die hier Verwendung finden, wurden uns 2014 von der Schweizer Bevölkerung zur Verfügung gestellt.",
  "sources-button": "Mehr erfahren"

},

"fr": {

"cover-heading": "Expressions de haine séxospécifique",
"cover-subheading": "Identifier et classer des expressions de haine spécifique au sexe à l’aide de textes WhatsApp",
"cover-button-primary": "Identification",
"cover-button-secondary": "Le Projet",

"intro-heading": "De quoi s’agit-il ?",
"intro-text": "Les expressions de haine dans les nouveaux médias sont un sujet en vogue. Mais qu’en est-il de la correspondance privée ? Nous aimerions le savoir sur la base des textes WhatsApp qui ont été mis à notre disposition par la population.",
"intro-button": "En savoir plus",

"identification-heading": "Nous avons besoin de votre aide !",
"identification-text": "Pour atteindre nos objectifs, nous avons besoin de votre aide. La première étape (identification) consiste à examiner autant de textes que possible et à rechercher d'éventuelles expressions de haine spécifique au sexe. Plus les personnes qui nous aident seront nombreuses, plus nous arriverons rapidement à résultats fructueux. Pour que les 750 000 messages ne soient pas tous lus, nous identifierons ensuite les phrases de haine trouvées dans les messages qui n'ont pas encore été lus, sur la base de vos trouvailles. Ainsi, nous devrions obtenir des résultats satisfaisants.",
"identification-button": "Identification",

"sources-heading": "D’où proviennent les textes ?",
"sources-text": "Les conversations WhatsApp utilisées ici ont été mises à notre disposition par la population suisse en 2014.",
"sources-button": "En savoir plus"

},

"it": {

"cover-heading": "Espressioni di odio<br>basate sul genere",
"cover-subheading": "Identificare e classificare attraverso messaggi di WhatsApp",
"cover-button-primary": "Identificazione",
"cover-button-secondary": "Il progetto",

"intro-heading": "Di cosa si tratta?",
"intro-text": "Al momento le espressioni di odio nei nuovi media sono sulla bocca di tutte le persone, ma sono anche usate nella corrispondenza privata? È ciò che vorremmo scoprire attraverso dei messaggi di WhatsApp che ci sono stati messi a disposizione dalla popolazione.",
"intro-button": "Scoprire di più",

"identification-heading": "È richiesto il Suo aiuto",
"identification-text": "Per raggiungere i nostri scopi La preghiamo della sua collaborazione. In una prima fase (identificazione) si tratta di esaminare il maggior numero di testi per quanto possibile e di cercare delle possibili espressioni di odio basate sul genere. Più numerose saranno le persone ad aiutarci e più in fretta la ricerca porterà a dei risultati. Affinché non tutti i 750'000 messaggi debbano essere letti, in una seconda fase cercheremo le espressioni di odio trovate anche nei messaggi non ancora letti. Così dovremmo arrivare a un numero considerevole di prove.",
"identification-button": "Identificazione",

"sources-heading": "Da dove provengono i testi?",
"sources-text": "Le conversazioni di WhatsApp che sono oggetto di questa analisi ci sono state messe a disposizione dalla popolazione svizzera nel 2014.",
"sources-button": "Scoprire di più"

}

}
</i18n>

<template>
  <div>

    <app-cover imageUrl="/img/cover.jpg" goal="5" logoUrl="/img/logo-fnsnf.svg">
      <div class="row row-centered">
        <div class="col col-large-8">
          <h2 class="cover-heading scroll-effect" v-html="$t('cover-heading')"></h2>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <p class="cover-subheading scroll-effect scroll-effect-delayed-1">{{ $t('cover-subheading') }}</p>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <div class="button-group centered scroll-effect scroll-effect-delayed-2">
            <router-link tag="button" to="/identification" class="button button-primary">{{ $t('cover-button-primary') }}</router-link>
            <router-link tag="button" to="/about" class="button button-secondary button-secondary-inverted">{{ $t('cover-button-secondary') }}</router-link>
          </div>
        </div>
      </div>
    </app-cover>

    <app-content-section color="greyish" class="content-section-condensed">
      <div class="content-wrapper">
        <sub-section-stats
                :userCount="totalUserCount"
                :submissionCount="totalSubmissionCount"
                :taskCount="totalTaskCount" >
        </sub-section-stats>
      </div>
    </app-content-section>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/graphic-intro.png" />
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('intro-heading') }}</h2>
              <p v-html="$t('intro-text')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/about" class="button button-secondary">{{ $t('intro-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div>
              <div class="extra-padding-large-h">
                <img src="/img/graphic-bubbles.png"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('identification-heading') }}</h2>
              <p v-html="$t('identification-text')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/identification" class="button button-primary">{{ $t('identification-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/people-with-phones.jpg" style="border-radius:50%"/>
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('sources-heading') }}</h2>
              <p v-html="$t('sources-text')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/sources" class="button button-secondary">{{ $t('sources-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <section-feedback color="light-greyish" email="help@citizenscience.ch" :subject="$t('site-name')"></section-feedback>

    <section-s-d-g goal="5" color="greyish">
      This project supports Goal 5: Achieve gender equality and empower all women and girls, and in particular target 5.2 on eliminating all forms of violence against all women in the public sphere.
    </section-s-d-g>


    <section-newsletter-signup></section-newsletter-signup>

    <app-footer></app-footer>

  </div>
</template>

<script>

import {mapState} from 'vuex'

import Cover from '@/components/shared/Cover.vue';
import ContentSection from '@/components/shared/ContentSection.vue';
import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import SectionSDG from "../components/shared/SectionSDG";
import SectionFeedback from "../components/shared/SectionFeedback";
import SubSectionStats from "../components/shared/SubSectionStats";


export default {
  name: 'Home',
  components: {
    SubSectionStats,
      SectionFeedback,
      SectionSDG,
      SectionNewsletterSignup,
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
  metaInfo: function() {
      return {
          title: this.$t('site-title'),
          titleTemplate: null,
          meta: [
              {
                  property: 'og:title',
                  content: this.$t('site-title')
              }
          ]
      }
  },
  computed: {
      ...mapState({
          user: state => state.c3s.user,

          totalTaskCount: state => state.stats.totalTaskCount,
          totalUserCount: state => state.stats.totalUserCount,
          totalSubmissionCount: state => state.stats.totalSubmissionCount
      })
  },
    mounted() {
        this.$store.dispatch('stats/updateTotalUserAndSubmissionCount');
        this.$store.dispatch('stats/updateTotalTaskCount');
    }
}

</script>

<style lang="scss">


</style>
