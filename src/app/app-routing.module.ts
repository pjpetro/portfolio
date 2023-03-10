import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";

const routes: Routes = [
	{
		path: "",
		component: AboutComponent,
	},
	{
		path: "about",
		component: AboutComponent,
	},
	{
		path: "portfolio",
		component: PortfolioComponent,
	},
	{
		path: "contact",
		component: AboutComponent,
	},

	{
		path: "**",
		pathMatch: "full",
		component: PageNotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
