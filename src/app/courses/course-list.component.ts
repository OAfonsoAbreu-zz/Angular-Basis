import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
    
    _courses: Course[] = [];
    _filterBy: string;
    filteredCourses: Course[] = [];

    constructor(private courseService: CourseService){}

    ngOnInit(): void {
        this.retriveAll();
    }

    set filter(filtro: string){
        this._filterBy = filtro;

        this.filteredCourses= this._courses.filter(x => x.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

    private retriveAll(): void{
        this.courseService.retriveAll().subscribe({
            next: courses =>{
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: ex => console.log('Error:', ex)
        });
        
    }

}