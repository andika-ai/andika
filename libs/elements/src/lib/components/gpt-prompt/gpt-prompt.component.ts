import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpt-prompt',
  templateUrl: './gpt-prompt.component.html',
  styleUrls: ['./gpt-prompt.component.css']
})
export class GptPromptComponent implements OnInit {
  longText=''
  constructor() { }

  ngOnInit() {
  }

    copyAchievements() {
    const pending = this.clipboard.beginCopy(this.promptResult);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    attempt();
  }


}
