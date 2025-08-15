# Stage 1: Build - Use latest Maven with OpenJDK
FROM maven:3.9-eclipse-temurin-21 as build
# Thiết lập working directory
WORKDIR /app
# Copy toàn bộ backend project
COPY backend/ .
# Build ứng dụng
RUN mvn clean package -DskipTests

# Stage 2: Runtime
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
# Copy jar file từ build stage
COPY --from=build /app/target/ingredient-api-0.0.1-SNAPSHOT.jar app.jar
# Expose port
EXPOSE 8080
# Run the application
CMD ["java", "-jar", "app.jar"]
