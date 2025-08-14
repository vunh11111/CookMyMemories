# ======================
# 1. Build Stage
# ======================
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY backend/pom.xml .
COPY backend/src ./src
RUN mvn clean package -DskipTests

# ======================
# 2. Run Stage
# ======================
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Render sẽ set biến PORT
EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
