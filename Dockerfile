# Sử dụng Maven official image để build
FROM maven:3.9-openjdk-21-slim as build

# Thiết lập working directory
WORKDIR /app

# Copy toàn bộ backend project
COPY backend/ .

# Build ứng dụng
RUN mvn clean package -DskipTests

# Stage 2: Runtime
FROM openjdk:21-jre-slim

WORKDIR /app

# Copy jar file từ build stage
COPY --from=build /app/target/ingredient-api-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
