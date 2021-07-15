<i18n>
{

  "de": {

  "page-title": "Über das Projekt",

  "page-heading": "Über das Projekt",

  "paragraph-1": "In den letzten Jahren ist das Interesse an der Geschlechtergerechtigkeit und allen Arten von Belästigungen im Zusammenhang mit Geschlechterunterschieden gestiegen. Geschlechtsspezifische Beschimpfungen im öffentlichen Raum, insbesondere auf Sozialen Medien wie Facebook oder Twitter, sind oft Themen in der Forschung und in der Presse. Doch wie steht es um geschlechtsspezifische Beschimpfungen im  privaten digitalen Raum? Und gibt es Unterschiede zwischen Menschen, die Deutsch, Italienisch oder Französisch schreiben? Wie oft sind geschlechtsspezifische Schimpfwörter ernst gemeint und wie oft werden sie ironisch verwendet?",
  "paragraph-2": "Diesen und anderen Fragen ging dieses Projekt nach. In einem ersten Schritt ging es darum, in WhatsApp Texten geschlechtsspezifische Ausdrücke zu finden. Im zweiten Schritt wurden die gefundenen Ausdrücke im Hinblick auf ihre tatsächliche Funktion (also wie sie gemeint und wahrgenommen werden) klassifiziert. Daneben werden die gleichen Ausdrücke in einem Projekt der <b><a href='https://alliancef.ch' target='_blank'>Alliance-F</a></b> verwendet, um Hatespeech im Internet zu finden. Ziel dieses Alliance-F Projektes ist es, Citizen Scientists Werkzeuge zur Verfügung zu stellen, um Hassausdrücke zu finden und deeskalierend zu kontern.",

  "subheading-1": "Was wir bisher herausgefunden haben",
  "paragraph-3": "In einer Vorstudie haben wir in unseren Daten die Verwendung von einzelnen geschlechtsspezifischen Hass-Ausdrücken untersucht. Wir haben einerseits herausgefunden, dass entgegen der Erwartung solche Ausdrücke auch oft von Frauen verwendet werden, z.B.  das englische Wort <i>bitch</i> (oft nicht abwertend gemeint in freundschaftlichen Beziehungen). Andererseits sind Frauen in diesen untersuchten Daten zurückhaltend im Kommentieren der sexuellen Orientierung von Männern. Wie erwartet beziehen sich Hass-Ausdrücke oft auf die weibliche Anatomie. Wir konnten auch zeigen, dass die Hass-Ausdrücke eigentlich nie an den/die Gesprächspartner/in gerichtet sind. Sie sind also keine direkten Beleidigungen, sondern werden gebraucht, um über Dritte zu reden.",

  "subheading-2": "Warum wir die Hilfe von Citizen Scientists brauchten",
  "paragraph-4": "In der ersten kleinen Untersuchung waren die meisten Hass-Ausdrücke freundschaftlich gemeint, die wenigsten waren wirklich als Ausdruck des Hasses gebraucht. Die untersuchte Datenmenge war aber nicht gross genug, um eine verbindliche Aussage machen zu können. Um alle 750'000 Whatsapp Nachrichten unserer Datensammlung auszuwerten waren wir auf die Hilfe von Citizen Scientists angewiesen. Dazu wurden die Hassausdrücke, die in den ersten 1000 bis 2000 Nachrichten gefunden wurden, in der gesamten Datensammlung automatisch gesucht. Zur Klassifizierung der geschlechtsspezifischen Hass-Ausdrücke wurden im Projekt die Kategorien “abwertend”, “klar nicht abwertend” und “unklar” verwendet. Die Bewertung der geschlechtsspezifischen Hass-Ausdrücke in Bezug auf diese Kategorien ist anspruchsvoll, denn sie kann oft nicht innerhalb der einzelnen WhatsApp Nachricht entschieden werden, sondern erfordert auch die Lektüre der vorangehenden und der folgenden Nachricht(en). Nicht zuletzt deshalb ist es schwierig, diese Aufgabe zu automatisieren. Dafür braucht es menschliches Beurteilungsvermögen. Dieses benötigen wir auch auf Grund des Umstands, dass ein Wort verschiedene Bedeutungen haben kann. So wird z.B. das Wort figa im Italienischen als Bezeichnung für eine Frucht ('Feige'), aber auch für weibliche Körperteile verwendet. Auch hier haben Computer Schwierigkeiten, die jeweils gemeinte Bedeutung dieser Wörter im Zusammenhang zu erkennen. Deshalb sind wir auf die Mithilfe von Citizen Scientists angewiesen.",
  "paragraph-5": "Die verwendeten Daten stammen aus dem Projekt <a href='https://www.whatsup-switzerland.ch/index.php/en/' target='_blank'><b>Whats up, Switzerland?</b></a> (UZH) und wurden uns 2014 von der Schweizer Bevölkerung zur Verfügung gestellt. Die Daten wurden durch uns anonymisiert, d.h. alle Namen und sonstigen persönlichen Informationen wurden nach bestem Wissen und Gewissen entfernt, um die Identität der Daten-Spender*innen zu schützen."

  }

}
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-7 col-large-after-1 col-wrapping col-large-no-bottom-margin">
              <img src="/img/graphic-intro.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-reverse-large">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-after-1 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('page-heading') }}</h2>
            <p v-html="$t('paragraph-1')"></p>
            <p v-html="$t('paragraph-2')"></p>
            <h3 class="subheading">{{ $t('subheading-1') }}</h3>
            <p v-html="$t('paragraph-3')"></p>
            <h3 class="subheading">{{ $t('subheading-2') }}</h3>
            <p v-html="$t('paragraph-4')"></p>
            <p v-html="$t('paragraph-5')"></p>
          </div>

        </div>
      </div>
    </app-content-section>

    <section-feedback color="light-greyish" email="help@citizenscience.ch" :subject="$t('site-name')"></section-feedback>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer></app-footer>

  </div>
</template>

<script>

import {mapState} from 'vuex'

import ContentSection from '@/components/shared/ContentSection.vue';
import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import SectionFeedback from "../components/shared/SectionFeedback";


export default {
  name: 'Home',
  components: {
      SectionFeedback,
      SectionNewsletterSignup,
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
  metaInfo: function() {
      return {
          title: this.$t('page-title'),
          meta: [
              {
                  property: 'og:title',
                  content: this.$t('page-title'),
                  template: '%s | '+this.$t('site-title')
              }
          ]
      }
  },
  computed: {
      ...mapState({
          user: state => state.c3s.user
      })
  }
}

</script>

<style lang="scss">

</style>
