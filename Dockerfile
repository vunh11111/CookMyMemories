FROM eclipse-temurin:21-jdk-alpine as build
RUN apk add --no-cache maven
WORKDIR /app
COPY demo/ .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
