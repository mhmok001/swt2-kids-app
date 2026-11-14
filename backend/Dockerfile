FROM eclipse-temurin:24-jdk
WORKDIR /app
COPY target/backend.jar backend.jar
ENV SPRING_PROFILES_ACTIVE=docker
ENTRYPOINT ["java", "-jar", "backend.jar"]
