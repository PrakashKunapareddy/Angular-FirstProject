import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homework',
  standalone: true,
  templateUrl: './homework.component.html',
  styleUrl: './homework.component.css',
})

export class HomeworkComponent implements OnInit {

  CompanyArr: any = [];
  PersonDetailsArr: any[] = [];
  samp3: any[];
  datepipe = new DatePipe("en-US");



  sample_data1 = [
    {
      "companyName": "TechCorp Inc.",
      "employees": [
        {
          "employeeId": 101,
          "firstName": "John",
          "lastName": "Doe",
          "position": "Software Engineer",
          "departments": ["Engineering", "R&D", "Marketing"],
          "projects": [
            {
              "projectId": 201,
              "projectName": "Project A",
              "projectDescription": "Developing a new software product",
              "startDate": "2023-01-15",
              "endDate": "2023-06-30",
              "status": "In Progress"
            },
            {
              "projectId": 202,
              "projectName": "Project B",
              "projectDescription": "Research and development for future technology",
              "startDate": "2023-03-10",
              "endDate": "2023-12-31",
              "status": "Planning"
            },
            {
              "projectId": 203,
              "projectName": "Marketing Campaign",
              "projectDescription": "Launch a new marketing campaign",
              "startDate": "2023-04-20",
              "endDate": "2023-09-30",
              "status": "In Progress"
            }
          ]
        },
        {
          "employeeId": 102,
          "firstName": "Alice",
          "lastName": "Smith",
          "position": "Marketing Specialist",
          "departments": ["Engineering", "Marketing"],
          "projects": [
            {
              "projectId": 204,
              "projectName": "Project D",
              "projectDescription": "Developing a new software product",
              "startDate": "2023-01-15",
              "endDate": "2023-06-30",
              "status": "In Progress"
            },
            {
              "projectId": 203,
              "projectName": "Marketing Campaign",
              "projectDescription": "Launch a new marketing campaign",
              "startDate": "2023-04-20",
              "endDate": "2023-09-30",
              "status": "In Progress"
            }
          ]
        }
      ],
      "departments": [
        {
          "departmentName": "Engineering",
          "departmentHead": "Robert Johnson",
          "employees": [101, 102]
        },
        {
          "departmentName": "R&D",
          "departmentHead": "Sarah Williams",
          "employees": [101]
        },
        {
          "departmentName": "Marketing",
          "departmentHead": "Michael Brown",
          "employees": [102, 101]
        }
      ]
    },
    {
      "companyName": "vassarlabs Inc1.",
      "employees": [
        {
          "employeeId": 101,
          "firstName": "John",
          "lastName": "Doe",
          "position": "Software Engineer",
          "departments": ["Engineering", "R&D", "Marketing"],
          "projects": [
            {
              "projectId": 201,
              "projectName": "Project A",
              "projectDescription": "Developing a new software product",
              "startDate": "2023-01-15",
              "endDate": "2023-06-30",
              "status": "In Progress"
            },
            {
              "projectId": 202,
              "projectName": "Project B",
              "projectDescription": "Research and development for future technology",
              "startDate": "2023-03-10",
              "endDate": "2023-12-31",
              "status": "Planning"
            },
            {
              "projectId": 203,
              "projectName": "Marketing Campaign",
              "projectDescription": "Launch a new marketing campaign",
              "startDate": "2023-04-20",
              "endDate": "2023-09-30",
              "status": "In Progress"
            }
          ]
        },
        {
          "employeeId": 102,
          "firstName": "Alice",
          "lastName": "Smith",
          "position": "Marketing Specialist",
          "departments": ["Engineering", "Marketing"],
          "projects": [
            {
              "projectId": 204,
              "projectName": "Project D",
              "projectDescription": "Developing a new software product",
              "startDate": "2023-01-15",
              "endDate": "2023-06-30",
              "status": "In Progress"
            },
            {
              "projectId": 203,
              "projectName": "Marketing Campaign",
              "projectDescription": "Launch a new marketing campaign",
              "startDate": "2023-04-20",
              "endDate": "2023-09-30",
              "status": "In Progress"
            }
          ]
        }
      ],
      "departments": [
        {
          "departmentName": "Engineering",
          "departmentHead": "Robert Johnson",
          "employees": [101, 102]
        },
        {
          "departmentName": "R&D",
          "departmentHead": "Sarah Williams",
          "employees": [101]
        },
        {
          "departmentName": "Marketing",
          "departmentHead": "Michael Brown",
          "employees": [102, 101]
        }
      ]
    }

  ]
  sample_data2 = [
    {
      "person": {
        "name": "Alice",
        "age": 28,
        "address": {
          "street": "456 Oak Avenue",
          "city": "Wonderland",
          "zipcode": "54321"
        },
        "contacts": [
          {
            "type": "email",
            "value": "alice@example.com"
          },
          {
            "type": "phone",
            "value": "+1 555-5678"
          }
        ],
        "employment": {
          "position": "Software Engineer",
          "company": "Tech Co",
          "workHistory": [
            {
              "startYear": 2018,
              "endYear": 2021,
              "title": "Junior Developer"
            },
            {
              "startYear": 2021,
              "endYear": null,
              "title": "Software Engineer"
            }
          ]
        },
        "skills": {
          "programming": ["Java", "JavaScript", "Python"],
          "frameworks": {
            "frontEnd": ["React", "Angular"],
            "backEnd": ["Spring", "Express"]
          },
          "languages": {
            "spoken": ["English", "French"],
            "written": ["English", "Spanish"]
          }
        },
        "isStudent": false
      },
      "hobbies": {
        "indoor": ["Chess", "Painting", "Reading"],
        "outdoor": ["Camping", "Photography", "shuttle"]
      },
      "hasPets": true,
      "pets": [
        {
          "name": "Fluffy",
          "type": "Cat",
          "age": 5
        },
        {
          "name": "Buddy",
          "type": "Dog",
          "age": 3
        }
      ]
    },
    {
      "person": {
        "name": "roopa",
        "age": 24,
        "address": {
          "street": "1st street",
          "city": "vizag",
          "zipcode": "531001"
        },
        "contacts": [
          {
            "type": "email",
            "value": "rupa16800@email.com"
          },
          {
            "type": "phone",
            "value": "+91 8309383013"
          }
        ],
        "employment": {
          "position": "Software Engineer",
          "company": "Vassarlabs",
          "workHistory": [
            {
              "startYear": 2022,
              "endYear": null,
              "title": "Software Engineer"
            }
          ]
        },
        "skills": {
          "programming": ["Java", "JavaScript", "Python"],
          "frameworks": {
            "frontEnd": ["Angular"],
            "backEnd": ["Spring", "java"]
          },
          "languages": {
            "spoken": ["English", "Telugu"],
            "written": ["English", "Telugu"]
          }
        },
        "isStudent": false
      },
      "hobbies":
      {
        "indoor": ["ludo", "bingo", "Pubg"],
        "outdoor": ["Camping", "Photography"]
      },
      "hasPets": false,
      "pets": []
    }
  ]
  sample_data3 = [
    {
      "result": true,
      "statusCode": 200,
      "statusCodeDescription": "OK",
      "message": null,
      "response":
        [
          {
            "rfpNumber": "2306141140",
            "rfpDetails": null,
            "offerWiseRfpDetails":
            {
              "Round":
                [
                  {
                    "responseRfpId": "4cd7fa6f-aa17-4460-8ad1-b6cecbc01add",
                    "version": "b994b65b-bc6f-4699-b443-c09851b8217e",
                    "rfpId": "8c9863b5-d55e-474b-bf46-14c15b0d0278",
                    "rfpNumber": "2306141140",
                    "status": "Locked",
                    "description": "testing plz",
                    "dueDate": "2023-06-22",
                    "receivedDate": "2023-06-14",
                    "submittedDate": "1686812409559",
                    "offer": "Round",
                    "assignedTo": null,
                    "supplierId": "fbebeee5-6ccd-47d0-aa96-92a03defe42b",
                    "supplierName": "VAMSHI",
                    "submittedBy": null,
                    "fibers": [
                      "NBSK"
                    ],
                    "updatedBy": "Sridhar one",
                    "createdBy": null,
                    "reference": 12345,
                    "commentsJson": null,
                    "millDetails": null,
                    "filesPathJson": null,
                    "rfpAdditionalAttributes": null,
                    "updatedTs": "2023-06-15 12:30:09.559",
                    "insertTs": "2023-06-14 17:10:54.017",
                    "rfpJsonTemplate": null,
                    "awardOfContract": null,
                    "noOfSupplierReceivedRfp": null,
                    "noOfSupplierRespondedToRfp": null,
                    "rfpType": "Annual",
                    "supplierNames": null,
                    "millNames": null,
                    "isRead": null
                  }
                ]
            },
            "offerWiseSupplierRfpDetails": null
          }
        ]
    }
  ]

