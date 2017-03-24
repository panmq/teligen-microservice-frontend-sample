FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD teligen-microservice-frontend-sample.jar teligen-microservice-frontend-sample.jar
RUN sh -c 'touch /teligen-microservice-frontend-sample.jar'
ENV JAVA_OPTS=""
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar /teligen-microservice-frontend-sample.jar"]