############################################################
# Dockerfile to build spring boot app container images
# Based on maven
############################################################

FROM maven:3-jdk-8

ADD pom.xml /app/
RUN cd /app/ && mvn dependency:go-offline
ADD src/ /app/src/
WORKDIR /app/
RUN mvn package


# WORKDIR /app/
# ADD https://circle-artifacts.com/gh/ilan-g/docker-ws/16/artifacts/0/home/ubuntu/docker-ws/target/span-employee-1.1.5.RELEASE.jar target/span-employee-1.1.5.RELEASE.jar
# ADD span-employee-1.1.5.RELEASE.jar  target/span-employee-1.1.5.RELEASE.jar


EXPOSE  8080 8081 8082 8083 8084

RUN java -version
RUN javac -version


RUN pwd
RUN ls -lrt
CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","target/span-employee-1.1.5.RELEASE.jar"]

