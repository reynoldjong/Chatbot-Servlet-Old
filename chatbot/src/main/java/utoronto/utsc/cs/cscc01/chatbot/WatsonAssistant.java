package utoronto.utsc.cs.cscc01.chatbot;

import java.util.List;
import com.ibm.cloud.sdk.core.service.security.IamOptions;
import com.ibm.watson.assistant.v2.Assistant;
import com.ibm.watson.assistant.v2.model.CreateSessionOptions;
import com.ibm.watson.assistant.v2.model.DialogRuntimeResponseGeneric;
import com.ibm.watson.assistant.v2.model.MessageInput;
import com.ibm.watson.assistant.v2.model.MessageOptions;
import com.ibm.watson.assistant.v2.model.MessageOutput;
import com.ibm.watson.assistant.v2.model.MessageResponse;
import com.ibm.watson.assistant.v2.model.SessionResponse;

public class WatsonAssistant {
  private static WatsonAssistant WatsonAssistant = null;
  private Assistant assistant;
  private static final String assistantId = "84452a24-45c5-45db-af2d-3957c16a6f1e";
  
  private WatsonAssistant() {
    IamOptions options = new IamOptions.Builder()
        .apiKey("5pMstPSablFoCNh96IJhPI9EUCL0akMKqqR3-4l1pFJo")
        .build();
    this.assistant = new Assistant("2019-06-29", options);
    this.assistant.setEndPoint("https://gateway-wdc.watsonplatform.net/assistant/api");
  }
  
  public Assistant getAssistant() {
    return this.assistant;
  }
  public static WatsonAssistant buildAssistant() {
    if (WatsonAssistant == null) 
      return new WatsonAssistant();
    else
      return WatsonAssistant;
  }
  
  public String getAssistantId() {
    return this.assistantId;
  }
  
}