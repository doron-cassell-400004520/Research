// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import $ from 'jquery';
global.$ = jQuery;

import "bootstrap"

import "stylesheets/application.scss"

$(document).on('turbolinks:load',function() {
  $('#speak').on("click", function(){
      event.preventDefault()
      if ('speechSynthesis' in window) {
        console.log('Speech recognition supported')
        var recognition = new window.webkitSpeechRecognition
        recognition.onstart = () => { 
          console.log('Voice recognition started. Try speaking into the microphone.')
          window.speechSynthesis.cancel()
        }
        recognition.onresult = function(event) {
          var transcript = event.results[0][0].transcript
          var request = $('#request')
          request.val(transcript)
        }
        recognition.onend = () => { 
          console.log('Voice recognition stopped.')
          var msg = $('#request').val()
          respond(msg)
        }
        
        recognition.start()
      }else{
        console.log('Speech recognition not supported')
      }
      
    });
});
$(document).on('turbolinks:load',function() {
  $('#request').on("change", function(){
        event.preventDefault()
        var msg = $('#request').val()
        respond(msg)
    });
});


function introductionResponce(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "Good day. Thank you for using this chat bot today.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function definitionResponce(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "Covid-19 is a disease caused by a virus called SARS-CoV-2. Most people with Covid-19 have mild symptoms, but some people become severely ill. Older adults and people who have certain underlying medical conditions are more likely to get severely ill. Post-COVID conditions are a wide range of health problems people can experience four or more weeks after first getting COVID-19. Even those who do not become severely ill from COVID-19 may experience post-COVID conditions.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function recommendationResponce(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "If you or someone you know receives a positive covid-19 test result, one should: stay home for at least 5 days and isolate from others in your home, tell your close contacts, wear a well-fitting mask when around others, continue to watch for more symptoms or worsening of symptoms and contact your doctor or health care provider.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function symptomsResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "People with Covid-19 have had a wide range of symptoms reported, ranging from mild symptoms to severe illness. Symptoms include: fever or chills, coughing, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, and diarrhea.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function testLocationResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "The main places to get tested for covid-19 is your nearest polyclinic. There are also other locations where you can get tested, would you like me to show you?";
  window.speechSynthesis.speak(response);
  sessionStorage.setItem('question', 1);
  document.getElementById("request").value = "";
}

function spreadResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "Covid-19 is spread in three main ways: breathing in air when close to an infected person who is exhaling small droplets and particles that contain the virus, having these small droplets and particles that contain virus land on the eyes, nose, or mouth, especially through splashes and sprays like a cough or sneeze, and touching eyes, nose, or mouth with hands that have the virus on them.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function protectionResponce(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "To protect oneself against the coronavirus it is recommended that eligible person to ensure their vaccination status is up to date, and to wear a fask mask covering the mouth and nose when one is in indoor public space.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function quantityResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "I will bring up the covid-19 statistics for Barbados right now.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
  window.open("https://www.google.com/search?q=barbados+covid-19+active+cases+today&oq=barbados+covid-19+active+cases+today&aqs=chrome..69i57j33i22i29i30.26776j0j7&sourceid=chrome&ie=UTF-8", "_blank");
}

function durationResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "Recovery of replication-competent virus between 10 and 20 days after symptom onset has been reported in some adults with severe covid-19, some of these people were immunocompromised.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function availableResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "The available vaccines in Barbados are BioNTech Pfizer vaccine, Johnson & Johnson vaccine, Oxford AstraZeneca vaccine and Sinopharm BBIBP vaccine. Would you like to know where you can get these vaccines?";
  window.speechSynthesis.speak(response);
  sessionStorage.setItem('question', 2);
  document.getElementById("request").value = "";
}

function sideEffectsResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "Side effects to COVID-19 vaccines include a fever, tiredness, headache, muscle ache, chills, diarrhoea and pain or redness at the injection site.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function vaccineLocationResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "I will bring up the locations where you can be given a dose of a covid-19 vaccine.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
  window.open("https://www.google.com/search?q=vaccines+available+in+barbados&oq=vaccines+available+in+barbados&aqs=chrome..69i57j0i390l2.7169j0j7&sourceid=chrome&ie=UTF-8#wptab=s:H4sIAAAAAAAAAOMwe8SYxi3w8sc9YanYSWtOXmMM55LzTU3JTM7MS3XJLE5NLE4NS0wG81JzMstSiyqFpLnYXPNKMksqhQSl-Ll49dP1DQ2zLOIti8sMzIQkuDh88pMTSzLz84R4pLi4OPRz9Q0MzYzKeBaxapZnpBalKpTkK6Snligk55dlpugaWiqUQcxXyMxTSEosSkpMyS8GAMbyTFOXAAAA", "_blank");
}

function vaccineReasonResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "Covid-19 vaccination significantly lowers your risk of severe illness, hospitalization, and death if you get infected. Compared to people who are up to date with their Covid-19 vaccinations, unvaccinated people are more likely to get Covid-19, much more likely to be hospitalized with Covid-19, and much more likely to die from Covid-19.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function vaccineEligibleResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "All Covid-19 vaccines with W.H.O E.U.L are safe for most people 18 years and older, including those with pre-existing conditions of any kind, including auto-immune disorders. These conditions include: hypertension, diabetes, asthma, pulmonary, liver and kidney disease, as well as chronic infections that are stable and controlled.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function vaccineIneligibleResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "You should not get vaccinated if you have a history of severe allergic reactions/anaphylaxis to any of the ingredients of the Covid-19 vaccine, or if you have an allergic reaction to your first dose.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function vaccineCompletionResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "To become fully vaccinated you would need to complete the primary series of a covid-19 vaccine. The number of vaccine doses you need to complete your primary series depends on your individual situation and which vaccine you receive. In general, the primary series is two doses Pfizer-BioNTech vaccine 3–8 weeks apart, one dose of Johnson & Johnson’s Janssen (J&J/Janssen) vaccine, two doses Oxford - AstraZeneca vaccine 3–8 weeks apart and two doses Sinopharm BBIBP vaccine 3–8 weeks apart.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function vaccineDurationResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "Scientists are continuing to monitor how long Covid-19 vaccine protection lasts. Recent studies show that protection against the virus may decrease over time. This reduction in protection has led CDC to recommend that everyone ages 12 years and older get a booster shot after completing their primary vaccination series. People who received the Pfizer-BioNTech or Moderna Covid-19 vaccine for their primary series should get a booster shot at least 5 months after completing the primary series. People who received Johnson & Johnson’s Janssen Covid-19 vaccine should get a booster shot at least 2 months after getting their first shot. At this time, CDC recommends getting only one COVID-19 booster shot. CDC continues to review evidence and will update guidance as more information is available.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function errorResponse(){
  var response =  new SpeechSynthesisUtterance();
  response.text = "The information requested of me is beyond the scope of my knowledge, or contains a possible error.";
  window.speechSynthesis.speak(response);
}

function respond(message){
  let regex1 = /(how\s[\w\s]+coronavirus\sspread|how\s[\w\s]+covid-19\sspread)/;
  let regex2 = /(what\s[\w\s]+vaccines\s[\w\s]+available|what\s[\w\s]+available\s[\w\s]+vaccines|what\svaccines\s[\w\s]+available)/;
  let regex3 = /where\s[\w\s]+vaccinated/;
  let regex4 = /when\s[\w\s]+fully\svaccinated/;
  let msg = message.toLowerCase();
  let question = ((sessionStorage.getItem('question') != null) ? sessionStorage.getItem('question') : 0);
  if(question == 0){
    if(msg.includes("hey") || msg.includes("hello") || msg.includes("hi")){
      introductionResponce();
    }else if(msg.includes("what is covid-19") || msg.includes("what is the coronavirus") || msg.includes("about covid-19") || msg.includes("about coronavirus") || msg.includes("about the coronavirus")){
      definitionResponce();
    }else if(msg.includes("if i have covid-19") || msg.includes("if i have the coronavirus") || msg.includes("if i get covid-19") || msg.includes("if i get the coronavirus") || msg.includes("if i contract covid-19") || msg.includes("if i contract the coronavirus") || msg.includes("if someone i know has covid-19") || msg.includes("if someone i know has the coronavirus") || msg.includes("if someone i know gets covid-19") || msg.includes("if someone i know gets the coronavirus") || msg.includes("if someone i know contracts covid-19") || msg.includes("if someone i know contracts the coronavirus")){
      recommendationResponce();
    }else if(msg.includes("what are the symptoms of covid-19") || msg.includes("what are the symptoms of the coronavirus") || msg.includes("about the symptoms of covid-19") || msg.includes("about the symptoms of coronavirus") || msg.includes("about the symptoms of the coronavirus")){
      symptomsResponse();
    }else if(msg.includes("where can i get tested for covid-19") || msg.includes("where can i get tested for the coronavirus") || msg.includes("where can one get tested for covid-19") || msg.includes("where can one get tested for the coronavirus")){
      testLocationResponse();
    }else if(regex1.test(msg)){
      spreadResponse();
    }else if(msg.includes("protect myself from covid-19") || msg.includes("protect oneself from the coronavirus") || msg.includes("protect myself against covid-19") || msg.includes("protect oneself against the coronavirus") || msg.includes("defend against covid-19") || msg.includes("defend against the coronavirus")){
      protectionResponce();
    }else if(msg.includes("how many covid-19 cases") || msg.includes("how many coronavirus cases") || msg.includes("number of covid-19 cases") || msg.includes("number of coronavirus cases")){
      quantityResponse();
    }else if(msg.includes("how long does covid-19 stay in your system") || msg.includes("how long does the coronavirus stay in your system") || msg.includes("how long does covid-19 remain in your system") || msg.includes("how long does the coronavirus remain in your system")){
      durationResponse();
    }else if(regex2.test(msg)){
      availableResponse();
    }else if(msg.includes("what are the side effects of the covid-19 vaccines") || msg.includes("what are the side effects of the coronavirus vaccines")){
      sideEffectsResponse();
    }else if(regex3.test(msg)){
      vaccineLocationResponse();
    }else if(msg.includes("why do i need the covid-19 vaccine") || msg.includes("why should i get the covid-19 vaccine") || msg.includes("why do i need the coronavirus vaccine") || msg.includes("why should i get the coronavirus vaccine")){
      vaccineReasonResponse();
    }else if(msg.includes("who should take the covid-19 vaccine") || msg.includes("who should get the covid-19 vaccine") || msg.includes("who should recieve the covid-19 vaccine") || msg.includes("who should take the coronavirus vaccine") || msg.includes("who should get the coronavirus vaccine") || msg.includes("who should receive the coronavirus vaccine")){
      vaccineEligibleResponse();
    }else if(msg.includes("who should not take the covid-19 vaccine") || msg.includes("who should not get the covid-19 vaccine") || msg.includes("who should not recieve the covid-19 vaccine") || msg.includes("who should not take the coronavirus vaccine") || msg.includes("who should not get the coronavirus vaccine") || msg.includes("who should not receive the coronavirus vaccine")){
      vaccineIneligibleResponse();
    }else if(regex4.test(msg)){
      vaccineCompletionResponse();
    }else if(msg.includes("how long does the vaccine protect") || msg.includes("how long does the vaccine last")){
      vaccineDurationResponse();
    }else if( msg == "stop"){
      window.speechSynthesis.cancel();
      document.getElementById("request").value = "";
    }else if( msg == "thank"){
      window.speechSynthesis.speak("Your welcome! Feel free to ask me another question.");
      document.getElementById("request").value = "";
    }else if( msg == "bye"){
      window.speechSynthesis.speak("Have a nice day! To assist my creator can you please fill out my evaluation form by clicking the button label form on the right of your screen.");
      document.getElementById("request").value = "";
    }else if( msg == ""){
      console.log("No input");
    }else{
      errorResponse();
    }
  }else{
    if(question == 1){
      if(msg.includes("yes")){
        window.open("https://www.google.com/search?q=where+to+get+a+pcr+test+in+barbados&sxsrf=APq-WBt2yiHEULVf9csWdUhl8iVTeO7qvw%3A1648610544032&ei=8MxDYqvLAfGi_QaAgY-4Bg&oq=where+to+get+tested+in+barbados&gs_lcp=Cgdnd3Mtd2l6EAEYADIKCAAQRxCwAxCLAzIKCAAQRxCwAxCLAzIKCAAQRxCwAxCLAzIKCAAQRxCwAxCLAzIKCAAQRxCwAxCLAzIKCAAQRxCwAxCLAzIKCAAQRxCwAxCLAzIKCAAQRxCwAxCLA0oECEEYAEoECEYYAFAAWABgpg9oA3ABeACAAQCIAQCSAQCYAQDIAQi4AQPAAQE&sclient=gws-wiz", "_blank");
        sessionStorage.setItem('question', 0);
        document.getElementById("request").value = "";
      }
    }else if(question == 2){
      if(msg.includes("yes")){
        vaccineLocationResponse();
        sessionStorage.setItem('question', 0);
      }
    }
  }
}
