# Crap Cards

Ein lokales Party-Kartenspiel für vier Menschen an einem Bildschirm. Ohne Startscreen, Anmeldung, Backend oder Installation. Kein Online-Mehrspielermodus: Ihr spielt zusammen vor einem Gerät. Desktop ist die Hauptansicht; auf kleineren Bildschirmen wird die Spielfläche angepasst.

## Auf GitHub veröffentlichen

1. Dieses ZIP entpacken.
2. Ein GitHub-Repository anlegen, zum Beispiel `crap-cards`.
3. Den gesamten Inhalt dieses Ordners ins Repository hochladen. `index.html` muss direkt im Hauptverzeichnis liegen, nicht in einem zusätzlichen Unterordner. Auch den Ordner `assets` vollständig hochladen.
4. Im Repository **Settings → Pages** öffnen.
5. Unter **Build and deployment** die Quelle **Deploy from a branch** auswählen. Branch **main**, Ordner **/(root)** wählen und speichern.
6. Nach der Veröffentlichung zeigt GitHub dort die Spieladresse. Diese Adresse mit Freunden teilen.

Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Es ist kein Build erforderlich. `.nojekyll` ist enthalten. Alle Pfade sind relativ und funktionieren auch unter einem GitHub-Repository-Unterpfad. Wer die Dateien per Drag-and-drop hochlädt, sollte versteckte Dateien mit auswählen; das Spiel benötigt keinen Jekyll-Build und läuft auch ohne externe Pakete.

Zum lokalen Spielen kann `index.html` direkt geöffnet werden. Manche Browser schränken die Speicherung bei lokal geöffneten Dateien ein. Über GitHub Pages wird der Spielstand im lokalen Browser gespeichert. „Neue Partie“ setzt die Punkte zurück und behält die Namen.

## Spielablauf (Version 2)

- Die erste Reihe für Spieler 1 ist sofort aufgedeckt. Vier Namen direkt in den Punktetafeln eintragen.
- Optional „Ja“ beim Kartentausch wählen und genau eine Karte anklicken. Kein Tausch gibt 2 Bonuspunkte. „Nein“ bestätigt den Verzicht.
- Die Vorbereitung zeigt 20 Sekunden an. Der Vortrag startet ausschließlich durch „Bereit?“, auch wenn die Vorbereitungsanzeige bereits auf null steht.
- Die Sanduhr läuft zweimal 30 Sekunden. Nach 30 Sekunden dreht sie sich und ein Signal ertönt. „Zeit stoppen“ ist jederzeit möglich; nach insgesamt 60 Sekunden stoppt sie automatisch.
- „Auswertung“ anklicken. Jetzt können erfolgreich erwähnte Karten markiert werden. Sie drehen sich um. Erneut anklicken korrigiert die Auswahl.
- „Punkte zählen“ schreibt die Wertung genau einmal gut. Jede Karte zählt 1 Punkt, ohne Tausch kommen 2 Bonuspunkte dazu, auch bei null erwähnten Karten.
- „Nächster Spieler“ deckt die nächste vollständige Reihe auf.
- Mindestens 60 Punkte beenden das Spiel nach der bestätigten Wertung. „Beenden“ fragt vorher nach. Eine laufende, noch unbestätigte Runde zählt nicht.
- Gleichstände teilen sich denselben Rang. Eine neue Partie behält die Namen.

Die gesamte Spielfläche verwendet die verfügbare Fensterhöhe. Das Hauptspielfeld scrollt nicht; Regeln und Abschlussrangliste können bei Bedarf intern scrollen. Das Logo sitzt auf Holz oberhalb der Karten. V2 verwendet einen eigenen Spielstand und beginnt einmalig mit einer frischen Partie. Die Uhr läuft bei Tabwechsel und Neuladen weiter. Browser-Cache-Versionen für CSS und JavaScript sind aktualisiert.

## Version 2 auf GitHub aktualisieren

Den ZIP-Inhalt entpacken und im bestehenden Repository die Dateien ersetzen. Wichtig sind index.html, style.css, app.js und game-core.js. Der assets-Ordner kann unverändert bleiben. Änderungen committen. Nach der erneuten Pages-Veröffentlichung die Spielseite mit Strg+Umschalt+R neu laden.

## Inhalt

Stapel 1: 38 Aufmacher. Stapel 2: 43 Bilder. Stapel 3: 77 Adjektive und Störbegriffe. Stapel 4: 78 Schlagwörter. Stapel 5: 38 Bilder. Insgesamt 274 Karten.

`data.js` enthält die Kartenlisten. `game-core.js` enthält die Spiellogik. `app.js` steuert die Oberfläche. `style.css` enthält das Design. `assets/logo.svg` ist das weiße, transparente Vektorlogo mit den nachgezeichneten Originalkonturen. Der Holz-Hintergrund ist eine separate Datei; alle Spielkarten und Bedienelemente sind echte interaktive Elemente.

## Bildrechte

Die 13 neu recherchierten Motive haben Quellen und Lizenzangaben in `bildnachweise.html` und den beiden `BILDNACHWEISE`-Dateien. Die Angaben bei einer Veröffentlichung erhalten. Die entsprechenden CC-BY-SA-Lizenzen gelten auch für die bearbeiteten Karten. Die Karte „Haare im Abfluss“ ist laut Anbieter KI-generiert.

Die 68 aus dem gelieferten Archiv übernommenen Karten hatten keine vollständigen Bildnachweise. Deren Veröffentlichungsrechte sind noch nicht geprüft. Vor einer öffentlichen Veröffentlichung müssen die Rechte geklärt oder diese Bilder ersetzt werden. Der technische Upload ist davon unabhängig vorbereitet.

## Prüfung

Syntax und Spiellogik wurden geprüft: Tauschlimit, Vorbereitung, 30/60 Sekunden, Bonus, einmalige Wertung, Spielerwechsel, Nachmischen, 60-Punkte-Grenze und Wiederherstellung. Der Browser-Vorschaudienst war während der Erstellung nicht verfügbar. Ein visueller Browser-Test konnte deshalb nicht durchgeführt werden.

## Version 3

Einheitlicher Bildrahmen durch Entfernen der eingebetteten Außenrahmen und Darstellung mit einem gemeinsamen CSS-Rahmen. Alle 81 Ausgangsbilder enthalten sichtbare Motive. Scheitert ein Bildabruf, wird automatisch ohne Tauschverbrauch eine andere Bildkarte gezogen; sind keine ladbaren Bilder mehr verfügbar, erscheint ein lesbares Motiv als Text. „Zeit stoppen“ ist sofort nach „Bereit?“ aktiv, ohne Mindestwartezeit.

Für dieses Update müssen auch alle Bilder unter assets/cards ersetzt werden. index.html, app.js, game-core.js und style.css ebenfalls ersetzen. Dateien auf GitHub unter denselben Namen und Pfaden überschreiben. Danach committen und nach dem Pages-Deployment mit Strg+Umschalt+R neu laden. V3 startet einmalig eine neue Partie.
