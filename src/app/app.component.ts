import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gender } from './gender';
import { PredictorService } from './predictor.service';
import { Results } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MachineLearningFrontEnd';

  //public results: Results;
  predictionResult = 'none';
  genders =[
    {id:1,name:'Male'},
    {id:0,name:'Female'}
  ];

  constructor(private predictorService: PredictorService)
  {
      
  }
  ngOnInit(){
  }
   
  

  public onGetResults(addForm: NgForm): void
  {
    console.log(Number(addForm.value.gender).valueOf());
    this.predictorService.getPredictionResults(addForm.value.age,Number(addForm.value.gender).valueOf()).subscribe(

      (response: Results) => {
         this.predictionResult = response.output;
         console.log(response.output);
       },
       (error: HttpErrorResponse) =>{
        console.log(error);
       }
    );
  }
}
