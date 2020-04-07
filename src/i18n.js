import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store/store.js'

Vue.use(VueI18n);

var language;
if( !store.state.settings.language ) {
    // no language in store

    // check browser
    language = window.navigator.userLanguage || window.navigator.language;

    // trim
    language = language.substr(0,2);

    // check if valid
    if( language !== 'de' && language !== 'fr' && language !== 'it' ) {
        language = "de";
    }

    // language for prerendering default routes
    if( navigator.userAgent === 'ReactSnap' ) {
        language = "de";
    }

    store.dispatch("settings/setLanguage", language );
}

export const i18n = new VueI18n({
  locale: store.state.settings.language,
  silentTranslationWarn: true,
  messages: {
      'de': {

          "site-name": "Hate Speech",
          "site-title": "Hate Speech | Citizen Science Center Zurich",
          "site-description": "Geschlechterspezfische Hassausdrücke in Whatsapp Texten",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-identification': {
              'link': 'Identifikation'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-about': {
              'link': 'Über das Projekt'
          },
          'navigation-sources': {
              'link': 'Textquellen'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Anmelden'
          },
          'navigation-register': {
              'link': 'Registrieren'
          },
          'navigation-logout': {
              'link': 'Logout'
          },
          'navigation-reset': {
              'link': 'Passwort zurücksetzen'
          },
          'navigation-profile': {
              'link': 'Profil'
          }
      },
      'fr': {

          "site-name": "Hate Speech",
          "site-title": "Hate Speech | Citizen Science Center Zurich",
          "site-description": "Expressions de haine séxospécifique",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-identification': {
              'link': 'Identification'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-about': {
              'link': 'Le Project'
          },
          'navigation-sources': {
              'link': 'Sources de texte'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Login'
          },
          'navigation-register': {
              'link': "S'inscrire"
          },
          'navigation-logout': {
              'link': 'Logout'
          },
          'navigation-reset': {
              'link': "Réinitialiser le mot de passe"
          },
          'navigation-profile': {
              'link': 'Profil'
          }
      },
      'it': {

          "site-name": "Hate Speech",
          "site-title": "Hate Speech | Citizen Science Center Zurich",
          "site-description": "Espressioni di odio basate sul genere",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-identification': {
              'link': 'Identificazione'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-about': {
              'link': 'Il progetto'
          },
          'navigation-sources': {
              'link': 'Fonti di testo'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Login'
          },
          'navigation-register': {
              'link': "Registrati"
          },
          'navigation-logout': {
              'link': 'Logout'
          },
          'navigation-reset': {
              'link': "Reimpostazione della password"
          },
          'navigation-profile': {
              'link': 'Profil'
          }
      }
  }

})
