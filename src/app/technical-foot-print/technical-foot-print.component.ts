import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

@Component({
  selector: 'app-technical-foot-print',
  templateUrl: './technical-foot-print.component.html',
  styleUrls: ['./technical-foot-print.component.css'],
})
export class TechnicalFootPrintComponent implements OnInit {
  MyJson: any;
  baseURL: string = "https://aidemo-api.smpl-c.com/SMPLService/";
  endPath: string = "getCompanyComplianceToolData";
  TechnicalFootPrint: any[] = [];
  TechnicalFootprintDisplay = true;
  form: FormGroup;

  constructor(public http: HttpClient) {
    this.form = new FormGroup({
      questions: new FormArray([])
    });
    this.getData();
  }

  getData() {
    const options: any = {
      headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") }
    };
    this.http.get<any[]>(this.baseURL + this.endPath, options).subscribe((data: any) => {
      this.MyJson = data;
      console.log(this.MyJson);
    });
  }

  ngOnInit() {
    // this.form.valueChanges.subscribe(change => {
    //   console.log(change)
    // })
  }

  populateTheForm() {
    const questionsArray = this.form.get('questions') as FormArray;

    this.TechnicalFootPrint.forEach((data: any) => {
      const optionsArray = new FormArray([]);

      data.Options.forEach((opt: any) => {
        const optionGroup = new FormGroup({
          OptionID: new FormControl(opt.Id),
          OptionName: new FormControl(opt.Option),
          OptionValue: new FormControl(opt.other),
          OptionChecked: new FormControl(opt.Checked !== 0)
        });

        optionsArray.push(optionGroup);
      });

      const formGroup = new FormGroup({
        QuestionId: new FormControl(data.QuestionId),
        Question: new FormControl(data.Question),
        // SelectOption : new FormArray(null),
        Options: optionsArray
      });
      questionsArray.push(formGroup);
    });
    console.log(questionsArray);
  }


  Assessment() {
    const QandA: any[] = [];
    const questionMap = new Map<number, any>();
    for (const item of this.MyJson) {
      const QuestionId = item.iCatID;
      const Question = item.sCategoryMasterName;
      if (!questionMap.has(QuestionId)) {
        questionMap.set(QuestionId, {
          QuestionId: QuestionId,
          Question: Question,
          Options: []
        });
      }
      const questionObj = questionMap.get(QuestionId);
      const optionObj = {
        Id: item.iSubCatID,
        Option: item.sSubCategoryMasterName,
        Checked: item.icstMappingID,
        other: item.other
      };
      questionObj.Options.push(optionObj);
    }

    for (const questionObjList of questionMap) {
      QandA.push(questionObjList[1]);
    }
    this.TechnicalFootPrint = QandA;
    this.TechnicalFootprintDisplay = false;
    console.log(this.TechnicalFootPrint);
    this.populateTheForm();
  }

  onKeyPress(event: KeyboardEvent) {
    const allowedChars = /[0-9]/;
    const key = event.key;
    if (!allowedChars.test(key)) {
      event.preventDefault();
    }
  }

  OnSubmit() {
    console.log(this.form.value, 'submit');
  }
}
