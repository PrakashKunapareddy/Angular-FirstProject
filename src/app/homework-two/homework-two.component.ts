import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeworkComponent } from '../homework/homework.component';
import { ButtonUDComponent } from '../button-ud/button-ud.component';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-homework-two',
    standalone: true,
    templateUrl: './homework-two.component.html',
    styleUrl: './homework-two.component.css',
    imports: [CommonModule, HomeworkComponent,ButtonUDComponent]
})
export class HomeworkTwoComponent {
    TechnicalFootPrint: String[] = [];
    // TechnicalFootPrintOptions: any[] = [];
    // questionAndOptionArr: any[] = [];
    // questionAndOptionArr1: any[] = [];



    sample_json1 =
        [
            {
                "iCatID": 1,
                "sCategoryMasterName": "Is your company fully Remote?",
                "iSubCatID": 1,
                "sSubCategoryMasterName": "Yes",
                "icstMappingID": 4705,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 1
            },
            {
                "iCatID": 1,
                "sCategoryMasterName": "Is your company fully Remote?",
                "iSubCatID": 2,
                "sSubCategoryMasterName": "No",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 1
            },
            {
                "iCatID": 1,
                "sCategoryMasterName": "Is your company fully Remote?",
                "iSubCatID": 46,
                "sSubCategoryMasterName": "Hybrid",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 1
            },
            {
                "iCatID": 9,
                "sCategoryMasterName": "Number of privileged users",
                "iSubCatID": 47,
                "sSubCategoryMasterName": "Input Numbers",
                "icstMappingID": 4706,
                "iCompanyId": 302,
                "other": "25",
                "sValue": "",
                "iSequenceNo": 2
            },
            {
                "iCatID": 10,
                "sCategoryMasterName": "What are the general descriptions and types of Controlled Unclassified Information (CUI) that are processed, stored, or transmitted by the system, and how are they determined and documented?",
                "iSubCatID": 48,
                "sSubCategoryMasterName": "Explain",
                "icstMappingID": 4707,
                "iCompanyId": 302,
                "other": "hi this is a description",
                "sValue": "",
                "iSequenceNo": 3
            },
            {
                "iCatID": 11,
                "sCategoryMasterName": "Is all hardware and software maintained and owned by the organization?",
                "iSubCatID": 49,
                "sSubCategoryMasterName": "Yes",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 4
            },
            {
                "iCatID": 11,
                "sCategoryMasterName": "Is all hardware and software maintained and owned by the organization?",
                "iSubCatID": 50,
                "sSubCategoryMasterName": "No",
                "icstMappingID": 4708,
                "iCompanyId": 302,
                "other": "hello",
                "sValue": "",
                "iSequenceNo": 4
            },
            {
                "iCatID": 15,
                "sCategoryMasterName": "What is the function/purpose of the system?",
                "iSubCatID": 51,
                "sSubCategoryMasterName": "Explain",
                "icstMappingID": 4709,
                "iCompanyId": 302,
                "other": "hi this is a description 2",
                "sValue": "",
                "iSequenceNo": 5
            },
            {
                "iCatID": 2,
                "sCategoryMasterName": "What collaboration and productivity tools are you using?",
                "iSubCatID": 3,
                "sSubCategoryMasterName": "Microsoft 365",
                "icstMappingID": 4710,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 6
            },
            {
                "iCatID": 2,
                "sCategoryMasterName": "What collaboration and productivity tools are you using?",
                "iSubCatID": 4,
                "sSubCategoryMasterName": "Google Workspace",
                "icstMappingID": 4711,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 6
            },
            {
                "iCatID": 2,
                "sCategoryMasterName": "What collaboration and productivity tools are you using?",
                "iSubCatID": 5,
                "sSubCategoryMasterName": "Slack",
                "icstMappingID": 4712,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 6
            },
            {
                "iCatID": 2,
                "sCategoryMasterName": "What collaboration and productivity tools are you using?",
                "iSubCatID": 6,
                "sSubCategoryMasterName": "Asana",
                "icstMappingID": 4713,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 6
            },
            {
                "iCatID": 2,
                "sCategoryMasterName": "What collaboration and productivity tools are you using?",
                "iSubCatID": 7,
                "sSubCategoryMasterName": "Trello",
                "icstMappingID": 4714,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 6
            },
            {
                "iCatID": 2,
                "sCategoryMasterName": "What collaboration and productivity tools are you using?",
                "iSubCatID": 8,
                "sSubCategoryMasterName": "Other",
                "icstMappingID": 4715,
                "iCompanyId": 302,
                "other": "hello",
                "sValue": "",
                "iSequenceNo": 6
            },
            {
                "iCatID": 3,
                "sCategoryMasterName": "What security systems are you using?",
                "iSubCatID": 9,
                "sSubCategoryMasterName": "Cisco Next-Generation Firewall",
                "icstMappingID": 4716,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 7
            },
            {
                "iCatID": 3,
                "sCategoryMasterName": "What security systems are you using?",
                "iSubCatID": 10,
                "sSubCategoryMasterName": "Symante Endpoint Protection",
                "icstMappingID": 4717,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 7
            },
            {
                "iCatID": 3,
                "sCategoryMasterName": "What security systems are you using?",
                "iSubCatID": 11,
                "sSubCategoryMasterName": "BitLocker",
                "icstMappingID": 4718,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 7
            },
            {
                "iCatID": 3,
                "sCategoryMasterName": "What security systems are you using?",
                "iSubCatID": 12,
                "sSubCategoryMasterName": "Palo Alto",
                "icstMappingID": 4719,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 7
            },
            {
                "iCatID": 3,
                "sCategoryMasterName": "What security systems are you using?",
                "iSubCatID": 13,
                "sSubCategoryMasterName": "Fortinet",
                "icstMappingID": 4720,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 7
            },
            {
                "iCatID": 3,
                "sCategoryMasterName": "What security systems are you using?",
                "iSubCatID": 14,
                "sSubCategoryMasterName": "Other",
                "icstMappingID": 4721,
                "iCompanyId": 302,
                "other": "hii",
                "sValue": "",
                "iSequenceNo": 7
            },
            {
                "iCatID": 4,
                "sCategoryMasterName": "What Project Management Systems do you utilize?",
                "iSubCatID": 15,
                "sSubCategoryMasterName": "Microsoft Project",
                "icstMappingID": 4722,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 8
            },
            {
                "iCatID": 4,
                "sCategoryMasterName": "What Project Management Systems do you utilize?",
                "iSubCatID": 16,
                "sSubCategoryMasterName": "Jira (by Atlassian)",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 8
            },
            {
                "iCatID": 4,
                "sCategoryMasterName": "What Project Management Systems do you utilize?",
                "iSubCatID": 17,
                "sSubCategoryMasterName": "BaseCamp",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 8
            },
            {
                "iCatID": 4,
                "sCategoryMasterName": "What Project Management Systems do you utilize?",
                "iSubCatID": 18,
                "sSubCategoryMasterName": "SmartSheet",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 8
            },
            {
                "iCatID": 4,
                "sCategoryMasterName": "What Project Management Systems do you utilize?",
                "iSubCatID": 19,
                "sSubCategoryMasterName": "Wrike",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 8
            },
            {
                "iCatID": 4,
                "sCategoryMasterName": "What Project Management Systems do you utilize?",
                "iSubCatID": 20,
                "sSubCategoryMasterName": "Other",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 8
            },
            {
                "iCatID": 5,
                "sCategoryMasterName": "What Financial Management Systems do you utilize?",
                "iSubCatID": 21,
                "sSubCategoryMasterName": "QuickBooks",
                "icstMappingID": 4723,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 9
            },
            {
                "iCatID": 5,
                "sCategoryMasterName": "What Financial Management Systems do you utilize?",
                "iSubCatID": 22,
                "sSubCategoryMasterName": "FreshBooks",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 9
            },
            {
                "iCatID": 5,
                "sCategoryMasterName": "What Financial Management Systems do you utilize?",
                "iSubCatID": 23,
                "sSubCategoryMasterName": "Oracle NetSuite",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 9
            },
            {
                "iCatID": 5,
                "sCategoryMasterName": "What Financial Management Systems do you utilize?",
                "iSubCatID": 24,
                "sSubCategoryMasterName": "Sage Intacct",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 9
            },
            {
                "iCatID": 5,
                "sCategoryMasterName": "What Financial Management Systems do you utilize?",
                "iSubCatID": 25,
                "sSubCategoryMasterName": "Xero",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 9
            },
            {
                "iCatID": 5,
                "sCategoryMasterName": "What Financial Management Systems do you utilize?",
                "iSubCatID": 26,
                "sSubCategoryMasterName": "Other",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 9
            },
            {
                "iCatID": 5,
                "sCategoryMasterName": "What Financial Management Systems do you utilize?",
                "iSubCatID": 52,
                "sSubCategoryMasterName": "Deltek Costpoint ",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 9
            },
            {
                "iCatID": 6,
                "sCategoryMasterName": "What Supply Chain Management Systems do you utilize?",
                "iSubCatID": 27,
                "sSubCategoryMasterName": "SAP Ariba",
                "icstMappingID": 4724,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 10
            },
            {
                "iCatID": 6,
                "sCategoryMasterName": "What Supply Chain Management Systems do you utilize?",
                "iSubCatID": 28,
                "sSubCategoryMasterName": "Oracle SCM Cloud",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 10
            },
            {
                "iCatID": 6,
                "sCategoryMasterName": "What Supply Chain Management Systems do you utilize?",
                "iSubCatID": 29,
                "sSubCategoryMasterName": "Fishbowl Inventory",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 10
            },
            {
                "iCatID": 6,
                "sCategoryMasterName": "What Supply Chain Management Systems do you utilize?",
                "iSubCatID": 30,
                "sSubCategoryMasterName": "Infor CloudSuite Supply Chain Management",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 10
            },
            {
                "iCatID": 6,
                "sCategoryMasterName": "What Supply Chain Management Systems do you utilize?",
                "iSubCatID": 31,
                "sSubCategoryMasterName": "JDA Software /Blue Yonder",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 10
            },
            {
                "iCatID": 6,
                "sCategoryMasterName": "What Supply Chain Management Systems do you utilize?",
                "iSubCatID": 32,
                "sSubCategoryMasterName": "Other",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 10
            },
            {
                "iCatID": 6,
                "sCategoryMasterName": "What Supply Chain Management Systems do you utilize?",
                "iSubCatID": 54,
                "sSubCategoryMasterName": "Deltek Costpoint ",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 10
            },
            {
                "iCatID": 7,
                "sCategoryMasterName": "What Human Resources System are you currently using?",
                "iSubCatID": 33,
                "sSubCategoryMasterName": "BambooHR",
                "icstMappingID": 4725,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 11
            },
            {
                "iCatID": 7,
                "sCategoryMasterName": "What Human Resources System are you currently using?",
                "iSubCatID": 34,
                "sSubCategoryMasterName": "Gusto",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 11
            },
            {
                "iCatID": 7,
                "sCategoryMasterName": "What Human Resources System are you currently using?",
                "iSubCatID": 35,
                "sSubCategoryMasterName": "LinkedIn Talent",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 11
            },
            {
                "iCatID": 7,
                "sCategoryMasterName": "What Human Resources System are you currently using?",
                "iSubCatID": 36,
                "sSubCategoryMasterName": "Workday",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 11
            },
            {
                "iCatID": 7,
                "sCategoryMasterName": "What Human Resources System are you currently using?",
                "iSubCatID": 37,
                "sSubCategoryMasterName": "Zoho People",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 11
            },
            {
                "iCatID": 7,
                "sCategoryMasterName": "What Human Resources System are you currently using?",
                "iSubCatID": 38,
                "sSubCategoryMasterName": "Other",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 11
            },
            {
                "iCatID": 8,
                "sCategoryMasterName": "Finally, what CMM Systems do you utilize?",
                "iSubCatID": 39,
                "sSubCategoryMasterName": "IBM Maximo",
                "icstMappingID": 4726,
                "iCompanyId": 302,
                "other": "",
                "sValue": "",
                "iSequenceNo": 12
            },
            {
                "iCatID": 8,
                "sCategoryMasterName": "Finally, what CMM Systems do you utilize?",
                "iSubCatID": 40,
                "sSubCategoryMasterName": "SAP Asset Manager",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 12
            },
            {
                "iCatID": 8,
                "sCategoryMasterName": "Finally, what CMM Systems do you utilize?",
                "iSubCatID": 41,
                "sSubCategoryMasterName": "Oracle EAM",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 12
            },
            {
                "iCatID": 8,
                "sCategoryMasterName": "Finally, what CMM Systems do you utilize?",
                "iSubCatID": 42,
                "sSubCategoryMasterName": "Infor EAM",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 12
            },
            {
                "iCatID": 8,
                "sCategoryMasterName": "Finally, what CMM Systems do you utilize?",
                "iSubCatID": 43,
                "sSubCategoryMasterName": "IFS ESM",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 12
            },
            {
                "iCatID": 8,
                "sCategoryMasterName": "Finally, what CMM Systems do you utilize?",
                "iSubCatID": 44,
                "sSubCategoryMasterName": "Other",
                "icstMappingID": 0,
                "iCompanyId": 0,
                "other": "",
                "sValue": "",
                "iSequenceNo": 12
            }
        ]

