# Sử dụng OpenJDK 21 làm base image
FROM openjdk:21-jdk-slim

# Thiết lập working directory
WORKDIR /app

# Copy Maven wrapper và pom.xml từ thư mục backend
COPY backend/mvnw .
COPY backend/.mvn .mvn
COPY backend/pom.xml .

# Cấp quyền thực thi cho Maven wrapper
RUN chmod +x ./mvnw

# Download dependencies và compile (sẽ được cache nếu pom.xml không thay đổi)
RUN ./mvnw dependency:resolve dependency:resolve-sources -B

# Copy source code từ thư mục backend
COPY backend/src src

# Build ứng dụng với verbose output để debug
RUN ./mvnw clean compile -B -X
RUN ./mvnw package -DskipTests -B

# Expose port mà ứng dụng Spring Boot chạy
EXPOSE 8080

# Chạy ứng dụng
CMD ["java", "-jar", "target/ingredient-api-0.0.1-SNAPSHOT.jar"]
