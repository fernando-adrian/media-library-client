import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MediaSource } from '../models/mediaSource.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaSourceService {

  constructor(private http: HttpClient) { }

  addMediaSource(mediaSource: MediaSource){
    console.log("saving...");
    this.http.post("http://localhost:8080/sources/", mediaSource)
      .subscribe((data)=>{
        console.log("saved.");
      });

  }

  deleteMediaSource(id: number | undefined){
    console.log("deleting...");
    this.http.delete("http://localhost:8080/sources/" + id, { observe: 'response' })
    .subscribe((data)=>{
      console.log(data);
    });
  }

  getAllSources(){
    return this.http.get("http://localhost:8080/sources/");
  }
}
