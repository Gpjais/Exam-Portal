import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizzesComponent } from './pages/user/load-quizzes/load-quizzes.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { StartComponent } from './pages/user/start/start.component';



const routes: Routes = [
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full',

  },
  {
    path: 'login',
    component:LoginComponent,
     pathMatch:'full',
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children: [
      {
      path:'profile',
      component:ProfileComponent,
      },
      {
        path:'',
        component: WelcomeComponent,
      },
      {
        path:'category',
        component: ViewCategoryComponent,
      },
      {
        path:'addcategory',
        component: AddCategoryComponent,
      },
      {
        path:'viewQuizes',
        component: ViewQuizesComponent,
      },
      {
        path:'addquiz',
        component: AddQuizComponent,
      },
      {
        path:'quiz/:qid',
        component: UpdateQuizComponent,
      },
      {
        path:'view-question/:qid/:title',
        component: ViewQuizQuestionsComponent,
      },
      {
        path:'add-question/:qid/:title',
        component: AddQuestionComponent,
      },
      
     ]
    
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    children:[
      {
        path:':cid',
        component: LoadQuizzesComponent,
      },
      {
        path:'instructions/:qid',
        component: InstructionComponent
      }
    ]
  },
  {
    path:'start/:qid',
    component: StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
