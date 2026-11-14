FROM eclipse-temurin:24-jdk
WORKDIR /app
COPY target/stadt_backend.jar stadt_backend.jar
ENV SPRING_PROFILES_ACTIVE=docker
ENTRYPOINT ["java", "-jar", "stadt_backend.jar"]