    ngOnInit(): void {
        this.Assessment1();
    }

    Assessment1(): any {
        const QandA: any[] = [];
        const questionMap = new Map<number, any>();
    
        for (const item of this.sample_json1) {
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
                Option: item.sSubCategoryMasterName
            };
    
            questionObj.Options.push(optionObj);
        }
    
        for (const questionObjList of questionMap) {
            QandA.push(questionObjList[1]);
        }
        console.log(QandA);
        this.TechnicalFootPrint = QandA;
    }
//    const QuestionsArr:any[]=[];
//    const OptionsArr:any[]=[];


//             for (const Questions of this.sample_json1) {
//                 const question = Questions.sCategoryMasterName;
//                 const option = Questions.sSubCategoryMasterName;
//                 if (!(QuestionsArr.includes(question))) {
//                     QuestionsArr.push(question);
//                     OptionsArr.push([]);
//                 }
//                 const Index = QuestionsArr.indexOf(question);
//                 OptionsArr[Index].push(option);
//             }
//             for (let i = 0; i < QuestionsArr.length; i++) {
//                 this.questionAndOptionArr.push({
//                     Question: QuestionsArr[i],
//                     Option: OptionsArr[i]
//                 });
//             }
//             this.TechnicalFootPrintQuestions = QuestionsArr;
//             this.TechnicalFootPrintOptions = OptionsArr;
//             console.log(this.TechnicalFootPrintQuestions + "Que");
//             console.log(this.TechnicalFootPrintOptions + "Opt")
//             console.log(this.questionAndOptionArr);

// }



}
