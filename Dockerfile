# Multi-stage build để tách riêng build và runtime
# Stage 1: Build stage
FROM openjdk:21-jdk-slim as builder

# Cài đặt Maven
RUN apt-get update && apt-get install -y maven && rm -rf /var/lib/apt/lists/*

# Thiết lập working directory
WORKDIR /app

# Copy toàn bộ backend folder
COPY backend/ .

# Verify Java version
RUN java -version
RUN mvn -version

# Clean và build project
RUN mvn clean compile -B
RUN mvn package -DskipTests -B

# Stage 2: Runtime stage
FROM openjdk:21-jre-slim

WORKDIR /app

# Copy jar file từ build stage
COPY --from=builder /app/target/ingredient-api-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8080

# Chạy ứng dụng
CMD ["java", "-jar", "app.jar"]
