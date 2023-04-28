// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// import axios from 'axios';


// @Component({
//   selector: 'andika-audio',
//   templateUrl: './audio.component.html',
//   styleUrls: ['./audio.component.css']
// })
// export class AudioComponent implements OnInit {
//   audioUrl: string;
//   characterLimit = 1000;
//   form: FormGroup;
//   constructor(private _fb: FormBuilder) { }

//   ngOnInit() {
//     this.initForm();
//   }

//   submitText(){
//     console.log('fix')
//   }

//   initForm(){
//     this.form = this._fb.group({
//       text: ['', '']
//     });
//   }


//   async synthesizeTextToSpeech(){
//     const { text } = this.form.value;
//     const encodedParams = new URLSearchParams();
//     encodedParams.append("voice_code", "en-US-1");
//     encodedParams.append("text", text);
//     encodedParams.append("speed", "1.00");
//     encodedParams.append("pitch", "1.00");
//     encodedParams.append("output_type", "audio_url");
  
//     const options = {
//       method: 'POST',
//       url: 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         'X-RapidAPI-Key': 'fmTn4WgnMsmsheNJj9M7SFt8t37kp1kjhikjsnzLoTV0TWlEIb',
//         'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
//       },
//       data: encodedParams
//     };
  
//     const response = await axios.request(options);
//     /**
//      * {
//     "status": "success",
//     "result": {
//         "audio_url": "https://storage.googleapis.com/cloudlabs-tts.appspot.com/files/audio-bc936d080a651d3605d512c8817ff3dc.mp3"
//     }
// }
//      */
//     if(response.status){
//       this.audioUrl = response.data.result.audio_url;
//     } else{
//       alert('Error generating audio please contact the administrator')
//     }
//   }
  

// }
