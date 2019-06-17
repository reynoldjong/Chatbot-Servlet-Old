package utoronto.utsc.cs.cscc01.chatbot;

//import java.io.File;
//import javax.servlet.ServletException;
//import org.apache.catalina.LifecycleException;
//import org.apache.catalina.WebResourceRoot;
//import org.apache.catalina.core.StandardContext;
import org.apache.catalina.startup.Tomcat;
//import org.apache.catalina.webresources.DirResourceSet;
//import org.apache.catalina.webresources.StandardRoot;

public class TomcatServer implements WebServer {

  private static Tomcat tomcat = null;

  /*
   * This is the method used to start the tomcat server. We are using a
   * singleton design pattern here for our tomcat server since we only need one
   */
  public static Tomcat createTomcatServer() {
    if (tomcat == null) {
      tomcat = new Tomcat();
      tomcat.setBaseDir("temp");
      tomcat.setPort(8080);
    }
    return tomcat;
  }
}
