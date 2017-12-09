import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canSave = true;
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }
  starfish = {
    title: "Title",
    isBold: true,
  }
  post = {
    title: "Title",
    isFavorite: true,
    isSelected: true
  }
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Fav is Changed: ", eventArgs);
  }
  tweet = {
    body: "Here is some text",
    isSelected: true,
    likesCount: 10
  }
  courses = [1, 2];
  viewMode = 'somethingElse';
  tutorials = [
  { id:1, name: 'A1' },
  { id:2, name: 'A2' },
  { id:3, name: 'A3' }
  ];
  onAdd() {
    this.tutorials.push( {id:4, name: 'A4'} );
  }
  onRemove(tutorial) {
    let index = this.tutorials.indexOf(tutorial);
    this.tutorials.splice(index,1);
  }
  onChange(tutorial) {
    tutorial.name = 'UPDATED';
  }
  lessons;
  loadLessons() {
    this.lessons= [
      { id:1, name: 'A1' },
      { id:2, name: 'A2' },
      { id:3, name: 'A3' }
    ];
  }

  trackLesson(index, lesson) {
      return lesson ? lesson.id : undefined;
  }
}
