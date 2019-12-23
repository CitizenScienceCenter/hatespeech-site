<i18n>
{

  "en": {

  "page-title": "Identification"

  },

  "de": {

  "page-title": "Identifikation"

  }

}
</i18n>

<template>
  <div class="identification-page">

    <app-content-section class="content-section-condensed identification">
      <div class="content-wrapper">

        <div class="margin-bottom">
          <div class="row row-wrapping">

            <div class="col col-large-6 col-wrapping scroll-effect">

              <h2 class="heading small centered left-aligned-large" id="projects">Schritt 1: Identifikation</h2>
              <p>
                Selektieren Sie in dieser WhatsApp Nachricht, falls vorhanden, jeweils einen geschlechtsspezifischen Hass-Ausdruck und fügen ihn zur Liste hinzu.<br>
                <span class="small"><a href="#" @click.prevent="openWizard">Hilfe anzeigen</a></span>
              </p>

              <div>
                <div v-if="taskLoaded" class="speech-bubble reduced-bottom-margin" ref="bubble" v-html="bubbleText" :class="{disabled: wrongLanguage || noHateSpeech }"></div>
                <loader v-else class="reduced-bottom-margin"></loader>

                <div class="row row-wrapping">
                  <div class="col col-wrapping col-large-6">

                    <div class="form-field form-field-block form-field-language-checkbox">
                      <div class="options">
                        <label :class="{disabled: wrongLanguage || !taskLoaded }">
                          <input type="checkbox" v-model="noHateSpeech">
                          <div class="checkbox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </div>
                          <span>Keine Hassausdrücke gefunden</span>
                        </label>
                        <label :class="{disabled: noHateSpeech || !taskLoaded }">
                            <input type="checkbox" v-model="wrongLanguage">
                            <div class="checkbox">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                              </svg>
                            </div>
                            <span>Text ist nicht deutsch
                              <inline-hover>
                                <svg slot="display-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M504,256c0,137-111,248-248,248S8,393,8,256,119,8,256,8,504,119.08,504,256ZM262.65,90c-54.49,0-89.25,23-116.54,63.76A12,12,0,0,0,148.82,170l34.7,26.31a12,12,0,0,0,16.66-2.13c17.87-22.65,30.12-35.79,57.31-35.79,20.43,0,45.7,13.14,45.7,33,0,15-12.37,22.67-32.54,34C247.13,238.53,216,254.94,216,296v4a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12v-1.33C296,270.2,379.19,269,379.19,192,379.19,134,319,90,262.65,90ZM256,338a46,46,0,1,0,46,46A46.05,46.05,0,0,0,256,338Z"/>
                                </svg>
                                <template slot="hover">
                                  Unter Deutsch verstehen wir auch Nachrichten mit vielen Schreib- und Tippfehlern sowie Schweizerdeutsche Nachrichten. Tipp: Falls die Nachricht unverständlich erscheint, versuchen Sie, sie laut zu lesen.
                                </template>
                              </inline-hover>
                            </span>
                        </label>
                      </div>
                    </div>

                  </div>
                  <div class="col col-wrapping col-large-6">

                    <div class="add-button-group">
                      <div class="button-group right-aligned">
                        <button class="button button-primary" :disabled="!selection" @click="select">Hinzufügen</button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            <div class="col col-large-6 col-wrapping scroll-effect scroll-effect-delayed-1">

              <div :class="{disabled:wrongLanguage || noHateSpeech}">

                <h2 class="heading small centered left-aligned-large" id="projects">Schritt 2: Klassifikation</h2>
                <p>
                  Bitte klassifizieren Sie die ausgewählten Hass-Ausdrücke:
                </p>

                <transition name="no-item-fade">
                  <p class="no-items" v-if="selections.length == 0">
                    Noch keine Ausdrücke hinzugefügt.
                  </p>
                </transition>

                <transition-group name="item-fade" tag="div" class="items">
                  <div class="item" v-for="(selection, index) in selections" :key="'selection_'+index">

                    <div class="string">{{ selection.string }}</div>

                    <button class="button button-secondary button-secondary-naked button-icon button-icon-only" @click="selections.splice(index,1); checkComplete()">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M322.72,256,422.79,155.93a31.46,31.46,0,0,0,0-44.48L400.55,89.21a31.46,31.46,0,0,0-44.48,0L256,189.28,155.93,89.21a31.46,31.46,0,0,0-44.48,0L89.21,111.45a31.46,31.46,0,0,0,0,44.48L189.28,256,89.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L256,322.72,356.07,422.79a31.46,31.46,0,0,0,44.48,0l22.24-22.24a31.46,31.46,0,0,0,0-44.48Z"/>
                      </svg>
                    </button>

                    <div class="categories">

                      <div class="category">
                        <label>Wortherkunft</label>
                        <div class="form-field">
                          <div class="custom-select">
                            <select v-model="selection.origin" :class="{placeholder:!selection.origin}" @change="checkComplete">
                              <option :value="undefined" disabled selected>Bitte wählen ...</option>
                              <option value="anatomy">Anatomie</option>
                              <option value="gender">Geschlechtszugehörigkeit</option>
                              <option value="sexual-orientation">Sexuelle Ausrichtung</option>
                              <option value="other">Andere</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                            </svg>
                          </div>
                        </div>
                        <inline-hover class="overlay-right-aligned">
                          <svg slot="display-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M504,256c0,137-111,248-248,248S8,393,8,256,119,8,256,8,504,119.08,504,256ZM262.65,90c-54.49,0-89.25,23-116.54,63.76A12,12,0,0,0,148.82,170l34.7,26.31a12,12,0,0,0,16.66-2.13c17.87-22.65,30.12-35.79,57.31-35.79,20.43,0,45.7,13.14,45.7,33,0,15-12.37,22.67-32.54,34C247.13,238.53,216,254.94,216,296v4a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12v-1.33C296,270.2,379.19,269,379.19,192,379.19,134,319,90,262.65,90ZM256,338a46,46,0,1,0,46,46A46.05,46.05,0,0,0,256,338Z"/>
                          </svg>
                          <template slot="hover">
                            Mögliche Kategorien sind Körperteile (z.B. <i>Schwanz</i>), Tätigkeiten (z.B. <i>Hure</i> oder <i>Wichser</i>) oder Geschlechtszugehörigkeit (z.B. <i>Weib</i>) oder die sexuelle Ausrichtung, (z.B. <i>Homo</i>).
                          </template>
                        </inline-hover>
                      </div>

                      <div class="category">
                        <label>Geschlecht <span class="regular">(Adressat/in)</span></label>
                        <div class="form-field">
                          <div class="custom-select">
                            <select v-model="selection.gender" :class="{placeholder:!selection.gender}" @change="checkComplete">
                              <option :value="undefined" disabled selected>Bitte wählen ...</option>
                              <option value="man">Mann</option>
                              <option value="woman">Frau</option>
                              <option value="diverse">Divers</option>
                              <option value="unknown">Unbekannt</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                            </svg>
                          </div>
                        </div>
                        <inline-hover class="overlay-right-aligned">
                          <svg slot="display-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M504,256c0,137-111,248-248,248S8,393,8,256,119,8,256,8,504,119.08,504,256ZM262.65,90c-54.49,0-89.25,23-116.54,63.76A12,12,0,0,0,148.82,170l34.7,26.31a12,12,0,0,0,16.66-2.13c17.87-22.65,30.12-35.79,57.31-35.79,20.43,0,45.7,13.14,45.7,33,0,15-12.37,22.67-32.54,34C247.13,238.53,216,254.94,216,296v4a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12v-1.33C296,270.2,379.19,269,379.19,192,379.19,134,319,90,262.65,90ZM256,338a46,46,0,1,0,46,46A46.05,46.05,0,0,0,256,338Z"/>
                          </svg>
                          <template slot="hover">
                            Geschlecht der Person, die mit dem Hass-Ausdruck bezeichnet wird. Bitte auswählen: Mann, Frau, Divers (Menschen, die sich den Geschlechtern Mann und Frau nicht zuordnen möchten), Unklar (das Geschlecht geht aus dem Text nicht klar hervor)
                          </template>
                        </inline-hover>
                      </div>

                      <div class="category">
                        <label>Sex. Ausrichtung <span class="regular">(Adressat/in)</span></label>
                        <div class="form-field">
                          <div class="custom-select">
                            <select v-model="selection.sex" :class="{placeholder:!selection.sex}" @change="checkComplete">
                              <option :value="undefined" disabled selected>Bitte wählen ...</option>
                              <option value="hetereo">Hetereosexuell</option>
                              <option value="homo">Homosexuell</option>
                              <option value="bisexual">Bisexuell</option>
                              <option value="unclear">Unklar</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                            </svg>
                          </div>
                        </div>
                        <inline-hover class="overlay-right-aligned">
                          <svg slot="display-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M504,256c0,137-111,248-248,248S8,393,8,256,119,8,256,8,504,119.08,504,256ZM262.65,90c-54.49,0-89.25,23-116.54,63.76A12,12,0,0,0,148.82,170l34.7,26.31a12,12,0,0,0,16.66-2.13c17.87-22.65,30.12-35.79,57.31-35.79,20.43,0,45.7,13.14,45.7,33,0,15-12.37,22.67-32.54,34C247.13,238.53,216,254.94,216,296v4a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12v-1.33C296,270.2,379.19,269,379.19,192,379.19,134,319,90,262.65,90ZM256,338a46,46,0,1,0,46,46A46.05,46.05,0,0,0,256,338Z"/>
                          </svg>
                          <template slot="hover">
                            Sexuelle Ausrichtung des/r Adressanten/in. Möglich sind hetero- homo-, bi- und asexuell. Die Option "Unklar" wird dann angewendet, wenn das Geschlecht aus dem Text in der Nachricht nicht klar hervorgeht.
                          </template>
                        </inline-hover>
                      </div>

                    </div>
                  </div>
                </transition-group>

              </div>
            </div>

          </div>
        </div>

        <div class="row row-wrapping row-reverse-large scroll-effect scroll-effect-delayed-2">
          <div class="col col-large-6 col-wrapping">
            <div class="button-group right-aligned">
              <button class="button button-secondary" @click="next" :disabled="!taskLoaded">Überspringen</button>
              <button class="button button-primary" @click="submit" :disabled="!taskLoaded || !complete && !wrongLanguage && !noHateSpeech">Antworten</button>
            </div>
          </div>
          <div class="col col-large-6 col-wrapping">
            <div class="progress">
              <div class="progress-bar">
                <div class="progress-bar-back">
                  <div class="progress-bar-fill" :style="{width:(mySubmissionCount/totalTaskCount*100)+'%'}"></div>
                </div>
              </div>
              <div class="text">
                Fortschritt {{mySubmissionCount}} von {{totalTaskCount}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered margin-bottom">

          <div class="col col-tablet-portrait-10 col-large-8 col-xlarge-6 scroll-effect">
            <h2 class="heading centered">Fragen & Antworten</h2>
            <expandable>
              <template slot="header">Wozu verpflichte ich mich?</template>
              <template slot="content">
                <p>
                  Wenn Sie uns helfen, geschlechtsspezifische Hass-Ausdrücke zu finden, verpflichten Sie sich grundsätzlich zu gar nichts. Ob Sie einen oder 1000 Ausdrücke für uns suchen, Sie helfen uns und wir sind dankbar.
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">Was sind geschlechtsspezifische Hass-Ausdrücke?</template>
              <template slot="content">
                <p class="reduced-bottom-margin">
                  Geschlechtsspezifische Hass-Ausdrücke sind Ausdrücke, die
                </p>
                <ul class="reduced-bottom-margin">
                  <li>sich auf Menschen beziehen.</li>
                  <li>von Ihnen ohne den Zusammenhang zu beachten als negativ / beleidigend / verletzend / diskriminierend klassifiziert werden.</li>
                  <li>einen Bezug zum Geschlecht oder der sexuellen Orientierung des Menschen haben.</li>
                </ul>
                <p class="reduced-bottom-margin">
                  <b>Beispiele:</b>
                </p>
                <p class="reduced-bottom-margin">
                  Geschlechtsspezifisch:
                </p>
                <ul class="reduced-bottom-margin">
                  <li><b><i>Schwanz: </i></b>Kann nur für einen Mann verwendet werden.</li>
                  <li><b><i>Weib: </i></b>Kann nur für Frauen verwendet werden.</li>
                  <li><b><i>Homo: </i></b>Hat einen direkten Bezug zur sexuellen Orientierung.</li>
                </ul>
                <p class="reduced-bottom-margin">
                  <b>Nicht</b> geschlechtsspezifisch:
                </p>
                <ul class="reduced-bottom-margin">
                  <li><b><i>Arschloch: </i></b>Ist bei allen Geschlechtern gleich.</li>
                  <li><b><i>Idiot, Trottel, Sauhund: </i></b>Hat keinen Bezug zum Geschlecht oder der sexuellen Ausrichtung.</li>
                </ul>
              </template>
            </expandable>
            <expandable>
              <template slot="header">Wie gehe ich genau vor?</template>
              <template slot="content">
                <p class="reduced-bottom-margin">
                  In einem ersten Schritt geht es darum, Text-Teile auszuwählen, die als geschlechtsspezifische Hass-Ausdrücke erkennbar sind. Dabei spielt es keine Rolle, ob diese abwertend oder nicht abwertend gemeint sind, sie sollen in einem ersten Schritt nur identifiziert werden. Dazu wird im grünen Feld links mit dem Titel <i>1. Identifizieren</i> von geschlechtsspezifischen Hass-Ausdrücken der ganze Ausdruck, den Sie identifiziert haben, mit der Maus angewählt. Wenn Sie jetzt auf den Knopf <i>hinzufügen</i> klicken, wird alles, was Sie angewählt haben, unterhalb des Titels <i>2. Klassifikation</i> aufgelistet. Führen Sie diesen Schritt bitte so oft aus, bis alle geschlechtsspezifischen Hass-Ausdrücke in der dargestellten Nachricht in der Tabelle stehen. Fehler sind kein Problem: Ausdrücke in der Tabelle können mit einem Klick auf das <i>X</i> jederzeit wieder entfernt werden.
                </p>
                <p class="reduced-bottom-margin">
                  In einem weiteren Schritt bitten wir Sie, die von Ihnen ausgewählten Ausdrücke in Bezug auf drei Kategorien zu beschreiben. Bei diesen Beurteilungen geht es uns darum, in einer späteren Auswertung analysieren zu können, wie eine Person beleidigt wird und wer beleidigt wird. Entsprechend bezieht sich die erste Kategorie auf das Wie, also auf die Wortherkunft des Hass-Ausdrucks, die zwei anderen Kategorien sollen aufzeigen, auf Grund welcher Eigenschaften eine Person mutmasslich beleidigt wird. Für diese Beurteilung benötigen wir die beiden Kategorien Geschlecht und sexuelle Ausrichtung.
                </p>
                <p class="reduced-bottom-margin">
                  Optionen für die Wortherkunft:
                </p>
                <ul class="reduced-bottom-margin">
                  <li>
                    Anatomie (Körperteile, z.B. <i>Schwanz</i>)
                  </li>
                  <li>
                    Tätigkeiten (z.B. <i>Hure</i>, <i>Wichser</i>)
                  </li>
                  <li>
                    Die Geschlechtszugehörigkeit, wenn also auf die Person gezielt wird (z.B. <i>Weib</i>)
                  </li>
                  <li>
                    Die sexuelle Ausrichtung, auch hier wird auf die Person gezielt (z.B. <i>Homo</i>, wenn es abwertend gebraucht wird)
                  </li>
                  <li>
                    Andere: Wenn keine dieser Optionen passt, wählen Sie bitte Andere an.
                  </li>
                </ul>
                <p class="reduced-bottom-margin">
                  Optionen für das Geschlecht der beleidigten Person:
                </p>
                <p class="reduced-bottom-margin">
                  Bitte beachten Sie, dass das Geschlecht wirklich aus dem Zusammenhang des Textes erkennbar sein muss und nicht erraten oder erahnt werden darf.
                </p>
                <ul class="reduced-bottom-margin">
                  <li>
                    Mann
                  </li>
                  <li>
                    Frau
                  </li>
                  <li>
                    Divers: Die Bezeichnung Divers wird in Deutschland für Menschen verwendet, die sich den Geschlechtern Mann und Frau nicht zuordnen.
                  </li>
                  <li>
                    Unbekannt: Oft ist das Geschlecht im Zusammenhang des Textes nicht erkennbar. Wählen Sie in dem Fall bitte die Option Unbekannt.
                  </li>
                </ul>
                <p class="reduced-bottom-margin">
                  Optionen für die sexuelle Ausrichtung:
                </p>
                <p class="reduced-bottom-margin">
                  Erneut ist es wichtig, dass diese Orientierung tatsächlich aus dem Text hervorgeht.
                </p>
                <ul class="reduced-bottom-margin">
                  <li>
                    Heterosexuell
                  </li>
                  <li>
                    Homosexuell
                  </li>
                  <li>
                    Bisexuell
                  </li>
                  <li>
                    Asexuell
                  </li>
                  <li>
                    Unklar: Aus dem Zusammenhang des Textes ist die sexuelle Orientierung nicht erkennbar.
                  </li>
                </ul>
                <p class="reduced-bottom-margin">
                  Wenn Sie alles auf dieser Seite korrekt ausgewählt und kategorisiert haben, können Sie Ihre Angaben mit <i>antworten</i> speichern und zur nächsten Nachricht gelangen.
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">Welchen Teil des Textes muss ich auswählen?</template>
              <template slot="content">
                <p class="reduced-bottom-margin">
                  Wir interessieren uns für Ausdrücke, in denen eine Person wegen ihres Geschlechts oder ihrer sexuellen Ausrichtung angefeindet wird. Diese Ausdrücke bestehen häufig aus mehr als einem Wort, also z.B. einem Artikelwort (<i>der</i>, <i>die</i>, <i>das</i>, <i>ein</i>, <i>eine</i>, <i>dieser</i>, <i>diese</i>, etc.), einem Nomen (<i>Mann</i>, <i>Frau</i>, <i>Typ</i>, <i>Kerl</i>, <i>Homo</i>, <i>Lesbe</i>, <i>Ekel</i>, etc.) und weiteren Wörtern dazwischen (<i>huere</i>, <i>netter</i>, <i>blöde</i>, <i>gut ausgebildete</i>). Das ergibt dann z.B.: 1. <i>Der doofe Schwanz</i>, 2. <i>Der gut ausgebildete Homo</i>, 3. <i>Lesbe</i>. Ausgewählt werden sollte bitte jeweils der ganzen Ausdruck, also alles zwischen dem Artikelwort und dem Nomen, wobei der Artikel fehlen kann wie in Beispiel 3. Ebenso können zwischen dem Artikelwort und dem Nomen noch weitere Wörter stehen, die dann auch mit ausgewählt werden sollen.
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">Der Text ist gar nicht Deutsch!</template>
              <template slot="content">
                <p class="reduced-bottom-margin">
                  Unsere Datensammlung beinhaltet Texte in den drei grösseren Landessprachen. Wir haben menschliche und technologische Hilfe verwendet, um den einzelnen Nachrichten eine Haupt-Sprache zuzuordnen. In vielen Fällen funktioniert das gut, aber nicht immer. Wenn der angezeigte Text nicht Deutsch ist, so können Sie uns das mit einem Klick auf <i>Text ist nicht Deutsch</i> mitteilen und sich einen nächsten Text anzeigen lassen. Bedenken Sie dabei aber, dass wir die Bezeichnung Deutsch wesentlich grosszügiger beurteilen, als dies vielleicht eine Primarlehrperson tun würde. Unter Deutsch verstehen wir auch Nachrichten mit vielen Schreib- und Tippfehlern sowie Schweizerdeutsche Nachrichten, also nicht nur das Hochdeutsch, das Sie in der Schule gelernt haben. Lesen Sie den Text also bitte genau durch, manche Dialekte sind nicht auf Anhieb als Deutsch zu erkennen. Tipp: Versuchen Sie im Zweifel, den Text laut zu lesen. So können Sie unter Umständen erkennen, ob etwas dialektal ist und nicht etwa eine Fremdsprache.
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">Was passiert, wenn wir alle Texte bearbeitet haben?</template>
              <template slot="content">
                <p class="reduced-bottom-margin">
                  Wir möchten in diesem ersten Schritt zunächst alle geschlechtsspezifischen Hass-Ausdrücke identifizieren. Das geht am einfachsten, wenn wir Ihnen immer nur eine Nachricht nach der anderen zeigen. Im nächsten Schritt wird es darum gehen, die gefundenen Ausdrücke zu klassifizieren, also zu bestimmen, ob sie wirklich abwertend gebraucht werden oder ob sie sogar freundschaftlich gemeint sind. Um dies bestimmen zu können, muss die Nachricht im Zusammenhang mit der vorhergehenden und der nachfolgenden Nachricht gesehen werden. Wir werden also im zweiten Schritt auch die vorangehende und die folgende Nachricht zeigen und Sie fragen, wie Sie den Ausdruck klassifizieren. Wir würden uns freuen, wenn Sie auch an diesem Schritt mitarbeiten würden.
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">Ihr sprecht immer von Chats, Nachrichten und Ausdrücken, was ist das genau?</template>
              <template slot="content">
                <p class="reduced-bottom-margin">
                  Wenn Sie mit jemandem per WhatsApp chatten, dann entsteht ein ganzer Dialog, in dem mal Sie und mal die andere(n) Person(en) etwas schreiben. Dieser Dialog zieht sich oft über ganze Jahre hin und wird von uns als Chat bezeichnet. In diesem Chat gibt es Sprechblasen, die Sie geschrieben haben und solche, die jemand anders geschrieben hat. Jede einzelne Sprechblase bezeichnen wir als Nachricht. Der Ausdruck schliesslich hat eigentlich nichts mit WhatsApp zu tun, sondern ist das, was wir suchen, nämlich den Teil einer Nachricht, in dem geschlechtsspezifischer Hass ausgedrückt wird.
                </p>
              </template>
            </expandable>
          </div>

        </div>
      </div>
    </app-content-section>


    <section-feedback></section-feedback>


    <section-newsletter-signup></section-newsletter-signup>

    <app-footer></app-footer>

    <step-wizard ref="wizard">

      <step-wizard-step>
        <template slot="title">Was sind geschlechtsspezifische Hass-Ausdrücke?</template>
        <content-section slot="content">
          <div class="content-wrapper">
            <div class="row row-wrapping">
              <div class="col col-large-6 col-wrapping">

                <div class="reduced-bottom-margin">
                  <img src="/img/graphic-gender.png" style="width:25%" />
                </div>

                <p class="reduced-bottom-margin">
                  Geschlechtsspezifische Hass-Ausdrücke sind Ausdrücke, die
                </p>
                <ul>
                  <li>sich auf Menschen beziehen.</li>
                  <li>von Ihnen ohne den Zusammenhang zu beachten als negativ / beleidigend / verletzend / diskriminierend klassifiziert werden.</li>
                  <li>einen Bezug zum Geschlecht oder der sexuellen Orientierung des Menschen haben.</li>
                </ul>

              </div>
              <div class="col col-large-6 col-wrapping">

                <p class="reduced-bottom-margin">
                  <b>Beispiele:</b>
                </p>
                <p class="reduced-bottom-margin">
                  Geschlechtsspezifisch:
                </p>
                <ul>
                  <li><b><i>Schwanz: </i></b>Kann nur für einen Mann verwendet werden.</li>
                  <li><b><i>Weib: </i></b>Kann nur für Frauen verwendet werden.</li>
                  <li><b><i>Homo: </i></b>Hat einen direkten Bezug zur sexuellen Orientierung.</li>
                </ul>
                <p class="reduced-bottom-margin">
                  <b>Nicht</b> geschlechtsspezifisch:
                </p>
                <ul>
                  <li><b><i>Arschloch: </i></b>Ist bei allen Geschlechtern gleich.</li>
                  <li><b><i>Idiot, Trottel, Sauhund: </i></b>Hat keinen Bezug zum Geschlecht oder der sexuellen Ausrichtung.</li>
                </ul>

              </div>
            </div>
          </div>
        </content-section>
      </step-wizard-step>

      <step-wizard-step>
        <template slot="title">Selektion von Ausdrücken</template>
        <content-section slot="content">
          <div class="content-wrapper">
            <div class="row row-wrapping">
              <div class="col col-large-6 col-wrapping">

                <div class="reduced-bottom-margin">
                  <img src="/img/graphic-selection.png" style="width:25%" />
                </div>

                <p class="reduced-bottom-margin">
                  Wählen Sie mit Ihrer Maus Text-Teile aus, die als geschlechtsspezifische Hass-Ausdrücke erkennbar sind.
                </p>
                <ul>
                  <li><b>Es spielt keine Rolle, ob die Ausdrücke abwertend oder nicht abwertend gemeint sind.</b></li>
                  <li><b>Es gibt viele Mitteilungen, in denen KEINE Hassausdrücke vorkommen. Setzen Sie dann bitte ein Häkchen bei <i>keine Hassausdrücke gefunden</i></b></li>
                </ul>

              </div>
              <div class="col col-large-6 col-wrapping">
                <p class="reduced-bottom-margin">
                  <b>Ausdrücke bestehen häufig aus mehr als einem Wort</b>, also z.B. einem Artikelwort (<i>der</i>, <i>die</i>, <i>das</i>, <i>ein</i>, <i>eine</i>, <i>dieser</i>, <i>diese</i>, etc.), einem Nomen (<i>Mann</i>, <i>Frau</i>, <i>Typ</i>, <i>Kerl</i>, <i>Homo</i>, <i>Lesbe</i>, <i>Ekel</i>, etc.) und weiteren Wörtern dazwischen (<i>huere</i>, <i>netter</i>, <i>blöde</i>, <i>gut ausgebildete</i>).<br>
                </p>
                <p class="reduced-bottom-margin">
                  <b>Ausgewählt werden sollte bitte jeweils der ganze Ausdruck.</b>
                </p>
                <p class="reduced-bottom-margin">
                  <b>Beispiele:</b>
                </p>
                <ul>
                  <li><b><i>Der doofe Schwanz</i></b></li>
                  <li><b><i>Der gut ausgebildete Homo</i></b></li>
                  <li><b><i>Lesbe</i></b></li>
                </ul>

              </div>
            </div>
          </div>
        </content-section>
      </step-wizard-step>

      <step-wizard-step>
        <template slot="title">Kategorisierung</template>
        <content-section slot="content">
          <div class="content-wrapper">
            <div class="row row-wrapping">
              <div class="col col-large-6 col-wrapping">

                <div class="reduced-bottom-margin">
                  <img src="/img/graphic-category.png" style="width:25%" />
                </div>

                <p class="reduced-bottom-margin">
                  Weiter bitten wir Sie, die von Ihnen ausgewählten Ausdrücke in Bezug auf <b>drei Kategorien</b> zu beschreiben.
                </p>
                <p class="reduced-bottom-margin">
                  <b>Wortherkunft</b>
                </p>
                <ul>
                  <li><b>Anatomie </b>(Körperteile, z.B. <i>Schwanz</i>)</li>
                  <li><b>Geschlechtszugehörigkeit </b>(z.B. <i>Weib</i>)</li>
                  <li><b>Sexuelle Ausrichtung </b>(z.B. <i>Homo</i>)</li>
                  <li><b>Andere </b>(wenn keine dieser Optionen passt)</li>
                </ul>

              </div>
              <div class="col col-large-6 col-wrapping">

                <p class="reduced-bottom-margin">
                  <b>Geschlecht </b>(der/des Adressaten/in):
                </p>
                <ul>
                  <li><b>Mann</b></li>
                  <li><b>Frau</b></li>
                  <li><b>Divers </b>(für Menschen, die sich den Geschlechtern Mann und Frau nicht zuordnen)</li>
                  <li><b>Unbekannt </b>(nicht erkennbar)</li>
                </ul>
                <p class="reduced-bottom-margin">
                  <b>Sexuelle Ausrichtung </b>(der/des Adressaten/in):
                </p>
                <ul>
                  <li><b>Heterosexuell</b></li>
                  <li><b>Homosexuell</b></li>
                  <li><b>Bisexuell</b></li>
                  <li><b>Asexuell</b></li>
                </ul>

              </div>
            </div>
          </div>
        </content-section>
      </step-wizard-step>

    </step-wizard>



  </div>
</template>

<script>

import {mapState} from 'vuex'

import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import Expandable from "@/components/shared/Expandable";
import StepWizard from "@/components/shared/StepWizard";
import StepWizardStep from "@/components/shared/StepWizardStep";
import ContentSection from "@/components/shared/ContentSection";
import InlineHover from "@/components/shared/InlineHover";
import SectionFeedback from "../components/shared/SectionFeedback";
import Loader from "../components/shared/Loader";


export default {
  name: 'Home',
  components: {
      Loader,
      SectionFeedback,
      InlineHover,
      ContentSection,
      StepWizardStep,
      StepWizard,
      Expandable,
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
  data() {
      return {
          selection: null,
          selections: [],
          wrongLanguage: false,
          noHateSpeech: false,
          complete: false,

          taskId: undefined,
          hasSubmissionAlready: false,

          taskLoaded: false,
          loadTryCounter: 0
      }
  },
  computed: {
      ...mapState({
          language: state => state.settings.language,

          currentUser: state => state.c3s.user.currentUser,
          activityId: state => state.consts.identificationActivity,

          tasks: state => state.c3s.task.tasks,

          totalTaskCount: state => state.stats.totalTaskCount,
          mySubmissionCount: state => state.stats.mySubmissionCount
      }),
      bubbleText() {
          if( this.tasks[0] && this.tasks[0].content.text ) {
              let trimmed = this.tasks[0].content.text.replace(/<br\/><br\/>/g, '<br/>');
              return trimmed;
          }
          else {
              return '';
          }
      },
      answer() {
          if( this.noHateSpeech ) {
              return {"info": "no hate speech"};
          }
          else if( this.wrongLanguage ) {
              return {"info": "wrong language"};
          }
          else {
              return {"selections": this.selections};
          }
      }
    },
  mounted() {
      let self = this;
      document.addEventListener('selectionchange', function(event) {
         //console.log('selection change');
         //console.log( event.target );
          if( window.getSelection().toString().trim() !== '' ) {
            self.selection = window.getSelection().toString();
          }
      });

      this.$store.dispatch('stats/updateTotalTaskCount');
      this.$store.dispatch('stats/updateTotalUserAndSubmissionCount');
      this.$store.dispatch('stats/updateMySubmissionCount');

      this.$store.dispatch("c3s/project/getProject", this.activityId).then(proj => {

          // load task with or without id
          if( this.$route.params.id ) {
              if( this.$route.params.id.length !== 36 ) {
                  //console.log('invalid id');
                  delete this.$route.params.id;
                  this.$router.replace('/identification');
                  this.taskId = null;
                  this.loadTask();
              } else {
                  //console.log('load task from id');
                  this.taskId = this.$route.params.id;
                  this.loadTask();
              }
          } else {
              this.taskId = null;
              //console.log('load without id');
              this.loadTask();
          }

      });

  },
  methods: {
      loadTask() {

          this.taskLoaded = false;

          this.selection = null;
          this.selections = [];
          this.noHateSpeech = false;
          this.wrongLanguage = false;

          let taskQuery;
          if( !this.taskId ) {
            this.$store.dispatch('c3s/project/getProjectTask', {pid: this.activityId, random: false, index: 0}).then(t => this.showTask(t))    
          }
          else {
            this.$store.dispatch('c3s/task/getTask', this.taskId).then(t => this.showTask(t))    

          }

      },
      showTask(tasks) {
        console.dir(tasks)
        this.$store.commit('c3s/task/SET_TASKS', tasks.body.data)
        if ( this.tasks[0] ) {
          console.log( 'task loaded');
          if( navigator.userAgent !== 'ReactSnap' ) {
              this.$router.replace('/identification/' + this.tasks[0].id);
          }
          this.taskLoaded = true;
          this.loadTryCounter = 0;
          this.taskId = undefined;

        } else {
          console.log('load failed');
          if( this.loadTryCounter < 5 ) {
              this.loadTryCounter++;
              console.log('try again');
              this.loadTask();
          } else {
              console.log('failed to load 5 times');
              this.loadTryCounter = 0;
              this.$router.push('/');
          }
        }
      },
      next() {
          console.log('next');

          this.loadTask();
      },
      submit() {
          console.log('submit');
          console.log( this.answer );

          let submissionObject = {
              "info": {},
              "content": this.answer,
              "task_id": this.tasks[0].id,
              "user_id": this.currentUser.id,
              "draft": false
          };

          console.log( submissionObject );

          this.$store.commit('c3s/submission/SET_SUBMISSION', submissionObject );

          this.$store.dispatch('c3s/submission/createSubmission').then(submission => {

              console.log('submission sent');

              //this.$store.dispatch('stats/increaseMySubmissionCount');
              this.$store.dispatch('stats/updateMySubmissionCount');
              this.$store.dispatch('stats/updateTotalUserAndSubmissionCount');

              this.loadTask();

          });
      },
      select() {
        this.selections.push( { 'string': this.selection, 'origin': undefined, 'gender': undefined, 'sex': undefined } );
        window.getSelection().removeAllRanges();
        this.selection = null;
        this.checkComplete();
      },
      openWizard() {
          this.$refs.wizard.openWizard();
      },
      checkComplete() {
          console.log('check complete');
          let complete = true;
          for( let i = 0; i < this.selections.length; i++ ) {
              if( !this.selections[i].origin || !this.selections[i].gender || !this.selections[i].sex ) {
                  complete = false;
              }
          }
          if( complete && this.selections.length > 0 ) {
              this.complete = true;
          }
          else {
              this.complete = false;
          }
      }
  }
}

</script>

<style lang="scss">

  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';

  .identification-page * {
    user-select: none;
  }

  .identification {

    .disabled {
      opacity: 0.25;
      pointer-events: none;
      transition: opacity $transition-duration-short $transition-timing-function;
    }

    .speech-bubble {
      user-select: text;
      background-color: #DCF8C6;
      color: $color-primary;
      padding: $spacing-1 $spacing-2;
      font-size: $font-size-medium;
      font-weight: 700;
      line-height: 1.4;
      outline: none;
      position: relative;
      border-radius: $border-radius;
      border-top-left-radius: 0;

      //box-shadow: 0px 2px 8px -4px rgba($color-black, 1);
      filter: drop-shadow( 0px 2px 2px rgba($color-primary-shade-40, 0.4));

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: -16px;
        width: 0;
        height: 0;
        border-top: 16px solid $color-whatsapp-message;
        border-left:  16px solid transparent;
      }

      &::selection {
        color: white;
        background-color: $color-primary;
      }

      &:active {
        color: $color-primary-shade-20;
      }
      @media (hover: hover) {
        &:hover {
          color: $color-primary-shade-20;
        }
      }
    }

    .loader-wrapper {
      height: 48px;
    }

    .add-button-group {
      margin-bottom: $spacing-1;
    }

    .form-field.form-field-language-checkbox {
      .options {
        display: inline-block;
        margin: 0;
      }
    }


    .no-items {
      color: $color-black-tint-50;
    }
    .item {

      border-radius: $border-radius;
      margin-top: $spacing-2;
      position: relative;
      box-shadow: 0px 2px 12px -4px rgba($color-black, 0.2);

      &:first-child {
        margin-top: 0;
      }

      .string {
        font-weight: 700;
        color: $color-primary-shade-20;
        padding: calc( ( 56px - 1rem * 1.5 ) / 2 ) $spacing-2;
      }
      .button {
        position: absolute;
        top: 0;
        right: 0;
      }

      .categories {
        padding: $spacing-1;
        padding-top: 0;
        padding-bottom: $spacing-2;
        .category {
          background-color: white;
          display: flex;
          flex-direction: row;
          padding: $spacing-1;
          align-items: center;

          &:first-child {
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
          }
          &:last-child {
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
          }

          label {
            flex: 1;
            width: 50%;
          }
          .form-field {
            flex: 1;
            margin-bottom: 0;
          }
          .inline-hover {
            margin-left: $spacing-1;
          }
        }
      }
    }

    .no-item-fade-enter-active {
      transition: all $transition-duration-long $transition-timing-function;
      transition-delay: $transition-duration-long;
      position: absolute;
      opacity: 0;
    }
    .no-item-fade-enter-to {
      opacity: 1;
    }
    .no-item-fade-leave-active {
      transition: all $transition-duration-long $transition-timing-function;
      position: absolute;
    }
    .no-item-fade-leave-to {
      opacity: 0;
    }

    .item-fade-enter-active {
      transition: all $transition-duration-long $transition-timing-function;
      //transition-delay: $transition-duration-long;
      transform: translateY( -$spacing-2 );
      opacity: 0;
    }
    .item-fade-enter-to {
      transform: translateY( 0 );
      opacity: 1;
    }
    .item-fade-leave-active {
      transition: all $transition-duration-long $transition-timing-function;
      opacity: 1;
    }
    .item-fade-leave-to {
      transform: translateY( -$spacing-2 );
      opacity: 0;
    }


    /*
    .no-item-fade-enter-active, .no-item-fade-leave-active {
      transition: opacity $transition-duration-long $transition-timing-function;
    }
    .no-item-fade-enter, .no-item-fade-leave-to {
      opacity: 0;
    }
    .item-fade-enter-active, .item-fade-leave-active {
      transition: all $transition-duration-long $transition-timing-function;
    }
    .item-fade-enter, .item-fade-leave-to {
      opacity: 0;
      transform: translateY( - $spacing-2 );
    }
    */

    .progress {
      font-size: 0;
      text-align: right;
      .progress-bar {
        height: 40px;
        width: 48px;
        padding-top: calc( 40px / 2 - #{$spacing-1} / 2 );
        margin-right: $spacing-2;
        display: inline-block;
        .progress-bar-back {
          width: 100%;
          height: $spacing-1;
          border-radius: $border-radius;
          overflow: hidden;
          background-color: $color-secondary-tint-90;
          .progress-bar-fill {
            height: 100%;
            width: 50%;
            background-color: $color-secondary;
            transition: width $transition-duration-long $transition-timing-function;
          }
        }
      }
      .text {
        display: block;
        float: right;
        line-height: 40px;
        font-size: $font-size-small;
      }
    }

  }

  @media only screen and (min-width: $viewport-tablet-portrait) {

    .identification {

      .speech-bubble {
        &:after {
          left: -24px;
          border-top-width: 24px;
          border-left-width: 24px;
        }
      }

      .item {
        .string {
          padding: calc( ( 64px - 1rem * 1.5 ) / 2 ) $spacing-2;
        }
      }

      .progress {
        .progress-bar {
          height: 48px;
          width: 64px;
          padding-top: calc( 48px / 2 - #{$spacing-1} / 2 );
          margin-right: $spacing-3;
        }
        .text {
          line-height: 48px;
        }
      }

    }

  }


  @media only screen and (min-width: $viewport-large) {

    .identification {

      .progress {
        text-align: left;
        .progress-bar {
          float: left;
        }
        .text {
          float: none;
        }
      }

    }

  }


</style>