  ngOnInit(): void {
    this.Assessment1();
    this.Assessment2();
    this.Assessment3();
  }

  Assessment1(): any {
    for (const formComp of this.sample_data1) {
      const CompanyObj = {
        Comapanyname: formComp.companyName,
        employees: [],
      };
      for (const formEmp of formComp.employees) {
        const EmployeeObj = {
          EmployeeId: formEmp.employeeId,
          Firstname: formEmp.firstName,
          LastName: formEmp.lastName,
          Position: formEmp.position,
          departments: [],
          projects: [],
        };
        for (const formDept of formEmp.departments) {
          const d = formComp.departments.find(d => d.departmentName === formDept);
          if (d) {
            EmployeeObj.departments.push({
              DepartmentName: d.departmentName,
              DepartmentHead: d.departmentHead,
            });
          }
        }
        for (const formProj of formEmp.projects) {
          EmployeeObj.projects.push({
            projectId: formProj.projectId,
            projectName: formProj.projectName,
            projectDescription: formProj.projectDescription,
            startDate: formProj.startDate,
            endDate: formProj.endDate,
            status: formProj.status,
          });
        }
        CompanyObj.employees.push(EmployeeObj);
      }
      this.CompanyArr.push(CompanyObj);
    }
    console.log(this.CompanyArr);
  }

