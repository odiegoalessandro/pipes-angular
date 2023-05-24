import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

interface BookInterface {
  title: string
  rating: number
  pages: number
  price: number
  releaseDate: Date
  url: string
}

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrls: ['./pipe-examples.component.css']
})
export class PipeExamplesComponent {
  book: BookInterface = {
    title: "Aprendendo javascript",
    rating: 4.54321,
    pages: 342,
    price: 44.99,
    releaseDate: new Date(2016, 5, 23),
    url: "https://a.co/d/5K0zM0l"
  }

  filter: string = ""
  books: string[] = ["angular 2", "java", "javascript"]

  addCourse(name: string){
    this.books.push(name)
  }

  getCourses(){
    if(this.books.length === 0 || this.filter.trim() === ""){
      return this.books
    }

    return this.books.filter((v: string) => {
      console.log(this.filter)
      if(v.toLowerCase().includes(this.filter.toLowerCase())){
        return true
      }
      return false
    })
  }

  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("valor async")
    }, 2000);
  })

  asyncValue2 = interval(2000).pipe(map(value => "valor async 2"))
}
