import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { FormexampleComponent } from "./login-page/formexample/formexample.component";
import { HomeworkTwoComponent } from "./homework-two/homework-two.component";
import { TempDrivenFormComponent } from "./temp-driven-form/temp-driven-form.component";
import { UserComponent } from "./user/user.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TechnicalFootPrintComponent } from "./technical-foot-print/technical-foot-print.component";

const route: Routes = [{ path: '', redirectTo: "UserComp", pathMatch: "full" },
{ path: "formExample", component: FormexampleComponent },
{ path: "homeWorktwo", component: HomeworkTwoComponent },
{ path: "tempDrivenForm", component: TempDrivenFormComponent },
{ path: "UserComp", component: UserComponent },
{ path: "reactiveform", component: ReactiveFormComponent },
{path: "technicalFootprint",component:TechnicalFootPrintComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})


export class AppRouting {

}