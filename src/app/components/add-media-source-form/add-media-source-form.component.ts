import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MediaSourceService } from 'src/app/services/media-source-service';
import { MediaSource } from 'src/app/models/mediaSource.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-media-source-form',
  templateUrl: './add-media-source-form.component.html',
  styleUrls: ['./add-media-source-form.component.scss']
})
export class AddMediaSourceFormComponent implements OnInit {


  public mediaSourceForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    source: new FormControl('',[Validators.required]),
    description: new FormControl('')
  });
  public mediaSource: MediaSource;
  public mediaSourceList?: MediaSource[];
  public idToDelete?: number;

  constructor(private mediaSourceService: MediaSourceService) {
    this.mediaSource = {
      id: 0,
      name: "",
      source: "",
      description: '',
      image: ''
    };
  }

  ngOnInit(): void {
    this.getAllSources().subscribe((data)=>{
      console.log(data);
      this.mediaSourceList = data.map((media: any) => {
        return {
          id: media.id,
          name: media.name,
          source: media.source,
          description: media.description,
          image: media.image
        }
      });
    });
  }

  addMediaSource(mediaSource: MediaSource){
    this.mediaSourceService.addMediaSource(mediaSource);
  }

  deleteMediaSource(){
    console.log("delete media source with id", this.idToDelete);
    this.mediaSourceService.deleteMediaSource(this.idToDelete);
  }

  getAllSources(): Observable<any>{
    console.log("this.getAllSources");
    return this.mediaSourceService.getAllSources();
  }

  onSubmit(form: FormGroup): void{
    console.log("asdasd");
    console.log(form);
    this.mediaSource = {
      id: 0,
      name: form.value.name,
      source: form.value.source,
      description: form.value.description,
      image: null
    }
    this.addMediaSource(this.mediaSource);
  }

}
