import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { UserTransfComponent } from "./user-transf.component";

const routes: Routes = [
	{
		path: '',
		component: UserTransfComponent,
	}
];

@NgModule({
	declarations: [UserTransfComponent],
	imports: [
		RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
	],
	exports: [RouterModule]
})
export class UserTransfModule {}