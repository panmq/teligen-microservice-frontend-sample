The first page that will be loaded after running the application is - "index.html"

Running the Application -

$ mvn spring-boot:run
----

and go to a browser at http://localhost:8081


== Front End Assets

For the purpose of this sample, I am going to use http://alexo.github.io/wro4j/[wro4j], which is a Java-based tool chain for preprocessing and packaging front end assets. It can be used as a JIT (Just in Time) `Filter` in any Servlet application, but it also has good support for build tools like Maven and Eclipse. So I am going to build static resource files and bundle them in application JAR.

Refer to pom.xml for the dependency added as well as wro configuration

Wro4j is controlled from an XML configuration file that doesn't know about your build classpath, and only understand absolute file paths, so we have to create an absolute file location and insert it in `wro.xml`. For that purpose we use Maven resource filtering and that is why there is an explicit "maven-resources-plugin" declaration.

That's all of the changes we are going to need to the POM. It remains to add the wro4j build files, which we have specified are going to live in "src/main/wro".

=== Wro4j Source Files

There are only 3 files (and one of those is empty, ready for later customization):
* 'wro.properties` is a configuration file for the preprocessing and rendering engine in wro4j.
   You can use it to switch on and off various parts of the toolchain. In this case we use it to compile CSS from http://lesscss.org/[Less] and to minify JavaScript, ultimately combining the sources from all the libraries we need in two files.
* 'wro.xml` declares a single "group" of resources called "angular-bootstrap", and this ends up being the base name of the static resources that are generated. It includes references to `&lt;css&gt;` and `&lt;js&gt;` elements in the webjars we added, and also to a local source file `main.less`.
* `main.less` is empty in the sample code, but could be used to customise the look and feel, changing the default settings in Twitter Bootstrap. E.g. to change the colours from default blue to light pink you could add a single line:



