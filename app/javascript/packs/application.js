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
  var response =  new SpeechSynthesisUtterance()
  response.text = "Good day. Thank you for using this chat bot today.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function definitionResponce(){
  var response =  new SpeechSynthesisUtterance()
  response.text = "COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people with COVID-19 have mild symptoms, but some people become severely ill. Older adults and people who have certain underlying medical conditions are more likely to get severely ill. Post-COVID conditions are a wide range of health problems people can experience four or more weeks after first getting COVID-19. Even those who do not become severely ill from COVID-19 may experience post-COVID conditions.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function recommendationResponce(){
  var response =  new SpeechSynthesisUtterance()
  response.text = "If you or someone you know receives a positive covid-19 test result, one should: stay home for at least 5 days and isolate from others in your home, tell your close contacts, wear a well-fitting mask when around others, continue to watch for more symptoms or worsening of symptoms and contact your doctor or health care provider.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function symptomsResponse(){
  var response =  new SpeechSynthesisUtterance()
  response.text = "People with COVID-19 have had a wide range of symptoms reported, ranging from mild symptoms to severe illness. Symptoms include: fever or chills, coughing, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, and diarrhea.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function testLocationResponse(){
  var response =  new SpeechSynthesisUtterance()
  response.text = "The main places to get tested for covid-19 is your nearest polyclinic. There are also other locations where you can get tested, would you like me to show you?";
  window.speechSynthesis.speak(response);
  sessionStorage.setItem('question', 1);
  document.getElementById("request").value = "";
}

function spreadResponse(){
  var response =  new SpeechSynthesisUtterance()
  response.text = "Covid-19 is spread in three main ways: breathing in air when close to an infected person who is exhaling small droplets and particles that contain the virus, having these small droplets and particles that contain virus land on the eyes, nose, or mouth, especially through splashes and sprays like a cough or sneeze, and touching eyes, nose, or mouth with hands that have the virus on them.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function protectionResponce(){
  var response =  new SpeechSynthesisUtterance()
  response.text = "To protect oneself against the coronavirus it is recommended that eligible person to ensure their vaccination status is up to date, and to wear a fask mask covering the mouth and nose when one is in indoor public space.";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function quantityResponse(){
  var response =  new SpeechSynthesisUtterance()
  response.text = "I will bring up the covid-19 statistics for Barbados right now";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
  window.open("https://www.google.com/search?q=barbados+covid-19+active+cases+today&oq=barbados+covid-19+active+cases+today&aqs=chrome..69i57j33i22i29i30.26776j0j7&sourceid=chrome&ie=UTF-8", "_blank");
}

function durationResponse(){
  var response =  new SpeechSynthesisUtterance()
  response.text = "Recovery of replication-competent virus between 10 and 20 days after symptom onset has been reported in some adults with severe covid-19, some of these people were immunocompromised";
  window.speechSynthesis.speak(response);
  document.getElementById("request").value = "";
}

function errorResponse(){
  var response =  new SpeechSynthesisUtterance()
  response.text = "The information requested of me is beyond the scope of my knowledge, or contains a possible error.";
  window.speechSynthesis.speak(response);
}

function respond(message){
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
    }else if(msg.includes("how does covid-19 spread") || msg.includes("how does the coronavirus spread")){
      spreadResponse();
    }else if(msg.includes("protect myself from covid-19") || msg.includes("protect oneself from the coronavirus") || msg.includes("defend against covid-19") || msg.includes("defend against the coronavirus")){
      protectionResponce();
    }else if(msg.includes("how many covid-19 cases") || msg.includes("how many coronavirus cases") || msg.includes("number of covid-19 cases") || msg.includes("number of coronavirus cases")){
      quantityResponse();
    }else if(msg.includes("how long does covid-19 stay in your system") || msg.includes("how long does the coronavirus stay in your system") || msg.includes("how long does covid-19 remain in your system") || msg.includes("how long does the coronavirus remain in your system")){
      durationResponse();
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
    }
  }
}
