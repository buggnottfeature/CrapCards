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

## Spielablauf

- Vier Namen direkt in den Punktetafeln eintragen.
- „Erste Runde aufdecken“ zieht je eine Karte aus fünf getrennten Stapeln.
- 20 Sekunden Vorbereitung, danach automatischer Start. „Zeit starten“ beginnt früher.
- Vor Beginn optional „Ja“ beim Kartentausch wählen und genau eine Karte anklicken. Kein Tausch gibt 2 Bonuspunkte. „Nein“ bestätigt den Verzicht. Das Weiterlaufen der Vorbereitung wird dadurch nicht unterbrochen.
- 30 bis 60 Sekunden sprechen. Nach 30 Sekunden dreht sich die Sanduhr und ein Signal ertönt. Ab dann kann „Vortrag beenden“ gedrückt werden; nach 60 Sekunden endet die Vortragszeit automatisch.
- Erwähnte Karten anklicken: Sie drehen sich um. Erneut anklicken korrigiert die Auswahl. Jede Karte zählt 1 Punkt. Der Bonus ohne Tausch gilt auch bei null erwähnten Karten.
- Mit „Punkte bestätigen“ werden die Punkte genau einmal gutgeschrieben. Dann „Nächster Spieler“ wählen.
- Mindestens 60 Punkte beenden das Spiel sofort nach der bestätigten Wertung. „Beenden“ zeigt vorher eine Bestätigung. Eine laufende, noch unbestätigte Runde zählt beim Beenden nicht.
- Der Auswertungsscreen zeigt alle vier Teilnehmenden nach Punkten sortiert. Gleichstände teilen denselben Rang.

Timer arbeiten mit Zeitstempeln und laufen nach einem Wechsel in einen anderen Tab oder einem Neuladen weiter. Die Zeit wird nicht angehalten, wenn die Regeln geöffnet werden. Ton kann ausgeschaltet werden; manche Browser erlauben Signaltöne erst nach einer Interaktion mit der Seite.

## Inhalt

Stapel 1: 38 Aufmacher. Stapel 2: 43 Bilder. Stapel 3: 77 Adjektive und Störbegriffe. Stapel 4: 78 Schlagwörter. Stapel 5: 38 Bilder. Insgesamt 274 Karten.

`data.js` enthält die Kartenlisten. `game-core.js` enthält die Spiellogik. `app.js` steuert die Oberfläche. `style.css` enthält das Design. `assets/logo.svg` ist das weiße, transparente Vektorlogo mit den nachgezeichneten Originalkonturen. Der Holz-Hintergrund ist eine separate Datei; alle Spielkarten und Bedienelemente sind echte interaktive Elemente.

## Bildrechte

Die 13 neu recherchierten Motive haben Quellen und Lizenzangaben in `bildnachweise.html` und den beiden `BILDNACHWEISE`-Dateien. Die Angaben bei einer Veröffentlichung erhalten. Die entsprechenden CC-BY-SA-Lizenzen gelten auch für die bearbeiteten Karten. Die Karte „Haare im Abfluss“ ist laut Anbieter KI-generiert.

Die 68 aus dem gelieferten Archiv übernommenen Karten hatten keine vollständigen Bildnachweise. Deren Veröffentlichungsrechte sind noch nicht geprüft. Vor einer öffentlichen Veröffentlichung müssen die Rechte geklärt oder diese Bilder ersetzt werden. Der technische Upload ist davon unabhängig vorbereitet.

## Prüfung

Syntax und Spiellogik wurden geprüft: Tauschlimit, Vorbereitung, 30/60 Sekunden, Bonus, einmalige Wertung, Spielerwechsel, Nachmischen, 60-Punkte-Grenze und Wiederherstellung. Der Browser-Vorschaudienst war während der Erstellung nicht verfügbar. Ein visueller Browser-Test konnte deshalb nicht durchgeführt werden.
