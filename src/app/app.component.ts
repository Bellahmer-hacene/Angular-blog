import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts =[
    {
      title : "Mon premier posts",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sint impedit velit neque nesciunt tempore nostrum labore maxime a autem exercitationem ab veritatis, totam dolor vel veniam ullam deserunt.",
      loveIts: 1,
      created_at: new Date()  
    },
    {
      title : "Mon Deuxième posts",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sint impedit velit neque nesciunt tempore nostrum labore maxime a autem exercitationem ab veritatis, totam dolor vel veniam ullam deserunt.",
      loveIts: -1,
      created_at: new Date()  
    },
    {
      title : "Encore un posts",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sint impedit velit neque nesciunt tempore nostrum labore maxime a autem exercitationem ab veritatis, totam dolor vel veniam ullam deserunt.",
      loveIts : 0,
      created_at : new Date()  
    }
  ];
}
