import { Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {NameEditorComponent} from './name-editor/name-editor.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';
import {ActorFormComponent} from './actor-form/actor-form.component';
import {ActorFormTemplateComponent} from './actor-form-template/actor-form-template.component';
import {QuestionComponent} from './question/question.component';
import {I18nComponent} from './i18n/i18n.component';

export const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'name-editor', component: NameEditorComponent},
  {path: 'profile-editor', component: ProfileEditorComponent},
  {path: 'actor-form', component: ActorFormComponent},
  {path: 'actor-form-template', component: ActorFormTemplateComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'i18n', component: I18nComponent},
];