  Assessment2(): any {
    for (const alignPersonDetails of this.sample_data2) {
      const personDetailObj = {
        PersonName: alignPersonDetails.person.name,
        PersonAge: alignPersonDetails.person.age,
        Address: alignPersonDetails.person.address.street + "," + alignPersonDetails.person.address.city + "," + alignPersonDetails.person.address.zipcode,
        Contact: [],
        Employement_pos: alignPersonDetails.person.employment.position,
        Employement_company: alignPersonDetails.person.employment.company,
        Employement_workHistory: [],
        Skills: alignPersonDetails.person.skills,
      };
      for (const alignContact of alignPersonDetails.person.contacts) {
        if (alignContact.type === "email") {
          personDetailObj.Contact.push("email: " + alignContact.value);
        }
        else if (alignContact.type === "phone") {
          personDetailObj.Contact.push("phone: " + alignContact.value)
        }
      }
      for (const workHistory of alignPersonDetails.person.employment.workHistory) {
        var startYear = workHistory.startYear !== null ? workHistory.startYear : " ";
        var endYear = workHistory.endYear !== null ? workHistory.endYear : " ";
        var title = workHistory.title !== null ? workHistory.title : " ";
        const emp = startYear + " to " + endYear + " - " + title
        personDetailObj.Employement_workHistory.push(emp);
      }
      const hobObj = {
        indoor: [alignPersonDetails.hobbies.indoor],
        Outdoor: [alignPersonDetails.hobbies.outdoor],
      }
      const petsObj = [alignPersonDetails.pets]
      const O = {
        Person: personDetailObj,
        Hobbies: hobObj,
        Pets: petsObj
      }
      this.PersonDetailsArr.push(O);
    }
    console.log(this.PersonDetailsArr);
  }

  Assessment3(): any {
    const alignData: any[] = this.sample_data3[0].response;
    alignData[0]['offerWiseRfpDetails']['Round'][0]['dueDate'] = this.formateDate(alignData[0]['offerWiseRfpDetails']['Round'][0]['dueDate'])
    alignData[0]['offerWiseRfpDetails']['Round'][0]['receivedDate'] = this.formateDate(alignData[0]['offerWiseRfpDetails']['Round'][0]['receivedDate'])
    alignData[0]['offerWiseRfpDetails']['Round'][0]['submittedDate'] = this.formateDate(alignData[0]['offerWiseRfpDetails']['Round'][0]['submittedDate'])
    alignData[0]['offerWiseRfpDetails']['Round'][0]['updatedTs'] = this.formateDate(alignData[0]['offerWiseRfpDetails']['Round'][0]['updatedTs'])
    alignData[0]['offerWiseRfpDetails']['Round'][0]['insertTs'] = this.formateDate(alignData[0]['offerWiseRfpDetails']['Round'][0]['insertTs'])
    console.log(alignData)
  }

  formateDate(date: string) {
    const newDate = this.datepipe.transform(date,"MM/dd/yy");
    return newDate;
  }

}




