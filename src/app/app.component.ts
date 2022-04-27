import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Мой список дел:";
  currentDate = "Текущая дата: " + new Date().toLocaleDateString();
  list = getToDoList();
  getDate = () => new Date();
  getNumberOfDays = getNumberOfDays
}



function getToDoList() {
  return [
    {
      task: "Разобраться как работают Деревья выражений C#",
      dateEnd: new Date(2022, 4, 9, 23, 59, 59)
    },
    {
      task: "Поработать с БД Postgre",
      dateEnd: new Date(2022, 4, 8, 23, 59, 59)
    },
    {
      task: "Поработать с БД MongoDB",
      dateEnd: new Date(2022, 4, 6, 23, 59, 59)
    },
    {
      task: "Выполнить ДЗ по Angular",
      dateEnd: new Date(2022, 3, 28, 23, 59, 59)
    }
  ];
}

function getNumberOfDays(start: Date, end: Date): number {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = end.getTime() - start.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);

  if (diffInDays < 0)
    return 0;
  else
    return diffInDays + 1;
} 