# SWT2_Kids_APP
Projekt Repository für den Kurs Softwaretechnik 2

# TODO
Beschreibung des Projekts

## Team
Teamleiter: 
- Yannik Koßmann

Mitglieder:
- Leonard
- Andreas Rudi
- Lorenz
- Cederic Tala Temi
- Mhamed Mokhtar
- Timo


## Extentions für VSCode
-   Spring Boot Extension Pack
-   Extension Pack for Java
-   Maven for Java
-   Debugger for Java
-   Dev Container


## Nützliche Extensions
- Docker
- Git History

## Vorraussetzungen

Java Version 24
https://www.oracle.com/de/java/technologies/downloads/#jdk24-windows

> [!Wichtig]
> Über prüft die $JAVAHOME Umgebungvariable eures Betriebsystems.
> Diese muss auch Java 24 sein.

Node.js
https://nodejs.org/de/download/

Maven
https://maven.apache.org/install.html

1. Apache Maven Download-Seite öffnen

2. ZIP-Datei von "Binary zip archive" herunterladen

3. ZIP entpacken z. B. nach C:\Programme\Apache\Maven

4. Dann Umgebungsvariablen setzen:

5. Systemsteuerung → System → Erweiterte Systemeinstellungen → Umgebungsvariablen

6. MAVEN_HOME auf z. B. C:\Programme\Apache\Maven\apache-maven-3.x.x

7. PATH erweitern mit: %MAVEN_HOME%\bin

8. VSCode neu starten, dann testen in einem neuen Terminal: 'mvn -v'

## Projekt bereitmachen für Ausführung
    Docker ist gestartet.
    > [Wichtig!]
    > mariadb im docker-compose.yml einmal ausführen um die DB gestartet für die Backend Tests mit Flyway.
     
    Terminal öffnen und mit:

    ```bash,ignore
    #Kommand: 
    $ mvn clean install
    ```

    Jetzt sollte 1 Dockercontainer mit 5 Instanzen gestartet sein.
    Über den Frontend Port kann auf das Frontend via Browser zugegriffen werden.

## Spring Boot Informationen 
    https://spring.io/guides/gs/spring-boot

