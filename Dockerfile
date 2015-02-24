############################################################
# Dockerfile to build spring boot app container images
# Based on maven
############################################################

FROM maven:3-jdk-8

ADD pom.xml /app/

ADD src/ /app/src/

WORKDIR /app/

RUN mvn package --fail-never

EXPOSE  8080 8081 8082 8083 8084

RUN java -version
RUN javac -version

CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","target/span-employee-1.1.5.RELEASE.jar"]
