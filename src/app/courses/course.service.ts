import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})

export class CourseService{

    private coursesUrlBase: string = "http://localhost:3100/api/courses/";

    constructor(private httpClient: HttpClient){}
    
    retriveAll(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.coursesUrlBase);
    }

    retriById(id: number): Observable<Course>{
        return this.httpClient.get<Course>(`${this.coursesUrlBase}${id}`);
    }

    save(course: Course): Observable<Course>{
        if(course.id){
            return this.httpClient.put<Course>(`${this.coursesUrlBase}${course.id}`, course);
        }
        else{
            return this.httpClient.post<Course>(this.coursesUrlBase, course);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.coursesUrlBase}${id}`);
    }

}