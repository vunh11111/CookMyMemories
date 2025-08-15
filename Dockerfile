# Sử dụng OpenJDK 21 làm base image
FROM openjdk:21-jdk-slim

# Thiết lập working directory
WORKDIR /app

# Copy Maven wrapper và pom.xml trước để tận dụng Docker layer caching
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Cấp quyền thực thi cho Maven wrapper
RUN chmod +x ./mvnw

# Download dependencies (sẽ được cache nếu pom.xml không thay đổi)
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src src

# Build ứng dụng
RUN ./mvnw clean package -DskipTests

# Expose port mà ứng dụng Spring Boot chạy
EXPOSE 8080

# Chạy ứng dụng
CMD ["java", "-jar", "target/ingredient-api-0.0.1-SNAPSHOT.jar"]
